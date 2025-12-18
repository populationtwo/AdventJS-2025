import drawTree from './drawTree';

describe('Challenge #7: 🎄 Decorating the tree', () => {
  test("It returns  '    *\\n' + '   o*o\\n' + '  *o*o*\\n' + ' o*o*o*o\\n' + '*o*o*o*o*\\n' + '    # when it's called with 5, 'o', 2", () => {
    const result = drawTree(5, 'o', 2);
    const expected: string =
      '    *\n' + '   o*o\n' + '  *o*o*\n' + ' o*o*o*o\n' + '*o*o*o*o*\n' + '    #';
    expect(result).toEqual(expected);
  });
  test("It returns '  *\\n' + ' *@*\\n' + '*@**@\\n' + '  #' when it's called with 3, '@', 3", () => {
    const result = drawTree(3, '@', 3);
    const expected: string = '  *\n' + ' *@*\n' + '*@**@\n' + '  #';
    expect(result).toEqual(expected);
  });

  test("It returns '   +\\n' + '  +++\\n' + ' +++++\\n' + '+++++++\\n' + '   #' when it's called with 4, '+', 1", () => {
    const result = drawTree(4, '+', 1);
    const expected = '   +\n' + '  +++\n' + ' +++++\n' + '+++++++\n' + '   #';
    expect(result).toEqual(expected);
  });
});
