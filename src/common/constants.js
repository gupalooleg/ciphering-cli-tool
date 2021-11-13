const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const CLI_ARGUMENTS = {
  CONFIG: {
    FLAGS: ['-c', '--config'],
  },
  INPUT: {
    FLAGS: ['-i', '--input'],
  },
  OUTPUT: {
    FLAGS: ['-o', '--output'],
  },
};

const CIPHER = {
  ATBASH: 'A',
  CAESAR: 'C',
  ROT: 'R',
};

const CIPHER_ACTIONS = {
  ENCODE: 1,
  DECODE: 0,
};

const CIPHER_PATTERN = [
  `${CIPHER.ATBASH}`,
  `${CIPHER.CAESAR}${CIPHER_ACTIONS.ENCODE}`,
  `${CIPHER.CAESAR}${CIPHER_ACTIONS.DECODE}`,
  `${CIPHER.ROT}${CIPHER_ACTIONS.ENCODE}`,
  `${CIPHER.ROT}${CIPHER_ACTIONS.DECODE}`,
];

const MESSAGES = {
  CONFIGURATION_ARGUMENT_WRONG:
    "Part of the configuration argument value '{0}' does not match the required pattern.",
  ARGUMENT_VALUE_NOT_SPECIFIED: "The value for the argument '{0}' is not specified.",
  CONFIGURATION_ARGUMENT_REQUIRED: "The configuration argument '{0}' is required.",
  DUPLICATION_ARGUMENTS_PROHIBITED: 'Duplication of arguments is prohibited.',
};

export { ALPHABET, CLI_ARGUMENTS, CIPHER, CIPHER_ACTIONS, CIPHER_PATTERN, MESSAGES };
