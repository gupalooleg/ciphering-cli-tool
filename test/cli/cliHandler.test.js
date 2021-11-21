import { jest } from '@jest/globals';
import { CLIHandler } from '../../src/cli/index.js';
import { CLIError } from '../../src/error/cliError.js';

describe('Class "CLIHandler":', () => {
  let mockRetrieveProcessArguments;
  beforeAll(() => {
    mockRetrieveProcessArguments = jest.spyOn(CLIHandler, 'retrieveProcessArguments');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should return CLIError if parameter duplicated.', () => {
    expect(CLIHandler.retrieveProcessArguments()).toHaveLength(0);
  });

  test('should return CLIError if config parameter not specified.', () => {
    mockRetrieveProcessArguments.mockImplementation(() => []);

    expect(() => {
      new CLIHandler().getLaunchParameters();
    }).toThrowError(CLIError);
  });

  test('should return CLIError if config parameter value is wrong.', () => {
    mockRetrieveProcessArguments.mockImplementation(() => ['-c', 'C2']);

    expect(() => {
      new CLIHandler().getLaunchParameters();
    }).toThrowError(CLIError);
  });

  test('should return CLIError if parameter value not specified.', () => {
    mockRetrieveProcessArguments.mockImplementation(() => ['-c', 'C1', '-i']);

    expect(() => {
      new CLIHandler().getLaunchParameters();
    }).toThrowError(CLIError);
  });

  test('should return CLIError if parameter duplicated.', () => {
    mockRetrieveProcessArguments.mockImplementation(() => ['-c', 'C1', '--config', 'C0']);

    expect(() => {
      new CLIHandler().getLaunchParameters();
    }).toThrowError(CLIError);
  });

  test('should return correct config object.', () => {
    const config = {
      config: [
        { action: 1, cipher: 'C' },
        { action: 0, cipher: 'C' },
        { action: null, cipher: 'A' },
        { action: 1, cipher: 'R' },
        { action: 0, cipher: 'R' },
      ],
      input: 'i.txt',
      output: 'o.txt',
    };
    mockRetrieveProcessArguments.mockImplementation(() => [
      '-c',
      'C1-C0-A-R1-R0',
      '-i',
      'i.txt',
      '-o',
      'o.txt',
    ]);

    expect(new CLIHandler().getLaunchParameters()).toEqual(config);
  });
});
