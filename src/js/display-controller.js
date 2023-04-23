import PubSub from './pubsub.js';
import {
  BOARD_CHANGED,
  GAME_ENDED,
  GAME_STARTED,
  GAME_STARTED_AI_VS_AI,
  AI_TURN,
  STATUS_CHANGED,
  CELL_CLICKED,
  GAME_RESTARTED,
  GAME_QUIT,
  POST_CELL_CLICKED,
} from './event-types.js';

/* DOM Elements */

const gameInitializerSection = document.querySelector('.game-initializer');

// Player 1
const player1TypeRadios = document.querySelectorAll(
  'input[name="player1-type"]'
);
const player1IconImg = document.querySelector(
  '.player:nth-of-type(1) .player__icon img'
);
const player1NameDiv = document.querySelector(
  '.player:nth-of-type(1) .player__name'
);
const player1NameInput = player1NameDiv.lastElementChild;
const player1AITypeDiv = document.querySelector(
  '.player:nth-of-type(1) .player__ai-type'
);
const player1AILevelSelect = player1AITypeDiv.lastElementChild;

// Player 2
const player2TypeRadios = document.querySelectorAll(
  'input[name="player2-type"]'
);
const player2IconImg = document.querySelector(
  '.player:nth-of-type(2) .player__icon img'
);
const player2NameDiv = document.querySelector(
  '.player:nth-of-type(2) .player__name'
);
const player2NameInput = player2NameDiv.lastElementChild;
const player2AITypeDiv = document.querySelector(
  '.player:nth-of-type(2) .player__ai-type'
);
const player2AILevelSelect = player2AITypeDiv.lastElementChild;

const startGameBtn = document.querySelector('.start-game-btn');

// Game Section
const gameSection = document.querySelector('.game');
const [gameStatusPlayer1Img, gameStatusPlayer2Img] = document.querySelectorAll(
  '.game__status-player-icon img'
);
const [gameStatusPlayer1NameDiv, gameStatusPlayer2NameDiv] =
  document.querySelectorAll('.game__status-player-name');
const gameStatusMessageTurnIconDiv = document.querySelector(
  '.status-message__turn-icon'
);
const gameBoardCellDivs = [...document.querySelectorAll('.game__board-cell')];

// Result Section
const resultModalContainer = document.querySelector('.result-modal-container');

/* Utility Functions */

const setPlayerIcon = (playerIconImg, playerType) => {
  if (playerType === 'AI') {
    playerIconImg.setAttribute('src', './assets/player-ai.svg');
  } else {
    playerIconImg.setAttribute('src', './assets/player-human.svg');
  }
};

const toggleElement = (element) => {
  element.classList.toggle('disabled');
};

const applyTransition = (element) => {
  element.classList.add('clicked');
};

const removeClickedClass = (e) => {
  e.target.classList.remove('clicked');
};

const updateGameStatus = (gameStatus) => {
  const { player1, player2, currentPlayer } = gameStatus;

  setPlayerIcon(gameStatusPlayer1Img, player1.getType());
  setPlayerIcon(gameStatusPlayer2Img, player2.getType());

  gameStatusPlayer1NameDiv.textContent = player1.getName();
  gameStatusPlayer2NameDiv.textContent = player2.getName();

  gameStatusMessageTurnIconDiv.dataset.turn = currentPlayer.getSymbol();
};

const updateGameBoard = (gameStatus) => {
  const { currentPlayer, gameBoard, isGameOver, isDraw, winner } = gameStatus;

  gameBoardCellDivs.forEach((cell) => {
    const parentCell = cell;
    const cellSymbolDiv = parentCell.firstElementChild;
    const row = parseInt(parentCell.dataset.cellRow, 10);
    const col = parseInt(parentCell.dataset.cellCol, 10);
    const LogicalCellValue = gameBoard.getCell(row, col).getValue();

    switch (LogicalCellValue) {
      case '_':
        if (currentPlayer.getType() === 'Human') {
          cellSymbolDiv.dataset.turn = currentPlayer.getSymbol();
        } else {
          cellSymbolDiv.dataset.turn = '';
        }
        cellSymbolDiv.dataset.set = '';
        break;
      case 'X':
        cellSymbolDiv.dataset.turn = '';
        cellSymbolDiv.dataset.set = 'X';
        break;
      case 'O':
        cellSymbolDiv.dataset.turn = '';
        cellSymbolDiv.dataset.set = 'O';
        break;
      default:
        break;
    }

    parentCell.dataset.win = '';
    parentCell.classList.remove('game-over-draw');
  });

  if (isGameOver) {
    if (isDraw) {
      gameBoardCellDivs.forEach((cell) => {
        const parentCell = cell;
        const cellSymbolDiv = parentCell.firstElementChild;
        cellSymbolDiv.dataset.turn = '';

        parentCell.classList.add('game-over-draw');
      });
    } else {
      gameBoardCellDivs.forEach((cell) => {
        const parentCell = cell;
        const cellSymbolDiv = parentCell.firstElementChild;
        cellSymbolDiv.dataset.turn = '';

        const row = parseInt(cell.dataset.cellRow, 10);
        const col = parseInt(cell.dataset.cellCol, 10);
        const winningCells = gameBoard.getWinningCells();
        const isWinningCell = winningCells.some(
          (winningCell) => winningCell[0] === row && winningCell[1] === col
        );

        if (isWinningCell) {
          parentCell.dataset.win = winner.getSymbol();
        }
      });
    }
  }
};

const showGameResult = (gameStatus) => {
  const { isDraw, winner } = gameStatus;

  const resultModalWinnerSymbolDiv = document.querySelector(
    '.result-modal__winner-symbol'
  );
  const resultModalMessageP = document.querySelector(
    '.result-modal__message p'
  );

  if (isDraw) {
    resultModalWinnerSymbolDiv.classList.add('disabled');
    resultModalMessageP.textContent = "It's a draw!";
  } else if (winner) {
    resultModalWinnerSymbolDiv.classList.remove('disabled');
    resultModalMessageP.dataset.winner = winner.getSymbol();
    resultModalWinnerSymbolDiv.dataset.winner = winner.getSymbol();
    resultModalMessageP.textContent = 'Won the game!';
  }
  toggleElement(resultModalContainer);
};

const getPlayerData = (typeRadios, nameInput, aiLevelSelect) => ({
  type: typeRadios[0].checked ? 'Human' : 'AI',
  name: nameInput.value,
  level: aiLevelSelect.value,
});

const startGame = (player1, player2) => {
  PubSub.publish(GAME_STARTED, { player1, player2 });

  if (player1.type === 'AI' && player2.type === 'AI') {
    PubSub.publish(GAME_STARTED_AI_VS_AI);
  } else if (player1.type === 'AI') {
    PubSub.publish(AI_TURN);
  }
};

const restartBtnClickListener = (e) => {
  PubSub.publish(GAME_RESTARTED);

  const player1 = getPlayerData(
    player1TypeRadios,
    player1NameInput,
    player1AILevelSelect
  );

  const player2 = getPlayerData(
    player2TypeRadios,
    player2NameInput,
    player2AILevelSelect
  );

  startGame(player1, player2);
};

const quitBtnClickListener = (e) => {
  PubSub.publish(GAME_QUIT);

  player1NameInput.value = '';
  player2NameInput.value = '';
};

const handleGameInitializerSection = () => {
  const handlePlayerTypeChange = (
    playerTypeRadios,
    playerIconImg,
    playerNameDiv,
    playerAITypeDiv
  ) => {
    [...playerTypeRadios].forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          if (radio.value === 'AI') {
            setPlayerIcon(playerIconImg, 'AI');
          } else {
            setPlayerIcon(playerIconImg, 'Human');
          }

          toggleElement(playerNameDiv);
          toggleElement(playerAITypeDiv);

          playerNameDiv.lastElementChild.toggleAttribute('required');
        }
      });
    });
  };

  const startGameBtnListener = (e) => {
    e.preventDefault();

    const player1 = getPlayerData(
      player1TypeRadios,
      player1NameInput,
      player1AILevelSelect
    );

    const player2 = getPlayerData(
      player2TypeRadios,
      player2NameInput,
      player2AILevelSelect
    );

    if (player1.type === 'Human' && player1.name === '') {
      player1NameInput.classList.add('invalid');
      if (player2.type === 'Human' && player2.name === '') {
        player2NameInput.classList.add('invalid');
      }
      return;
    }

    if (player2.type === 'Human' && player2.name === '') {
      player2NameInput.classList.add('invalid');

      if (player1.type === 'Human' && player1.name === '') {
        player1NameInput.classList.add('invalid');
      }
      return;
    }

    applyTransition(e.target);
    startGame(player1, player2);
  };

  handlePlayerTypeChange(
    player1TypeRadios,
    player1IconImg,
    player1NameDiv,
    player1AITypeDiv
  );
  handlePlayerTypeChange(
    player2TypeRadios,
    player2IconImg,
    player2NameDiv,
    player2AITypeDiv
  );

  /* Event Listeners */

  player1NameInput.addEventListener('input', (e) => {
    e.target.classList.remove('invalid');
  });
  player2NameInput.addEventListener('input', (e) => {
    e.target.classList.remove('invalid');
  });

  startGameBtn.addEventListener('click', startGameBtnListener);
  startGameBtn.addEventListener('transitionend', (e) => {
    removeClickedClass(e);
    setTimeout(() => {
      gameInitializerSection.classList.add('disabled');
      gameSection.classList.remove('disabled');
    }, 300);
  });
};

const handleGameSection = () => {
  const restartBtn = document.querySelector('.game__restart-btn');
  const quitBtn = document.querySelector('.game__quit-btn');

  const cellClickListener = (e) => {
    if (e.target.parentElement.classList.contains('clicked')) {
      return;
    }

    const row = e.target.parentElement.dataset.cellRow;
    const col = e.target.parentElement.dataset.cellCol;

    PubSub.publish(CELL_CLICKED, { row, col, cellDiv: e.target.parentElement });
  };

  /* Event listeners */
  gameBoardCellDivs.forEach((cell) => {
    cell.addEventListener('click', cellClickListener);
    cell.addEventListener('transitionend', removeClickedClass);
  });

  restartBtn.addEventListener('click', () => {
    applyTransition(restartBtn);
    restartBtnClickListener();
  });
  restartBtn.addEventListener('transitionend', (e) => {
    removeClickedClass(e);
  });

  quitBtn.addEventListener('click', () => {
    applyTransition(quitBtn);
    quitBtnClickListener();
  });
  quitBtn.addEventListener('transitionend', (e) => {
    removeClickedClass(e);
    setTimeout(() => {
      gameSection.classList.add('disabled');
      gameInitializerSection.classList.remove('disabled');
    }, 300);
  });
};

const handleResultSection = () => {
  const restartBtn = document.querySelector('.result-modal__restart-btn');
  const quitBtn = document.querySelector('.result-modal__quit-btn');
  const closeBtn = document.querySelector('.result-modal__close-btn');

  /* Event listeners */
  restartBtn.addEventListener('click', (e) => {
    applyTransition(e.target);
    restartBtnClickListener();
  });
  restartBtn.addEventListener('transitionend', (e) => {
    removeClickedClass(e);
    setTimeout(() => {
      resultModalContainer.classList.add('disabled');
    }, 300);
  });
  quitBtn.addEventListener('click', (e) => {
    applyTransition(e.target);
    quitBtnClickListener();
  });
  quitBtn.addEventListener('transitionend', (e) => {
    removeClickedClass(e);
    setTimeout(() => {
      resultModalContainer.classList.add('disabled');
      gameSection.classList.add('disabled');
      gameInitializerSection.classList.remove('disabled');
    }, 300);
  });
  closeBtn.addEventListener('click', () => {
    resultModalContainer.classList.add('disabled');
  });
};

const init = () => {
  handleGameInitializerSection();
  handleGameSection();
  handleResultSection();
};

const subscribeToEvents = () => {
  PubSub.subscribe(POST_CELL_CLICKED, applyTransition);
  PubSub.subscribe(STATUS_CHANGED, updateGameStatus);
  PubSub.subscribe(BOARD_CHANGED, updateGameBoard);
  PubSub.subscribe(GAME_ENDED, (gameStatus) => {
    setTimeout(() => {
      showGameResult(gameStatus);
    }, 1000);
  });
};

export default {
  init,
  subscribeToEvents,
};
