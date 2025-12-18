import maxDepth from './maxDepth';

describe('Challenge #10: 📨 Depth of Christmas magic', () => {
  test("It returns 1 when it's called with '[]'", () => {
    const result = maxDepth('[]');
    const expected: number = 1;
    expect(result).toEqual(expected);
  });

  test("It returns 2 when it's called with '[[]]'", () => {
    const result = maxDepth('[[]]');
    const expected: number = 2;
    expect(result).toEqual(expected);
  });

  test("It returns 1 when it's called with '[][]'", () => {
    const result = maxDepth('[][]');
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test("It returns 2 when it's called with '[[][]]'", () => {
    const result = maxDepth('[[][]]');
    const expected = 2;
    expect(result).toEqual(expected);
  });

  test("It returns 3 when it's called with '[[[]]]'", () => {
    const result = maxDepth('[[[]]]');
    const expected = 3;
    expect(result).toEqual(expected);
  });

  test("It returns 2 when it's called with '[][[]][]'", () => {
    const result = maxDepth('[][[]][]');
    const expected = 2;
    expect(result).toEqual(expected);
  });

  test("It returns -1 when it's called with ']['", () => {
    const result = maxDepth('][');
    const expected = -1;
    expect(result).toEqual(expected);
  });

  test("It returns -1 when it's called with '[[['", () => {
    const result = maxDepth('[[[');
    const expected = -1;
    expect(result).toEqual(expected);
  });

  test("It returns -1 when it's called with '[]]]'", () => {
    const result = maxDepth('[]]]');
    const expected = -1;
    expect(result).toEqual(expected);
  });

  test("It returns -1 when it's called with '[][]['", () => {
    const result = maxDepth('[][][');
    const expected = -1;
    expect(result).toEqual(expected);
  });
});
