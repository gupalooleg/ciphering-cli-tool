import { Caesar } from './caesar.js';

class ROT {
  constructor(alphabet, shift = 8) {
    this.caesar = new Caesar(alphabet, shift);
  }

  encrypt(str) {
    return this.caesar.encrypt(str);
  }

  decrypt(str) {
    return this.caesar.decrypt(str);
  }
}

export { ROT };
