function minStepsToDeliver(map: string[][]): number {
  const rowCount = map.length;
  const colCount = map[0].length;

  let startX = -1,
    startY = -1;
  const giftLocations: [number, number][] = [];

  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      if (map[r][c] === 'S') {
        startX = c;
        startY = r;
      } else if (map[r][c] === 'G') {
        giftLocations.push([c, r]);
      }
    }
  }

  const getDistance = (targetX: number, targetY: number): number => {
    const queue: [number, number, number][] = [[startX, startY, 0]];
    const visited = new Set<string>([`${startX},${startY}`]);

    while (queue.length > 0) {
      const [x, y, dist] = queue.shift()!;
      if (x === targetX && y === targetY) return dist;

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (const [dx, dy] of directions) {
        const nx = x + dx,
          ny = y + dy;
        const key = `${nx},${ny}`;
        if (
          ny >= 0 &&
          ny < rowCount &&
          nx >= 0 &&
          nx < colCount &&
          map[ny][nx] !== '#' &&
          !visited.has(key)
        ) {
          visited.add(key);
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
    return -1; // Target unreachable
  };

  let totalSteps = 0;
  for (const [gx, gy] of giftLocations) {
    const d = getDistance(gx, gy);
    if (d === -1) return -1; // If any 'G' is unreachable, return -1 immediately
    totalSteps += d;
  }

  return totalSteps;
}

export default minStepsToDeliver;
