import hasFourInARow from './hasFourInARow';

describe('Challenge #18: 🎄 Lights in line with diagonals', () => {
  describe('hasFourInARow', () => {
    test('returns true when there are 4 red lights in a ↘ diagonal', () => {
      const grid = [
        ['R', '.', '.', '.'],
        ['.', 'R', '.', '.'],
        ['.', '.', 'R', '.'],
        ['.', '.', '.', 'R'],
      ];

      const result = hasFourInARow(grid);
      const expected: boolean = true;
      expect(result).toEqual(expected);
    });

    test('returns true when there are 4 green lights in a ↙ diagonal', () => {
      const grid = [
        ['.', '.', '.', 'G'],
        ['.', '.', 'G', '.'],
        ['.', 'G', '.', '.'],
        ['G', '.', '.', '.'],
      ];

      const result = hasFourInARow(grid);
      const expected: boolean = true;
      expect(result).toEqual(expected);
    });

    test('returns true when there are no 4 red lights in a horizontal line', () => {
      const grid = [
        ['R', 'R', 'R', 'R'],
        ['G', 'G', '.', '.'],
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.'],
      ];

      const result = hasFourInARow(grid);
      const expected: boolean = true;
      expect(result).toEqual(expected);
    });

    test('returns false when there are no 4 consecutive lights of the same color', () => {
      const grid = [
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G'],
      ];

      const result = hasFourInARow(grid);
      const expected: boolean = false;
      expect(result).toEqual(expected);
    });
  });
});
