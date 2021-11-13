import { ALPHABET, CIPHER } from './index.js';
import { Atbash, Caesar, ROT } from '../cipher/index.js';
import { CipherTransformStream } from '../stream/index.js';

function prepareCipherTransformStreams(config) {
  const cipherTransformStreams = [];

  config.forEach((value) => {
    let cipher;
    switch (value.cipher) {
      case CIPHER.ATBASH:
        cipher = new Atbash(ALPHABET);
        break;
      case CIPHER.CAESAR:
        cipher = new Caesar(ALPHABET);
        break;
      case CIPHER.ROT:
        cipher = new ROT(ALPHABET);
        break;
      default:
        return;
    }

    cipherTransformStreams.push(new CipherTransformStream(cipher, value.action));
  });

  return cipherTransformStreams;
}

export { prepareCipherTransformStreams };
