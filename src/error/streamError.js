import { CCTError } from './cctError.js';

class StreamError extends CCTError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { StreamError };
