import elfBattle from './elfBattle';

describe('Challenge #12: ⚔️ Elf battle', () => {
  test("It returns 0 when it's called with 'A', 'B'", () => {
    const result = elfBattle('A', 'B');
    const expected: number = 0;
    expect(result).toEqual(expected);
  });

  test("It returns 1 when it's called with 'F', 'B'", () => {
    const result = elfBattle('F', 'B');
    const expected: number = 1;
    expect(result).toEqual(expected);
  });

  test("It returns 0 when it's called with 'AAB', 'BBA'", () => {
    const result = elfBattle('AAB', 'BBA');
    const expected: number = 0;
    expect(result).toEqual(expected);
  });

  test("It returns 1 when it's called with 'AFA', 'BBA'", () => {
    const result = elfBattle('AFA', 'BBA');
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test("It returns 1 when it's called with 'AFAB', 'BBAF'", () => {
    const result = elfBattle('AFAB', 'BBAF');
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test("It returns 2 when it's called with 'AA', 'FF'", () => {
    const result = elfBattle('AA', 'FF');
    const expected = 2;
    expect(result).toEqual(expected);
  });
});
