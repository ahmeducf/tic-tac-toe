import Player from './player.js';

/**
 * AIPlayer is a module that contains an AI player object (inherits from Player)
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} AIPlayer object
 * @property {function} getNextMove - returns the next move for the AI based on difficulty level
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player ('X' or 'O')
 * @property {function} getType - returns the type of the player ('Human' or 'AI')
 * @property {function} getLevel - returns the difficulty level of the AI ('Easy', 'Medium', 'Hard', 'Unbeatable')
 */
const AIPlayer = (symbol, level) => {
  const name = `${level} AI`;

  /**
   * level is the difficulty level of the AI
   * (Easy, Medium, Hard, Unbeatable)
   */
  const getLevel = () => level;

  /**
   * minimax is a recursive function that evaluates the board and returns a score
   * @param {gameBoard} board - call it with the current board
   * @param {boolean} isMaximizing - call it with true if the current move is maximizing
   * @param {number} depth - call it with the current depth
   * @returns {number} score
   */
  const minimax = (board, isMaximizing, depth) => {
    const opponentSymbol = symbol === 'X' ? 'O' : 'X';

    // evaluate the board
    const winner = board.checkWin();

    // base case: if the game is won by the maximizing player (AI), return high score (1)
    if (winner === symbol) {
      return 100 - depth;
    }
    // base case: if the game is won by the minimizing player (opponent), return low score (-1)
    if (winner === opponentSymbol) {
      return -100 + depth;
    }
    // base case: if the game is a tie, return 0
    if (board.checkDraw()) {
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
        const score = minimax(board, false, depth + 1);

        // undo the move
        board.resetCell(x, y);

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
      const score = minimax(board, true, depth + 1);

      // undo the move
      board.resetCell(x, y);

      // update the best score
      bestScore = Math.min(score, bestScore);
    }

    return bestScore;
  };

  /**
   * getBestMove returns the best next move for the AI,
   * returns null if board is full
   * @param {gameBoard} board - call it with the current board
   * @returns {Array} bestMove
   */
  const getBestMove = (board) => {
    const emptyCells = board.getEmptyCells();
    let bestScore = -Infinity;
    let bestMove;

    if (emptyCells.length === 0) {
      return null;
    }
    if (emptyCells.length === 1) {
      return emptyCells[0];
    }

    for (let i = 0; i < emptyCells.length; i++) {
      const [x, y] = emptyCells[i];

      // make the move
      board.setCell(x, y, symbol);

      // evaluate the board if the move is made
      const score = minimax(board, false, 1);

      // undo the move
      board.resetCell(x, y);

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
   * @param {gameBoard} board - call it with the current board object
   * @returns {Array} randomMove
   * */
  const getRandomMove = (board) => {
    const emptyCells = board.getEmptyCells();
    const randomIndex = Math.floor(Math.random() * emptyCells.length);

    return emptyCells[randomIndex];
  };

  /**
   * getNextMove returns the next move for the AI based on difficulty level
   * @param {gameBoard} board - call it with the current board object
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

  return { getLevel, getNextMove, ...Player(name, symbol, 'AI') };
};

/**
 * EasyAIPlayer is a modules that contains the logic for the easy AI player
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} EasyAIPlayer
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player
 * @property {function} getType - returns the type of the player (always 'AI')
 * @property {function} getLevel - returns the level of the AI (always 'Easy')
 * @property {function} getNextMove - returns the next move for the AI with a difficulty of easy (random move)
 */
const EasyAIPlayer = (symbol) => {
  const aiPlayer = AIPlayer(symbol, 'Easy');

  /**
   * getNextMove returns the next move for the AI with a difficulty of easy (random move)
   * @param {gameBoard} board - call it with the current board object
   * @returns {Array} nextMove
   */
  const getNextMove = (board) => aiPlayer.getNextMove(board, 0);

  return { ...aiPlayer, getNextMove };
};

/**
 * MediumAIPlayer is a modules that contains the logic for the medium AI player
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} MediumAIPlayer
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player
 * @property {function} getType - returns the type of the player (always 'AI')
 * @property {function} getLevel - returns the level of the AI (always 'Medium')
 * @property {function} getNextMove - returns the next move for the AI with a difficulty of medium (50% chance of best move)
 */
const MediumAIPlayer = (symbol) => {
  const aiPlayer = AIPlayer(symbol, 'Medium');

  /**
   * getNextMove returns the next move for the AI with a difficulty of medium (50% chance of best move)
   * @param {gameBoard} board - call it with the current board object
   * @returns {Array} nextMove
   */
  const getNextMove = (board) => aiPlayer.getNextMove(board, 50);

  return { ...aiPlayer, getNextMove };
};

/**
 * HardAIPlayer is a modules that contains the logic for the hard AI player
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} HardAIPlayer
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player
 * @property {function} getType - returns the type of the player (always 'AI')
 * @property {function} getLevel - returns the level of the AI (always 'Hard')
 * @property {function} getNextMove - returns the next move for the AI with a difficulty of hard (75% chance of best move)
 */
const HardAIPlayer = (symbol) => {
  const aiPlayer = AIPlayer(symbol, 'Hard');

  /**
   * getNextMove returns the next move for the AI with a difficulty of hard (75% chance of best move)
   * @param {gameBoard} board - call it with the current board object
   * @returns {Array} nextMove
   */
  const getNextMove = (board) => aiPlayer.getNextMove(board, 75);

  return { ...aiPlayer, getNextMove };
};

/**
 * UnbeatableAIPlayer is a modules that contains the logic for the unbeatable AI player
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} UnbeatableAIPlayer
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player
 * @property {function} getType - returns the type of the player (always 'AI')
 * @property {function} getLevel - returns the level of the AI (always 'Unbeatable')
 * @property {function} getNextMove - returns the next move for the AI with a difficulty of unbeatable (best move possible)
 */
const UnbeatableAIPlayer = (symbol) => {
  const aiPlayer = AIPlayer(symbol, 'Unbeatable');

  /**
   * getNextMove returns the next move for the AI with a difficulty of unbeatable (best move possible)
   * @param {gameBoard} board - call it with the current board object
   * @returns {Array} nextMove
   * */
  const getNextMove = (board) => aiPlayer.getNextMove(board, 100);

  return { ...aiPlayer, getNextMove };
};

export { EasyAIPlayer, MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer };
