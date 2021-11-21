import { Readable } from 'stream';
import { FileReadStream } from '../../src/stream/index.js';

describe('Class "FileReadStream:"', () => {
  test('should be inherited from class "Readable".', () => {
    expect(new FileReadStream('./')).toBeInstanceOf(Readable);
  });
});
