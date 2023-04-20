import Cell from './cell.js';

/**
 * gameBoard is a module that contains a game board object
 * @returns {Object} gameBoard object
 * @property {function} reset - resets the board to all empty cells
 * @property {function} getBoard - returns the board
 * @property {function} getCell - returns the cell at the given coordinates
 * @property {function} setCell - sets the cell at the given coordinates to the given value
 * @property {function} resetCell - resets the cell at the given coordinates
 * @property {function} isFull - returns true if the board is full, false otherwise
 * @property {function} getEmptyCells - returns an array of the indices of empty cells
 * @property {function} checkWin - returns false if no winner, otherwise returns the winner
 * @property {function} printBoard - prints the board to the console
 */
const GameBoard = () => {
  // board is a 3x3 array of cells
  const board = [[], [], []];

  /**
   * reset resets the board to all empty cells
   */
  const reset = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = Cell();
      }
    }
  };

  /**
   * getBoard returns the board
   * @returns {Array} board
   */
  const getBoard = () => board;

  /**
   * getCell returns the cell at the given coordinates
   * @param {number} x - call it with the x coordinate
   * @param {number} y - call it with the y coordinate
   * @returns {Object} Cell object
   */
  const getCell = (x, y) => {
    if (x >= 0 && x < 3 && y >= 0 && y < 3) {
      return board[x][y];
    }

    console.error(`Invalid Coordinates (${x}, ${y})`);
    return null;
  };

  /**
   * setCell sets the cell at the given coordinates to the given value
   * @param {number} x - call it with the x coordinate
   * @param {number} y - call it with the y coordinate
   * @param {string} value - call it with 'X', 'O', or '_'
   */
  const setCell = (x, y, value) => {
    if (board[x][y].getValue() !== '_') {
      console.error(`Cell (${x}, ${y}) is already occupied`);
      return null;
    }
    board[x][y].setValue(value);

    return board[x][y];
  };

  /**
   * resetCell resets the cell at the given coordinates
   * @param {number} x - call it with the x coordinate
   * @param {number} y  - call it with the y coordinate
   */
  const resetCell = (x, y) => {
    board[x][y].setValue('_');
  };

  /**
   * isFull returns true if the board is full, false otherwise
   * @returns {boolean} isFull
   */
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

  /**
   * getEmptyCells returns an array of the indices of empty cells
   * @returns {Array} emptyCells
   */
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

  /**
   * checkWin returns false if no winner, otherwise returns the winner
   * @returns {boolean} winner - false if no winner, otherwise returns the winner
   */
  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0].getValue() === board[i][1].getValue() &&
        board[i][1].getValue() === board[i][2].getValue() &&
        board[i][0].getValue() !== '_'
      ) {
        return board[i][0].getValue();
      }
      if (
        board[0][i].getValue() === board[1][i].getValue() &&
        board[1][i].getValue() === board[2][i].getValue() &&
        board[0][i].getValue() !== '_'
      ) {
        return board[0][i].getValue();
      }
    }
    if (
      board[0][0].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][2].getValue() &&
      board[0][0].getValue() !== '_'
    ) {
      return board[0][0].getValue();
    }
    if (
      board[0][2].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][0].getValue() &&
      board[0][2].getValue() !== '_'
    ) {
      return board[0][2].getValue();
    }
    return false;
  };

  /**
   * getWinningCells returns an array of the indices of the winning cells
   * @returns {Array} winningCells
   */
  const getWinningCells = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0].getValue() === board[i][1].getValue() &&
        board[i][1].getValue() === board[i][2].getValue() &&
        board[i][0].getValue() !== '_'
      ) {
        return [
          [i, 0],
          [i, 1],
          [i, 2],
        ];
      }
      if (
        board[0][i].getValue() === board[1][i].getValue() &&
        board[1][i].getValue() === board[2][i].getValue() &&
        board[0][i].getValue() !== '_'
      ) {
        return [
          [0, i],
          [1, i],
          [2, i],
        ];
      }
    }
    if (
      board[0][0].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][2].getValue() &&
      board[0][0].getValue() !== '_'
    ) {
      return [
        [0, 0],
        [1, 1],
        [2, 2],
      ];
    }
    if (
      board[0][2].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][0].getValue() &&
      board[0][2].getValue() !== '_'
    ) {
      return [
        [0, 2],
        [1, 1],
        [2, 0],
      ];
    }
    return false;
  };

  /**
   * checkDraw returns true if the game is a draw, false otherwise
   * @returns {boolean} isDraw
   */
  const checkDraw = () => isFull() && !checkWin();

  /**
   * printBoard prints the board to the console
   */
  const printBoard = () => {
    board.forEach((row, rowIndex) => {
      console.log(
        `row${
          rowIndex + 1
        }: ${row[0].getValue()}  ${row[1].getValue()}  ${row[2].getValue()}`
      );
    });
  };

  reset();

  return {
    reset,
    getBoard,
    getCell,
    setCell,
    resetCell,
    checkDraw,
    getEmptyCells,
    checkWin,
    getWinningCells,
    printBoard,
  };
};

export default GameBoard();
