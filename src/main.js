// Cell is a module that contains a board cell
function Cell() {
  // value is the value of the cell (either 'X', 'O', or '_')
  let value = '_';

  // getValue returns the value of the cell
  const getValue = () => value;

  // setValue sets the value of the cell to the given value
  const setValue = (newValue) => {
    value = newValue;
  };

  return { getValue, setValue };
}

// GameBoard is a module that contains the game board
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

// HumanPlayer is a module that contains a human player object
const HumanPlayer = (name, symbol) => {
  // getName returns the name of the player
  const getName = () => name;

  // getSymbol returns the symbol of the player ('X' or 'O')
  const getSymbol = () => symbol;

  return { getName, getSymbol };
};

// AIPlayer is a module that contains an AI player object
const AIPlayer = (symbol) => {
  // getName returns the name of the player
  const getName = () => 'AI';

  // getSymbol returns the symbol of the player ('X' or 'O')
  const getSymbol = () => symbol;

  // minimax is a recursive function that returns the best score for the given board
  const minimax = (board, isMaximizing) => {
    // evaluate the board
    const winner = board.checkWin();

    // base case: if the game is won by the maximizing player (AI), return high score (1)
    if (winner === symbol) {
      return 1;
    }
    // base case: if the game is won by the minimizing player (opponent), return low score (-1)
    if (winner === 'X' || winner === 'O') {
      return -1;
    }
    // base case: if the game is a tie, return 0
    if (board.isFull()) {
      return 0;
    }

    // recursive case: if the current move is maximizing, return the maximum score
    if (isMaximizing) {
      let bestScore = -Infinity;
      const emptyCells = board.getEmptyCells();

      for (let i = 0; i < emptyCells.length; i++) {
        const [x, y] = emptyCells[i];

        // make the move
        board.setCell(x, y, symbol);

        // evaluate the board if the move is made
        const score = minimax(board, false);

        // undo the move
        board.setCell(x, y, '_');

        // update the best score
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    }

    // recursive case: if the current move is minimizing, return the minimum score
    let bestScore = Infinity;
    const emptyCells = board.getEmptyCells();
    for (let i = 0; i < emptyCells.length; i++) {
      const [x, y] = emptyCells[i];

      // make the move
      board.setCell(x, y, symbol === 'X' ? 'O' : 'X');

      // evaluate the board if the move is made
      const score = minimax(board, true);

      // undo the move
      board.setCell(x, y, '_');

      // update the best score
      bestScore = Math.min(score, bestScore);
    }

    return bestScore;
  };

  // getBestMove returns the best next move for the AI
  const getBestMove = (board) => {
    const emptyCells = board.getEmptyCells();
    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < emptyCells.length; i++) {
      const [x, y] = emptyCells[i];

      // make the move
      board.setCell(x, y, symbol);

      // evaluate the board if the move is made
      const score = minimax(board, false);

      // undo the move
      board.setCell(x, y, '_');

      // update the best score and move
      if (score > bestScore) {
        bestScore = score;
        bestMove = [x, y];
      }
    }

    return bestMove;
  };

  return { getName, getSymbol, getBestMove };
};
