function Cell() {
  let value = '_';
  const getValue = () => value;
  const setValue = (newValue) => {
    value = newValue;
  };

  return { getValue, setValue };
}

const GameBoard = (() => {
  // board is a 3x3 array of cells
  const board = [3][3];

  // reset resets the board to all empty cells
  const reset = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = Cell();
      }
    }
  };

  // getBoard returns the board
  const getBoard = () => board;

  // getCell returns the cell at the given coordinates
  const getCell = (x, y) => board[x][y];

  // setCell sets the cell at the given coordinates to the given value
  const setCell = (x, y, value) => {
    board[x][y].setValue(value);
  };

  // isFull returns true if the board is full, false otherwise
  const isFull = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j].getValue() === '_') {
          return false;
        }
      }
    }
    return true;
  };

  // getEmptyCells returns an array of the indices of empty cells
  const getEmptyCells = () => {
    const emptyCells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j].getValue() === '_') {
          emptyCells.push([i, j]);
        }
      }
    }
    return emptyCells;
  };

  // checkWin returns false if no winner, otherwise returns the winner
  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0].getValue() === board[i][1].getValue() &&
        board[i][1].getValue() === board[i][2].getValue()
      ) {
        return board[i][0].getValue();
      }
      if (
        board[0][i].getValue() === board[1][i].getValue() &&
        board[1][i].getValue() === board[2][i].getValue()
      ) {
        return board[0][i].getValue();
      }
    }
    if (
      board[0][0].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][2].getValue()
    ) {
      return board[0][0].getValue();
    }
    if (
      board[0][2].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][0].getValue()
    ) {
      return board[0][2].getValue();
    }
    return false;
  };

  // printBoard prints the board to the console
  const printBoard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(board[i][j].getValue());
      }
    }
  };

  return {
    reset,
    getBoard,
    getCell,
    setCell,
    isFull,
    getEmptyCells,
    checkWin,
    printBoard,
  };
})();