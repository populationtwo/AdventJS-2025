import decodeSantaPin from './decodeSantaPin';

describe('Challenge #4: 🧮 Decipher the Santa PIN', () => {
  test("It returns 3144 when it's called with [1++][2-][3+][<]", () => {
    const result = decodeSantaPin('[1++][2-][3+][<]');
    const expected = '3144';
    expect(result).toEqual(expected);
  });
  test("It returns 0944 when it's called with [9+][0-][4][<]", () => {
    const result = decodeSantaPin('[9+][0-][4][<]');
    const expected = '0944';
    expect(result).toEqual(expected);
  });

  test("It returns null when it's called with [1+][2-]", () => {
    const result = decodeSantaPin('[1+][2-]');
    const expected = null;
    expect(result).toEqual(expected);
  });
});
