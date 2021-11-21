import { convertSystemErrorToStreamError } from '../../src/common/index.js';
import { StreamError } from '../../src/error/index.js';

describe('convertSystemErrorToStreamError():', () => {
  const err = new Error();

  test('should return undefined if the passed error object is undefined.', () => {
    expect(convertSystemErrorToStreamError(undefined, [])).toBeUndefined();
  });
  test('should return a SystemError object if the passed error object has code "EACCES"', () => {
    err.code = 'EACCES';
    expect(convertSystemErrorToStreamError(err, [])).toBeInstanceOf(StreamError);
  });
  test('should return a SystemError object if the passed error object has code "EISDIR"', () => {
    err.code = 'EISDIR';
    expect(convertSystemErrorToStreamError(err, [])).toBeInstanceOf(StreamError);
  });
  test('should return a SystemError object if the passed error object has code "ENOENT"', () => {
    err.code = 'ENOENT';
    expect(convertSystemErrorToStreamError(err, [])).toBeInstanceOf(StreamError);
  });
  test('should return a SystemError object if the passed error object has code "EPERM"', () => {
    err.code = 'EPERM';
    expect(convertSystemErrorToStreamError(err, [])).toBeInstanceOf(StreamError);
  });
  test('should return the same error object if the passed error object has unhandable code.', () => {
    err.code = 'ENOTDIR';
    expect(convertSystemErrorToStreamError(err, [])).toBe(err);
  });
});
