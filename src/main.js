/**
 * Cell is a module that contains a cell object
 * @returns {Object} Cell object
 * @property {function} getValue - returns the value of the cell
 * @property {function} setValue - sets the value of the cell to the given value
 */
const Cell = () => {
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
};

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
const gameBoard = (() => {
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
 * @property {function} getType - returns the type of the player ('Human' or 'AI')
 */
const Player = (name, symbol, type) => {
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

  const getType = () => type;

  return { getName, getSymbol, getType };
};

/**
 * HumanPlayer is a module that contains a human player object (inherits from Player)
 * @param {string} name - call it with the player's name
 * @param {string} symbol - call it with 'X' or 'O'
 * @returns {Object} HumanPlayer object
 * @property {function} getName - returns the name of the player
 * @property {function} getSymbol - returns the symbol of the player ('X' or 'O')
 * @property {function} getType - returns the type of the player ('Human' or 'AI')
 */
const HumanPlayer = (name, symbol) => ({
  ...Player(name, symbol, 'Human'),
});

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

/**
 * gameController is a module that contains the logic for the game
 * @returns {Object} gameController
 * @property {function} getGameBoard - returns the game board
 * @property {function} getPlayer1 - returns player 1 (HumanPlayer, EasyAIPlayer,
 *  MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
 * @property {function} getPlayer2 - returns player 2 (HumanPlayer, EasyAIPlayer,
 * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
 * @property {function} getCurrentPlayer - returns the current player
 * @property {function} isGameOver - returns true if the game is over, false otherwise
 * @property {function} getWinner - returns the winner (null if no winner)
 * @property {function} checkDraw - returns true if the game is a draw, false otherwise
 * @property {function} playRound - plays a round of the game
 * @property {function} startGame - starts the game
 * @property {function} restartGame - restarts the game
 */
const gameController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  let gameOver = false;
  let winner = null;

  /**
   * getGameBoard returns the game board
   * @returns {gameBoard} gameBoard
   */
  const getGameBoard = () => gameBoard;

  /**
   * getPlayer1 returns player 1 (HumanPlayer, EasyAIPlayer,
   * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   * @returns {Object} (HumanPlayer, EasyAIPlayer, MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   */
  const getPlayer1 = () => player1;

  /**
   * setPlayer1 sets player 1 (HumanPlayer, EasyAIPlayer,
   * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   * @param {Object} player - call it with (HumanPlayer, EasyAIPlayer,
   * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   */
  const setPlayer1 = (player) => {
    player1 = player;
  };

  /**
   * getPlayer2 returns player 2 (HumanPlayer, EasyAIPlayer,
   * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   * @returns {Object} (HumanPlayer, EasyAIPlayer, MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   */
  const getPlayer2 = () => player2;

  /**
   * setPlayer2 sets player 2 (HumanPlayer, EasyAIPlayer,
   * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   * @param {Object} player - call it with (HumanPlayer, EasyAIPlayer,
   * MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   */
  const setPlayer2 = (player) => {
    player2 = player;
  };

  /**
   * getCurrentPlayer returns the current player
   * @returns {Object} (HumanPlayer, EasyAIPlayer, MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   */
  const getCurrentPlayer = () => currentPlayer;

  /**
   * setCurrentPlayer sets the current player
   * @param {Object} player - call it with player 1 or player 2
   */
  const setCurrentPlayer = (player) => {
    currentPlayer = player;
  };

  /**
   * isGameOver returns true if the game is over, false otherwise
   * @returns {boolean} gameOver
   */
  const isGameOver = () => gameOver;

  /**
   * setGameOver sets the gameOver variable
   * @param {boolean} value - call it with true or false
   */
  const setGameOver = (value) => {
    gameOver = value;
  };

  /**
   * getWinner returns the winner (null if no winner)
   * @returns {Object} (HumanPlayer, EasyAIPlayer, MediumAIPlayer, HardAIPlayer, UnbeatableAIPlayer)
   * or null
   */
  const getWinner = () => winner;

  /**
   * setWinner sets the winner
   * @param {Object} player - call it with player 1 or player 2
   * or null if no winner
   */
  const setWinner = (player) => {
    winner = player;
  };

  /**
   * checkDraw returns true if the game is a draw, false otherwise
   * @returns {boolean} draw
   */
  const checkDraw = () => gameBoard.checkDraw();

  /**
   * switchCurrentPlayer switches the current player
   */
  const switchCurrentPlayer = () => {
    if (currentPlayer === player1) {
      setCurrentPlayer(player2);
    } else {
      setCurrentPlayer(player1);
    }
  };

  /**
   * resetGame resets the game
   */
  const resetGame = () => {
    gameBoard.reset();
    setGameOver(false);
    setWinner(null);
  };

  /**
   * play plays a round of the game
   * @param {Array} cell - call it with the cell to play (e.g. [0, 0])
   */
  const play = (cell) => {
    if (!cell || cell[0] < 0 || cell[0] > 2 || cell[1] < 0 || cell[1] > 2) {
      console.error(`Invalid cell: ${cell}`);
      return;
    }

    if (gameOver) {
      return;
    }
    if (gameBoard.setCell(cell[0], cell[1], currentPlayer.getSymbol())) {
      if (gameBoard.checkWin()) {
        setWinner(currentPlayer);
        setGameOver(true);
      } else if (gameBoard.checkDraw()) {
        setGameOver(true);
      }
    }
  };

  /**
   * playAI plays a round of the game for the AI
   */
  const playAI = () => {
    if (gameOver) {
      return;
    }

    const nextMove = currentPlayer.getNextMove(gameBoard);
    play(nextMove);
  };

  /**
   * playRound plays a round of the game
   * If the next player is an AI, it will play for the AI
   * @param {Array} cell - call it with the cell to play (e.g. [0, 0])
   */
  const playRound = (cell) => {
    if (gameOver) {
      return;
    }

    play(cell);
    switchCurrentPlayer();
    if (currentPlayer.getType() === 'AI') {
      playAI();
      switchCurrentPlayer();
    }
  };

  /**
   * restartGame restarts the game
   */
  const restartGame = () => {
    resetGame();
    setCurrentPlayer(player1);
    if (currentPlayer.getType() === 'AI') {
      playAI();
    }
  };

  /**
   * startGame starts the game
   * If AI V.S AI, the game begins automatically until game over
   * If AI V.S Human, the game begins with the first player
   * @param {Object} firstPlayer - call it with Player object e.g. { name: 'Player 1', type: 'Human' }
   * @param {Object} secondPlayer - call it with Player object e.g. { name: 'Player 2', type: 'Easy AI' }
   */
  const startGame = (firstPlayer, secondPlayer) => {
    resetGame();

    const player1Symbol = 'X';
    const player2Symbol = 'O';

    if (firstPlayer.type === 'AI' && firstPlayer.level === 'Easy') {
      setPlayer1(EasyAIPlayer(player1Symbol));
    } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'Medium') {
      setPlayer1(MediumAIPlayer(player1Symbol));
    } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'Hard') {
      setPlayer1(HardAIPlayer(player1Symbol));
    } else if (
      firstPlayer.type === 'AI' &&
      firstPlayer.level === 'Unbeatable'
    ) {
      setPlayer1(UnbeatableAIPlayer(player1Symbol));
    } else {
      setPlayer1(HumanPlayer(firstPlayer.name, player1Symbol));
    }

    if (secondPlayer.type === 'AI' && secondPlayer.level === 'Easy') {
      setPlayer2(EasyAIPlayer(player2Symbol));
    } else if (secondPlayer.type === 'AI' && secondPlayer.level === 'Medium') {
      setPlayer2(MediumAIPlayer(player2Symbol));
    } else if (secondPlayer.type === 'AI' && secondPlayer.level === 'Hard') {
      setPlayer2(HardAIPlayer(player2Symbol));
    } else if (
      secondPlayer.type === 'AI' &&
      secondPlayer.level === 'Unbeatable'
    ) {
      setPlayer2(UnbeatableAIPlayer(player2Symbol));
    } else {
      setPlayer2(HumanPlayer(secondPlayer.name, player2Symbol));
    }

    setCurrentPlayer(player1);

    if (player1.getType() === 'AI' && player2.getType() === 'AI') {
      while (!gameOver) {
        playAI();
        switchCurrentPlayer();
      }
    } else if (currentPlayer.getType() === 'AI') {
      playAI();
    }
  };

  return {
    getGameBoard,
    getPlayer1,
    getPlayer2,
    getCurrentPlayer,
    getWinner,
    checkDraw,
    isGameOver,
    playRound,
    startGame,
    restartGame,
  };
})();
