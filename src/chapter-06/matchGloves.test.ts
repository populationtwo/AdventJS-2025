import matchGloves from './matchGloves';

describe('Challenge #6: 🧤 Matching gloves', () => {
  test('It returns  ["gold", "gold"] when it\'s called with 2025*12*24@23|59|30 NP', () => {
    const result = matchGloves([
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
    ]);
    const expected: string[] = ['gold', 'gold'];
    expect(result).toEqual(expected);
  });
  test(
    "It returns [] when it's called with[\n" +
      "  { hand: 'L', color: 'red' },\n" +
      "  { hand: 'R', color: 'green' },\n" +
      "  { hand: 'L', color: 'blue' }\n" +
      ']',
    () => {
      const result = matchGloves([
        { hand: 'L', color: 'red' },
        { hand: 'R', color: 'green' },
        { hand: 'L', color: 'blue' },
      ]);
      const expected: string[] = [];
      expect(result).toEqual(expected);
    },
  );

  test(
    "It returns ['red', 'green'] when it's called with [\n" +
      "  { hand: 'L', color: 'green' },\n" +
      "  { hand: 'L', color: 'red' },\n" +
      "  { hand: 'R', color: 'red' },\n" +
      "  { hand: 'R', color: 'green' }\n" +
      ']',
    () => {
      const result = matchGloves([
        { hand: 'L', color: 'green' },
        { hand: 'L', color: 'red' },
        { hand: 'R', color: 'red' },
        { hand: 'R', color: 'green' },
      ]);
      const expected = ['red', 'green'];
      expect(result).toEqual(expected);
    },
  );
});
