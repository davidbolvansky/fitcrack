/*
 * Author : see AUTHORS
 * Licence: MIT, see LICENSE
 */

#ifndef ATTACKBASE_HPP
#define ATTACKBASE_HPP

#include "ConfigHost.hpp"
#include "ConfigTask.hpp"
#include "Constants.hpp"
#include "File.hpp"
#include "Logging.hpp"
#include "AgentUtils.hpp"
#include "Attack.hpp"

#include <vector>
#include <string>

/** Base class for AttackBase */
class AttackBase {

    private:

        friend AttackBase *Attack::create(const ConfigTask&, Directory&);

        /**
         * @brief   Fills member vector with basic arguments shared by all
         *          attacks
         */
        void initializeArguments();

    protected:

        std::string attack_mode_;		/**< AttackBase mode from the TLV */
        std::string output_file_;		/**< Name/path to hashcat result file */

        std::vector<std::string> arguments_;		/**< Hashcat arguments based on the config */
        ConfigHost host_config_;                /**< Representer of host configuration file */

        const ConfigTask& config_;              /**< Representer of task configuration file */

        const unsigned long long success_exit_code_; /**< Expected hashcat exit code on successful execution */

        /**
         * @brief   Adds argument to vector arguments_
         * @param   argument [in] Argument to add
         */
        void addArgument(std::string argument);

        /**
         * @brief   Pure virtual function adding all atttack specific arguments
         */
        virtual void addSpecificArguments() = 0;

        /**
         * @brief   Searches for key in config_, if found adds it to the arguments_
         * @param   key [in] Search selector (TLV key)
         */
        bool findAndAdd(const std::string& key);

        /**
         * @brief   Searches for key in config_, if found adds it to the arguments_
         * @param   key [in] Search selector (TLV key)
         * @param   argument [in] Argument to add if found
         */
        bool findAndAdd(const std::string& key, const std::string& argument);
        /**
         * @brief   Searches for key in config_, if found adds argument and its value to arguments_,
         *          else throws exception
         * @param   key [in] Search selector (TLV key)
         */
        void findAndAddOptional(const std::string& key);

        /**
         * @brief   Searches for key in config_, if found adds argument and its value to arguments_,
         *          else throws exception
         * @param   key [in] Search selector (TLV key)
         * @param   argument [in] Argument to add if found
         */
        void findAndAddOptional(const std::string& key, const std::string& argument);

        /**
         * @brief   Searches for key in config_, if found adds it to the arguments_,
         *          else throws exception
         * @param   key [in] Search selector (TLV key)
         */
        void findAndAddRequired(const std::string& key);

        /**
         * @brief   Searches for key in config_, if found adds it to the arguments_,
         *          else throws exception
         * @param   key [in] Search selector (TLV key)
         * @param   argument [in] Argument to add if found
         */
        void findAndAddRequired(const std::string& key, const std::string& argument);

      public:
        /**
         * @brief   Basic constructor
         * @param   config [in] Representation of config file
         */
        AttackBase(const ConfigTask& config);

        /**
         * @brief   Destructor
         */
        virtual ~AttackBase() {}

        /**
         * @brief  Getter of arguments_
         * @return Copy of arguments_ vector
         */
        const std::vector<std::string>& getArguments();

        virtual std::string getExternalGeneratorName() {return "";}

        virtual std::vector<std::string> getExternalGeneratorArguments() const {return std::vector<std::string>();}

        /**
         * @brief   Getter of arguments_ size
         * @return  Size of the arguments_
         */
        size_t getArgumentsSize();

        /**
         * @brief   Getter of expected hashcat's successful exit code for given attack type
         * @return  Expected exit code
         */
        unsigned long long getSuccessExitCode();
};

#endif // ATTACKBASE_HPP
