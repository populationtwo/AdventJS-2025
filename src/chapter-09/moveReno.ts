type Board = string;
type Moves = string;
type Result = 'fail' | 'crash' | 'success';

function moveReno(board: Board, moves: Moves): Result {
  const moveMap: {
    [key: string]: {
      dy: number;
      dx: number;
    };
  } = {
    U: { dy: -1, dx: 0 },
    D: { dy: 1, dx: 0 },
    L: { dy: 0, dx: -1 },
    R: { dy: 0, dx: 1 },
  } as const;

  // Clean and parse board
  const parsedBoard = board
    .split('\n')
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row.split(''));

  const boardHeight = parsedBoard.length;
  const boardWidth = parsedBoard[0]?.length ?? 0;

  // Find reindeer location
  let startX = -1;
  let startY = -1;

  for (let y = 0; y < boardHeight; y++) {
    for (let x = 0; x < parsedBoard[y].length; x++) {
      if (parsedBoard[y][x] === '@') {
        startX = x;
        startY = y;
        break;
      }
    }
    if (startX !== -1) break;
  }

  if (startX === -1) return 'fail'; // No reindeer found

  let x = startX;
  let y = startY;

  for (const m of moves) {
    const move = moveMap[m];
    if (!move) continue; // Ignore invalid chars

    const targetRow = y + move.dy;
    const targetCol = x + move.dx;

    // Out of bounds → crash
    if (targetRow < 0 || targetCol < 0 || targetRow >= boardHeight || targetCol >= boardWidth) {
      return 'crash';
    }

    const cell = parsedBoard[targetRow][targetCol];

    if (cell === '*') return 'success';
    if (cell === '#') return 'crash';

    // Move only onto empty cells
    if (cell === '.') {
      x = targetCol;
      y = targetRow;
    }
  }

  return 'fail';
}

export default moveReno;
