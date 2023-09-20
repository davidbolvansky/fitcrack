/*
 * Author : see AUTHORS
 * Licence: MIT, see LICENSE
 */


#ifndef TASKCOMPUTEBASE_HPP
#define TASKCOMPUTEBASE_HPP

#include "AttackBase.hpp"

#include "TaskBase.hpp"

#include "Process.hpp"
#include "NamedMutex.hpp"


/** Class representing base of the computation tasks */
class TaskComputeBase: public TaskBase {

    protected:

	    AttackBase *attack_;            /**< Pointer to Attack, set by initAttack */

        ProcessBase *process_cracking_engine_;          /**< Pointer to process executing the task */
        ProcessBase *process_external_generator_; /**< Pointer to external generator process executing the task */
        ProcessBase *parent_process_; /**< Pointer to parent process */

        NamedMutex hashcat_mutex_; //!< Mutex to prevent multiple hashcat instances

        enum AttackType attack_type;  /**< Type of current attack */

        std::vector<std::string> hashcat_arguments_;  /**< Merge arguments form Attack, ConfigTask, ConfigHost */
        std::vector<std::string> external_generator_arguments_; /**<Merge pcfg-manager arguments from Attack, ConfigTask, ConfigHost */

        /**
         * @brief   Merges vectors with arguments from the member objects
         */
        void getAllArguments();

    public:
        /**
         * @brief   Constructor
	     * @param   directory [in] Working directory object
         * @param   task_config [in] Task configuration file object
         * @param   host_config [in] Host configuration file object
         * @param   output_file [in] Name of the hashcat output file
         * @param   workunit_name [in] Name of the BOINC project workunit
         */
        TaskComputeBase (Directory& directory, ConfigTask task_config, ConfigHost host_config, const std::string& output_file, const std::string& workunit_name);

	/**
	 * @brief   Destructor freeint hashcat_arguments_ and attack_ and
	 * process_
	 */
	virtual ~TaskComputeBase();

	/**
	 * @brief   Getter of process_ stderr content
	 * @return  Process's stderr content
	 */
	std::string getErrorMessage();

	/**
	 * @brief   Getter of elapsed time when process was running
	 * @return  Time in seconds
	 */
	double getRunTime() const override;

	/**
	 * @brief   Finishes the task by finishing process and printing process's stderr
	 *	    server
	 * @return  Task exit code
	 */
	int finish();

	/**
	 * @brief  Initializes Task -> creates Attack, Process etc
	 */
	void initialize();

        /**
         * @brief   Pure virtual function parsing hashcat output line
         * @param   output_line [in] Output line from the hashcat process
	 * @return  True when line wasn't empty, False when it was empty
         */
        virtual bool parseHashcatOutputLine(std::string& output_line) = 0;

        /**
         * @brief   Prints available lines from process's stdout
         */
        void printProcessOut();

        /**
         * @brief   Prints available lines from process's stderr
         */
        void printProcessErr();

	/**
	 * @brief   Spawns the computation process
	 */
	void startComputation();

	/**
	 * @brief   Unlocks hashcat mutex
	 */
	void unlockHashcatMutex();

};

#endif // TASKCOMPUTEBASE_HPP
