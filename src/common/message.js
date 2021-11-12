const MESSAGES = {
  CONFIGURATION_ARGUMENT_WRONG:
    "Part of the configuration argument value '{0}' does not match the required pattern.",
  ARGUMENT_VALUE_NOT_SPECIFIED: "The value for the argument '{0}' is not specified.",
  CONFIGURATION_ARGUMENT_REQUIRED: "The configuration argument '{0}' is required.",
  DUPLICATION_ARGUMENTS_PROHIBITED: 'Duplication of arguments is prohibited.',
};

function formatMessage(message, parameters) {
  let formattedMessage = message;
  parameters.forEach((value, index) => {
    formattedMessage = formattedMessage.replace(`{${index}}`, value);
  });

  return formattedMessage;
}

export { MESSAGES, formatMessage };
