import findUnsafeGifts from './findUnsafeGifts';

describe('Challenge #11: 📹 Unwatched gifts', () => {
  test(
    "It returns 0 when it's called with [\n" + "  '.*.',\n" + "  '*#*',\n" + "  '.*.'\n" + ']',
    () => {
      const result = findUnsafeGifts(['.*.', '*#*', '.*.']);
      const expected: number = 0;
      expect(result).toEqual(expected);
    },
  );

  test(
    "It returns 1 when it's called with [\n" + "  '...',\n" + "  '.*.',\n" + "  '...'\n" + ']',
    () => {
      const result = findUnsafeGifts(['...', '.*.', '...']);
      const expected: number = 1;
      expect(result).toEqual(expected);
    },
  );

  test(
    "It returns 2 when it's called with [\n" + "  '*.*',\n" + "  '...',\n" + "  '*#*'\n" + '] ',
    () => {
      const result = findUnsafeGifts(['*.*', '...', '*#*']);
      const expected: number = 2;
      expect(result).toEqual(expected);
    },
  );

  test(
    "It returns 4 when it's called with [\n" +
      "  '.....',\n" +
      "  '.*.*.',\n" +
      "  '..#..',\n" +
      "  '.*.*.',\n" +
      "  '.....'\n" +
      ']',
    () => {
      const result = findUnsafeGifts(['.....', '.*.*.', '..#..', '.*.*.', '.....']);
      const expected = 4;
      expect(result).toEqual(expected);
    },
  );
});
