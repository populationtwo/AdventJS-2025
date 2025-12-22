function drawTree(height: number, ornament: string, frequency: number): string {
  const LEAF = '*';
  const TRUNK = '#';

  const buildRow = (rowId: number, totalHeight: number, leafCounter: number) => {
    const padding = ' '.repeat(totalHeight - 1 - rowId);
    const leafCount = 1 + 2 * rowId;

    let currentRowLeaves = '';
    let updatedCounter = leafCounter;

    for (let i = 0; i < leafCount; i++) {
      updatedCounter++;
      const char = updatedCounter % frequency === 0 ? ornament : LEAF;
      currentRowLeaves += char;
    }

    return {
      row: padding + currentRowLeaves,
      nextCounter: updatedCounter,
    };
  };

  // State-based accumulation of rows
  let currentGlobalCount = 0;
  const treeRows: string[] = [];

  // Build leaf sections
  for (let i = 0; i < height; i++) {
    const { row, nextCounter } = buildRow(i, height, currentGlobalCount);
    treeRows.push(row);
    currentGlobalCount = nextCounter;
  }

  // Build trunk (no trimming needed, padding is explicit)
  const trunkPadding = ' '.repeat(height - 1);
  treeRows.push(trunkPadding + TRUNK);

  return treeRows.join('\n');
}

export default drawTree;
