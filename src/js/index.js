import gameController from './game-controller.js';
import displayController from './display-controller.js';
import '../index.html';
import '../style.css';

function init() {
  window.addEventListener('load', () => {
    document.querySelector('body').classList.remove('preload');
  });

  gameController.subscribeToEvents();
  displayController.subscribeToEvents();
  displayController.init();
}

init();
