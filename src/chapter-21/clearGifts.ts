function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  if (warehouse.length === 0 || warehouse[0].length === 0) {
    throw new Error('Warehouse cannot be empty.');
  }
  const width = warehouse[0].length;

  for (const row of warehouse) {
    if (row.length !== width) {
      throw new Error('Invalid warehouse: All rows must have the same length.');
    }

    const hasInvalidChar = row.some((cell) => cell !== '.' && cell !== '#');
    if (hasInvalidChar) {
      throw new Error("Invalid warehouse: Only '#' and '.' are allowed.");
    }
  }

  for (const colIndex of drops) {
    for (let rowIndex = warehouse.length - 1; rowIndex >= 0; rowIndex--) {
      if (warehouse[rowIndex][colIndex] === '.') {
        warehouse[rowIndex][colIndex] = '#';

        const fullRow = warehouse[rowIndex].every((cell) => cell === '#');

        if (fullRow) {
          warehouse.splice(rowIndex, 1);
          warehouse.unshift(Array(width).fill('.'));
        }
        break;
      }
    }
  }

  return warehouse;
}

export default clearGifts;
