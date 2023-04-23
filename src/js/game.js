import gameBoard from './game-board.js';
import HumanPlayer from './human-player.js';
import {
  EasyAIPlayer,
  MediumAIPlayer,
  HardAIPlayer,
  UnbeatableAIPlayer,
} from './ai-player.js';

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
 * @property {function} switchCurrentPlayer - switches the current player
 * @property {function} resetGame - resets the game
 * @property {function} playAI - plays a round of the game for the AI
 * @property {function} playHuman - plays a round of the game for the human
 * @property {function} startGame - starts the game
 * @property {function} restartGame - restarts the game
 */
const Game = () => {
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
  const playHuman = (cell) => {
    if (gameOver) {
      return;
    }

    play(cell);
  };

  /**
   * startGame starts the game
   * If AI V.S AI, the game begins automatically until game over
   * If AI V.S Human, the game begins with the first player
   * @param {Object} firstPlayer - call it with Player object e.g. { name: 'Player 1', type: 'Human' }
   * @param {Object} secondPlayer - call it with Player object e.g. { type: 'AI', level: 'Easy' }
   */
  const startGame = (firstPlayer, secondPlayer) => {
    resetGame();

    const player1Symbol = 'X';
    const player2Symbol = 'O';

    if (firstPlayer.type === 'AI' && firstPlayer.level === 'easy') {
      setPlayer1(EasyAIPlayer(player1Symbol));
    } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'medium') {
      setPlayer1(MediumAIPlayer(player1Symbol));
    } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'hard') {
      setPlayer1(HardAIPlayer(player1Symbol));
    } else if (
      firstPlayer.type === 'AI' &&
      firstPlayer.level === 'unbeatable'
    ) {
      setPlayer1(UnbeatableAIPlayer(player1Symbol));
    } else {
      setPlayer1(HumanPlayer(firstPlayer.name, player1Symbol));
    }

    if (secondPlayer.type === 'AI' && secondPlayer.level === 'easy') {
      setPlayer2(EasyAIPlayer(player2Symbol));
    } else if (secondPlayer.type === 'AI' && secondPlayer.level === 'medium') {
      setPlayer2(MediumAIPlayer(player2Symbol));
    } else if (secondPlayer.type === 'AI' && secondPlayer.level === 'hard') {
      setPlayer2(HardAIPlayer(player2Symbol));
    } else if (
      secondPlayer.type === 'AI' &&
      secondPlayer.level === 'unbeatable'
    ) {
      setPlayer2(UnbeatableAIPlayer(player2Symbol));
    } else {
      setPlayer2(HumanPlayer(secondPlayer.name, player2Symbol));
    }

    setCurrentPlayer(player1);
  };

  return {
    getGameBoard,
    getPlayer1,
    getPlayer2,
    getCurrentPlayer,
    getWinner,
    checkDraw,
    isGameOver,
    switchCurrentPlayer,
    playHuman,
    playAI,
    startGame,
    resetGame,
  };
};

export default Game();
