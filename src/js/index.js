import gameController from './game-controller.js';
import displayController from './display-controller.js';

function init() {
  gameController.subscribeToEvents();
  displayController.subscribeToEvents();
  displayController.init();
}

init();
