import { Transform } from 'stream';
import { CipherTransformStream } from '../../src/stream/index.js';

describe('Class "CipherTransformStream:"', () => {
  test('should be inherited from class "Transform".', () => {
    expect(new CipherTransformStream('C', 1)).toBeInstanceOf(Transform);
  });
});
