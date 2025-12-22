import dropGifts from './dropGifts';

describe('Challenge #20: 🎁 Vertical warehouse', () => {
  describe('revealSantaRoute', () => {
    describe('dropGifts', () => {
      test('drops a gift into column 0 with one available space', () => {
        const warehouse = [
          ['.', '.', '.'],
          ['.', '#', '.'],
          ['#', '#', '.'],
        ];

        const result = dropGifts(warehouse, [0]);

        expect(result).toEqual([
          ['.', '.', '.'],
          ['#', '#', '.'],
          ['#', '#', '.'],
        ]);
      });

      test('drops into columns 0 and 2 with mixed availability', () => {
        const warehouse = [
          ['.', '.', '.'],
          ['#', '#', '.'],
          ['#', '#', '#'],
        ];

        const result = dropGifts(warehouse, [0, 2]);

        expect(result).toEqual([
          ['#', '.', '.'],
          ['#', '#', '#'],
          ['#', '#', '#'],
        ]);
      });

      test('drops into empty warehouse columns 0, 1, 2', () => {
        const warehouse = [
          ['.', '.', '.'],
          ['.', '.', '.'],
          ['.', '.', '.'],
        ];

        const result = dropGifts(warehouse, [0, 1, 2]);

        expect(result).toEqual([
          ['.', '.', '.'],
          ['.', '.', '.'],
          ['#', '#', '#'],
        ]);
      });

      test('ignores drops when the column is full', () => {
        const warehouse = [
          ['#', '#'],
          ['#', '#'],
        ];

        const result = dropGifts(warehouse, [0, 0]);

        expect(result).toEqual([
          ['#', '#'],
          ['#', '#'],
        ]);
      });
    });
  });
});
