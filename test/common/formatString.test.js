import { formatString } from '../../src/common/index.js';

describe('Function "formatString"(replaces placeholder in a string using parameters from an array):', () => {
  test('correct when passing an empty string and an empty array.', () => {
    expect(formatString('', [])).toBe('');
  });

  test('correct when passing an empty string.', () => {
    expect(formatString('', ['A'])).toBe('');
  });

  test('correct when there are no placeholders in the string.', () => {
    expect(formatString('Test string.', [])).toBe('Test string.');
  });

  test('correct when passing an empty array.', () => {
    expect(formatString('Test string "{0}".', [])).toBe('Test string "{0}".');
  });

  test('correct when there are fewer placeholders than parameters.', () => {
    expect(formatString('Test string "{0}".', ['A', 'B'])).toBe('Test string "A".');
  });

  test('correct when there are more placeholders than parameters.', () => {
    expect(formatString('Test string "{0}" "{1}".', ['A'])).toBe('Test string "A" "{1}".');
  });

  test('correct when the number of placeholders matches the number of parameters.', () => {
    expect(formatString('Test string "{0}".', ['A'])).toBe('Test string "A".');
  });
});
