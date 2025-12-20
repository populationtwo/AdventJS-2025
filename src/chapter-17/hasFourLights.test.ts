import hasFourLights from './hasFourLights';

describe('Challenge #17: 🎄 The Christmas lights panel', () => {
  describe('hasFourLights', () => {
    test('returns true when there are 4 red lights horizontally', () => {
      const grid = [
        ['.', '.', '.', '.', '.'],
        ['R', 'R', 'R', 'R', '.'],
        ['G', 'G', '.', '.', '.'],
      ];

      const result = hasFourLights(grid);
      const expected: boolean = true;
      expect(result).toEqual(expected);
    });

    test('returns true when there are 4 green lights vertically', () => {
      const grid = [
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
      ];

      const result = hasFourLights(grid);
      const expected: boolean = true;
      expect(result).toEqual(expected);
    });

    test('returns false when there are no 4 lights of the same color in a row', () => {
      const grid = [
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G'],
      ];

      const result = hasFourLights(grid);
      const expected: boolean = false;
      expect(result).toEqual(expected);
    });
  });
});
