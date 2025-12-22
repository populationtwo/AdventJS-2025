import clearGifts from './clearGifts';

describe('Challenge #21: 🤖 The cleaning robot', () => {
  describe('clearGifts', () => {
    test('clears a full row after dropping into column 1', () => {
      const warehouse = [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['#', '.', '#'],
      ];

      const result = clearGifts(warehouse, [1]);

      expect(result).toEqual([
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
      ]);
    });

    test('clears a full row after dropping into column 1', () => {
      const warehouse = [
        ['.', '.', '#'],
        ['#', '.', '#'],
        ['#', '.', '#'],
      ];

      const result = clearGifts(warehouse, [0, 1, 2]);

      expect(result).toEqual([
        ['.', '.', '#'],
        ['#', '.', '#'],
        ['#', '.', '#'],
      ]);
    });

    test('clears row 2 after first two drops, then processes final drop', () => {
      const warehouse = [
        ['.', '.', '#'],
        ['#', '.', '#'],
        ['#', '.', '#'],
      ];

      const result = clearGifts(warehouse, [0, 1, 2]);

      expect(result).toEqual([
        ['.', '.', '#'],
        ['#', '.', '#'],
        ['#', '.', '#'],
      ]);
    });
  });
});
