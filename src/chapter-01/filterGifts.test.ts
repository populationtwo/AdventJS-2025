import filterGifts from './filterGifts';

describe('Challenge #1: 🎁 Filter the defective gifts', () => {
  describe('filterGifts', () => {
    test('returns only non-defective gifts', () => {
      const gifts1 = ['car', 'doll#arm', 'ball', '#train'];
      const result = filterGifts(gifts1);
      expect(result).toEqual(['car', 'ball']);
    });

    test('returns empty array when all gifts are defective', () => {
      const gifts2 = ['#broken', '#rusty'];
      const result = filterGifts(gifts2);
      expect(result).toEqual([]);
    });

    test('returns empty array when input is empty', () => {
      const gifts3: string[] = [];
      const result = filterGifts(gifts3);
      expect(result).toEqual([]);
    });
  });
});
