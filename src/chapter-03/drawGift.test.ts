import drawGift from './drawGift';

describe('Challenge #3: 👶 Help the intern', () => {
  test(
    'It returns  ****\n' + '*  *\n' + '*  *\n' + " **** when it's called with (4, \'*\')",
    () => {
      const result = drawGift(4, '*');
      const expected = '****\n' + '*  *\n' + '*  *\n' + '****';
      expect(result).toEqual(expected);
    },
  );
  test('It returns  ###\n' + '#  #\n' +  " ### when it's called with (3, \'#\')", () => {
    const result = drawGift(3, '#');
    const expected = '###\n' + '# #\n' + '###';
    expect(result).toEqual(expected);
  });

  test("It returns  --\n" + "-- when it's called with (2, \'-\')", () => {
    const result = drawGift(2, '-');
    const expected = '--\n' + '--';
    expect(result).toEqual(expected);
  });

  test("It returns  \"\" when it's called with (1, '+')", () => {
    const result = drawGift(1, '+');
    const expected = '';
    expect(result).toEqual(expected);
  });
});
