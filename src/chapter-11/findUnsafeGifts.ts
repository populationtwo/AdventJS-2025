function findUnsafeGifts(warehouse: string[]): number {
  const { presents, cameras } = warehouse.reduce<{
    presents: [number, number][];
    cameras: Set<string>;
  }>(
    (acc, row, y) => {
      row.split('').forEach((cell, x) => {
        const coord: [number, number] = [x, y];
        if (cell === '*') acc.presents.push(coord);
        if (cell === '#') acc.cameras.add(`${x},${y}`);
      });
      return acc;
    },
    { presents: [], cameras: new Set() },
  );

  const adjacent = ([x, y]: [number, number]): string[] => [
    `${x - 1},${y}`,
    `${x + 1},${y}`,
    `${x},${y - 1}`,
    `${x},${y + 1}`,
  ];

  return presents.filter((p) => {
    const adj = adjacent(p);
    return !adj.some((c) => cameras.has(c));
  }).length;
}

export default findUnsafeGifts;
