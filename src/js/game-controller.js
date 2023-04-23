import PubSub from './pubsub.js';
import {
  GAME_STARTED,
  GAME_STARTED_AI_VS_AI,
  AI_TURN,
  STATUS_CHANGED,
  BOARD_CHANGED,
  GAME_ENDED,
  CELL_CLICKED,
  GAME_RESTARTED,
  GAME_QUIT,
  POST_CELL_CLICKED,
} from './event-types.js';
import game from './game.js';

const timeoutIdList = [];

const notifyGameChanged = (gameStatus) => {
  PubSub.publish(STATUS_CHANGED, gameStatus);
  PubSub.publish(BOARD_CHANGED, gameStatus);
  if (game.isGameOver()) {
    timeoutIdList.forEach(clearTimeout);
    PubSub.publish(GAME_ENDED, gameStatus);
  }
};

const subscribeToEvents = () => {
  PubSub.subscribe(GAME_STARTED, (players) => {
    game.startGame(players.player1, players.player2);

    const gameStatus = game.getGameStatus();
    PubSub.publish(STATUS_CHANGED, gameStatus);
    PubSub.publish(BOARD_CHANGED, gameStatus);
  });

  PubSub.subscribe(GAME_STARTED_AI_VS_AI, () => {
    let i = 1;
    while (i < 10) {
      const id = setTimeout(() => {
        if (!game.isGameOver()) {
          game.playAI();
          game.switchCurrentPlayer();

          notifyGameChanged(game.getGameStatus());
        }
      }, 2000 * i);
      timeoutIdList.push(id);

      i += 1;
    }
  });

  PubSub.subscribe(AI_TURN, () => {
    if (game.getCurrentPlayer().getType() !== 'AI' || game.isGameOver()) {
      return;
    }

    const id = setTimeout(() => {
      game.playAI();
      game.switchCurrentPlayer();
      notifyGameChanged(game.getGameStatus());
    }, 2000);
    timeoutIdList.push(id);
  });

  PubSub.subscribe(CELL_CLICKED, (cell) => {
    if (game.isGameOver() || game.getCurrentPlayer().getType() === 'AI') {
      return;
    }

    PubSub.publish(POST_CELL_CLICKED, cell.cellDiv);

    const { row, col } = cell;

    game.playHuman([row, col]);
    game.switchCurrentPlayer();

    notifyGameChanged(game.getGameStatus());

    PubSub.publish(AI_TURN);
  });

  PubSub.subscribe(GAME_RESTARTED, () => {
    timeoutIdList.forEach((id) => clearTimeout(id));
  });

  PubSub.subscribe(GAME_QUIT, () => {
    game.resetGame();
    timeoutIdList.forEach((id) => clearTimeout(id));
  });
};

export default { subscribeToEvents };
