import gameController from './game-controller.js';
import displayController from './display-controller.js';
import '../index.html';
import '../style.css';

function init() {
  gameController.subscribeToEvents();
  displayController.subscribeToEvents();
  displayController.init();
}

init();
