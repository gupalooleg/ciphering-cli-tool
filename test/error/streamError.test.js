import { StreamError, CCTError } from '../../src/error/index.js';

describe('Class "StreamError":', () => {
  test('should be inherited from class "CCTError".', () => {
    expect(new StreamError('Error.')).toBeInstanceOf(CCTError);
  });
});
