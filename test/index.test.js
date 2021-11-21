import { jest } from '@jest/globals';
import { CLIHandler } from '../src/cli/index.js';

describe('index.js:', () => {
  describe('Error scenarios:', () => {
    let mockStderrWrite, mockExit, mockRetrieveProcessArguments;
    beforeAll(() => {
      mockStderrWrite = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
      mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
      mockRetrieveProcessArguments = jest.spyOn(CLIHandler, 'retrieveProcessArguments');
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    test('should print error message and exit with error code 1 if config parameter duplicated.', () => {
      mockRetrieveProcessArguments.mockImplementation(() => ['-c', 'C1', '-c', 'C0']);
      import('../src/index.js').then((data) => {
        expect(mockStderrWrite).toHaveBeenCalled();
        expect(mockExit).toHaveBeenCalledWith(1);
      });
    });

    test('should print error message and exit with error code 1 if config parameter not specified.', () => {});

    test('should print error message and exit with error code 1 if config parameter is wrong.', () => {});

    test('should print error message and exit with error code 1 if input path does not exist.', () => {});

    test('should print error message and exit with error code 1 if output path does not exist.', () => {});
  });
});
