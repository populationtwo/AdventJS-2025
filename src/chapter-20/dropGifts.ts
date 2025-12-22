function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  for (const colIndex of drops) {
    for (let rowIndex = warehouse.length - 1; rowIndex >= 0; rowIndex--) {
      if (warehouse[rowIndex][colIndex] === '.') {
        warehouse[rowIndex][colIndex] = '#';
        break;
      }
    }
  }

  return warehouse;
}

export default dropGifts;
