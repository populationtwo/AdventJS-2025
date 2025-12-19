import drawTable from './drawTable';

describe('Challenge #15: ✏️ Drawing tables', () => {
  test(
    'It returns +---------+----------+\n' +
      '| A       | B        |\n' +
      '+---------+----------+\n' +
      '| Alice   | London   |\n' +
      '| Bob     | Paris    |\n' +
      '| Charlie | New York |\n' +
      "+---------+----------+ when it's called with [\n" +
      "    { name: 'Charlie', city: 'New York' },\n" +
      "    { name: 'Alice', city: 'London' },\n" +
      "    { name: 'Bob', city: 'Paris' }\n" +
      '  ],\n' +
      "  'name'",
    () => {
      const result = drawTable(
        [
          { name: 'Charlie', city: 'New York' },
          { name: 'Alice', city: 'London' },
          { name: 'Bob', city: 'Paris' },
        ],
        'name',
      );
      const expected: string =
        '+---------+----------+\n' +
        '| A       | B        |\n' +
        '+---------+----------+\n' +
        '| Alice   | London   |\n' +
        '| Bob     | Paris    |\n' +
        '| Charlie | New York |\n' +
        '+---------+----------+';
      expect(result).toEqual(expected);
    },
  );

  test(
    'It returns +----------+----+\n' +
      '| A        | B  |\n' +
      '+----------+----+\n' +
      '| Music CD | 1  |\n' +
      '| Book     | 5  |\n' +
      '| Doll     | 10 |\n' +
      "+----------+----+ when it's called with  [\n" +
      "    { gift: 'Book', quantity: 5 },\n" +
      "    { gift: 'Music CD', quantity: 1 },\n" +
      "    { gift: 'Doll', quantity: 10 }\n" +
      '  ],\n' +
      "  'quantity'",
    () => {
      const result = drawTable(
        [
          { gift: 'Book', quantity: 5 },
          { gift: 'Music CD', quantity: 1 },
          { gift: 'Doll', quantity: 10 },
        ],
        'quantity',
      );
      const expected: string =
        '+----------+----+\n' +
        '| A        | B  |\n' +
        '+----------+----+\n' +
        '| Music CD | 1  |\n' +
        '| Book     | 5  |\n' +
        '| Doll     | 10 |\n' +
        '+----------+----+';
      expect(result).toEqual(expected);
    },
  );
});
