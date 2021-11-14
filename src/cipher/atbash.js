class Atbash {
  constructor(alphabet) {
    this.alphabet = alphabet;
  }

  getNewChar(char) {
    const charIndex = this.alphabet.indexOf(char.toUpperCase());
    if (charIndex === -1) return char;

    const newCharIndex = this.alphabet.length - charIndex - 1;
    const newChar = this.alphabet.charAt(newCharIndex);

    return char === char.toUpperCase() ? newChar : newChar.toLowerCase();
  }

  encode(str) {
    return str
      .split('')
      .map((char) => this.getNewChar(char))
      .join('');
  }

  decode(str) {
    return this.encode(str);
  }
}

export { Atbash };
