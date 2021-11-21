import { StreamError } from '../error/index.js';
import { MESSAGES } from './constants.js';
import { formatString } from './formatString.js';

function convertSystemErrorToStreamError(error, parameters) {
  if (!error) return error;

  switch (error.code) {
    case 'EACCES':
      return new StreamError(formatString(MESSAGES.EACCES, parameters));
    case 'EISDIR':
      return new StreamError(formatString(MESSAGES.EISDIR, parameters));
    case 'ENOENT':
      return new StreamError(formatString(MESSAGES.ENOENT, parameters));
    case 'EPERM':
      return new StreamError(formatString(MESSAGES.EPERM, parameters));
    default:
      return error;
  }
}

export { convertSystemErrorToStreamError };
