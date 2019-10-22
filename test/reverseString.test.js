import { reverseString } from '../src';

describe('reverseString', () => {
  test('when the string is a single word, it returns a reversed word', () => {
    expect(reverseString('uytrewq')).toBe('qwertyu');
    expect(reverseString('kjhgfdsa')).toBe('asdfghjk');
    expect(reverseString('alob')).toBe('bola');
  });

  test('when the string is a sentence, it returns the reversed character', () => {
    expect(reverseString('my name is bola')).toBe('alob si eman ym');
  });
});
