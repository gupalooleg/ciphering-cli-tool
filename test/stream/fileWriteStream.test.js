import { Writable } from 'stream';
import { FileWriteStream } from '../../src/stream/index.js';

describe('Class "FileWriteStream:"', () => {
  test('should be inherited from class "Writable".', () => {
    expect(new FileWriteStream('./')).toBeInstanceOf(Writable);
  });
});
