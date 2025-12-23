import minStepsToDeliver from './minStepsToDeliver';

describe('Challenge #23: 🎁 Gift route', () => {
  describe('minStepsToDeliver — provided scenarios', () => {
    test('returns 4 when both houses are reachable with minimal paths', () => {
      const grid = [
        ['S', '.', 'G'],
        ['.', '#', '.'],
        ['G', '.', '.'],
      ];

      expect(minStepsToDeliver(grid)).toBe(4);
    });

    test('returns -1 when at least one house is unreachable', () => {
      const grid = [
        ['S', '#', 'G'],
        ['#', '#', '.'],
        ['G', '.', '.'],
      ];

      expect(minStepsToDeliver(grid)).toBe(-1);
    });

    test('returns 1 for a simple single-row grid with S next to G', () => {
      const grid = [['S', 'G']];

      expect(minStepsToDeliver(grid)).toBe(1);
    });
  });
});
