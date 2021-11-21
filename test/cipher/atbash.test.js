import { Atbash } from '../../src/cipher/index.js';

describe('Class "Atbash":', () => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const atbash = new Atbash(ALPHABET);

  describe('Check interface:', () => {
    test('encode() should be defined.', () => {
      expect(typeof atbash.encode).toBe('function');
    });

    test('decode() should be defined.', () => {
      expect(typeof atbash.decode).toBe('function');
    });
  });

  describe('encode():', () => {
    test('correct when passing an empty string.', () => {
      expect(atbash.encode('')).toBe('');
    });

    test('correct when passing an string(English letters).', () => {
      expect(atbash.encode('Secret')).toBe('Hvxivg');
    });

    test('correct when passing an string(not only English letters).', () => {
      expect(atbash.encode('This is secret!')).toBe('Gsrh rh hvxivg!');
    });
  });

  describe('decode():', () => {
    test('correct when passing an empty string.', () => {
      expect(atbash.decode('')).toBe('');
    });

    test('correct when passing an encoded string.', () => {
      expect(atbash.decode('Gsrh rh hvxivg!')).toBe('This is secret!');
    });
  });
});
