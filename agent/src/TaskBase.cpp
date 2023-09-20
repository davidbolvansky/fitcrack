/*
 * Author : see AUTHORS
 * Licence: MIT, see LICENSE
 */

#include "TaskBase.hpp"
#include "Attack.hpp"
/* Protected */

void TaskBase::actualizeComputedHashes(
    const unsigned long long newly_computed_hashes) {
  computed_hashes_ += newly_computed_hashes;
}

/* Public */

TaskBase::TaskBase(Directory &directory, ConfigTask task_config,
                   ConfigHost host_config, const std::string &output_file,
                   const std::string &workunit_name)
    : task_config_(task_config), host_config_(host_config),
      directory_(directory), computed_hashes_(0), total_hashes_(0),
      output_file_(output_file), workunit_name_(workunit_name) {}

double TaskBase::fractionDone() {
  if (computed_hashes_ > total_hashes_)
    return 0.0;
  // AgentUtils::runtimeException("portion_done is bigger than total");
  double fraction_done = computed_hashes_ / (double)total_hashes_;
  return (fraction_done != fraction_done ? 0.0 : fraction_done); // NaN test
}

void TaskBase::writeOutputFile(std::string &output_message) {
  std::fstream output_stream;
  File result_file;

  PRINT_POSITION_IN_CODE();

  if (!directory_.find(BoincConstants::ResultFileName, result_file)) {
    result_file.changeTo(BoincConstants::ResultFileName);
  }

  Logging::debugPrint(Logging::Detail::GeneralInfo,
                      "Result_file : " + result_file.getRelativePath());

  File::openWriteStream(output_stream, result_file.getRelativePath(),
                        std::fstream::trunc);
  output_stream.write(output_message.c_str(), output_message.length());

  PRINT_POSITION_IN_CODE();

  output_stream.close();
}

void TaskBase::reportHashcatProgress(Trickle &trickle_xml, double percent_done) {
    if (status_info_.empty())
        return;

    uint64_t cracking_time = getRunTime();

    trickle_xml.addElement("cracking_time", cracking_time);
    // ETA from hashcat is not reliable it seems.. tried with slow hash and it was a bit off.
    // uint64_t time_start = status_info_.at("time_start");
    // uint64_t estimated_stop = status_info_.at("estimated_stop");
    // uint64_t remaining_time = estimated_stop - time_start;
    uint64_t remaining_time = ((100.0 / percent_done) * cracking_time) - cracking_time;
    trickle_xml.addElement("remaining_time", remaining_time);

    // Also see TaskBenchmark
    uint64_t salt_count = status_info_.at("recovered_salts").at(1);
    salt_count = std::max<uint64_t>(salt_count, 1);

    uint64_t total_hashrate = getTotalHashrate();
    if (total_hashrate == 0) {
        // Workaround: hashcat may sometimes report zero speeds during status
        // updates. Compute total speed from total hashes and cracking time.
        total_hashrate = total_hashes_ / cracking_time;
    }
    trickle_xml.addElement("hashrate", total_hashrate);
    trickle_xml.addElement("speed", total_hashrate / salt_count);

    for (const auto &device : status_info_.at("devices")) {
        std::string id = std::to_string((int)device.at("device_id"));
        std::string name = device.at("device_name");
        std::string type = device.at("device_type");
        int64_t hashrate = device.at("speed");
        int64_t temp = device.value("temp", -1); // -1 when hwmon is disabled
        int64_t util = device.at("util");

        trickle_xml.addElement("device_" + id + "_name", name);
        trickle_xml.addElement("device_" + id + "_type", type);
        trickle_xml.addElement("device_" + id + "_hashrate", hashrate);
        trickle_xml.addElement("device_" + id + "_speed", hashrate / salt_count);
        trickle_xml.addElement("device_" + id + "_temp", temp);
        trickle_xml.addElement("device_" + id + "_util", util);
    }
}

void TaskBase::reportProgress() {
  double fraction_done, percent_done;
  fraction_done = fractionDone();
  percent_done = fraction_done * 100.0;

  Logging::debugPrint(
      Logging::Detail::DevelDebug,
      "Progress : " + AgentUtils::toString(fraction_done) +
          " percent done : " + AgentUtils::toString(percent_done) +
          " rinted : " + AgentUtils::toString(::rint(percent_done)));

  // Add call of the trickler progress message
  if (!boinc_is_standalone()) {
    Trickle trickle_xml;

    trickle_xml.addElement("workunit_name", workunit_name_);
    trickle_xml.addElement("progress", percent_done);

    reportHashcatProgress(trickle_xml, percent_done);

    trickle_message_ = trickle_xml.getXml();
    int ret = boinc_send_trickle_up(
        (char*)BoincConstants::TrickleDeamonName.c_str(),
        (char*)trickle_message_.c_str()); // progress to boinc project server
    if (ret != 0) {
      Logging::debugPrint(Logging::Detail::ObjectContentRevision,
                          " failed to send trickle message :" +
                              trickle_message_);
      std::string boinc_error = boincerror(ret);
      Logging::debugPrint(Logging::Detail::ObjectContentRevision,
                          " boinc error :" + boinc_error);
    } else {
      Logging::debugPrint(Logging::Detail::ObjectContentRevision, "Trickle message sent.");
    }
    boinc_fraction_done(fraction_done); // progress to BOINC manager
  }
  std::cout << "Progress : " << AgentUtils::toString(computed_hashes_) << "/"
            << AgentUtils::toString(total_hashes_) << " : "
            << AgentUtils::toString(percent_done) << "%" << std::endl;
}

int TaskBase::saveAndFinish() {
  PRINT_POSITION_IN_CODE();
  finish();
  // Resend last trickle message.
  boinc_send_trickle_up(
      (char*)BoincConstants::TrickleDeamonName.c_str(),
      (char*)trickle_message_.c_str());
  PRINT_POSITION_IN_CODE();
  saveResult();
  PRINT_POSITION_IN_CODE();
  return exit_code_;
}

void TaskBase::saveResult() {
  std::string output_message;

  PRINT_POSITION_IN_CODE();
  output_message = generateOutputMessage();
  PRINT_POSITION_IN_CODE();

  Logging::debugPrint(Logging::Detail::GeneralInfo,
                      "Result: \n" + output_message);

  writeOutputFile(output_message);
}

uint64_t TaskBase::getTotalHashrate() {
  if (!status_info_.contains("devices"))
    return 0;

  uint64_t speed_sum = 0;
  for (const auto &device : status_info_.at("devices")) {
    uint64_t device_speed = device.at("speed");
    speed_sum += device_speed;
  }

  return speed_sum;
}
