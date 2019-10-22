import { caesar } from '../src';

describe('when a regular string is passed', () => {
  const encrypted = 'ofafxhwnuy jcfruqj tk ymj hfjxfw hnumjw';
  const string = 'javascript example of the caesar cipher';

  test('it encrypts a regular string', () => {
    expect(caesar(string, 5).encrypt).toBe(encrypted);
  });

  test('it decrypts an encrypted regular string', () => {
    expect(caesar(encrypted, 5).decrypt).toBe(string);
  });

  test('it does not decrypts with wrong key', () => {
    expect(caesar(encrypted, 10).decrypt).not.toBe(string);
  });
});

describe('when case sensitive string is passed', () => {
  const encrypted = 'VIFU cm gs Hugy';
  const string = 'BOLA is my Name';

  test('it encrypts and keeps the same case', () => {
    expect(caesar(string, 20).encrypt).toBe(encrypted);
  });

  test('it decrypts and keeps the same case', () => {
    expect(caesar(encrypted, 20).decrypt).toBe(string);
  });

  test('it does not decrypts with wrong key', () => {
    expect(caesar(encrypted, 10).decrypt).not.toBe(string);
  });
});

describe('when a string with puntuation is passed', () => {
  const encrypted = 'Rovvy, grkd sc iyeb xkwo?';
  const string = 'Hello, what is your name?';

  test('it encrypts and keeps the puntuation', () => {
    expect(caesar(string, 10).encrypt).toBe(encrypted);
  });

  test('it decrypts and keeps the puntuation', () => {
    expect(caesar(encrypted, 10).decrypt).toBe(string);
  });

  test('it does not decrypts with wrong key', () => {
    expect(caesar(encrypted, 5).decrypt).not.toBe(string);
  });
});
