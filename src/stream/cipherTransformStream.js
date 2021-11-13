import { Transform } from 'stream';
import { CIPHER_ACTIONS } from '../common/index.js';

class CipherTransformStream extends Transform {
  constructor(cipher, action) {
    super();
    this.cipher = cipher;
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    try {
      const result =
        this.action === CIPHER_ACTIONS.ENCODE
          ? this.cipher.encode(chunk.toString())
          : this.cipher.decode(chunk.toString());

      callback(null, result);
    } catch (e) {
      callback(e);
    }
  }
}

export { CipherTransformStream };
