import manufactureGifts from './manufactureGifts';

describe('Challenge #2: 🏭 Manufacture the toys', () => {
  describe('manufactureGifts', () => {
    test('returns repeated toys based on valid quantities', () => {
      const production1 = [
        { toy: 'car', quantity: 3 },
        { toy: 'doll', quantity: 1 },
        { toy: 'ball', quantity: 2 },
      ];

      const result = manufactureGifts(production1);

      expect(result).toEqual(['car', 'car', 'car', 'doll', 'ball', 'ball']);
    });

    test('ignores toys with zero or negative quantities', () => {
      const production2 = [
        { toy: 'train', quantity: 0 },
        { toy: 'bear', quantity: -2 },
        { toy: 'puzzle', quantity: 1 },
      ];

      const result = manufactureGifts(production2);

      expect(result).toEqual(['puzzle']);
    });

    test('returns an empty array when given no production items', () => {
      const production3: Array<{ toy: string; quantity: number }> = [];

      const result = manufactureGifts(production3);

      expect(result).toEqual([]);
    });

    test('ignores items where quantity is not a number', () => {
      const production = [
        { toy: 'robot', quantity: NaN },
        { toy: 'kite', quantity: 2 },
      ];

      const result = manufactureGifts(production);

      expect(result).toEqual(['kite', 'kite']);
    });

    test('handles large quantities correctly', () => {
      const production = [{ toy: 'lego', quantity: 5 }];

      const result = manufactureGifts(production);

      expect(result).toEqual(['lego', 'lego', 'lego', 'lego', 'lego']);
    });
  });
});
