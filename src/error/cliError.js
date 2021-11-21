import { CCTError } from './cctError.js';

class CLIError extends CCTError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { CLIError };
