import { ROT } from '../../src/cipher/index.js';

describe('Class "ROT":', () => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rot = new ROT(ALPHABET);

  describe('Check interface:', () => {
    test('encode() should be defined.', () => {
      expect(typeof rot.encode).toBe('function');
    });

    test('decode() should be defined.', () => {
      expect(typeof rot.decode).toBe('function');
    });
  });

  describe('encode():', () => {
    test('correct when passing an empty string.', () => {
      expect(rot.encode('')).toBe('');
    });

    test('correct when passing an string(English letters).', () => {
      expect(rot.encode('Secret')).toBe('Amkzmb');
    });

    test('correct when passing an string(not only English letters).', () => {
      expect(rot.encode('This is secret!')).toBe('Bpqa qa amkzmb!');
    });
  });

  describe('decode():', () => {
    test('correct when passing an empty string.', () => {
      expect(rot.decode('')).toBe('');
    });

    test('correct when passing an encoded string.', () => {
      expect(rot.decode('Bpqa qa amkzmb!')).toBe('This is secret!');
    });
  });
});
