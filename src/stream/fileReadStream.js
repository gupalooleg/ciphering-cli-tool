import { Readable } from 'stream';
import fs from 'fs';
import { convertSystemErrorToStreamError } from '../common/index.js';

class FileReadStream extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _read() {
    fs.read(this.fd, (err, bytesRead, buffer) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buffer.slice(0, bytesRead) : null);
      }
    });
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

export { FileReadStream };
