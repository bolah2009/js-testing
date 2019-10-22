const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const getIndex = char => letters.indexOf(char.toUpperCase());
const isUpperCase = char => char === char.toUpperCase();
const wrapIfNegative = number => {
  if (number < 0) { return number + 26; }
  return number;
};

const cipher = (char, shift) => {
  const newPosition = wrapIfNegative((getIndex(char) + shift) % 26);
  if (isUpperCase(char)) { return letters[newPosition]; }
  return letters[newPosition].toLowerCase();
};

const caesar = (string, shift) => {
  const encrypter = char => cipher(char, shift);
  const decrypter = char => cipher(char, (shift * -1));
  const encrypt = string.replace(/\w/g, encrypter);
  const decrypt = string.replace(/\w/g, decrypter);

  return { encrypt, decrypt };
};

export default caesar;
