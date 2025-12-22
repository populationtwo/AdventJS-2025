function canEscape(maze: string[][]): boolean {
  const rowCount = maze.length;
  const colCount = maze[0].length;
  const visited = new Set<string>();

  // 1. Find the starting position 'S'
  let startX = -1,
    startY = -1;
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      if (maze[r][c] === 'S') {
        startX = c;
        startY = r;
        break;
      }
    }
  }

  // If no 'S' is found, we can't escape
  if (startX === -1) return false;

  // 2. Initialize the Queue with the starting point [x, y]
  const queue: [number, number][] = [[startX, startY]];
  visited.add(`${startX},${startY}`);

  // 3. Process the queue
  while (queue.length > 0) {
    const [x, y] = queue.shift()!; // Get the next cell to explore

    // Check if we reached the exit
    if (maze[y][x] === 'E') return true;

    // Define 4 possible directions: Right, Left, Down, Up
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      const key = `${nextX},${nextY}`;

      // Boundary check & Wall check & Visited check
      if (
        nextY >= 0 &&
        nextY < rowCount &&
        nextX >= 0 &&
        nextX < colCount &&
        maze[nextY][nextX] !== '#' &&
        !visited.has(key)
      ) {
        visited.add(key); // Mark as visited immediately when adding to queue
        queue.push([nextX, nextY]);
      }
    }
  }

  return false;
}

export default canEscape;
