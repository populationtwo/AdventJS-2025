function hasFourLights(board: string[][]): boolean {
  // Code here

  const boardHeight = board.length;
  const boardWidth = board[0].length;

  for (let r = 0; r < boardHeight; r++) {
    for (let c = 0; c < boardWidth; c++) {
      const cell = board[r][c];
      if (cell !== '.') {
        if (c + 3 < boardWidth) {
          if (cell === board[r][c + 1] && cell === board[r][c + 2] && cell === board[r][c + 3]) {
            return true;
          }
        }
        if (r + 3 < boardHeight) {
          if (cell === board[r + 1][c] && cell === board[r + 2][c] && cell === board[r + 3][c]) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

export default hasFourLights;
