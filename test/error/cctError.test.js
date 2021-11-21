import { CCTError } from '../../src/error/index.js';

describe('Class "CCTError":', () => {
  test('should be inherited from class "Error".', () => {
    expect(new CCTError('Error.')).toBeInstanceOf(Error);
  });
});
