import packGifts from './packGifts';

describe('Challenge #16: 🎁 Packing gifts for Santa', () => {
  describe('packGifts', () => {
    test('packs gifts into 2 sleighs: [2, 3, 4, 1], limit 5', () => {
      const result = packGifts([2, 3, 4, 1], 5);
      const expected: number = 2;
      expect(result).toEqual(expected);
    });

    test('packs gifts into 3 sleighs: [3, 3, 2, 1], limit 3', () => {
      const result = packGifts([3, 3, 2, 1], 3);
      const expected: number = 3;
      expect(result).toEqual(expected);
    });

    test('packs gifts into 2 sleighs: [1, 1, 1, 1], limit 2', () => {
      const result = packGifts([1, 1, 1, 1], 2);
      const expected: number = 2;
      expect(result).toEqual(expected);
    });

    test('returns null when a gift exceeds the limit: [5, 6, 1], limit 5', () => {
      const result = packGifts([5, 6, 1], 5);
      const expected = null;
      expect(result).toEqual(expected);
    });

    test('returns 0 sleighs when there are no gifts: [], limit 10', () => {
      const result = packGifts([], 5);
      const expected: number = 0;
      expect(result).toEqual(expected);
    });
  });
});
