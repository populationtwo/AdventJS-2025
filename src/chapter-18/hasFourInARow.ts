function hasFourInARow(board: string[][]): boolean {
  // Code here
  const boardHeight = board.length;
  const boardWidth = board[0].length;

  for (let r = 0; r < boardHeight; r++) {
    for (let c = 0; c < boardWidth; c++) {
      const cell = board[r][c];

      if (cell === '.') continue;
      // 1. Horizontal (↔)
      if (c + 3 < boardWidth) {
        if (cell === board[r][c + 1] && cell === board[r][c + 2] && cell === board[r][c + 3]) {
          return true;
        }
      }
      // 2. Vertical (↕)
      if (r + 3 < boardHeight) {
        if (cell === board[r + 1][c] && cell === board[r + 2][c] && cell === board[r + 3][c]) {
          return true;
        }
      }
      // 3. Descending Diagonal (↘)
      if (r + 3 < boardHeight && c + 3 < boardWidth) {
        if (
          cell === board[r + 1][c + 1] &&
          cell === board[r + 2][c + 2] &&
          cell === board[r + 3][c + 3]
        ) {
          return true;
        }
      }
      // 4. Ascending Diagonal (↗)
      if (r - 3 >= 0 && c + 3 < boardWidth) {
        if (
          cell === board[r - 1][c + 1] &&
          cell === board[r - 2][c + 2] &&
          cell === board[r - 3][c + 3]
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

export default hasFourInARow;
