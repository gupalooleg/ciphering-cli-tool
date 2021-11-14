import { Writable } from 'stream';
import fs from 'fs';
import { convertSystemErrorToStreamError } from '../common/index.js';

class FileWriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (e) =>
        callback(convertSystemErrorToStreamError(e || err, [this.filename]))
      );
    } else {
      callback(convertSystemErrorToStreamError(err, [this.filename]));
    }
  }
}

export { FileWriteStream };
