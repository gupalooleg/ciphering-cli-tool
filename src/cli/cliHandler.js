import { CLI_ARGUMENTS, CIPHER_PATTERN, MESSAGES, formatString } from '../common/index.js';
import { CLIError } from '../error/cliError.js';

class CLIHandler {
  constructor() {
    this.arguments = CLIHandler.retrieveProcessArguments();
  }

  static parseConfigArgumentAccordingToPatterns(config) {
    return config.split('-').reduce((prevValue, currValue) => {
      if (!CIPHER_PATTERN.includes(currValue)) {
        throw new CLIError(formatString(MESSAGES.CONFIGURATION_ARGUMENT_WRONG, [currValue]));
      }
      prevValue.push({ cipher: currValue[0], action: currValue[1] ? +currValue[1] : null });
      return prevValue;
    }, []);
  }

  static retrieveProcessArguments() {
    return process.argv.slice(2);
  }

  getLaunchParameters() {
    this.validateArguments();

    const configParameter = this.getParameterByFlags(CLI_ARGUMENTS.CONFIG.FLAGS);
    const inputParameter = this.getParameterByFlags(CLI_ARGUMENTS.INPUT.FLAGS);
    const outputParameter = this.getParameterByFlags(CLI_ARGUMENTS.OUTPUT.FLAGS);

    const config = CLIHandler.parseConfigArgumentAccordingToPatterns(configParameter);

    return { config, input: inputParameter, output: outputParameter };
  }

  validateArguments() {
    this.checkDuplicateArgumentsByFlags(CLI_ARGUMENTS.CONFIG.FLAGS);
    this.checkDuplicateArgumentsByFlags(CLI_ARGUMENTS.INPUT.FLAGS);
    this.checkDuplicateArgumentsByFlags(CLI_ARGUMENTS.OUTPUT.FLAGS);

    this.checkExistenceOfConfigArgumentByFlags(CLI_ARGUMENTS.CONFIG.FLAGS);
  }

  getParameterByFlags(flags) {
    const flagIndex = this.arguments.findIndex((value) => flags.includes(value));
    if (flagIndex === -1) return null;

    let argumentValue = this.arguments[flagIndex + 1];
    argumentValue = argumentValue ? argumentValue.trim() : argumentValue;

    if (
      !argumentValue ||
      CLI_ARGUMENTS.CONFIG.FLAGS.includes(argumentValue) ||
      CLI_ARGUMENTS.INPUT.FLAGS.includes(argumentValue) ||
      CLI_ARGUMENTS.OUTPUT.FLAGS.includes(argumentValue)
    ) {
      throw new CLIError(formatString(MESSAGES.ARGUMENT_VALUE_NOT_SPECIFIED, [flags.join(', ')]));
    }

    return argumentValue;
  }

  checkExistenceOfConfigArgumentByFlags(flags) {
    if (!this.arguments.some((value) => flags.includes(value))) {
      throw new CLIError(
        formatString(MESSAGES.CONFIGURATION_ARGUMENT_REQUIRED, [flags.join(', ')])
      );
    }
  }

  checkDuplicateArgumentsByFlags(flags) {
    this.arguments.reduce((prevValue, currValue) => {
      const acc = flags.includes(currValue) ? prevValue + 1 : prevValue;
      if (acc > 1) {
        throw new CLIError(MESSAGES.DUPLICATION_ARGUMENTS_PROHIBITED);
      }
      return acc;
    }, 0);
  }
}

export { CLIHandler };
