import revealSantaRoute from './revealSantaRoute';

describe("Challenge #19: 🎄 Santa's Secret Journey", () => {
  describe('revealSantaRoute', () => {
    test('returns the correct route for a simple connected chain', () => {
      const input = [
        ['MEX', 'CAN'],
        ['UK', 'GER'],
        ['CAN', 'UK'],
      ];

      const result = revealSantaRoute(input);

      expect(result).toEqual(['MEX', 'CAN', 'UK', 'GER']);
    });

    test('returns the correct route for a longer multi‑segment chain', () => {
      const input = [
        ['USA', 'BRA'],
        ['JPN', 'PHL'],
        ['BRA', 'UAE'],
        ['UAE', 'JPN'],
        ['CMX', 'HKN'],
      ];

      const result = revealSantaRoute(input);

      expect(result).toEqual(['USA', 'BRA', 'UAE', 'JPN', 'PHL']);
    });

    test('returns only the connected route when some segments are unrelated', () => {
      const input = [
        ['STA', 'HYD'],
        ['ESP', 'CHN'],
      ];

      const result = revealSantaRoute(input);

      expect(result).toEqual(['STA', 'HYD']);
    });
  });
});
