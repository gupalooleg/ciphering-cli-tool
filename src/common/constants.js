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
    'Error: Part of the configuration argument value "{0}" does not match the required pattern.',
  ARGUMENT_VALUE_NOT_SPECIFIED: 'Error: The value for the argument "{0}" is not specified.',
  CONFIGURATION_ARGUMENT_REQUIRED: 'Error: The configuration argument "{0}" is required.',
  DUPLICATION_ARGUMENTS_PROHIBITED: 'Error: Duplication of arguments is prohibited.',
  EACCES:
    'Error: (Permission denied). An attempt was made to access file "{0}" in a way forbidden by its file access permissions.',
  EISDIR:
    'Error: (Is a directory). An operation expected a file, but the given pathname "{0}" was directory.',
  ENOENT:
    'Error: (No such file or directory). No entity (file or directory) could be found by the given path "{0}".',
  EPERM:
    'Error: (Operation not permitted). An attempt was made to perform an operation with "{0}" that requires elevated privileges.',
  ENTER_TEXT: 'Enter text: \n',
};

export { ALPHABET, CLI_ARGUMENTS, CIPHER, CIPHER_ACTIONS, CIPHER_PATTERN, MESSAGES };
