class Caesar {
  constructor(alphabet, shift = 1) {
    this.alphabet = alphabet;
    this.shift = shift;
  }

  getNewChar(char, shift) {
    const charIndex = this.alphabet.indexOf(char.toUpperCase());
    if (charIndex === -1) return char;

    const i = (charIndex + shift) % this.alphabet.length;
    const newCharIndex = i >= 0 ? i : this.alphabet.length + i;
    const newChar = this.alphabet.charAt(newCharIndex);

    return char === char.toUpperCase() ? newChar : newChar.toLowerCase();
  }

  encode(str) {
    return str
      .split('')
      .map((char) => this.getNewChar(char, this.shift))
      .join('');
  }

  decode(str) {
    return str
      .split('')
      .map((char) => this.getNewChar(char, this.shift * -1))
      .join('');
  }
}

export { Caesar };
