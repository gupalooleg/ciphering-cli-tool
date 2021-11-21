import { CLIError, CCTError } from '../../src/error/index.js';

describe('Class "CLIError":', () => {
  test('should be inherited from class "CCTError".', () => {
    expect(new CLIError('Error.')).toBeInstanceOf(CCTError);
  });
});
