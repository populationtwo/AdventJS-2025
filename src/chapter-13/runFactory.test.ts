import runFactory from './runFactory';

describe('Challenge #13: 🏭 The assembly line', () => {
  test("It returns 'completed' when it's called with [\n" + "  '>>.'\n" + ']', () => {
    const result = runFactory(['>>.']);
    const expected: string = 'completed';
    expect(result).toEqual(expected);
  });

  test("It returns 'broken' when it's called with [\n" + "  '>>>'\n" + ']', () => {
    const result = runFactory(['>>>']);
    const expected: string = 'broken';
    expect(result).toEqual(expected);
  });

  test("It returns loop when it's called with [\n" + "  '>><'\n" + ']', () => {
    const result = runFactory(['>><']);
    const expected: string = 'loop';
    expect(result).toEqual(expected);
  });

  test("It returns completed when it's called with [\n" + "  '>>v',\n" + "  '..<'\n" + ']', () => {
    const result = runFactory(['>>v', '..<']);
    const expected: string = 'completed';
    expect(result).toEqual(expected);
  });

  test("It returns broken when it's called with [\n" + "  '>>v',\n" + "  '<<<'\n" + ']', () => {
    const result = runFactory(['>>v', '<<<']);
    const expected: string = 'broken';
    expect(result).toEqual(expected);
  });

  test("It returns completed when it's called with [\n" + "  '>v.',\n" + "  '^..'\n" + ']', () => {
    const result = runFactory(['>v.', '^..']);
    const expected: string = 'completed';
    expect(result).toEqual(expected);
  });

  test("It returns loop when it's called with [\n" + "  'v.',\n" + "  '^.'\n" + ']', () => {
    const result = runFactory(['v.', '^.']);
    const expected: string = 'loop';
    expect(result).toEqual(expected);
  });
});
