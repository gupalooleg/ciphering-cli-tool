import { Caesar } from '../../src/cipher/index.js';

describe('Class "Caesar":', () => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const caesar = new Caesar(ALPHABET);

  describe('Check interface:', () => {
    test('encode() should be defined.', () => {
      expect(typeof caesar.encode).toBe('function');
    });

    test('decode() should be defined.', () => {
      expect(typeof caesar.decode).toBe('function');
    });
  });

  describe('encode():', () => {
    test('correct when passing an empty string.', () => {
      expect(caesar.encode('')).toBe('');
    });

    test('correct when passing an string(English letters).', () => {
      expect(caesar.encode('Secret')).toBe('Tfdsfu');
    });

    test('correct when passing an string(not only English letters).', () => {
      expect(caesar.encode('This is secret!')).toBe('Uijt jt tfdsfu!');
    });
  });

  describe('decode():', () => {
    test('correct when passing an empty string.', () => {
      expect(caesar.decode('')).toBe('');
    });

    test('correct when passing an encoded string.', () => {
      expect(caesar.decode('Uijt jt tfdsfu!')).toBe('This is secret!');
    });
  });
});
