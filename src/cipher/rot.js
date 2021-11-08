import { Caesar } from './caesar.js';

class ROT {
  constructor(alphabet, shift = 8) {
    this.caesar = new Caesar(alphabet, shift);
  }

  encode(str) {
    return this.caesar.encode(str);
  }

  decode(str) {
    return this.caesar.decode(str);
  }
}

export { ROT };
