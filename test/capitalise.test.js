import { capitalise } from '../src';

describe('capitalise', () => {
  test('when the string is a single word, it capitalise the first character', () => {
    const expectedWord = 'Bola';
    expect(capitalise('bola')).toBe(expectedWord);
    expect(capitalise('BOLA')).toBe(expectedWord);
    expect(capitalise('bOlA')).toBe(expectedWord);
  });

  test('when the string is a sentence, it capitalise the first character of each word', () => {
    const expectedSentence = 'My Name Is Bola';
    expect(capitalise('my name is bola')).toBe(expectedSentence);
    expect(capitalise('My name is Bola')).toBe(expectedSentence);
    expect(capitalise('MY NAME IS BOLA')).toBe(expectedSentence);
  });
});
