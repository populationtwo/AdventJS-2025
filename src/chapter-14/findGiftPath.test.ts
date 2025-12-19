import findGiftPath from './findGiftPath';

describe('Challenge #14: 🗃️ Find the gift path', () => {
  const workshop = {
    storage: {
      shelf: {
        box1: 'train',
        box2: 'switch',
      },
      box: 'car',
    },
    gift: 'doll',
  };
  test("It returns ['storage', 'shelf', 'box1'] when it's called with 'train'", () => {
    const result = findGiftPath(workshop, 'train');
    const expected: string[] = ['storage', 'shelf', 'box1'];
    expect(result).toEqual(expected);
  });

  test("It returns ['storage', 'shelf', 'box2'] when it's called with 'switch'", () => {
    const result = findGiftPath(workshop, 'switch');
    const expected: string[] = ['storage', 'shelf', 'box2'];
    expect(result).toEqual(expected);
  });

  test("It returns ['storage', 'box'] when it's called with 'car'", () => {
    const result = findGiftPath(workshop, 'car');
    const expected: string[] = ['storage', 'box'];
    expect(result).toEqual(expected);
  });

  test("It returns ['gift'] when it's called with 'doll'", () => {
    const result = findGiftPath(workshop, 'doll');
    const expected: string[] = ['gift'];
    expect(result).toEqual(expected);
  });

  test("It returns [] when it's called with 'plane'", () => {
    const result = findGiftPath(workshop, 'plane');
    const expected: string[] = [];
    expect(result).toEqual(expected);
  });
});
