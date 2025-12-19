type Board = string;
type Moves = string;
type Result = 'fail' | 'crash' | 'success';

function moveReno(board: Board, moves: Moves): Result {
  // Code here
  let currentRow = 0;
  let currentCol = 0;

  let currentCoord = { x: 0, y: 0 };

  const moveMap: {
    [key: string]: {
      dy: number;
      dx: number;
    };
  } = {
    U: { dy: -1, dx: 0 }, // Up: Decrease row index
    D: { dy: 1, dx: 0 }, // Down: Increase row index
    L: { dy: 0, dx: -1 }, // Left: Decrease column index
    R: { dy: 0, dx: 1 }, // Right: Increase column index
  };

  const parseBoard = (data: Board) => {
    return data
      .split('\n')
      .map((row: string) => row.trim())
      .filter((row: string) => row.length > 0)
      .map((row) => row.split(''));
  };

  const locateReindeer = (board: string[][]) => {
    for (let i = 0; i < board.length; i++) {
      for (let l = 0; l < board.length; l++) {
        if (board[i][l] === '@') {
          currentRow = i;
          currentCol = l;
        }
      }
    }
  };
  locateReindeer(parseBoard(board));

  let targetRow;
  let targetCol;
  let message;
  console.log(currentRow);
  console.log(currentCol);
  for (const moveChar of moves) {
    const { x, y } = currentCoord;

    const direction = moveChar;

    targetRow = y + moveMap[moveChar].dy;

    targetCol = x + moveMap[moveChar].dx;

    console.log('targetRow', targetRow);
    console.log('targetCol', targetCol);
    if (targetRow < 0 || targetCol < 0) return 'crash';

    if (board[targetRow][targetCol] === '*') return 'success';

    if (board[targetRow][targetCol] === '#') return 'crash';

    if (board[targetRow][targetCol] === '.') {
      currentCoord.x = targetCol;
      currentCoord.y = targetRow;
    }
    // console.log('direction', direction);
  }
  // console.log(parseBoard(board));
}

export default moveReno;
