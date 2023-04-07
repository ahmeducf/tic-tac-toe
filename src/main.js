/**
 * Cell is a module that contains a cell object
 * @returns {Object} Cell object
 * @property {function} getValue - returns the value of the cell
 * @property {function} setValue - sets the value of the cell to the given value
 */
function Cell() {
  // value is the value of the cell (either 'X', 'O', or '_')
  let value = '_';

  /**
   * getValue returns the value of the cell
   * @returns {string} value
   */
  const getValue = () => value;

  /**
   * setValue sets the value of the cell to the given value
   * @param {string} newValue - call it with 'X', 'O', or '_'
   */
  const setValue = (newValue) => {
    value = newValue;
  };

  return { getValue, setValue };
}

/**
 * GameBoard is a module that contains a game board object
 * @returns {Object} GameBoard object
 * @property {function} reset - resets the board to all empty cells
 * @property {function} getBoard - returns the board
 * @property {function} getCell - returns the cell at the given coordinates
 * @property {function} setCell - sets the cell at the given coordinates to the given value
 * @property {function} isFull - returns true if the board is full, false otherwise
 * @property {function} getEmptyCells - returns an array of the indices of empty cells
 * @property {function} checkWin - returns false if no winner, otherwise returns the winner
 * @property {function} printBoard - prints the board to the console
 */
const GameBoard = (() => {
  // board is a 3x3 array of cells
  const board = [3][3];

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
  const getCell = (x, y) => board[x][y];

  /**
   * setCell sets the cell at the given coordinates to the given value
   * @param {number} x - call it with the x coordinate
   * @param {number} y - call it with the y coordinate
   * @param {string} value - call it with 'X', 'O', or '_'
   */
  const setCell = (x, y, value) => {
    board[x][y].setValue(value);
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

  /**
   * printBoard prints the board to the console
   */
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

/**
 * Player is a module that contains a player object
 * @param {string} name - call it with the player's name
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} Player object
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player ('X' or 'O')
 */
const Player = (name, symbol) => {
  /**
   * getName returns the name of the player
   * @returns {string} name
   */
  const getName = () => name;

  /**
   * getSymbol returns the symbol of the player ('X' or 'O')
   * @returns {string} symbol
   */
  const getSymbol = () => symbol;

  return { getName, getSymbol };
};

/**
 * HumanPlayer is a module that contains a human player object (inherits from Player)
 * @param {string} name - call it with the player's name
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} HumanPlayer object
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player ('X' or 'O')
 */
const HumanPlayer = (name, symbol) => ({ ...Player(name, symbol) });

/**
 * AIPlayer is a module that contains an AI player object (inherits from Player)
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} AIPlayer object
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player ('X' or 'O')
 * @property {function} getNextEasyMove - returns the next move for the AI player (easy mode)
 * @property {function} getNextMediumMove - returns the next move for the AI player (medium mode)
 * @property {function} getNextHardMove - returns the next move for the AI player (hard mode)
 * @property {function} getNextUnbeatableMove - returns the next move for the AI player (unbeatable mode)
 */
const AIPlayer = (symbol) => {
  /**
   * minimax is a recursive function that evaluates the board and returns a score
   * @param {GameBoard} board - call it with the current board
   * @param {boolean} isMaximizing - call it with true if the current move is maximizing
   * @returns {number} score
   */
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

  /**
   * getBestMove returns the best next move for the AI
   * @param {gameboa} board - call it with the current board
   * @returns {Array} bestMove
   */
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

  /**
   * getRandomMove returns a random next move for the AI
   * @param {GameBoard} board - call it with the current board
   * @returns {Array} randomMove
   * */
  const getRandomMove = (board) => {
    const emptyCells = board.getEmptyCells();
    const randomIndex = Math.floor(Math.random() * emptyCells.length);

    return emptyCells[randomIndex];
  };

  /**
   * getNextMove returns the next move for the AI
   * @param {GameBoard} board - call it with the current board
   * @param {number} difficultyPercentage - call it with the difficulty percentage (0-100)
   * @returns {Array} nextMove
   * */
  const getNextMove = (board, difficultyPercentage) => {
    // random percentage between 0 and 100
    const randomPercentage = Math.floor(Math.random() * 101);

    if (randomPercentage < difficultyPercentage) {
      return getBestMove(board);
    }

    return getRandomMove(board);
  };

  /**
   * getNextEasyMove returns the next move when the difficulty is easy
   * @param {GameBoard} board - call it with the current board
   * @returns {Array} nextMove - random move
   */
  const getNextEasyMove = (board) => getNextMove(board, 0);

  /**
   * getNextMediumMove returns the next move when the difficulty is medium
   * @param {GameBoard} board - call it with the current board
   * @returns {Array} nextMove - the best move with a 50% chance
   */
  const getNextMediumMove = (board) => getNextMove(board, 50);

  /**
   * getNextHardMove returns the next move when the difficulty is hard
   * @param {GameBoard} board - call it with the current board
   * @returns {Array} nextMove - the best move with a 75% chance
   */
  const getNextHardMove = (board) => getNextMove(board, 75);

  /**
   * getNextUnbeatableMove returns the next move when the difficulty is unbeatable
   * @param {GameBoard} board - call it with the current board
   * @returns {Array} nextMove - the best move
   */
  const getNextUnbeatableMove = (board) => getBestMove(board);

  return {
    ...Player('AI', symbol),
    getNextEasyMove,
    getNextMediumMove,
    getNextHardMove,
    getNextUnbeatableMove,
  };
};
