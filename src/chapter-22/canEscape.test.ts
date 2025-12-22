import canEscape from './canEscape';

describe('Challenge #22: 🎄 The sleigh maze', () => {
  describe('canEscape', () => {
    test('returns true for a solvable maze (example 1)', () => {
      const maze = [
        ['S', '.', '#', '.'],
        ['#', '.', '#', '.'],
        ['.', '.', '.', '.'],
        ['#', '#', '#', 'E'],
      ];
      expect(canEscape(maze)).toBe(true);
    });

    test('returns false for an unsolvable maze (example 2)', () => {
      const maze = [
        ['S', '#', '#'],
        ['.', '#', '.'],
        ['.', '#', 'E'],
      ];
      expect(canEscape(maze)).toBe(false);
    });

    test('returns true when S and E are adjacent (example 3)', () => {
      const maze = [['S', 'E']];
      expect(canEscape(maze)).toBe(true);
    });

    test('returns true for a larger solvable maze (example 4)', () => {
      const maze = [
        ['S', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '.'],
        ['.', '.', '.', '.', '.'],
        ['.', '#', '#', '#', '#'],
        ['.', '.', '.', '.', 'E'],
      ];
      expect(canEscape(maze)).toBe(true);
    });

    test('returns false when exit is unreachable due to walls (example 5)', () => {
      const maze = [
        ['S', '.', '.'],
        ['.', '.', '.'],
        ['#', '#', '#'],
        ['.', '.', 'E'],
      ];
      expect(canEscape(maze)).toBe(false);
    });
  });
});
