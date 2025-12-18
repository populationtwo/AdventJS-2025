import findUniqueToy from './findUniqueToy';

describe('Challenge #8: 🎁 Find the unique toy', () => {
  test("It returns 'G' when it's called with 'Gift'", () => {
    const result = findUniqueToy('Gift');
    const expected: string = 'G';
    expect(result).toEqual(expected);
  });
  test("It returns '' when it's called with 'sS'", () => {
    const result = findUniqueToy('sS');
    const expected: string = '';
    expect(result).toEqual(expected);
  });

  test("It returns 'i' when it's called with 'reindeeR'", () => {
    const result = findUniqueToy('reindeeR');
    const expected = 'i';
    expect(result).toEqual(expected);
  });
});
