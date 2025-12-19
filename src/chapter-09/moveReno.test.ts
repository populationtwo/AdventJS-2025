import moveReno from './moveReno';

describe('Challenge #9: 🦌 The reno robot aspirator', () => {
  const board = `
    .....
    .*#.*
    .@...
    .....
    `;

  test("It returns 'fail' when it's called with (board, 'D')", () => {
    const result = moveReno(board, 'D');
    const expected: string = 'fail';
    expect(result).toEqual(expected);
  });

  test("It returns 'success' when it's called with (board, 'U')", () => {
    const result = moveReno(board, 'U');
    const expected: string = 'success';
    expect(result).toEqual(expected);
  });

  test("It returns 'crash' when it's called with (board, 'RU')", () => {
    const result = moveReno(board, 'RU');
    const expected = 'crash';
    expect(result).toEqual(expected);
  });

  test("It returns 'success' when it's called with (board, 'RRRUU')", () => {
    const result = moveReno(board, 'RRRUU');
    const expected = 'success';
    expect(result).toEqual(expected);
  });

  test("It returns 'crash' when it's called with (board, 'DD')", () => {
    const result = moveReno(board, 'DD');
    const expected = 'crash';
    expect(result).toEqual(expected);
  });

  test("It returns 'success' when it's called with (board, 'UUU')", () => {
    const result = moveReno(board, 'UUU');
    const expected = 'success';
    expect(result).toEqual(expected);
  });

  test("It returns 'fail' when it's called with (board, 'RR')", () => {
    const result = moveReno(board, 'RR');
    const expected = 'fail';
    expect(result).toEqual(expected);
  });
});
