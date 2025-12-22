import drawGift from './drawGift';

describe('Challenge #3: 👶 Help the intern', () => {
  describe('drawGift', () => {
    test('size 4 with *', () => {
      const result = drawGift(4, '*');
      expect(result).toBe(
        `****
*  *
*  *
****`,
      );
    });

    test('size 3 with #', () => {
      const result = drawGift(3, '#');
      expect(result).toBe(
        `###
# #
###`,
      );
    });

    test('size 2 with -', () => {
      const result = drawGift(2, '-');
      expect(result).toBe(
        `--
--`,
      );
    });

    test('size 1 with + returns empty string', () => {
      const result = drawGift(1, '+');
      expect(result).toBe('');
    });
  });
});
