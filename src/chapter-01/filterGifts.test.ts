import filterGifts from "./filterGifts";

describe('Challenge #1: 🎁 Filter the defective gifts', () => {

  test('It returns [\'car\', \'ball\'] when it\'s called with [\'car\', \'doll#arm\', \'ball\', \'#train\']', () => {

    const result = filterGifts(['car', 'doll#arm', 'ball', '#train'])
    const expected = ['car', 'ball']

    expect(result).toEqual(expected)
  });


  test('It returns [] when it\'s called with [\'#broken\', \'#rusty\']', () => {

    const result = filterGifts(['#broken', '#rusty'])
    const expected: string[] = []

    expect(result).toEqual(expected)
  });


  test('It returns [] when it\'s called with []', () => {

    const result = filterGifts([])
    const expected: string[] = []

    expect(result).toEqual(expected)
  });


})
