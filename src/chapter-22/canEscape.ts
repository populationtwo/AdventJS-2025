function canEscape(maze: string[][]): boolean {
  // Code here

  const row = maze.length;
  const cols = maze[0].length;
  const visitedCells = new Set<string>();
  const dfs = (x: number, y: number): boolean => {
    if (y >= row || x >= cols || y < 0 || x < 0) return false;

    const currentCell = `${x},${y}`;

    if (visitedCells.has(currentCell) || maze[y][x] === '#') {
      return false;
    }

    if (maze[y][x] === 'E') return true;

    visitedCells.add(currentCell);

    return dfs(x + 1, y) || dfs(x - 1, y) || dfs(x, y + 1) || dfs(x, y - 1);
  };

  for (let j = 0; j < row; j++) {
    for (let k = 0; k < cols; k++) {
      if (maze[j][k] === 'S') {
        return dfs(k, j);
      }
    }
  }

  return false;
}

export default canEscape;
