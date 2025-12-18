function drawTree(height: number, ornament: string, frequency: number): string {
  const leaves = '*';

  const createRow = (width: number, leafCount: number) => {
    const row = new Array(width).fill(' ');
    const start = Math.floor((width - leafCount) / 2);
    for (let i = start; i < start + leafCount; i++) {
      row[i] = leaves;
    }
    return trimAfterLeaves(row);
  };
  const createTrunk = (width: number) => {
    const row = new Array(width).fill(' ');
    const start = Math.floor((width - 1) / 2);
    for (let i = start; i < start + 1; i++) {
      row[i] = '#';
    }

    return trimAfterHash(row);
  };

  const trimAfterHash = (arr: string[]) => {
    const hashIndex = arr.indexOf('#');
    if (hashIndex === -1) return arr; // no "#" found, return original
    return arr.slice(0, hashIndex + 1);
  };

  const trimAfterLeaves = (arr: string[]) => {
    const lastIndex = arr.reduce((last, item, idx) => {
      return item !== ' ' ? idx : last;
    }, -1);

    return arr.slice(0, lastIndex + 1);
  };

  // Add decorations every nth leaf, skipping the last row
  const addDecoration = (rows: string[][], n: number, ornament: string) => {
    let count = 0;
    return rows.map((row, rowIndex) => {
      if (rowIndex === rows.length - 1) return row; // skip trunk
      return row.map((cell) => {
        if (cell === leaves) {
          count++;
          return count % n === 0 ? ornament : leaves;
        }
        return cell;
      });
    });
  };

  // Build tree rows
  const treeRows = Array.from({ length: height }, (_, i) => 1 + 2 * i);
  const treeWidth = treeRows[treeRows.length - 1];

  const treeImage = [
    ...treeRows.map((size) => createRow(treeWidth, size)),
    createTrunk(treeWidth), // trunk
  ];

  // Decorate and stringify
  const decorated = addDecoration(treeImage, frequency, ornament);
  return decorated.map((row) => row.join('')).join('\n');
}

export default drawTree;
