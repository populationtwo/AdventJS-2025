type Factory = string[];
type Result = 'completed' | 'broken' | 'loop';

function runFactory(factory: Factory): Result {
  // Code here
  const matrix = factory.map((row) => row.split(''));

  // console.log(matrix);
  let activeCoord = { x: 0, y: 0 };
  const visitedCell = new Set();
  visitedCell.add('0,0');

  while (true) {
    const { x, y } = activeCoord;
    // 1. Check bounds before reading the cell
    if (y < 0 || y >= matrix.length || x < 0 || x >= matrix[0].length) {
      return 'broken';
    }
    const cell = matrix[y][x];
    // 2. Check for completion
    if (cell === '.') {
      return 'completed';
    }
    // 3. Move based on direction
    if (cell === '>') activeCoord = { x: x + 1, y };
    else if (cell === '<') activeCoord = { x: x - 1, y };
    else if (cell === 'v') activeCoord = { x, y: y + 1 };
    else if (cell === '^') activeCoord = { x, y: y - 1 };
    // 4. Detect loops
    const key = `${activeCoord.x},${activeCoord.y}`;
    if (visitedCell.has(key)) {
      return 'loop';
    }
    visitedCell.add(key);
  }
}
export default runFactory;
