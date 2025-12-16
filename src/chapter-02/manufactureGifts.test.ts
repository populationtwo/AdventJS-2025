import manufactureGifts from "./manufactureGifts";

describe('Challenge #2: 🏭 Manufacture the toys', () => {

  test('It returns [\'car\', \'car\', \'car\', \'doll\', \'ball\', \'ball\'] when it\'s called with [\n' +
    '    { toy: \'car\', quantity: 3 },\n' +
    '    { toy: \'doll\', quantity: 1 },\n' +
    '    { toy: \'ball\', quantity: 2 }\n' +
    '  ] ', () => {

    const result = manufactureGifts([
      {toy: 'car', quantity: 3},
      {toy: 'doll', quantity: 1},
      {toy: 'ball', quantity: 2}
    ])
    const expected = ['car', 'car', 'car', 'doll', 'ball', 'ball']
    expect(result).toEqual(expected)
  });


  test('It returns [\'puzzle\'] when it\'s called with [\n' +
    '  { toy: \'train\', quantity: 0 }, // not manufactured\n' +
    '  { toy: \'bear\', quantity: -2 }, // neither\n' +
    '  { toy: \'puzzle\', quantity: 1 }\n' +
    ']', () => {

    const result = manufactureGifts([
      {toy: 'train', quantity: 0}, // not manufactured
      {toy: 'bear', quantity: -2}, // neither
      {toy: 'puzzle', quantity: 1}
    ])
    const expected: string[] = ['puzzle']
    expect(result).toEqual(expected)
  });


  test('It returns [] when it\'s called with []', () => {

    const result = manufactureGifts([])
    const expected: string[] = []
    expect(result).toEqual(expected)
  });


})
