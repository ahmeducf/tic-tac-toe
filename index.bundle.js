"use strict";
(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/outfit.ttf */ "./src/fonts/outfit.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-x.svg */ "./src/assets/icon-x.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-o.svg */ "./src/assets/icon-o.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-x-outline.svg */ "./src/assets/icon-x-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-o-outline.svg */ "./src/assets/icon-o-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-x-transparent.svg */ "./src/assets/icon-x-transparent.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-o-transparent.svg */ "./src/assets/icon-o-transparent.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Importing fonts */\n@font-face {\n  font-family: 'Outfit';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Variables */\n:root {\n  --primary: #1a2b33;\n  --secondary: #1e3640;\n  --grey: #a9bec8;\n  --dark-grey: #5c6b73;\n  --dark-cyan: #34c3be;\n  --lighten-yellow: #f2b138;\n  --white: #fffbfb;\n}\n\n/* Global styles */\nhtml {\n  box-sizing: border-box;\n  font-family: 'Outfit', system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  min-height: 100vh;\n  background-color: var(--primary);\n  text-transform: uppercase;\n}\n\n*,\n*::before,\n*::after {\n  /* CSS Reset */\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  /* Disable text selection */\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Catch errors */\n  font-family: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nheader {\n  width: 85%;\n  height: 100px;\n}\n\nbutton {\n  color: var(--primary);\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: inset 0 -3px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n\n/*** Game ***/\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n/* Game Header */\n\n.game header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n}\n\n/* Game Actions */\n\n.game__actions {\n  position: fixed;\n  right: 40px;\n  top: 32px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.game__restart-btn,\n.game__quit-btn {\n  width: 50px;\n  height: 50px;\n  background-color: var(--grey);\n  transition: all 0.3 ease;\n}\n\n.game__restart-btn img,\n.game__quit-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Game Status */\n\n.game__status {\n  grid-column: 1 / -1;\n  grid-row: 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  gap: 30px;\n  color: var(--grey);\n  border: 1px solid var(--secondary);\n}\n\n/* Game Status Player */\n\n.game__status-player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--secondary);\n}\n\n.game__status-player-id {\n  flex: 1;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  padding: 10px;\n  width: 162px;\n  word-wrap: break-word;\n}\n\n.game__status-player-symbol img {\n  width: 15px;\n  height: 15px;\n}\n\n.game__status-player-name {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: -3px;\n  overflow: auto;\n}\n\n.game__status-player-icon {\n  grid-column: 1 / -1;\n}\n\n.game__status-player-icon img {\n  width: 80px;\n  height: 80px;\n}\n\n/* Game Status Message */\n\n.game__status-message {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding: 10px 100px;\n}\n\n.status-message__turn-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.status-message__turn-icon[data-turn='X'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / 100%;\n}\n\n.status-message__turn-icon[data-turn='O'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center / 100%;\n}\n\n/* Game Board */\n\n.game main {\n  grid-column: 1 / 2;\n  grid-row: 3 / -1;\n  margin: 30px 0;\n}\n\n.game__board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 30px;\n  justify-items: center;\n  align-items: center;\n}\n\n.game__board-cell {\n  width: 120px;\n  height: 120px;\n  background-color: var(--secondary);\n  outline: 2px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.game__board-cell[data-win='X'] {\n  background-color: var(--dark-cyan);\n}\n\n.game__board-cell[data-win='O'] {\n  background-color: var(--lighten-yellow);\n}\n\n.game-over-draw {\n  background-color: var(--dark-grey);\n}\n\n.game__board-cell .cell-symbol {\n  width: 100%;\n  height: 100%;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.5s ease;\n}\n\n.game__board-cell .cell-symbol[data-set='X'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.game__board-cell .cell-symbol[data-set='O'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.game__board-cell .cell-symbol[data-turn='X']:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.game__board-cell .cell-symbol[data-turn='O']:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.game__board-cell[data-win='X'] .cell-symbol[data-set='X'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.game__board-cell[data-win='O'] .cell-symbol[data-set='O'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n/*** Game-Initializer ***/\n\n.game-initializer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Game-Initializer Header */\n\n.game-initializer header {\n  width: 85%;\n  height: 100px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.game-initializer main {\n  width: 70%;\n}\n\n/* Game-Initializer Options */\n\n.game-initializer__options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 500px));\n  grid-gap: 20px;\n  justify-items: center;\n  justify-content: center;\n  align-content: center;\n}\n\n/* Game Initializer Player */\n\n.game-initializer__options .player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding-bottom: 20px;\n}\n\n/* Options Player Symbol */\n\n.player .player__symbol {\n  width: 100%;\n  background-color: var(--secondary);\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.player__symbol img {\n  width: 40px;\n}\n\n/* Options Player Icon */\n\n.player .player__icon {\n  margin-top: 10px;\n}\n\n/* Options Player Type-Selector */\n\n.player__type-selector {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  justify-items: center;\n  align-items: center;\n  width: 60%;\n  height: 50px;\n  border-radius: 5px;\n  background: var(--secondary);\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.player__type-selector input[type='radio'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  position: absolute;\n  width: 50%;\n  height: 100%;\n}\n\n.player__type-selector input[type='radio']:first-of-type {\n  left: 0;\n}\n\n.player__type-selector input[type='radio']:last-of-type {\n  right: 0;\n}\n\n.player__type-selector label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--grey);\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-style: italic;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  padding: 10px;\n  transition: all 0.3s ease;\n}\n\n.player__type-selector input[type='radio']:checked + label {\n  background-color: var(--grey);\n  color: var(--primary);\n}\n\n/* Options Player Player-Name */\n/* Options Player AI-Type */\n\n.player__name,\n.player__ai-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.player__name input[type='text'],\n.player__ai-type select {\n  width: 60%;\n  height: 40px;\n  padding: 5px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  outline: none;\n  color: var(--primary);\n  background-color: var(--grey);\n  border: none;\n  border-radius: 5px;\n}\n\n.player__name label,\n.player__ai-type label {\n  border: 0;\n  clip-path: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip-path: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.player__name input[type='text'] {\n  transition: all 0.3s ease;\n}\n\n.player__name input[type='text']::placeholder {\n  color: var(--primary);\n  opacity: 0.5;\n  text-transform: none;\n  font-weight: 400;\n}\n\n.player__name input[type='text'].invalid::placeholder {\n  color: var(--white);\n}\n\n/* Options Start-Game */\n\n.game-initializer__start {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.start-game-btn {\n  width: 35%;\n  height: 64px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 700;\n}\n\n/* Result-Modal */\n\n.result-modal-container {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.result-modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  text-align: center;\n  padding: 40px 0;\n  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.3);\n  width: 100%;\n}\n\n.result-modal__content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: clamp(300px, 50%, 500px);\n}\n\n/* Result-Modal Header */\n\n.result-modal__header {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.result-modal__title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--grey);\n}\n\n.result-modal__close-btn {\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  background-color: transparent;\n  box-shadow: none;\n  transition: all 0.3s ease;\n}\n\n.result-modal__close-btn:hover {\n  transform: scale(1.1);\n}\n\n.result-modal__close-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Result-Modal Body */\n\n.result-modal__message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  color: var(--grey);\n}\n\n.result-modal__message[data-winner='X'] {\n  color: var(--dark-cyan);\n}\n\n.result-modal__message[data-winner='O'] {\n  color: var(--lighten-yellow);\n}\n\n.result-modal__winner-symbol {\n  width: 45px;\n  height: 45px;\n}\n\n.result-modal__winner-symbol[data-winner='X'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / 100%;\n}\n\n.result-modal__winner-symbol[data-winner='O'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center / 100%;\n}\n\n/* Result-Modal Footer */\n\n.result-modal__footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding-top: 26px;\n}\n\n.result-modal__restart-btn,\n.result-modal__quit-btn {\n  width: 50%;\n  height: 56px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 600;\n}\n\n.result-modal__restart-btn {\n  background-color: var(--lighten-yellow);\n}\n\n.result-modal__quit-btn {\n  background-color: var(--grey);\n}\n\n/*** Misc ***/\n\n/* Used to hide elements via JavaScript */\n.disabled {\n  display: none;\n}\n\n.clicked {\n  transform: scale(0.95) translateY(5px);\n  box-shadow: 0 0 0, inset 0 2px 10px rgba(0, 0, 0, 0.4);\n  filter: brightness(1.2);\n}\n\n.invalid {\n  border: 2px solid #b92326 !important;\n  background-color: rgba(185, 35, 38, 0.2) !important;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Importing fonts */\n@font-face {\n  font-family: 'Outfit';\n  src: url('./fonts/outfit.ttf');\n}\n\n/* Variables */\n:root {\n  --primary: #1a2b33;\n  --secondary: #1e3640;\n  --grey: #a9bec8;\n  --dark-grey: #5c6b73;\n  --dark-cyan: #34c3be;\n  --lighten-yellow: #f2b138;\n  --white: #fffbfb;\n}\n\n/* Global styles */\nhtml {\n  box-sizing: border-box;\n  font-family: 'Outfit', system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  min-height: 100vh;\n  background-color: var(--primary);\n  text-transform: uppercase;\n}\n\n*,\n*::before,\n*::after {\n  /* CSS Reset */\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  /* Disable text selection */\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Catch errors */\n  font-family: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nheader {\n  width: 85%;\n  height: 100px;\n}\n\nbutton {\n  color: var(--primary);\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: inset 0 -3px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n\n/*** Game ***/\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n/* Game Header */\n\n.game header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n}\n\n/* Game Actions */\n\n.game__actions {\n  position: fixed;\n  right: 40px;\n  top: 32px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.game__restart-btn,\n.game__quit-btn {\n  width: 50px;\n  height: 50px;\n  background-color: var(--grey);\n  transition: all 0.3 ease;\n}\n\n.game__restart-btn img,\n.game__quit-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Game Status */\n\n.game__status {\n  grid-column: 1 / -1;\n  grid-row: 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  gap: 30px;\n  color: var(--grey);\n  border: 1px solid var(--secondary);\n}\n\n/* Game Status Player */\n\n.game__status-player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--secondary);\n}\n\n.game__status-player-id {\n  flex: 1;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  padding: 10px;\n  width: 162px;\n  word-wrap: break-word;\n}\n\n.game__status-player-symbol img {\n  width: 15px;\n  height: 15px;\n}\n\n.game__status-player-name {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: -3px;\n  overflow: auto;\n}\n\n.game__status-player-icon {\n  grid-column: 1 / -1;\n}\n\n.game__status-player-icon img {\n  width: 80px;\n  height: 80px;\n}\n\n/* Game Status Message */\n\n.game__status-message {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding: 10px 100px;\n}\n\n.status-message__turn-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.status-message__turn-icon[data-turn='X'] {\n  background: url(./assets/icon-x.svg) no-repeat center / 100%;\n}\n\n.status-message__turn-icon[data-turn='O'] {\n  background: url(./assets/icon-o.svg) no-repeat center / 100%;\n}\n\n/* Game Board */\n\n.game main {\n  grid-column: 1 / 2;\n  grid-row: 3 / -1;\n  margin: 30px 0;\n}\n\n.game__board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 30px;\n  justify-items: center;\n  align-items: center;\n}\n\n.game__board-cell {\n  width: 120px;\n  height: 120px;\n  background-color: var(--secondary);\n  outline: 2px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.game__board-cell[data-win='X'] {\n  background-color: var(--dark-cyan);\n}\n\n.game__board-cell[data-win='O'] {\n  background-color: var(--lighten-yellow);\n}\n\n.game-over-draw {\n  background-color: var(--dark-grey);\n}\n\n.game__board-cell .cell-symbol {\n  width: 100%;\n  height: 100%;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.5s ease;\n}\n\n.game__board-cell .cell-symbol[data-set='X'] {\n  background-image: url(./assets/icon-x.svg);\n}\n\n.game__board-cell .cell-symbol[data-set='O'] {\n  background-image: url(./assets/icon-o.svg);\n}\n\n.game__board-cell .cell-symbol[data-turn='X']:hover {\n  background-image: url(./assets/icon-x-outline.svg);\n}\n\n.game__board-cell .cell-symbol[data-turn='O']:hover {\n  background-image: url(./assets/icon-o-outline.svg);\n}\n\n.game__board-cell[data-win='X'] .cell-symbol[data-set='X'] {\n  background-image: url(./assets/icon-x-transparent.svg);\n}\n\n.game__board-cell[data-win='O'] .cell-symbol[data-set='O'] {\n  background-image: url(./assets/icon-o-transparent.svg);\n}\n\n/*** Game-Initializer ***/\n\n.game-initializer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Game-Initializer Header */\n\n.game-initializer header {\n  width: 85%;\n  height: 100px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.game-initializer main {\n  width: 70%;\n}\n\n/* Game-Initializer Options */\n\n.game-initializer__options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 500px));\n  grid-gap: 20px;\n  justify-items: center;\n  justify-content: center;\n  align-content: center;\n}\n\n/* Game Initializer Player */\n\n.game-initializer__options .player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding-bottom: 20px;\n}\n\n/* Options Player Symbol */\n\n.player .player__symbol {\n  width: 100%;\n  background-color: var(--secondary);\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.player__symbol img {\n  width: 40px;\n}\n\n/* Options Player Icon */\n\n.player .player__icon {\n  margin-top: 10px;\n}\n\n/* Options Player Type-Selector */\n\n.player__type-selector {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  justify-items: center;\n  align-items: center;\n  width: 60%;\n  height: 50px;\n  border-radius: 5px;\n  background: var(--secondary);\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.player__type-selector input[type='radio'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  position: absolute;\n  width: 50%;\n  height: 100%;\n}\n\n.player__type-selector input[type='radio']:first-of-type {\n  left: 0;\n}\n\n.player__type-selector input[type='radio']:last-of-type {\n  right: 0;\n}\n\n.player__type-selector label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--grey);\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-style: italic;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  padding: 10px;\n  transition: all 0.3s ease;\n}\n\n.player__type-selector input[type='radio']:checked + label {\n  background-color: var(--grey);\n  color: var(--primary);\n}\n\n/* Options Player Player-Name */\n/* Options Player AI-Type */\n\n.player__name,\n.player__ai-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.player__name input[type='text'],\n.player__ai-type select {\n  width: 60%;\n  height: 40px;\n  padding: 5px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  outline: none;\n  color: var(--primary);\n  background-color: var(--grey);\n  border: none;\n  border-radius: 5px;\n}\n\n.player__name label,\n.player__ai-type label {\n  border: 0;\n  clip-path: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip-path: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.player__name input[type='text'] {\n  transition: all 0.3s ease;\n}\n\n.player__name input[type='text']::placeholder {\n  color: var(--primary);\n  opacity: 0.5;\n  text-transform: none;\n  font-weight: 400;\n}\n\n.player__name input[type='text'].invalid::placeholder {\n  color: var(--white);\n}\n\n/* Options Start-Game */\n\n.game-initializer__start {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.start-game-btn {\n  width: 35%;\n  height: 64px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 700;\n}\n\n/* Result-Modal */\n\n.result-modal-container {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.result-modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  text-align: center;\n  padding: 40px 0;\n  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.3);\n  width: 100%;\n}\n\n.result-modal__content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: clamp(300px, 50%, 500px);\n}\n\n/* Result-Modal Header */\n\n.result-modal__header {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.result-modal__title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--grey);\n}\n\n.result-modal__close-btn {\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  background-color: transparent;\n  box-shadow: none;\n  transition: all 0.3s ease;\n}\n\n.result-modal__close-btn:hover {\n  transform: scale(1.1);\n}\n\n.result-modal__close-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Result-Modal Body */\n\n.result-modal__message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  color: var(--grey);\n}\n\n.result-modal__message[data-winner='X'] {\n  color: var(--dark-cyan);\n}\n\n.result-modal__message[data-winner='O'] {\n  color: var(--lighten-yellow);\n}\n\n.result-modal__winner-symbol {\n  width: 45px;\n  height: 45px;\n}\n\n.result-modal__winner-symbol[data-winner='X'] {\n  background: url(./assets/icon-x.svg) no-repeat center / 100%;\n}\n\n.result-modal__winner-symbol[data-winner='O'] {\n  background: url(./assets/icon-o.svg) no-repeat center / 100%;\n}\n\n/* Result-Modal Footer */\n\n.result-modal__footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding-top: 26px;\n}\n\n.result-modal__restart-btn,\n.result-modal__quit-btn {\n  width: 50%;\n  height: 56px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 600;\n}\n\n.result-modal__restart-btn {\n  background-color: var(--lighten-yellow);\n}\n\n.result-modal__quit-btn {\n  background-color: var(--grey);\n}\n\n/*** Misc ***/\n\n/* Used to hide elements via JavaScript */\n.disabled {\n  display: none;\n}\n\n.clicked {\n  transform: scale(0.95) translateY(5px);\n  box-shadow: 0 0 0, inset 0 2px 10px rgba(0, 0, 0, 0.4);\n  filter: brightness(1.2);\n}\n\n.invalid {\n  border: 2px solid #b92326 !important;\n  background-color: rgba(185, 35, 38, 0.2) !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/apple-touch-icon.png */ "./src/assets/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon-32x32.png */ "./src/assets/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon-16x16.png */ "./src/assets/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/site.webmanifest */ "./src/assets/site.webmanifest"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-restart.svg */ "./src/assets/icon-restart.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-quit.svg */ "./src/assets/icon-quit.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-x.svg */ "./src/assets/icon-x.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/player-human.svg */ "./src/assets/player-human.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-o.svg */ "./src/assets/icon-o.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/player-ai.svg */ "./src/assets/player-ai.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-x-gray.svg */ "./src/assets/icon-x-gray.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-o-gray.svg */ "./src/assets/icon-o-gray.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon-close.svg */ "./src/assets/icon-close.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta name=\"theme-color\" content=\"#1A2B33\" />\n    <meta name=\"msapplication-navbutton-color\" content=\"#1A2B33\" />\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#1A2B33\" />\n    <meta name=\"description\" content=\"Tic Tac Toe\" />\n    <meta name=\"keywords\" content=\"Tic Tac Toe\" />\n    <meta name=\"author\" content=\"Ahmed Salah\" />\n    <link\n      rel=\"apple-touch-icon\"\n      sizes=\"180x180\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"32x32\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"16x16\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n    />\n    <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" />\n    <title><%= htmlWebpackPlugin.options.title %></title>\n  </head>\n  <body>\n    <section class=\"disabled game\">\n      <header>\n        <div class=\"logo\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Tic Tac Toe\" />\n        </div>\n      </header>\n\n      <div class=\"game__actions\">\n        <button class=\"game__restart-btn\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Restart Game\" />\n        </button>\n        <button class=\"game__quit-btn\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Quit Game\" />\n        </button>\n      </div>\n\n      <div class=\"game__status\">\n        <div class=\"game__status-player\">\n          <div class=\"game__status-player-id\">\n            <div class=\"game__status-player-symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"X\" />\n            </div>\n            <div class=\"game__status-player-name\">Player 1</div>\n          </div>\n          <div class=\"game__status-player-icon\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Human Player\" />\n          </div>\n        </div>\n\n        <div class=\"game__status-message\">\n          <div class=\"status-message__turn-icon\" data-turn=\"\"></div>\n          <p class=\"status-message__text\">Turn</p>\n        </div>\n\n        <div class=\"game__status-player\">\n          <div class=\"game__status-player-id\">\n            <div class=\"game__status-player-symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"O\" />\n            </div>\n            <div class=\"game__status-player-name\">Player 2</div>\n          </div>\n          <div class=\"game__status-player-icon\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"AI Player\" />\n          </div>\n        </div>\n      </div>\n\n      <main>\n        <div class=\"game__board\">\n          <button class=\"game__board-cell\" data-cell-row=\"0\" data-cell-col=\"0\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"0\" data-cell-col=\"1\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"0\" data-cell-col=\"2\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"1\" data-cell-col=\"0\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"1\" data-cell-col=\"1\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"1\" data-cell-col=\"2\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"2\" data-cell-col=\"0\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"2\" data-cell-col=\"1\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"2\" data-cell-col=\"2\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n        </div>\n      </main>\n    </section>\n\n    <section class=\"game-initializer\">\n      <header>\n        <div class=\"logo\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Tic Tac Toe\" />\n        </div>\n      </header>\n      <main>\n        <form class=\"game-initializer__options\">\n          <div class=\"player\">\n            <div class=\"player__symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"X\" />\n            </div>\n            <div class=\"player__icon\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Human Player\" />\n            </div>\n            <div class=\"player__type-selector\">\n              <input\n                type=\"radio\"\n                name=\"player1-type\"\n                id=\"player1-human\"\n                value=\"human\"\n                checked\n              />\n              <label for=\"player1-human\">Human</label>\n              <input\n                type=\"radio\"\n                name=\"player1-type\"\n                id=\"player1-ai\"\n                value=\"AI\"\n              />\n              <label for=\"player1-ai\">AI</label>\n            </div>\n            <div class=\"player__name\">\n              <label for=\"player1-name\">Player Name</label>\n              <input\n                type=\"text\"\n                id=\"player1-name\"\n                placeholder=\"Enter player name ...\"\n                required\n                autocomplete=\"off\"\n              />\n            </div>\n            <div class=\"disabled player__ai-type\">\n              <label for=\"ai1-type\">AI Type</label>\n              <select name=\"player__ai-type\" id=\"ai1-type\">\n                <option value=\"easy\">Easy</option>\n                <option value=\"medium\">Medium</option>\n                <option value=\"hard\">Hard</option>\n                <option value=\"unbeatable\">Unbeatable</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"player\">\n            <div class=\"player__symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"O\" />\n            </div>\n            <div class=\"player__icon\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"AI Player\" />\n            </div>\n            <div class=\"player__type-selector\">\n              <input\n                type=\"radio\"\n                name=\"player2-type\"\n                id=\"player2-human\"\n                value=\"Human\"\n              />\n              <label for=\"player2-human\">Human</label>\n              <input\n                type=\"radio\"\n                name=\"player2-type\"\n                id=\"player2-ai\"\n                value=\"AI\"\n                checked\n              />\n              <label for=\"player2-ai\">AI</label>\n            </div>\n            <div class=\"disabled player__name\">\n              <label for=\"player2-name\">Player Name</label>\n              <input\n                type=\"text\"\n                id=\"player2-name\"\n                placeholder=\"Enter player name ...\"\n                autocomplete=\"off\"\n              />\n            </div>\n            <div class=\"player__ai-type\">\n              <label for=\"ai2-type\">AI Type</label>\n              <select name=\"player__ai-type\" id=\"ai2-type\" required>\n                <option value=\"easy\">Easy</option>\n                <option value=\"medium\">Medium</option>\n                <option value=\"hard\">Hard</option>\n                <option value=\"unbeatable\">Unbeatable</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"game-initializer__start\">\n            <button class=\"start-game-btn\">Start Game</button>\n          </div>\n        </form>\n      </main>\n    </section>\n\n    <div class=\"disabled result-modal-container\">\n      <section class=\"result-modal\">\n        <div class=\"result-modal__content\">\n          <div class=\"result-modal__header\">\n            <h2 class=\"result-modal__title\">Game Over</h2>\n            <button class=\"result-modal__close-btn\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Close\" />\n            </button>\n          </div>\n\n          <div class=\"result-modal__body\">\n            <div class=\"result-modal__message\" data-winner=\"\">\n              <div class=\"result-modal__winner-symbol\" data-winner=\"\"></div>\n              <p></p>\n            </div>\n          </div>\n\n          <div class=\"result-modal__footer\">\n            <button class=\"result-modal__restart-btn\">Play Again</button>\n            <button class=\"result-modal__quit-btn\">Quit</button>\n          </div>\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/ai-player.js":
/*!*****************************!*\
  !*** ./src/js/ai-player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EasyAIPlayer": () => (/* binding */ EasyAIPlayer),
/* harmony export */   "HardAIPlayer": () => (/* binding */ HardAIPlayer),
/* harmony export */   "MediumAIPlayer": () => (/* binding */ MediumAIPlayer),
/* harmony export */   "UnbeatableAIPlayer": () => (/* binding */ UnbeatableAIPlayer)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/js/player.js");


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

  return { getLevel, getNextMove, ...(0,_player_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name, symbol, 'AI') };
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




/***/ }),

/***/ "./src/js/cell.js":
/*!************************!*\
  !*** ./src/js/cell.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/js/display-controller.js":
/*!**************************************!*\
  !*** ./src/js/display-controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/js/pubsub.js");
/* harmony import */ var _event_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-types.js */ "./src/js/event-types.js");



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
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_STARTED, { player1, player2 });

  if (player1.type === 'AI' && player2.type === 'AI') {
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_STARTED_AI_VS_AI);
  } else if (player1.type === 'AI') {
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.AI_TURN);
  }
};

const restartBtnClickListener = (e) => {
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_RESTARTED);

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
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_QUIT);

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

    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.CELL_CLICKED, { row, col, cellDiv: e.target.parentElement });
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
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.POST_CELL_CLICKED, applyTransition);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.STATUS_CHANGED, updateGameStatus);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.BOARD_CHANGED, updateGameBoard);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_ENDED, (gameStatus) => {
    setTimeout(() => {
      showGameResult(gameStatus);
    }, 1000);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init,
  subscribeToEvents,
});


/***/ }),

/***/ "./src/js/event-types.js":
/*!*******************************!*\
  !*** ./src/js/event-types.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI_TURN": () => (/* binding */ AI_TURN),
/* harmony export */   "BOARD_CHANGED": () => (/* binding */ BOARD_CHANGED),
/* harmony export */   "CELL_CLICKED": () => (/* binding */ CELL_CLICKED),
/* harmony export */   "GAME_ENDED": () => (/* binding */ GAME_ENDED),
/* harmony export */   "GAME_QUIT": () => (/* binding */ GAME_QUIT),
/* harmony export */   "GAME_RESTARTED": () => (/* binding */ GAME_RESTARTED),
/* harmony export */   "GAME_STARTED": () => (/* binding */ GAME_STARTED),
/* harmony export */   "GAME_STARTED_AI_VS_AI": () => (/* binding */ GAME_STARTED_AI_VS_AI),
/* harmony export */   "POST_CELL_CLICKED": () => (/* binding */ POST_CELL_CLICKED),
/* harmony export */   "STATUS_CHANGED": () => (/* binding */ STATUS_CHANGED)
/* harmony export */ });
const GAME_STARTED = Symbol('GAME_STARTED');
const GAME_STARTED_AI_VS_AI = Symbol('GAME_STARTED_AI_VS_AI');
const GAME_RESTARTED = Symbol('GAME_RESTARTED');
const GAME_QUIT = Symbol('GAME_QUIT');
const GAME_ENDED = Symbol('GAME_ENDED');
const AI_TURN = Symbol('AI_TURN');
const STATUS_CHANGED = Symbol('STATUS_CHANGED');
const BOARD_CHANGED = Symbol('BOARD_CHANGED');
const CELL_CLICKED = Symbol('CELL_CLICKED');
const POST_CELL_CLICKED = Symbol('POST_CELL_CLICKED');


/***/ }),

/***/ "./src/js/game-board.js":
/*!******************************!*\
  !*** ./src/js/game-board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.js */ "./src/js/cell.js");


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
const GameBoard = () => {
  // board is a 3x3 array of cells
  const board = [[], [], []];

  /**
   * reset resets the board to all empty cells
   */
  const reset = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = (0,_cell_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
   * getWinningCells returns an array of the indices of the winning cells
   * @returns {Array} winningCells
   */
  const getWinningCells = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0].getValue() === board[i][1].getValue() &&
        board[i][1].getValue() === board[i][2].getValue() &&
        board[i][0].getValue() !== '_'
      ) {
        return [
          [i, 0],
          [i, 1],
          [i, 2],
        ];
      }
      if (
        board[0][i].getValue() === board[1][i].getValue() &&
        board[1][i].getValue() === board[2][i].getValue() &&
        board[0][i].getValue() !== '_'
      ) {
        return [
          [0, i],
          [1, i],
          [2, i],
        ];
      }
    }
    if (
      board[0][0].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][2].getValue() &&
      board[0][0].getValue() !== '_'
    ) {
      return [
        [0, 0],
        [1, 1],
        [2, 2],
      ];
    }
    if (
      board[0][2].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][0].getValue() &&
      board[0][2].getValue() !== '_'
    ) {
      return [
        [0, 2],
        [1, 1],
        [2, 0],
      ];
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
    getWinningCells,
    printBoard,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard());


/***/ }),

/***/ "./src/js/game-controller.js":
/*!***********************************!*\
  !*** ./src/js/game-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/js/pubsub.js");
/* harmony import */ var _event_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-types.js */ "./src/js/event-types.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/js/game.js");




const timeoutIdList = [];

const notifyGameChanged = (gameStatus) => {
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.STATUS_CHANGED, gameStatus);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.BOARD_CHANGED, gameStatus);
  if (_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].isGameOver()) {
    timeoutIdList.forEach(clearTimeout);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_ENDED, gameStatus);
  }
};

const subscribeToEvents = () => {
  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_STARTED, (players) => {
    _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].startGame(players.player1, players.player2);

    const gameStatus = _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].getGameStatus();
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.STATUS_CHANGED, gameStatus);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.BOARD_CHANGED, gameStatus);
  });

  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_STARTED_AI_VS_AI, () => {
    let i = 1;
    while (i < 10) {
      const id = setTimeout(() => {
        if (!_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].isGameOver()) {
          _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].playAI();
          _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].switchCurrentPlayer();

          notifyGameChanged(_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].getGameStatus());
        }
      }, 2000 * i);
      timeoutIdList.push(id);

      i += 1;
    }
  });

  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.AI_TURN, () => {
    if (_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentPlayer().getType() !== 'AI' || _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].isGameOver()) {
      return;
    }

    const id = setTimeout(() => {
      _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].playAI();
      _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].switchCurrentPlayer();
      notifyGameChanged(_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].getGameStatus());
    }, 2000);
    timeoutIdList.push(id);
  });

  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.CELL_CLICKED, (cell) => {
    if (_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].isGameOver() || _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentPlayer().getType() === 'AI') {
      return;
    }

    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.POST_CELL_CLICKED, cell.cellDiv);

    const { row, col } = cell;

    _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].playHuman([row, col]);
    _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].switchCurrentPlayer();

    notifyGameChanged(_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].getGameStatus());

    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.AI_TURN);
  });

  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_RESTARTED, () => {
    timeoutIdList.forEach((id) => clearTimeout(id));
  });

  _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__.GAME_QUIT, () => {
    _game_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetGame();
    timeoutIdList.forEach((id) => clearTimeout(id));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ subscribeToEvents });


/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-board.js */ "./src/js/game-board.js");
/* harmony import */ var _human_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./human-player.js */ "./src/js/human-player.js");
/* harmony import */ var _ai_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai-player.js */ "./src/js/ai-player.js");




let player1;
let player2;
let currentPlayer;
let gameOver = false;
let winner = null;

/**
 * getGameBoard returns the game board
 * @returns {gameBoard} gameBoard
 */
const getGameBoard = () => _game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"];

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
const checkDraw = () => _game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkDraw();

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
  _game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].reset();
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
  if (_game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCell(cell[0], cell[1], currentPlayer.getSymbol())) {
    if (_game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkWin()) {
      setWinner(currentPlayer);
      setGameOver(true);
    } else if (_game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkDraw()) {
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

  const nextMove = currentPlayer.getNextMove(_game_board_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
    setPlayer1((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.EasyAIPlayer)(player1Symbol));
  } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'medium') {
    setPlayer1((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.MediumAIPlayer)(player1Symbol));
  } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'hard') {
    setPlayer1((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.HardAIPlayer)(player1Symbol));
  } else if (firstPlayer.type === 'AI' && firstPlayer.level === 'unbeatable') {
    setPlayer1((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.UnbeatableAIPlayer)(player1Symbol));
  } else {
    setPlayer1((0,_human_player_js__WEBPACK_IMPORTED_MODULE_1__["default"])(firstPlayer.name, player1Symbol));
  }

  if (secondPlayer.type === 'AI' && secondPlayer.level === 'easy') {
    setPlayer2((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.EasyAIPlayer)(player2Symbol));
  } else if (secondPlayer.type === 'AI' && secondPlayer.level === 'medium') {
    setPlayer2((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.MediumAIPlayer)(player2Symbol));
  } else if (secondPlayer.type === 'AI' && secondPlayer.level === 'hard') {
    setPlayer2((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.HardAIPlayer)(player2Symbol));
  } else if (
    secondPlayer.type === 'AI' &&
    secondPlayer.level === 'unbeatable'
  ) {
    setPlayer2((0,_ai_player_js__WEBPACK_IMPORTED_MODULE_2__.UnbeatableAIPlayer)(player2Symbol));
  } else {
    setPlayer2((0,_human_player_js__WEBPACK_IMPORTED_MODULE_1__["default"])(secondPlayer.name, player2Symbol));
  }

  setCurrentPlayer(player1);
};

const getGameStatus = () => {
  const gameStatus = {
    gameBoard: getGameBoard(),
    player1: getPlayer1(),
    player2: getPlayer2(),
    currentPlayer: getCurrentPlayer(),
    isGameOver: isGameOver(),
    isDraw: checkDraw(),
    winner: getWinner(),
  };

  return gameStatus;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getGameBoard,
  getPlayer1,
  getPlayer2,
  getCurrentPlayer,
  getWinner,
  checkDraw,
  isGameOver,
  getGameStatus,
  switchCurrentPlayer,
  playHuman,
  playAI,
  startGame,
  resetGame,
});


/***/ }),

/***/ "./src/js/human-player.js":
/*!********************************!*\
  !*** ./src/js/human-player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/js/player.js");


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
  ...(0,_player_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name, symbol, 'Human'),
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanPlayer);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-controller.js */ "./src/js/game-controller.js");
/* harmony import */ var _display_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-controller.js */ "./src/js/display-controller.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.css */ "./src/style.css");





function init() {
  _game_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribeToEvents();
  _display_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribeToEvents();
  _display_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
}

init();


/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/js/pubsub.js":
/*!**************************!*\
  !*** ./src/js/pubsub.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const events = {};

const publish = (eventName, data) => {
  if (events[eventName]) {
    events[eventName].forEach((fn) => {
      fn(data);
    });
  }
};

const subscribe = (eventName, fn) => {
  events[eventName] = events[eventName] ?? [];
  events[eventName].push(fn);
};

const unSubscribe = (eventName, fn) => {
  if (events[eventName]) {
    for (let i = 0; i < events[eventName].length; i++) {
      if (events[eventName][i] === fn) {
        events[eventName].splice(i, 1);
        break;
      }
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  publish,
  subscribe,
  unSubscribe,
});


/***/ }),

/***/ "./src/assets/apple-touch-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/apple-touch-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f404f502aca7a9b8789.png";

/***/ }),

/***/ "./src/assets/favicon-16x16.png":
/*!**************************************!*\
  !*** ./src/assets/favicon-16x16.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37133134a4317ad1dfe4.png";

/***/ }),

/***/ "./src/assets/favicon-32x32.png":
/*!**************************************!*\
  !*** ./src/assets/favicon-32x32.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8d99eb1f99e2941a66f.png";

/***/ }),

/***/ "./src/assets/icon-close.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-close.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4be1a6ffd88822229f.svg";

/***/ }),

/***/ "./src/assets/icon-o-gray.svg":
/*!************************************!*\
  !*** ./src/assets/icon-o-gray.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7ebaa0400c018517049.svg";

/***/ }),

/***/ "./src/assets/icon-o-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-o-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44ebb2196ec7043f1e17.svg";

/***/ }),

/***/ "./src/assets/icon-o-transparent.svg":
/*!*******************************************!*\
  !*** ./src/assets/icon-o-transparent.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac31c667c91fd7427ebc.svg";

/***/ }),

/***/ "./src/assets/icon-o.svg":
/*!*******************************!*\
  !*** ./src/assets/icon-o.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7608cc08ec6b0a3d77ec.svg";

/***/ }),

/***/ "./src/assets/icon-quit.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-quit.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "395e611be7824283ee37.svg";

/***/ }),

/***/ "./src/assets/icon-restart.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-restart.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5233068679491c1d7f0f.svg";

/***/ }),

/***/ "./src/assets/icon-x-gray.svg":
/*!************************************!*\
  !*** ./src/assets/icon-x-gray.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4fcf8acac5b6a2cbb64.svg";

/***/ }),

/***/ "./src/assets/icon-x-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-x-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a591bdf22fd3be0addcb.svg";

/***/ }),

/***/ "./src/assets/icon-x-transparent.svg":
/*!*******************************************!*\
  !*** ./src/assets/icon-x-transparent.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d5c66dab3924ffe2026.svg";

/***/ }),

/***/ "./src/assets/icon-x.svg":
/*!*******************************!*\
  !*** ./src/assets/icon-x.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b42b1fa90bcc26b3e3f.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a3d7c7d71604d604996.svg";

/***/ }),

/***/ "./src/assets/player-ai.svg":
/*!**********************************!*\
  !*** ./src/assets/player-ai.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a415cd46066c6c8522c.svg";

/***/ }),

/***/ "./src/assets/player-human.svg":
/*!*************************************!*\
  !*** ./src/assets/player-human.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d77f16a6de290f44d870.svg";

/***/ }),

/***/ "./src/assets/site.webmanifest":
/*!*************************************!*\
  !*** ./src/assets/site.webmanifest ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f43cd7781f152c53e5d6.webmanifest";

/***/ }),

/***/ "./src/fonts/outfit.ttf":
/*!******************************!*\
  !*** ./src/fonts/outfit.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc779fb16a97a6842a72.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksY0FBYyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsc0JBQXNCLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFB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QUFDOztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z1QjtBQUNNO0FBQ2pDO0FBQ0Q7O0FBRXRCO0FBQ0EsRUFBRSw2RUFBZ0M7QUFDbEMsRUFBRSxnRkFBbUM7QUFDckMsRUFBRSxtRUFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQixjQUFjLFVBQVU7QUFDeEIsY0FBYyxVQUFVO0FBQ3hCLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQnRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2FpLXBsYXllci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9jZWxsLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9ldmVudC10eXBlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9nYW1lLWJvYXJkLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2h1bWFuLXBsYXllci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvanMvcHVic3ViLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL291dGZpdC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLXguc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1vLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24tby1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC10cmFuc3BhcmVudC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLW8tdHJhbnNwYXJlbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0aW5nIGZvbnRzICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ091dGZpdCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzFhMmIzMztcXG4gIC0tc2Vjb25kYXJ5OiAjMWUzNjQwO1xcbiAgLS1ncmV5OiAjYTliZWM4O1xcbiAgLS1kYXJrLWdyZXk6ICM1YzZiNzM7XFxuICAtLWRhcmstY3lhbjogIzM0YzNiZTtcXG4gIC0tbGlnaHRlbi15ZWxsb3c6ICNmMmIxMzg7XFxuICAtLXdoaXRlOiAjZmZmYmZiO1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzeXN0ZW0tdWksICdTZWdvZSBVSScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsXFxuICAgICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIC8qIENTUyBSZXNldCAqL1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBEaXNhYmxlIHRleHQgc2VsZWN0aW9uICovXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIENhdGNoIGVycm9ycyAqL1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLyoqKiBHYW1lICoqKi9cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBHYW1lIEhlYWRlciAqL1xcblxcbi5nYW1lIGhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEdhbWUgQWN0aW9ucyAqL1xcblxcbi5nYW1lX19hY3Rpb25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgdG9wOiAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5nYW1lX19yZXN0YXJ0LWJ0bixcXG4uZ2FtZV9fcXVpdC1idG4ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcXG59XFxuXFxuLmdhbWVfX3Jlc3RhcnQtYnRuIGltZyxcXG4uZ2FtZV9fcXVpdC1idG4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBHYW1lIFN0YXR1cyAqL1xcblxcbi5nYW1lX19zdGF0dXMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4vKiBHYW1lIFN0YXR1cyBQbGF5ZXIgKi9cXG5cXG4uZ2FtZV9fc3RhdHVzLXBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uZ2FtZV9fc3RhdHVzLXBsYXllci1pZCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTYycHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLXN5bWJvbCBpbWcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLW5hbWUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItaWNvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uZ2FtZV9fc3RhdHVzLXBsYXllci1pY29uIGltZyB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuLyogR2FtZSBTdGF0dXMgTWVzc2FnZSAqL1xcblxcbi5nYW1lX19zdGF0dXMtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMDBweDtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlX190dXJuLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5zdGF0dXMtbWVzc2FnZV9fdHVybi1pY29uW2RhdGEtdHVybj0nWCddIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XFxufVxcblxcbi5zdGF0dXMtbWVzc2FnZV9fdHVybi1pY29uW2RhdGEtdHVybj0nTyddIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XFxufVxcblxcbi8qIEdhbWUgQm9hcmQgKi9cXG5cXG4uZ2FtZSBtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gLTE7XFxuICBtYXJnaW46IDMwcHggMDtcXG59XFxuXFxuLmdhbWVfX2JvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMzBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGxbZGF0YS13aW49J1gnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWN5YW4pO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbFtkYXRhLXdpbj0nTyddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG59XFxuXFxuLmdhbWUtb3Zlci1kcmF3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXNldD0nWCddIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXNldD0nTyddIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXR1cm49J1gnXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbCAuY2VsbC1zeW1ib2xbZGF0YS10dXJuPSdPJ106aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGxbZGF0YS13aW49J1gnXSAuY2VsbC1zeW1ib2xbZGF0YS1zZXQ9J1gnXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbFtkYXRhLXdpbj0nTyddIC5jZWxsLXN5bWJvbFtkYXRhLXNldD0nTyddIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxufVxcblxcbi8qKiogR2FtZS1Jbml0aWFsaXplciAqKiovXFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBHYW1lLUluaXRpYWxpemVyIEhlYWRlciAqL1xcblxcbi5nYW1lLWluaXRpYWxpemVyIGhlYWRlciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1pbml0aWFsaXplciBtYWluIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi8qIEdhbWUtSW5pdGlhbGl6ZXIgT3B0aW9ucyAqL1xcblxcbi5nYW1lLWluaXRpYWxpemVyX19vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMzAwcHgsIDUwMHB4KSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBHYW1lIEluaXRpYWxpemVyIFBsYXllciAqL1xcblxcbi5nYW1lLWluaXRpYWxpemVyX19vcHRpb25zIC5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIE9wdGlvbnMgUGxheWVyIFN5bWJvbCAqL1xcblxcbi5wbGF5ZXIgLnBsYXllcl9fc3ltYm9sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXJfX3N5bWJvbCBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi8qIE9wdGlvbnMgUGxheWVyIEljb24gKi9cXG5cXG4ucGxheWVyIC5wbGF5ZXJfX2ljb24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogT3B0aW9ucyBQbGF5ZXIgVHlwZS1TZWxlY3RvciAqL1xcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnBsYXllcl9fdHlwZS1zZWxlY3RvciBpbnB1dFt0eXBlPSdyYWRpbyddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3IgaW5wdXRbdHlwZT0ncmFkaW8nXTpmaXJzdC1vZi10eXBlIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3IgaW5wdXRbdHlwZT0ncmFkaW8nXTpsYXN0LW9mLXR5cGUge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3IgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3IgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi8qIE9wdGlvbnMgUGxheWVyIFBsYXllci1OYW1lICovXFxuLyogT3B0aW9ucyBQbGF5ZXIgQUktVHlwZSAqL1xcblxcbi5wbGF5ZXJfX25hbWUsXFxuLnBsYXllcl9fYWktdHlwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJfX25hbWUgaW5wdXRbdHlwZT0ndGV4dCddLFxcbi5wbGF5ZXJfX2FpLXR5cGUgc2VsZWN0IHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wbGF5ZXJfX25hbWUgbGFiZWwsXFxuLnBsYXllcl9fYWktdHlwZSBsYWJlbCB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwLXBhdGg6IHJlY3QoMXB4IDFweCAxcHggMXB4KTsgLyogSUU2LCBJRTcgKi9cXG4gIGNsaXAtcGF0aDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi5wbGF5ZXJfX25hbWUgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5wbGF5ZXJfX25hbWUgaW5wdXRbdHlwZT0ndGV4dCddOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wbGF5ZXJfX25hbWUgaW5wdXRbdHlwZT0ndGV4dCddLmludmFsaWQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qIE9wdGlvbnMgU3RhcnQtR2FtZSAqL1xcblxcbi5nYW1lLWluaXRpYWxpemVyX19zdGFydCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZS1idG4ge1xcbiAgd2lkdGg6IDM1JTtcXG4gIGhlaWdodDogNjRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVuLXllbGxvdyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBSZXN1bHQtTW9kYWwgKi9cXG5cXG4ucmVzdWx0LW1vZGFsLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0MHB4IDA7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxMDB2aCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNTAlLCA1MDBweCk7XFxufVxcblxcbi8qIFJlc3VsdC1Nb2RhbCBIZWFkZXIgKi9cXG5cXG4ucmVzdWx0LW1vZGFsX19oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX190aXRsZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX2Nsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTRweDtcXG4gIHRvcDogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX2Nsb3NlLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX2Nsb3NlLWJ0biBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIFJlc3VsdC1Nb2RhbCBCb2R5ICovXFxuXFxuLnJlc3VsdC1tb2RhbF9fbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19tZXNzYWdlW2RhdGEtd2lubmVyPSdYJ10ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstY3lhbik7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX21lc3NhZ2VbZGF0YS13aW5uZXI9J08nXSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX193aW5uZXItc3ltYm9sIHtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX193aW5uZXItc3ltYm9sW2RhdGEtd2lubmVyPSdYJ10ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbFtkYXRhLXdpbm5lcj0nTyddIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XFxufVxcblxcbi8qIFJlc3VsdC1Nb2RhbCBGb290ZXIgKi9cXG5cXG4ucmVzdWx0LW1vZGFsX19mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyNnB4O1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19yZXN0YXJ0LWJ0bixcXG4ucmVzdWx0LW1vZGFsX19xdWl0LWJ0biB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3Jlc3RhcnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fcXVpdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi8qKiogTWlzYyAqKiovXFxuXFxuLyogVXNlZCB0byBoaWRlIGVsZW1lbnRzIHZpYSBKYXZhU2NyaXB0ICovXFxuLmRpc2FibGVkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSg1cHgpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAsIGluc2V0IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOTIzMjYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAzNSwgMzgsIDAuMikgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFj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O0FBRUE7RUFDRSwyRUFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSwyRUFBNEQ7QUFDOUQ7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSxhQUFhOztBQUViLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxzREFBc0Q7RUFDdEQsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1EQUFtRDtBQUNyRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBJbXBvcnRpbmcgZm9udHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3V0Zml0JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL291dGZpdC50dGYnKTtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjMWEyYjMzO1xcbiAgLS1zZWNvbmRhcnk6ICMxZTM2NDA7XFxuICAtLWdyZXk6ICNhOWJlYzg7XFxuICAtLWRhcmstZ3JleTogIzVjNmI3MztcXG4gIC0tZGFyay1jeWFuOiAjMzRjM2JlO1xcbiAgLS1saWdodGVuLXllbGxvdzogI2YyYjEzODtcXG4gIC0td2hpdGU6ICNmZmZiZmI7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ091dGZpdCcsIHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZixcXG4gICAgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLyogQ1NTIFJlc2V0ICovXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIERpc2FibGUgdGV4dCBzZWxlY3Rpb24gKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogQ2F0Y2ggZXJyb3JzICovXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKioqIEdhbWUgKioqL1xcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEdhbWUgSGVhZGVyICovXFxuXFxuLmdhbWUgaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZSBBY3Rpb25zICovXFxuXFxuLmdhbWVfX2FjdGlvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmdhbWVfX3Jlc3RhcnQtYnRuLFxcbi5nYW1lX19xdWl0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xcbn1cXG5cXG4uZ2FtZV9fcmVzdGFydC1idG4gaW1nLFxcbi5nYW1lX19xdWl0LWJ0biBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIEdhbWUgU3RhdHVzICovXFxuXFxuLmdhbWVfX3N0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIEdhbWUgU3RhdHVzIFBsYXllciAqL1xcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLWlkIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxNjJweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItc3ltYm9sIGltZyB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZ2FtZV9fc3RhdHVzLXBsYXllci1pY29uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLWljb24gaW1nIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4vKiBHYW1lIFN0YXR1cyBNZXNzYWdlICovXFxuXFxuLmdhbWVfX3N0YXR1cy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2VfX3R1cm4taWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlX190dXJuLWljb25bZGF0YS10dXJuPSdYJ10ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2ljb24teC5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgLyAxMDAlO1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2VfX3R1cm4taWNvbltkYXRhLXR1cm49J08nXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvaWNvbi1vLnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XFxufVxcblxcbi8qIEdhbWUgQm9hcmQgKi9cXG5cXG4uZ2FtZSBtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gLTE7XFxuICBtYXJnaW46IDMwcHggMDtcXG59XFxuXFxuLmdhbWVfX2JvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMzBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGxbZGF0YS13aW49J1gnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWN5YW4pO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbFtkYXRhLXdpbj0nTyddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG59XFxuXFxuLmdhbWUtb3Zlci1kcmF3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXNldD0nWCddIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pY29uLXguc3ZnKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwgLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdPJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb24tby5zdmcpO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbCAuY2VsbC1zeW1ib2xbZGF0YS10dXJuPSdYJ106aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb24teC1vdXRsaW5lLnN2Zyk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXR1cm49J08nXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbi1vLW91dGxpbmUuc3ZnKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGxbZGF0YS13aW49J1gnXSAuY2VsbC1zeW1ib2xbZGF0YS1zZXQ9J1gnXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbi14LXRyYW5zcGFyZW50LnN2Zyk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsW2RhdGEtd2luPSdPJ10gLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdPJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb24tby10cmFuc3BhcmVudC5zdmcpO1xcbn1cXG5cXG4vKioqIEdhbWUtSW5pdGlhbGl6ZXIgKioqL1xcblxcbi5nYW1lLWluaXRpYWxpemVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZS1Jbml0aWFsaXplciBIZWFkZXIgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplciBoZWFkZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXIgbWFpbiB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4vKiBHYW1lLUluaXRpYWxpemVyIE9wdGlvbnMgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplcl9fb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMwMHB4LCA1MDBweCkpO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZSBJbml0aWFsaXplciBQbGF5ZXIgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplcl9fb3B0aW9ucyAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBTeW1ib2wgKi9cXG5cXG4ucGxheWVyIC5wbGF5ZXJfX3N5bWJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucGxheWVyX19zeW1ib2wgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBJY29uICovXFxuXFxuLnBsYXllciAucGxheWVyX19pY29uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi8qIE9wdGlvbnMgUGxheWVyIFR5cGUtU2VsZWN0b3IgKi9cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3IgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ106Zmlyc3Qtb2YtdHlwZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ106bGFzdC1vZi10eXBlIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBQbGF5ZXItTmFtZSAqL1xcbi8qIE9wdGlvbnMgUGxheWVyIEFJLVR5cGUgKi9cXG5cXG4ucGxheWVyX19uYW1lLFxcbi5wbGF5ZXJfX2FpLXR5cGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXSxcXG4ucGxheWVyX19haS10eXBlIHNlbGVjdCB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGxhYmVsLFxcbi5wbGF5ZXJfX2FpLXR5cGUgbGFiZWwge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcC1wYXRoOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXFxuICBjbGlwLXBhdGg6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXS5pbnZhbGlkOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKiBPcHRpb25zIFN0YXJ0LUdhbWUgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplcl9fc3RhcnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUtYnRuIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsICovXFxuXFxuLnJlc3VsdC1tb2RhbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZXN1bHQtbW9kYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdmggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgNTAwcHgpO1xcbn1cXG5cXG4vKiBSZXN1bHQtTW9kYWwgSGVhZGVyICovXFxuXFxuLnJlc3VsdC1tb2RhbF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE0cHg7XFxuICB0b3A6IDE0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jbG9zZS1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jbG9zZS1idG4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBSZXN1bHQtTW9kYWwgQm9keSAqL1xcblxcbi5yZXN1bHQtbW9kYWxfX21lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fbWVzc2FnZVtkYXRhLXdpbm5lcj0nWCddIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWN5YW4pO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19tZXNzYWdlW2RhdGEtd2lubmVyPSdPJ10ge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbCB7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbFtkYXRhLXdpbm5lcj0nWCddIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9pY29uLXguc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbFtkYXRhLXdpbm5lcj0nTyddIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9pY29uLW8uc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsIEZvb3RlciAqL1xcblxcbi5yZXN1bHQtbW9kYWxfX2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDI2cHg7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3Jlc3RhcnQtYnRuLFxcbi5yZXN1bHQtbW9kYWxfX3F1aXQtYnRuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fcmVzdGFydC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19xdWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLyoqKiBNaXNjICoqKi9cXG5cXG4vKiBVc2VkIHRvIGhpZGUgZWxlbWVudHMgdmlhIEphdmFTY3JpcHQgKi9cXG4uZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDVweCk7XFxuICBib3gtc2hhZG93OiAwIDAgMCwgaW5zZXQgMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2I5MjMyNiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDM1LCAzOCwgMC4yKSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2Zhdmljb24tMzJ4MzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZmF2aWNvbi0xNngxNi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zaXRlLndlYm1hbmlmZXN0XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLXJlc3RhcnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1xdWl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wbGF5ZXItaHVtYW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1vLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wbGF5ZXItYWkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC1ncmF5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLW8tZ3JheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzlfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF85X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEzX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInRoZW1lLWNvbG9yXFxcIiBjb250ZW50PVxcXCIjMUEyQjMzXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJtc2FwcGxpY2F0aW9uLW5hdmJ1dHRvbi1jb2xvclxcXCIgY29udGVudD1cXFwiIzFBMkIzM1xcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVxcXCIgY29udGVudD1cXFwieWVzXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXFxcIiBjb250ZW50PVxcXCIjMUEyQjMzXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiVGljIFRhYyBUb2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcImtleXdvcmRzXFxcIiBjb250ZW50PVxcXCJUaWMgVGFjIFRvZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXV0aG9yXFxcIiBjb250ZW50PVxcXCJBaG1lZCBTYWxhaFxcXCIgLz5cXG4gICAgPGxpbmtcXG4gICAgICByZWw9XFxcImFwcGxlLXRvdWNoLWljb25cXFwiXFxuICAgICAgc2l6ZXM9XFxcIjE4MHgxODBcXFwiXFxuICAgICAgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rXFxuICAgICAgcmVsPVxcXCJpY29uXFxcIlxcbiAgICAgIHR5cGU9XFxcImltYWdlL3BuZ1xcXCJcXG4gICAgICBzaXplcz1cXFwiMzJ4MzJcXFwiXFxuICAgICAgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rXFxuICAgICAgcmVsPVxcXCJpY29uXFxcIlxcbiAgICAgIHR5cGU9XFxcImltYWdlL3BuZ1xcXCJcXG4gICAgICBzaXplcz1cXFwiMTZ4MTZcXFwiXFxuICAgICAgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rIHJlbD1cXFwibWFuaWZlc3RcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiAvPlxcbiAgICA8dGl0bGU+PCU9IGh0bWxXZWJwYWNrUGx1Z2luLm9wdGlvbnMudGl0bGUgJT48L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJkaXNhYmxlZCBnYW1lXFxcIj5cXG4gICAgICA8aGVhZGVyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+XFxuICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJUaWMgVGFjIFRvZVxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvaGVhZGVyPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX2FjdGlvbnNcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fcmVzdGFydC1idG5cXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwiUmVzdGFydCBHYW1lXFxcIiAvPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19xdWl0LWJ0blxcXCI+XFxuICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCIgYWx0PVxcXCJRdWl0IEdhbWVcXFwiIC8+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fc3RhdHVzLXBsYXllclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1wbGF5ZXItaWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1wbGF5ZXItc3ltYm9sXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCIgYWx0PVxcXCJYXFxcIiAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1wbGF5ZXItbmFtZVxcXCI+UGxheWVyIDE8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1wbGF5ZXItaWNvblxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyArIFwiXFxcIiBhbHQ9XFxcIkh1bWFuIFBsYXllclxcXCIgLz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1tZXNzYWdlXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLW1lc3NhZ2VfX3R1cm4taWNvblxcXCIgZGF0YS10dXJuPVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdHVzLW1lc3NhZ2VfX3RleHRcXFwiPlR1cm48L3A+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1wbGF5ZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLWlkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLXN5bWJvbFxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fICsgXCJcXFwiIGFsdD1cXFwiT1xcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLW5hbWVcXFwiPlBsYXllciAyPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLWljb25cXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fICsgXCJcXFwiIGFsdD1cXFwiQUkgUGxheWVyXFxcIiAvPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxtYWluPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmRcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19ib2FyZC1jZWxsXFxcIiBkYXRhLWNlbGwtcm93PVxcXCIwXFxcIiBkYXRhLWNlbGwtY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsLXN5bWJvbFxcXCIgZGF0YS10dXJuPVxcXCJcXFwiIGRhdGEtc2V0PVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmQtY2VsbFxcXCIgZGF0YS1jZWxsLXJvdz1cXFwiMFxcXCIgZGF0YS1jZWxsLWNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VsbC1zeW1ib2xcXFwiIGRhdGEtdHVybj1cXFwiXFxcIiBkYXRhLXNldD1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX2JvYXJkLWNlbGxcXFwiIGRhdGEtY2VsbC1yb3c9XFxcIjBcXFwiIGRhdGEtY2VsbC1jb2w9XFxcIjJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbGwtc3ltYm9sXFxcIiBkYXRhLXR1cm49XFxcIlxcXCIgZGF0YS1zZXQ9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19ib2FyZC1jZWxsXFxcIiBkYXRhLWNlbGwtcm93PVxcXCIxXFxcIiBkYXRhLWNlbGwtY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsLXN5bWJvbFxcXCIgZGF0YS10dXJuPVxcXCJcXFwiIGRhdGEtc2V0PVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmQtY2VsbFxcXCIgZGF0YS1jZWxsLXJvdz1cXFwiMVxcXCIgZGF0YS1jZWxsLWNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VsbC1zeW1ib2xcXFwiIGRhdGEtdHVybj1cXFwiXFxcIiBkYXRhLXNldD1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX2JvYXJkLWNlbGxcXFwiIGRhdGEtY2VsbC1yb3c9XFxcIjFcXFwiIGRhdGEtY2VsbC1jb2w9XFxcIjJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbGwtc3ltYm9sXFxcIiBkYXRhLXR1cm49XFxcIlxcXCIgZGF0YS1zZXQ9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19ib2FyZC1jZWxsXFxcIiBkYXRhLWNlbGwtcm93PVxcXCIyXFxcIiBkYXRhLWNlbGwtY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsLXN5bWJvbFxcXCIgZGF0YS10dXJuPVxcXCJcXFwiIGRhdGEtc2V0PVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmQtY2VsbFxcXCIgZGF0YS1jZWxsLXJvdz1cXFwiMlxcXCIgZGF0YS1jZWxsLWNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VsbC1zeW1ib2xcXFwiIGRhdGEtdHVybj1cXFwiXFxcIiBkYXRhLXNldD1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX2JvYXJkLWNlbGxcXFwiIGRhdGEtY2VsbC1yb3c9XFxcIjJcXFwiIGRhdGEtY2VsbC1jb2w9XFxcIjJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbGwtc3ltYm9sXFxcIiBkYXRhLXR1cm49XFxcIlxcXCIgZGF0YS1zZXQ9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9tYWluPlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lLWluaXRpYWxpemVyXFxcIj5cXG4gICAgICA8aGVhZGVyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+XFxuICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJUaWMgVGFjIFRvZVxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvaGVhZGVyPlxcbiAgICAgIDxtYWluPlxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImdhbWUtaW5pdGlhbGl6ZXJfX29wdGlvbnNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYXllcl9fc3ltYm9sXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzExX19fICsgXCJcXFwiIGFsdD1cXFwiWFxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJfX2ljb25cXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyArIFwiXFxcIiBhbHQ9XFxcIkh1bWFuIFBsYXllclxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJfX3R5cGUtc2VsZWN0b3JcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJwbGF5ZXIxLXR5cGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwbGF5ZXIxLWh1bWFuXFxcIlxcbiAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiaHVtYW5cXFwiXFxuICAgICAgICAgICAgICAgIGNoZWNrZWRcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5ZXIxLWh1bWFuXFxcIj5IdW1hbjwvbGFiZWw+XFxuICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwicmFkaW9cXFwiXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcInBsYXllcjEtdHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInBsYXllcjEtYWlcXFwiXFxuICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJBSVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5ZXIxLWFpXFxcIj5BSTwvbGFiZWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyX19uYW1lXFxcIj5cXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBsYXllcjEtbmFtZVxcXCI+UGxheWVyIE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwbGF5ZXIxLW5hbWVcXFwiXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBwbGF5ZXIgbmFtZSAuLi5cXFwiXFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXNhYmxlZCBwbGF5ZXJfX2FpLXR5cGVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWkxLXR5cGVcXFwiPkFJIFR5cGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVxcXCJwbGF5ZXJfX2FpLXR5cGVcXFwiIGlkPVxcXCJhaTEtdHlwZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImVhc3lcXFwiPkVhc3k8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibWVkaXVtXFxcIj5NZWRpdW08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiaGFyZFxcXCI+SGFyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ1bmJlYXRhYmxlXFxcIj5VbmJlYXRhYmxlPC9vcHRpb24+XFxuICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYXllclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyX19zeW1ib2xcXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTJfX18gKyBcIlxcXCIgYWx0PVxcXCJPXFxcIiAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYXllcl9faWNvblxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiXFxcIiBhbHQ9XFxcIkFJIFBsYXllclxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJfX3R5cGUtc2VsZWN0b3JcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJwbGF5ZXIyLXR5cGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwbGF5ZXIyLWh1bWFuXFxcIlxcbiAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiSHVtYW5cXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGxheWVyMi1odW1hblxcXCI+SHVtYW48L2xhYmVsPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJwbGF5ZXIyLXR5cGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwbGF5ZXIyLWFpXFxcIlxcbiAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiQUlcXFwiXFxuICAgICAgICAgICAgICAgIGNoZWNrZWRcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5ZXIyLWFpXFxcIj5BSTwvbGFiZWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlzYWJsZWQgcGxheWVyX19uYW1lXFxcIj5cXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBsYXllcjItbmFtZVxcXCI+UGxheWVyIE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwbGF5ZXIyLW5hbWVcXFwiXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBwbGF5ZXIgbmFtZSAuLi5cXFwiXFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJfX2FpLXR5cGVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWkyLXR5cGVcXFwiPkFJIFR5cGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVxcXCJwbGF5ZXJfX2FpLXR5cGVcXFwiIGlkPVxcXCJhaTItdHlwZVxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImVhc3lcXFwiPkVhc3k8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibWVkaXVtXFxcIj5NZWRpdW08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiaGFyZFxcXCI+SGFyZDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ1bmJlYXRhYmxlXFxcIj5VbmJlYXRhYmxlPC9vcHRpb24+XFxuICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtaW5pdGlhbGl6ZXJfX3N0YXJ0XFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzdGFydC1nYW1lLWJ0blxcXCI+U3RhcnQgR2FtZTwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L21haW4+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZGlzYWJsZWQgcmVzdWx0LW1vZGFsLWNvbnRhaW5lclxcXCI+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInJlc3VsdC1tb2RhbFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX2hlYWRlclxcXCI+XFxuICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX3RpdGxlXFxcIj5HYW1lIE92ZXI8L2gyPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJlc3VsdC1tb2RhbF9fY2xvc2UtYnRuXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fICsgXCJcXFwiIGFsdD1cXFwiQ2xvc2VcXFwiIC8+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX2JvZHlcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc3VsdC1tb2RhbF9fbWVzc2FnZVxcXCIgZGF0YS13aW5uZXI9XFxcIlxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX3dpbm5lci1zeW1ib2xcXFwiIGRhdGEtd2lubmVyPVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPHA+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX19mb290ZXJcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJlc3VsdC1tb2RhbF9fcmVzdGFydC1idG5cXFwiPlBsYXkgQWdhaW48L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX3F1aXQtYnRuXFxcIj5RdWl0PC9idXR0b24+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbi8qKlxuICogQUlQbGF5ZXIgaXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBhbiBBSSBwbGF5ZXIgb2JqZWN0IChpbmhlcml0cyBmcm9tIFBsYXllcilcbiAqIEBwYXJhbSB7c3RyaW5nfSBzeW1ib2wgLSBjYWxsIGl0IHdpdGggJ1gnIG9yICdPJ1xuICogQHJldHVybnMge09iamVjdH0gQUlQbGF5ZXIgb2JqZWN0XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROZXh0TW92ZSAtIHJldHVybnMgdGhlIG5leHQgbW92ZSBmb3IgdGhlIEFJIGJhc2VkIG9uIGRpZmZpY3VsdHkgbGV2ZWxcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyICgnWCcgb3IgJ08nKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VHlwZSAtIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIHBsYXllciAoJ0h1bWFuJyBvciAnQUknKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TGV2ZWwgLSByZXR1cm5zIHRoZSBkaWZmaWN1bHR5IGxldmVsIG9mIHRoZSBBSSAoJ0Vhc3knLCAnTWVkaXVtJywgJ0hhcmQnLCAnVW5iZWF0YWJsZScpXG4gKi9cbmNvbnN0IEFJUGxheWVyID0gKHN5bWJvbCwgbGV2ZWwpID0+IHtcbiAgY29uc3QgbmFtZSA9IGAke2xldmVsfSBBSWA7XG5cbiAgLyoqXG4gICAqIGxldmVsIGlzIHRoZSBkaWZmaWN1bHR5IGxldmVsIG9mIHRoZSBBSVxuICAgKiAoRWFzeSwgTWVkaXVtLCBIYXJkLCBVbmJlYXRhYmxlKVxuICAgKi9cbiAgY29uc3QgZ2V0TGV2ZWwgPSAoKSA9PiBsZXZlbDtcblxuICAvKipcbiAgICogbWluaW1heCBpcyBhIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGV2YWx1YXRlcyB0aGUgYm9hcmQgYW5kIHJldHVybnMgYSBzY29yZVxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmRcbiAgICogQHBhcmFtIHtib29sZWFufSBpc01heGltaXppbmcgLSBjYWxsIGl0IHdpdGggdHJ1ZSBpZiB0aGUgY3VycmVudCBtb3ZlIGlzIG1heGltaXppbmdcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIC0gY2FsbCBpdCB3aXRoIHRoZSBjdXJyZW50IGRlcHRoXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHNjb3JlXG4gICAqL1xuICBjb25zdCBtaW5pbWF4ID0gKGJvYXJkLCBpc01heGltaXppbmcsIGRlcHRoKSA9PiB7XG4gICAgY29uc3Qgb3Bwb25lbnRTeW1ib2wgPSBzeW1ib2wgPT09ICdYJyA/ICdPJyA6ICdYJztcblxuICAgIC8vIGV2YWx1YXRlIHRoZSBib2FyZFxuICAgIGNvbnN0IHdpbm5lciA9IGJvYXJkLmNoZWNrV2luKCk7XG5cbiAgICAvLyBiYXNlIGNhc2U6IGlmIHRoZSBnYW1lIGlzIHdvbiBieSB0aGUgbWF4aW1pemluZyBwbGF5ZXIgKEFJKSwgcmV0dXJuIGhpZ2ggc2NvcmUgKDEpXG4gICAgaWYgKHdpbm5lciA9PT0gc3ltYm9sKSB7XG4gICAgICByZXR1cm4gMTAwIC0gZGVwdGg7XG4gICAgfVxuICAgIC8vIGJhc2UgY2FzZTogaWYgdGhlIGdhbWUgaXMgd29uIGJ5IHRoZSBtaW5pbWl6aW5nIHBsYXllciAob3Bwb25lbnQpLCByZXR1cm4gbG93IHNjb3JlICgtMSlcbiAgICBpZiAod2lubmVyID09PSBvcHBvbmVudFN5bWJvbCkge1xuICAgICAgcmV0dXJuIC0xMDAgKyBkZXB0aDtcbiAgICB9XG4gICAgLy8gYmFzZSBjYXNlOiBpZiB0aGUgZ2FtZSBpcyBhIHRpZSwgcmV0dXJuIDBcbiAgICBpZiAoYm9hcmQuY2hlY2tEcmF3KCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZSBjYXNlOiBpZiB0aGUgY3VycmVudCBtb3ZlIGlzIG1heGltaXppbmcsIHJldHVybiB0aGUgbWF4aW11bSBzY29yZVxuICAgIGlmIChpc01heGltaXppbmcpIHtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICBjb25zdCBlbXB0eUNlbGxzID0gYm9hcmQuZ2V0RW1wdHlDZWxscygpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtcHR5Q2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZW1wdHlDZWxsc1tpXTtcblxuICAgICAgICAvLyBtYWtlIHRoZSBtb3ZlXG4gICAgICAgIGJvYXJkLnNldENlbGwoeCwgeSwgc3ltYm9sKTtcblxuICAgICAgICAvLyBldmFsdWF0ZSB0aGUgYm9hcmQgaWYgdGhlIG1vdmUgaXMgbWFkZVxuICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGZhbHNlLCBkZXB0aCArIDEpO1xuXG4gICAgICAgIC8vIHVuZG8gdGhlIG1vdmVcbiAgICAgICAgYm9hcmQucmVzZXRDZWxsKHgsIHkpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgYmVzdCBzY29yZVxuICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfVxuXG4gICAgLy8gcmVjdXJzaXZlIGNhc2U6IGlmIHRoZSBjdXJyZW50IG1vdmUgaXMgbWluaW1pemluZywgcmV0dXJuIHRoZSBtaW5pbXVtIHNjb3JlXG4gICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBib2FyZC5nZXRFbXB0eUNlbGxzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eUNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbeCwgeV0gPSBlbXB0eUNlbGxzW2ldO1xuXG4gICAgICAvLyBtYWtlIHRoZSBtb3ZlXG4gICAgICBib2FyZC5zZXRDZWxsKHgsIHksIHN5bWJvbCA9PT0gJ1gnID8gJ08nIDogJ1gnKTtcblxuICAgICAgLy8gZXZhbHVhdGUgdGhlIGJvYXJkIGlmIHRoZSBtb3ZlIGlzIG1hZGVcbiAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgdHJ1ZSwgZGVwdGggKyAxKTtcblxuICAgICAgLy8gdW5kbyB0aGUgbW92ZVxuICAgICAgYm9hcmQucmVzZXRDZWxsKHgsIHkpO1xuXG4gICAgICAvLyB1cGRhdGUgdGhlIGJlc3Qgc2NvcmVcbiAgICAgIGJlc3RTY29yZSA9IE1hdGgubWluKHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgIH1cblxuICAgIHJldHVybiBiZXN0U2NvcmU7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldEJlc3RNb3ZlIHJldHVybnMgdGhlIGJlc3QgbmV4dCBtb3ZlIGZvciB0aGUgQUksXG4gICAqIHJldHVybnMgbnVsbCBpZiBib2FyZCBpcyBmdWxsXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGJlc3RNb3ZlXG4gICAqL1xuICBjb25zdCBnZXRCZXN0TW92ZSA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBib2FyZC5nZXRFbXB0eUNlbGxzKCk7XG4gICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgYmVzdE1vdmU7XG5cbiAgICBpZiAoZW1wdHlDZWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZW1wdHlDZWxscy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBlbXB0eUNlbGxzWzBdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlDZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgW3gsIHldID0gZW1wdHlDZWxsc1tpXTtcblxuICAgICAgLy8gbWFrZSB0aGUgbW92ZVxuICAgICAgYm9hcmQuc2V0Q2VsbCh4LCB5LCBzeW1ib2wpO1xuXG4gICAgICAvLyBldmFsdWF0ZSB0aGUgYm9hcmQgaWYgdGhlIG1vdmUgaXMgbWFkZVxuICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCBmYWxzZSwgMSk7XG5cbiAgICAgIC8vIHVuZG8gdGhlIG1vdmVcbiAgICAgIGJvYXJkLnJlc2V0Q2VsbCh4LCB5KTtcblxuICAgICAgLy8gdXBkYXRlIHRoZSBiZXN0IHNjb3JlIGFuZCBtb3ZlXG4gICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgIGJlc3RNb3ZlID0gW3gsIHldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiZXN0TW92ZTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0UmFuZG9tTW92ZSByZXR1cm5zIGEgcmFuZG9tIG5leHQgbW92ZSBmb3IgdGhlIEFJXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZCBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fSByYW5kb21Nb3ZlXG4gICAqICovXG4gIGNvbnN0IGdldFJhbmRvbU1vdmUgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gYm9hcmQuZ2V0RW1wdHlDZWxscygpO1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wdHlDZWxscy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIGVtcHR5Q2VsbHNbcmFuZG9tSW5kZXhdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXROZXh0TW92ZSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSBiYXNlZCBvbiBkaWZmaWN1bHR5IGxldmVsXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZCBvYmplY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpZmZpY3VsdHlQZXJjZW50YWdlIC0gY2FsbCBpdCB3aXRoIHRoZSBkaWZmaWN1bHR5IHBlcmNlbnRhZ2UgKDAtMTAwKVxuICAgKiBAcmV0dXJucyB7QXJyYXl9IG5leHRNb3ZlXG4gICAqICovXG4gIGNvbnN0IGdldE5leHRNb3ZlID0gKGJvYXJkLCBkaWZmaWN1bHR5UGVyY2VudGFnZSkgPT4ge1xuICAgIC8vIHJhbmRvbSBwZXJjZW50YWdlIGJldHdlZW4gMCBhbmQgMTAwXG4gICAgY29uc3QgcmFuZG9tUGVyY2VudGFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XG5cbiAgICBpZiAocmFuZG9tUGVyY2VudGFnZSA8IGRpZmZpY3VsdHlQZXJjZW50YWdlKSB7XG4gICAgICByZXR1cm4gZ2V0QmVzdE1vdmUoYm9hcmQpO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRSYW5kb21Nb3ZlKGJvYXJkKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRMZXZlbCwgZ2V0TmV4dE1vdmUsIC4uLlBsYXllcihuYW1lLCBzeW1ib2wsICdBSScpIH07XG59O1xuXG4vKipcbiAqIEVhc3lBSVBsYXllciBpcyBhIG1vZHVsZXMgdGhhdCBjb250YWlucyB0aGUgbG9naWMgZm9yIHRoZSBlYXN5IEFJIHBsYXllclxuICogQHBhcmFtIHtzdHJpbmd9IHN5bWJvbCAtIGNhbGwgaXQgd2l0aCAnWCcgb3IgJ08nXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBFYXN5QUlQbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRUeXBlIC0gcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgcGxheWVyIChhbHdheXMgJ0FJJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldExldmVsIC0gcmV0dXJucyB0aGUgbGV2ZWwgb2YgdGhlIEFJIChhbHdheXMgJ0Vhc3knKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TmV4dE1vdmUgLSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSB3aXRoIGEgZGlmZmljdWx0eSBvZiBlYXN5IChyYW5kb20gbW92ZSlcbiAqL1xuY29uc3QgRWFzeUFJUGxheWVyID0gKHN5bWJvbCkgPT4ge1xuICBjb25zdCBhaVBsYXllciA9IEFJUGxheWVyKHN5bWJvbCwgJ0Vhc3knKTtcblxuICAvKipcbiAgICogZ2V0TmV4dE1vdmUgcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgd2l0aCBhIGRpZmZpY3VsdHkgb2YgZWFzeSAocmFuZG9tIG1vdmUpXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZCBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fSBuZXh0TW92ZVxuICAgKi9cbiAgY29uc3QgZ2V0TmV4dE1vdmUgPSAoYm9hcmQpID0+IGFpUGxheWVyLmdldE5leHRNb3ZlKGJvYXJkLCAwKTtcblxuICByZXR1cm4geyAuLi5haVBsYXllciwgZ2V0TmV4dE1vdmUgfTtcbn07XG5cbi8qKlxuICogTWVkaXVtQUlQbGF5ZXIgaXMgYSBtb2R1bGVzIHRoYXQgY29udGFpbnMgdGhlIGxvZ2ljIGZvciB0aGUgbWVkaXVtIEFJIHBsYXllclxuICogQHBhcmFtIHtzdHJpbmd9IHN5bWJvbCAtIGNhbGwgaXQgd2l0aCAnWCcgb3IgJ08nXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBNZWRpdW1BSVBsYXllclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TmFtZSAtIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHBsYXllclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0U3ltYm9sIC0gcmV0dXJucyB0aGUgc3ltYm9sIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFR5cGUgLSByZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBwbGF5ZXIgKGFsd2F5cyAnQUknKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TGV2ZWwgLSByZXR1cm5zIHRoZSBsZXZlbCBvZiB0aGUgQUkgKGFsd2F5cyAnTWVkaXVtJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5leHRNb3ZlIC0gcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgd2l0aCBhIGRpZmZpY3VsdHkgb2YgbWVkaXVtICg1MCUgY2hhbmNlIG9mIGJlc3QgbW92ZSlcbiAqL1xuY29uc3QgTWVkaXVtQUlQbGF5ZXIgPSAoc3ltYm9sKSA9PiB7XG4gIGNvbnN0IGFpUGxheWVyID0gQUlQbGF5ZXIoc3ltYm9sLCAnTWVkaXVtJyk7XG5cbiAgLyoqXG4gICAqIGdldE5leHRNb3ZlIHJldHVybnMgdGhlIG5leHQgbW92ZSBmb3IgdGhlIEFJIHdpdGggYSBkaWZmaWN1bHR5IG9mIG1lZGl1bSAoNTAlIGNoYW5jZSBvZiBiZXN0IG1vdmUpXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZCBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fSBuZXh0TW92ZVxuICAgKi9cbiAgY29uc3QgZ2V0TmV4dE1vdmUgPSAoYm9hcmQpID0+IGFpUGxheWVyLmdldE5leHRNb3ZlKGJvYXJkLCA1MCk7XG5cbiAgcmV0dXJuIHsgLi4uYWlQbGF5ZXIsIGdldE5leHRNb3ZlIH07XG59O1xuXG4vKipcbiAqIEhhcmRBSVBsYXllciBpcyBhIG1vZHVsZXMgdGhhdCBjb250YWlucyB0aGUgbG9naWMgZm9yIHRoZSBoYXJkIEFJIHBsYXllclxuICogQHBhcmFtIHtzdHJpbmd9IHN5bWJvbCAtIGNhbGwgaXQgd2l0aCAnWCcgb3IgJ08nXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIYXJkQUlQbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRUeXBlIC0gcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgcGxheWVyIChhbHdheXMgJ0FJJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldExldmVsIC0gcmV0dXJucyB0aGUgbGV2ZWwgb2YgdGhlIEFJIChhbHdheXMgJ0hhcmQnKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TmV4dE1vdmUgLSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSB3aXRoIGEgZGlmZmljdWx0eSBvZiBoYXJkICg3NSUgY2hhbmNlIG9mIGJlc3QgbW92ZSlcbiAqL1xuY29uc3QgSGFyZEFJUGxheWVyID0gKHN5bWJvbCkgPT4ge1xuICBjb25zdCBhaVBsYXllciA9IEFJUGxheWVyKHN5bWJvbCwgJ0hhcmQnKTtcblxuICAvKipcbiAgICogZ2V0TmV4dE1vdmUgcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgd2l0aCBhIGRpZmZpY3VsdHkgb2YgaGFyZCAoNzUlIGNoYW5jZSBvZiBiZXN0IG1vdmUpXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZCBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fSBuZXh0TW92ZVxuICAgKi9cbiAgY29uc3QgZ2V0TmV4dE1vdmUgPSAoYm9hcmQpID0+IGFpUGxheWVyLmdldE5leHRNb3ZlKGJvYXJkLCA3NSk7XG5cbiAgcmV0dXJuIHsgLi4uYWlQbGF5ZXIsIGdldE5leHRNb3ZlIH07XG59O1xuXG4vKipcbiAqIFVuYmVhdGFibGVBSVBsYXllciBpcyBhIG1vZHVsZXMgdGhhdCBjb250YWlucyB0aGUgbG9naWMgZm9yIHRoZSB1bmJlYXRhYmxlIEFJIHBsYXllclxuICogQHBhcmFtIHtzdHJpbmd9IHN5bWJvbCAtIGNhbGwgaXQgd2l0aCAnWCcgb3IgJ08nXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBVbmJlYXRhYmxlQUlQbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRUeXBlIC0gcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgcGxheWVyIChhbHdheXMgJ0FJJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldExldmVsIC0gcmV0dXJucyB0aGUgbGV2ZWwgb2YgdGhlIEFJIChhbHdheXMgJ1VuYmVhdGFibGUnKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TmV4dE1vdmUgLSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSB3aXRoIGEgZGlmZmljdWx0eSBvZiB1bmJlYXRhYmxlIChiZXN0IG1vdmUgcG9zc2libGUpXG4gKi9cbmNvbnN0IFVuYmVhdGFibGVBSVBsYXllciA9IChzeW1ib2wpID0+IHtcbiAgY29uc3QgYWlQbGF5ZXIgPSBBSVBsYXllcihzeW1ib2wsICdVbmJlYXRhYmxlJyk7XG5cbiAgLyoqXG4gICAqIGdldE5leHRNb3ZlIHJldHVybnMgdGhlIG5leHQgbW92ZSBmb3IgdGhlIEFJIHdpdGggYSBkaWZmaWN1bHR5IG9mIHVuYmVhdGFibGUgKGJlc3QgbW92ZSBwb3NzaWJsZSlcbiAgICogQHBhcmFtIHtnYW1lQm9hcmR9IGJvYXJkIC0gY2FsbCBpdCB3aXRoIHRoZSBjdXJyZW50IGJvYXJkIG9iamVjdFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IG5leHRNb3ZlXG4gICAqICovXG4gIGNvbnN0IGdldE5leHRNb3ZlID0gKGJvYXJkKSA9PiBhaVBsYXllci5nZXROZXh0TW92ZShib2FyZCwgMTAwKTtcblxuICByZXR1cm4geyAuLi5haVBsYXllciwgZ2V0TmV4dE1vdmUgfTtcbn07XG5cbmV4cG9ydCB7IEVhc3lBSVBsYXllciwgTWVkaXVtQUlQbGF5ZXIsIEhhcmRBSVBsYXllciwgVW5iZWF0YWJsZUFJUGxheWVyIH07XG4iLCIvKipcbiAqIENlbGwgaXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBhIGNlbGwgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDZWxsIG9iamVjdFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VmFsdWUgLSByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0VmFsdWUgLSBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbCB0byB0aGUgZ2l2ZW4gdmFsdWVcbiAqL1xuY29uc3QgQ2VsbCA9ICgpID0+IHtcbiAgLy8gdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoZSBjZWxsIChlaXRoZXIgJ1gnLCAnTycsIG9yICdfJylcbiAgbGV0IHZhbHVlID0gJ18nO1xuXG4gIC8qKlxuICAgKiBnZXRWYWx1ZSByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB2YWx1ZTtcblxuICAvKipcbiAgICogc2V0VmFsdWUgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNlbGwgdG8gdGhlIGdpdmVuIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSAtIGNhbGwgaXQgd2l0aCAnWCcsICdPJywgb3IgJ18nXG4gICAqL1xuICBjb25zdCBzZXRWYWx1ZSA9IChuZXdWYWx1ZSkgPT4ge1xuICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VmFsdWUsIHNldFZhbHVlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsO1xuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICcuL3B1YnN1Yi5qcyc7XG5pbXBvcnQge1xuICBCT0FSRF9DSEFOR0VELFxuICBHQU1FX0VOREVELFxuICBHQU1FX1NUQVJURUQsXG4gIEdBTUVfU1RBUlRFRF9BSV9WU19BSSxcbiAgQUlfVFVSTixcbiAgU1RBVFVTX0NIQU5HRUQsXG4gIENFTExfQ0xJQ0tFRCxcbiAgR0FNRV9SRVNUQVJURUQsXG4gIEdBTUVfUVVJVCxcbiAgUE9TVF9DRUxMX0NMSUNLRUQsXG59IGZyb20gJy4vZXZlbnQtdHlwZXMuanMnO1xuXG4vKiBET00gRWxlbWVudHMgKi9cblxuY29uc3QgZ2FtZUluaXRpYWxpemVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluaXRpYWxpemVyJyk7XG5cbi8vIFBsYXllciAxXG5jb25zdCBwbGF5ZXIxVHlwZVJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICdpbnB1dFtuYW1lPVwicGxheWVyMS10eXBlXCJdJ1xuKTtcbmNvbnN0IHBsYXllcjFJY29uSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wbGF5ZXI6bnRoLW9mLXR5cGUoMSkgLnBsYXllcl9faWNvbiBpbWcnXG4pO1xuY29uc3QgcGxheWVyMU5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLnBsYXllcjpudGgtb2YtdHlwZSgxKSAucGxheWVyX19uYW1lJ1xuKTtcbmNvbnN0IHBsYXllcjFOYW1lSW5wdXQgPSBwbGF5ZXIxTmFtZURpdi5sYXN0RWxlbWVudENoaWxkO1xuY29uc3QgcGxheWVyMUFJVHlwZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcucGxheWVyOm50aC1vZi10eXBlKDEpIC5wbGF5ZXJfX2FpLXR5cGUnXG4pO1xuY29uc3QgcGxheWVyMUFJTGV2ZWxTZWxlY3QgPSBwbGF5ZXIxQUlUeXBlRGl2Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbi8vIFBsYXllciAyXG5jb25zdCBwbGF5ZXIyVHlwZVJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICdpbnB1dFtuYW1lPVwicGxheWVyMi10eXBlXCJdJ1xuKTtcbmNvbnN0IHBsYXllcjJJY29uSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wbGF5ZXI6bnRoLW9mLXR5cGUoMikgLnBsYXllcl9faWNvbiBpbWcnXG4pO1xuY29uc3QgcGxheWVyMk5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLnBsYXllcjpudGgtb2YtdHlwZSgyKSAucGxheWVyX19uYW1lJ1xuKTtcbmNvbnN0IHBsYXllcjJOYW1lSW5wdXQgPSBwbGF5ZXIyTmFtZURpdi5sYXN0RWxlbWVudENoaWxkO1xuY29uc3QgcGxheWVyMkFJVHlwZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcucGxheWVyOm50aC1vZi10eXBlKDIpIC5wbGF5ZXJfX2FpLXR5cGUnXG4pO1xuY29uc3QgcGxheWVyMkFJTGV2ZWxTZWxlY3QgPSBwbGF5ZXIyQUlUeXBlRGl2Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbmNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ0bicpO1xuXG4vLyBHYW1lIFNlY3Rpb25cbmNvbnN0IGdhbWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbmNvbnN0IFtnYW1lU3RhdHVzUGxheWVyMUltZywgZ2FtZVN0YXR1c1BsYXllcjJJbWddID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgJy5nYW1lX19zdGF0dXMtcGxheWVyLWljb24gaW1nJ1xuKTtcbmNvbnN0IFtnYW1lU3RhdHVzUGxheWVyMU5hbWVEaXYsIGdhbWVTdGF0dXNQbGF5ZXIyTmFtZURpdl0gPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZV9fc3RhdHVzLXBsYXllci1uYW1lJyk7XG5jb25zdCBnYW1lU3RhdHVzTWVzc2FnZVR1cm5JY29uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5zdGF0dXMtbWVzc2FnZV9fdHVybi1pY29uJ1xuKTtcbmNvbnN0IGdhbWVCb2FyZENlbGxEaXZzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lX19ib2FyZC1jZWxsJyldO1xuXG4vLyBSZXN1bHQgU2VjdGlvblxuY29uc3QgcmVzdWx0TW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LW1vZGFsLWNvbnRhaW5lcicpO1xuXG4vKiBVdGlsaXR5IEZ1bmN0aW9ucyAqL1xuXG5jb25zdCBzZXRQbGF5ZXJJY29uID0gKHBsYXllckljb25JbWcsIHBsYXllclR5cGUpID0+IHtcbiAgaWYgKHBsYXllclR5cGUgPT09ICdBSScpIHtcbiAgICBwbGF5ZXJJY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL3BsYXllci1haS5zdmcnKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJJY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL3BsYXllci1odW1hbi5zdmcnKTtcbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWQnKTtcbn07XG5cbmNvbnN0IGFwcGx5VHJhbnNpdGlvbiA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xufTtcblxuY29uc3QgcmVtb3ZlQ2xpY2tlZENsYXNzID0gKGUpID0+IHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xufTtcblxuY29uc3QgdXBkYXRlR2FtZVN0YXR1cyA9IChnYW1lU3RhdHVzKSA9PiB7XG4gIGNvbnN0IHsgcGxheWVyMSwgcGxheWVyMiwgY3VycmVudFBsYXllciB9ID0gZ2FtZVN0YXR1cztcblxuICBzZXRQbGF5ZXJJY29uKGdhbWVTdGF0dXNQbGF5ZXIxSW1nLCBwbGF5ZXIxLmdldFR5cGUoKSk7XG4gIHNldFBsYXllckljb24oZ2FtZVN0YXR1c1BsYXllcjJJbWcsIHBsYXllcjIuZ2V0VHlwZSgpKTtcblxuICBnYW1lU3RhdHVzUGxheWVyMU5hbWVEaXYudGV4dENvbnRlbnQgPSBwbGF5ZXIxLmdldE5hbWUoKTtcbiAgZ2FtZVN0YXR1c1BsYXllcjJOYW1lRGl2LnRleHRDb250ZW50ID0gcGxheWVyMi5nZXROYW1lKCk7XG5cbiAgZ2FtZVN0YXR1c01lc3NhZ2VUdXJuSWNvbkRpdi5kYXRhc2V0LnR1cm4gPSBjdXJyZW50UGxheWVyLmdldFN5bWJvbCgpO1xufTtcblxuY29uc3QgdXBkYXRlR2FtZUJvYXJkID0gKGdhbWVTdGF0dXMpID0+IHtcbiAgY29uc3QgeyBjdXJyZW50UGxheWVyLCBnYW1lQm9hcmQsIGlzR2FtZU92ZXIsIGlzRHJhdywgd2lubmVyIH0gPSBnYW1lU3RhdHVzO1xuXG4gIGdhbWVCb2FyZENlbGxEaXZzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBwYXJlbnRDZWxsID0gY2VsbDtcbiAgICBjb25zdCBjZWxsU3ltYm9sRGl2ID0gcGFyZW50Q2VsbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChwYXJlbnRDZWxsLmRhdGFzZXQuY2VsbFJvdywgMTApO1xuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KHBhcmVudENlbGwuZGF0YXNldC5jZWxsQ29sLCAxMCk7XG4gICAgY29uc3QgTG9naWNhbENlbGxWYWx1ZSA9IGdhbWVCb2FyZC5nZXRDZWxsKHJvdywgY29sKS5nZXRWYWx1ZSgpO1xuXG4gICAgc3dpdGNoIChMb2dpY2FsQ2VsbFZhbHVlKSB7XG4gICAgICBjYXNlICdfJzpcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0VHlwZSgpID09PSAnSHVtYW4nKSB7XG4gICAgICAgICAgY2VsbFN5bWJvbERpdi5kYXRhc2V0LnR1cm4gPSBjdXJyZW50UGxheWVyLmdldFN5bWJvbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC50dXJuID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbFN5bWJvbERpdi5kYXRhc2V0LnNldCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQudHVybiA9ICcnO1xuICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQuc2V0ID0gJ1gnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQudHVybiA9ICcnO1xuICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQuc2V0ID0gJ08nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBhcmVudENlbGwuZGF0YXNldC53aW4gPSAnJztcbiAgICBwYXJlbnRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtb3Zlci1kcmF3Jyk7XG4gIH0pO1xuXG4gIGlmIChpc0dhbWVPdmVyKSB7XG4gICAgaWYgKGlzRHJhdykge1xuICAgICAgZ2FtZUJvYXJkQ2VsbERpdnMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRDZWxsID0gY2VsbDtcbiAgICAgICAgY29uc3QgY2VsbFN5bWJvbERpdiA9IHBhcmVudENlbGwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC50dXJuID0gJyc7XG5cbiAgICAgICAgcGFyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItZHJhdycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVCb2FyZENlbGxEaXZzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50Q2VsbCA9IGNlbGw7XG4gICAgICAgIGNvbnN0IGNlbGxTeW1ib2xEaXYgPSBwYXJlbnRDZWxsLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQudHVybiA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jZWxsUm93LCAxMCk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jZWxsQ29sLCAxMCk7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdDZWxscyA9IGdhbWVCb2FyZC5nZXRXaW5uaW5nQ2VsbHMoKTtcbiAgICAgICAgY29uc3QgaXNXaW5uaW5nQ2VsbCA9IHdpbm5pbmdDZWxscy5zb21lKFxuICAgICAgICAgICh3aW5uaW5nQ2VsbCkgPT4gd2lubmluZ0NlbGxbMF0gPT09IHJvdyAmJiB3aW5uaW5nQ2VsbFsxXSA9PT0gY29sXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzV2lubmluZ0NlbGwpIHtcbiAgICAgICAgICBwYXJlbnRDZWxsLmRhdGFzZXQud2luID0gd2lubmVyLmdldFN5bWJvbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dHYW1lUmVzdWx0ID0gKGdhbWVTdGF0dXMpID0+IHtcbiAgY29uc3QgeyBpc0RyYXcsIHdpbm5lciB9ID0gZ2FtZVN0YXR1cztcblxuICBjb25zdCByZXN1bHRNb2RhbFdpbm5lclN5bWJvbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5yZXN1bHQtbW9kYWxfX3dpbm5lci1zeW1ib2wnXG4gICk7XG4gIGNvbnN0IHJlc3VsdE1vZGFsTWVzc2FnZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucmVzdWx0LW1vZGFsX19tZXNzYWdlIHAnXG4gICk7XG5cbiAgaWYgKGlzRHJhdykge1xuICAgIHJlc3VsdE1vZGFsV2lubmVyU3ltYm9sRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgcmVzdWx0TW9kYWxNZXNzYWdlUC50ZXh0Q29udGVudCA9IFwiSXQncyBhIGRyYXchXCI7XG4gIH0gZWxzZSBpZiAod2lubmVyKSB7XG4gICAgcmVzdWx0TW9kYWxXaW5uZXJTeW1ib2xEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICByZXN1bHRNb2RhbE1lc3NhZ2VQLmRhdGFzZXQud2lubmVyID0gd2lubmVyLmdldFN5bWJvbCgpO1xuICAgIHJlc3VsdE1vZGFsV2lubmVyU3ltYm9sRGl2LmRhdGFzZXQud2lubmVyID0gd2lubmVyLmdldFN5bWJvbCgpO1xuICAgIHJlc3VsdE1vZGFsTWVzc2FnZVAudGV4dENvbnRlbnQgPSAnV29uIHRoZSBnYW1lISc7XG4gIH1cbiAgdG9nZ2xlRWxlbWVudChyZXN1bHRNb2RhbENvbnRhaW5lcik7XG59O1xuXG5jb25zdCBnZXRQbGF5ZXJEYXRhID0gKHR5cGVSYWRpb3MsIG5hbWVJbnB1dCwgYWlMZXZlbFNlbGVjdCkgPT4gKHtcbiAgdHlwZTogdHlwZVJhZGlvc1swXS5jaGVja2VkID8gJ0h1bWFuJyA6ICdBSScsXG4gIG5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgbGV2ZWw6IGFpTGV2ZWxTZWxlY3QudmFsdWUsXG59KTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgUHViU3ViLnB1Ymxpc2goR0FNRV9TVEFSVEVELCB7IHBsYXllcjEsIHBsYXllcjIgfSk7XG5cbiAgaWYgKHBsYXllcjEudHlwZSA9PT0gJ0FJJyAmJiBwbGF5ZXIyLnR5cGUgPT09ICdBSScpIHtcbiAgICBQdWJTdWIucHVibGlzaChHQU1FX1NUQVJURURfQUlfVlNfQUkpO1xuICB9IGVsc2UgaWYgKHBsYXllcjEudHlwZSA9PT0gJ0FJJykge1xuICAgIFB1YlN1Yi5wdWJsaXNoKEFJX1RVUk4pO1xuICB9XG59O1xuXG5jb25zdCByZXN0YXJ0QnRuQ2xpY2tMaXN0ZW5lciA9IChlKSA9PiB7XG4gIFB1YlN1Yi5wdWJsaXNoKEdBTUVfUkVTVEFSVEVEKTtcblxuICBjb25zdCBwbGF5ZXIxID0gZ2V0UGxheWVyRGF0YShcbiAgICBwbGF5ZXIxVHlwZVJhZGlvcyxcbiAgICBwbGF5ZXIxTmFtZUlucHV0LFxuICAgIHBsYXllcjFBSUxldmVsU2VsZWN0XG4gICk7XG5cbiAgY29uc3QgcGxheWVyMiA9IGdldFBsYXllckRhdGEoXG4gICAgcGxheWVyMlR5cGVSYWRpb3MsXG4gICAgcGxheWVyMk5hbWVJbnB1dCxcbiAgICBwbGF5ZXIyQUlMZXZlbFNlbGVjdFxuICApO1xuXG4gIHN0YXJ0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTtcbn07XG5cbmNvbnN0IHF1aXRCdG5DbGlja0xpc3RlbmVyID0gKGUpID0+IHtcbiAgUHViU3ViLnB1Ymxpc2goR0FNRV9RVUlUKTtcblxuICBwbGF5ZXIxTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gIHBsYXllcjJOYW1lSW5wdXQudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IGhhbmRsZUdhbWVJbml0aWFsaXplclNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVBsYXllclR5cGVDaGFuZ2UgPSAoXG4gICAgcGxheWVyVHlwZVJhZGlvcyxcbiAgICBwbGF5ZXJJY29uSW1nLFxuICAgIHBsYXllck5hbWVEaXYsXG4gICAgcGxheWVyQUlUeXBlRGl2XG4gICkgPT4ge1xuICAgIFsuLi5wbGF5ZXJUeXBlUmFkaW9zXS5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgIGlmIChyYWRpby52YWx1ZSA9PT0gJ0FJJykge1xuICAgICAgICAgICAgc2V0UGxheWVySWNvbihwbGF5ZXJJY29uSW1nLCAnQUknKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UGxheWVySWNvbihwbGF5ZXJJY29uSW1nLCAnSHVtYW4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b2dnbGVFbGVtZW50KHBsYXllck5hbWVEaXYpO1xuICAgICAgICAgIHRvZ2dsZUVsZW1lbnQocGxheWVyQUlUeXBlRGl2KTtcblxuICAgICAgICAgIHBsYXllck5hbWVEaXYubGFzdEVsZW1lbnRDaGlsZC50b2dnbGVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZUJ0bkxpc3RlbmVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwbGF5ZXIxID0gZ2V0UGxheWVyRGF0YShcbiAgICAgIHBsYXllcjFUeXBlUmFkaW9zLFxuICAgICAgcGxheWVyMU5hbWVJbnB1dCxcbiAgICAgIHBsYXllcjFBSUxldmVsU2VsZWN0XG4gICAgKTtcblxuICAgIGNvbnN0IHBsYXllcjIgPSBnZXRQbGF5ZXJEYXRhKFxuICAgICAgcGxheWVyMlR5cGVSYWRpb3MsXG4gICAgICBwbGF5ZXIyTmFtZUlucHV0LFxuICAgICAgcGxheWVyMkFJTGV2ZWxTZWxlY3RcbiAgICApO1xuXG4gICAgaWYgKHBsYXllcjEudHlwZSA9PT0gJ0h1bWFuJyAmJiBwbGF5ZXIxLm5hbWUgPT09ICcnKSB7XG4gICAgICBwbGF5ZXIxTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgIGlmIChwbGF5ZXIyLnR5cGUgPT09ICdIdW1hbicgJiYgcGxheWVyMi5uYW1lID09PSAnJykge1xuICAgICAgICBwbGF5ZXIyTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyMi50eXBlID09PSAnSHVtYW4nICYmIHBsYXllcjIubmFtZSA9PT0gJycpIHtcbiAgICAgIHBsYXllcjJOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXG4gICAgICBpZiAocGxheWVyMS50eXBlID09PSAnSHVtYW4nICYmIHBsYXllcjEubmFtZSA9PT0gJycpIHtcbiAgICAgICAgcGxheWVyMU5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXBwbHlUcmFuc2l0aW9uKGUudGFyZ2V0KTtcbiAgICBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gIH07XG5cbiAgaGFuZGxlUGxheWVyVHlwZUNoYW5nZShcbiAgICBwbGF5ZXIxVHlwZVJhZGlvcyxcbiAgICBwbGF5ZXIxSWNvbkltZyxcbiAgICBwbGF5ZXIxTmFtZURpdixcbiAgICBwbGF5ZXIxQUlUeXBlRGl2XG4gICk7XG4gIGhhbmRsZVBsYXllclR5cGVDaGFuZ2UoXG4gICAgcGxheWVyMlR5cGVSYWRpb3MsXG4gICAgcGxheWVyMkljb25JbWcsXG4gICAgcGxheWVyMk5hbWVEaXYsXG4gICAgcGxheWVyMkFJVHlwZURpdlxuICApO1xuXG4gIC8qIEV2ZW50IExpc3RlbmVycyAqL1xuXG4gIHBsYXllcjFOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgfSk7XG4gIHBsYXllcjJOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgfSk7XG5cbiAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lQnRuTGlzdGVuZXIpO1xuICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgcmVtb3ZlQ2xpY2tlZENsYXNzKGUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2FtZUluaXRpYWxpemVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgZ2FtZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9LCAzMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZUdhbWVTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX3Jlc3RhcnQtYnRuJyk7XG4gIGNvbnN0IHF1aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fcXVpdC1idG4nKTtcblxuICBjb25zdCBjZWxsQ2xpY2tMaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByb3cgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY2VsbFJvdztcbiAgICBjb25zdCBjb2wgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY2VsbENvbDtcblxuICAgIFB1YlN1Yi5wdWJsaXNoKENFTExfQ0xJQ0tFRCwgeyByb3csIGNvbCwgY2VsbERpdjogZS50YXJnZXQucGFyZW50RWxlbWVudCB9KTtcbiAgfTtcblxuICAvKiBFdmVudCBsaXN0ZW5lcnMgKi9cbiAgZ2FtZUJvYXJkQ2VsbERpdnMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQ2xpY2tMaXN0ZW5lcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVtb3ZlQ2xpY2tlZENsYXNzKTtcbiAgfSk7XG5cbiAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhcHBseVRyYW5zaXRpb24ocmVzdGFydEJ0bik7XG4gICAgcmVzdGFydEJ0bkNsaWNrTGlzdGVuZXIoKTtcbiAgfSk7XG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgcmVtb3ZlQ2xpY2tlZENsYXNzKGUpO1xuICB9KTtcblxuICBxdWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFwcGx5VHJhbnNpdGlvbihxdWl0QnRuKTtcbiAgICBxdWl0QnRuQ2xpY2tMaXN0ZW5lcigpO1xuICB9KTtcbiAgcXVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKGUpID0+IHtcbiAgICByZW1vdmVDbGlja2VkQ2xhc3MoZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnYW1lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgZ2FtZUluaXRpYWxpemVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgIH0sIDMwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUmVzdWx0U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtbW9kYWxfX3Jlc3RhcnQtYnRuJyk7XG4gIGNvbnN0IHF1aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LW1vZGFsX19xdWl0LWJ0bicpO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtbW9kYWxfX2Nsb3NlLWJ0bicpO1xuXG4gIC8qIEV2ZW50IGxpc3RlbmVycyAqL1xuICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBhcHBseVRyYW5zaXRpb24oZS50YXJnZXQpO1xuICAgIHJlc3RhcnRCdG5DbGlja0xpc3RlbmVyKCk7XG4gIH0pO1xuICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZSkgPT4ge1xuICAgIHJlbW92ZUNsaWNrZWRDbGFzcyhlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc3VsdE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG4gIHF1aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFwcGx5VHJhbnNpdGlvbihlLnRhcmdldCk7XG4gICAgcXVpdEJ0bkNsaWNrTGlzdGVuZXIoKTtcbiAgfSk7XG4gIHF1aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgcmVtb3ZlQ2xpY2tlZENsYXNzKGUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdWx0TW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIGdhbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICBnYW1lSW5pdGlhbGl6ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc3VsdE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgaGFuZGxlR2FtZUluaXRpYWxpemVyU2VjdGlvbigpO1xuICBoYW5kbGVHYW1lU2VjdGlvbigpO1xuICBoYW5kbGVSZXN1bHRTZWN0aW9uKCk7XG59O1xuXG5jb25zdCBzdWJzY3JpYmVUb0V2ZW50cyA9ICgpID0+IHtcbiAgUHViU3ViLnN1YnNjcmliZShQT1NUX0NFTExfQ0xJQ0tFRCwgYXBwbHlUcmFuc2l0aW9uKTtcbiAgUHViU3ViLnN1YnNjcmliZShTVEFUVVNfQ0hBTkdFRCwgdXBkYXRlR2FtZVN0YXR1cyk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoQk9BUkRfQ0hBTkdFRCwgdXBkYXRlR2FtZUJvYXJkKTtcbiAgUHViU3ViLnN1YnNjcmliZShHQU1FX0VOREVELCAoZ2FtZVN0YXR1cykgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0dhbWVSZXN1bHQoZ2FtZVN0YXR1cyk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0LFxuICBzdWJzY3JpYmVUb0V2ZW50cyxcbn07XG4iLCJleHBvcnQgY29uc3QgR0FNRV9TVEFSVEVEID0gU3ltYm9sKCdHQU1FX1NUQVJURUQnKTtcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVJURURfQUlfVlNfQUkgPSBTeW1ib2woJ0dBTUVfU1RBUlRFRF9BSV9WU19BSScpO1xuZXhwb3J0IGNvbnN0IEdBTUVfUkVTVEFSVEVEID0gU3ltYm9sKCdHQU1FX1JFU1RBUlRFRCcpO1xuZXhwb3J0IGNvbnN0IEdBTUVfUVVJVCA9IFN5bWJvbCgnR0FNRV9RVUlUJyk7XG5leHBvcnQgY29uc3QgR0FNRV9FTkRFRCA9IFN5bWJvbCgnR0FNRV9FTkRFRCcpO1xuZXhwb3J0IGNvbnN0IEFJX1RVUk4gPSBTeW1ib2woJ0FJX1RVUk4nKTtcbmV4cG9ydCBjb25zdCBTVEFUVVNfQ0hBTkdFRCA9IFN5bWJvbCgnU1RBVFVTX0NIQU5HRUQnKTtcbmV4cG9ydCBjb25zdCBCT0FSRF9DSEFOR0VEID0gU3ltYm9sKCdCT0FSRF9DSEFOR0VEJyk7XG5leHBvcnQgY29uc3QgQ0VMTF9DTElDS0VEID0gU3ltYm9sKCdDRUxMX0NMSUNLRUQnKTtcbmV4cG9ydCBjb25zdCBQT1NUX0NFTExfQ0xJQ0tFRCA9IFN5bWJvbCgnUE9TVF9DRUxMX0NMSUNLRUQnKTtcbiIsImltcG9ydCBDZWxsIGZyb20gJy4vY2VsbC5qcyc7XG5cbi8qKlxuICogZ2FtZUJvYXJkIGlzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYSBnYW1lIGJvYXJkIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gZ2FtZUJvYXJkIG9iamVjdFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gcmVzZXQgLSByZXNldHMgdGhlIGJvYXJkIHRvIGFsbCBlbXB0eSBjZWxsc1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0Qm9hcmQgLSByZXR1cm5zIHRoZSBib2FyZFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0Q2VsbCAtIHJldHVybnMgdGhlIGNlbGwgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRDZWxsIC0gc2V0cyB0aGUgY2VsbCBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgdG8gdGhlIGdpdmVuIHZhbHVlXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZXNldENlbGwgLSByZXNldHMgdGhlIGNlbGwgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBpc0Z1bGwgLSByZXR1cm5zIHRydWUgaWYgdGhlIGJvYXJkIGlzIGZ1bGwsIGZhbHNlIG90aGVyd2lzZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0RW1wdHlDZWxscyAtIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGluZGljZXMgb2YgZW1wdHkgY2VsbHNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNoZWNrV2luIC0gcmV0dXJucyBmYWxzZSBpZiBubyB3aW5uZXIsIG90aGVyd2lzZSByZXR1cm5zIHRoZSB3aW5uZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHByaW50Qm9hcmQgLSBwcmludHMgdGhlIGJvYXJkIHRvIHRoZSBjb25zb2xlXG4gKi9cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgLy8gYm9hcmQgaXMgYSAzeDMgYXJyYXkgb2YgY2VsbHNcbiAgY29uc3QgYm9hcmQgPSBbW10sIFtdLCBbXV07XG5cbiAgLyoqXG4gICAqIHJlc2V0IHJlc2V0cyB0aGUgYm9hcmQgdG8gYWxsIGVtcHR5IGNlbGxzXG4gICAqL1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBDZWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBnZXRCb2FyZCByZXR1cm5zIHRoZSBib2FyZFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGJvYXJkXG4gICAqL1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIC8qKlxuICAgKiBnZXRDZWxsIHJldHVybnMgdGhlIGNlbGwgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gY2FsbCBpdCB3aXRoIHRoZSB4IGNvb3JkaW5hdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBjYWxsIGl0IHdpdGggdGhlIHkgY29vcmRpbmF0ZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDZWxsIG9iamVjdFxuICAgKi9cbiAgY29uc3QgZ2V0Q2VsbCA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHggPj0gMCAmJiB4IDwgMyAmJiB5ID49IDAgJiYgeSA8IDMpIHtcbiAgICAgIHJldHVybiBib2FyZFt4XVt5XTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIENvb3JkaW5hdGVzICgke3h9LCAke3l9KWApO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBzZXRDZWxsIHNldHMgdGhlIGNlbGwgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHRvIHRoZSBnaXZlbiB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGNhbGwgaXQgd2l0aCB0aGUgeCBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gY2FsbCBpdCB3aXRoIHRoZSB5IGNvb3JkaW5hdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gY2FsbCBpdCB3aXRoICdYJywgJ08nLCBvciAnXydcbiAgICovXG4gIGNvbnN0IHNldENlbGwgPSAoeCwgeSwgdmFsdWUpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0uZ2V0VmFsdWUoKSAhPT0gJ18nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDZWxsICgke3h9LCAke3l9KSBpcyBhbHJlYWR5IG9jY3VwaWVkYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYm9hcmRbeF1beV0uc2V0VmFsdWUodmFsdWUpO1xuXG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICB9O1xuXG4gIC8qKlxuICAgKiByZXNldENlbGwgcmVzZXRzIHRoZSBjZWxsIGF0IHRoZSBnaXZlbiBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGNhbGwgaXQgd2l0aCB0aGUgeCBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5ICAtIGNhbGwgaXQgd2l0aCB0aGUgeSBjb29yZGluYXRlXG4gICAqL1xuICBjb25zdCByZXNldENlbGwgPSAoeCwgeSkgPT4ge1xuICAgIGJvYXJkW3hdW3ldLnNldFZhbHVlKCdfJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGlzRnVsbCByZXR1cm5zIHRydWUgaWYgdGhlIGJvYXJkIGlzIGZ1bGwsIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXNGdWxsXG4gICAqL1xuICBjb25zdCBpc0Z1bGwgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5nZXRWYWx1ZSgpID09PSAnXycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldEVtcHR5Q2VsbHMgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgaW5kaWNlcyBvZiBlbXB0eSBjZWxsc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGVtcHR5Q2VsbHNcbiAgICovXG4gIGNvbnN0IGdldEVtcHR5Q2VsbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZW1wdHlDZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0uZ2V0VmFsdWUoKSA9PT0gJ18nKSB7XG4gICAgICAgICAgZW1wdHlDZWxscy5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5Q2VsbHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNoZWNrV2luIHJldHVybnMgZmFsc2UgaWYgbm8gd2lubmVyLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgd2lubmVyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB3aW5uZXIgLSBmYWxzZSBpZiBubyB3aW5uZXIsIG90aGVyd2lzZSByZXR1cm5zIHRoZSB3aW5uZXJcbiAgICovXG4gIGNvbnN0IGNoZWNrV2luID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkW2ldWzBdLmdldFZhbHVlKCkgPT09IGJvYXJkW2ldWzFdLmdldFZhbHVlKCkgJiZcbiAgICAgICAgYm9hcmRbaV1bMV0uZ2V0VmFsdWUoKSA9PT0gYm9hcmRbaV1bMl0uZ2V0VmFsdWUoKSAmJlxuICAgICAgICBib2FyZFtpXVswXS5nZXRWYWx1ZSgpICE9PSAnXydcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYm9hcmRbaV1bMF0uZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbMF1baV0uZ2V0VmFsdWUoKSA9PT0gYm9hcmRbMV1baV0uZ2V0VmFsdWUoKSAmJlxuICAgICAgICBib2FyZFsxXVtpXS5nZXRWYWx1ZSgpID09PSBib2FyZFsyXVtpXS5nZXRWYWx1ZSgpICYmXG4gICAgICAgIGJvYXJkWzBdW2ldLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBib2FyZFswXVtpXS5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBib2FyZFswXVswXS5nZXRWYWx1ZSgpID09PSBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpID09PSBib2FyZFsyXVsyXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFswXVswXS5nZXRWYWx1ZSgpICE9PSAnXydcbiAgICApIHtcbiAgICAgIHJldHVybiBib2FyZFswXVswXS5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBib2FyZFswXVsyXS5nZXRWYWx1ZSgpID09PSBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpID09PSBib2FyZFsyXVswXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFswXVsyXS5nZXRWYWx1ZSgpICE9PSAnXydcbiAgICApIHtcbiAgICAgIHJldHVybiBib2FyZFswXVsyXS5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldFdpbm5pbmdDZWxscyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBpbmRpY2VzIG9mIHRoZSB3aW5uaW5nIGNlbGxzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gd2lubmluZ0NlbGxzXG4gICAqL1xuICBjb25zdCBnZXRXaW5uaW5nQ2VsbHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbaV1bMF0uZ2V0VmFsdWUoKSA9PT0gYm9hcmRbaV1bMV0uZ2V0VmFsdWUoKSAmJlxuICAgICAgICBib2FyZFtpXVsxXS5nZXRWYWx1ZSgpID09PSBib2FyZFtpXVsyXS5nZXRWYWx1ZSgpICYmXG4gICAgICAgIGJvYXJkW2ldWzBdLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgW2ksIDBdLFxuICAgICAgICAgIFtpLCAxXSxcbiAgICAgICAgICBbaSwgMl0sXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkWzBdW2ldLmdldFZhbHVlKCkgPT09IGJvYXJkWzFdW2ldLmdldFZhbHVlKCkgJiZcbiAgICAgICAgYm9hcmRbMV1baV0uZ2V0VmFsdWUoKSA9PT0gYm9hcmRbMl1baV0uZ2V0VmFsdWUoKSAmJlxuICAgICAgICBib2FyZFswXVtpXS5nZXRWYWx1ZSgpICE9PSAnXydcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFswLCBpXSxcbiAgICAgICAgICBbMSwgaV0sXG4gICAgICAgICAgWzIsIGldLFxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBib2FyZFswXVswXS5nZXRWYWx1ZSgpID09PSBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpID09PSBib2FyZFsyXVsyXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFswXVswXS5nZXRWYWx1ZSgpICE9PSAnXydcbiAgICApIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMiwgMl0sXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBib2FyZFswXVsyXS5nZXRWYWx1ZSgpID09PSBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFsxXVsxXS5nZXRWYWx1ZSgpID09PSBib2FyZFsyXVswXS5nZXRWYWx1ZSgpICYmXG4gICAgICBib2FyZFswXVsyXS5nZXRWYWx1ZSgpICE9PSAnXydcbiAgICApIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFswLCAyXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMiwgMF0sXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNoZWNrRHJhdyByZXR1cm5zIHRydWUgaWYgdGhlIGdhbWUgaXMgYSBkcmF3LCBmYWxzZSBvdGhlcndpc2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGlzRHJhd1xuICAgKi9cbiAgY29uc3QgY2hlY2tEcmF3ID0gKCkgPT4gaXNGdWxsKCkgJiYgIWNoZWNrV2luKCk7XG5cbiAgLyoqXG4gICAqIHByaW50Qm9hcmQgcHJpbnRzIHRoZSBib2FyZCB0byB0aGUgY29uc29sZVxuICAgKi9cbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYHJvdyR7XG4gICAgICAgICAgcm93SW5kZXggKyAxXG4gICAgICAgIH06ICR7cm93WzBdLmdldFZhbHVlKCl9ICAke3Jvd1sxXS5nZXRWYWx1ZSgpfSAgJHtyb3dbMl0uZ2V0VmFsdWUoKX1gXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlc2V0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZXNldCxcbiAgICBnZXRCb2FyZCxcbiAgICBnZXRDZWxsLFxuICAgIHNldENlbGwsXG4gICAgcmVzZXRDZWxsLFxuICAgIGNoZWNrRHJhdyxcbiAgICBnZXRFbXB0eUNlbGxzLFxuICAgIGNoZWNrV2luLFxuICAgIGdldFdpbm5pbmdDZWxscyxcbiAgICBwcmludEJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkKCk7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJy4vcHVic3ViLmpzJztcbmltcG9ydCB7XG4gIEdBTUVfU1RBUlRFRCxcbiAgR0FNRV9TVEFSVEVEX0FJX1ZTX0FJLFxuICBBSV9UVVJOLFxuICBTVEFUVVNfQ0hBTkdFRCxcbiAgQk9BUkRfQ0hBTkdFRCxcbiAgR0FNRV9FTkRFRCxcbiAgQ0VMTF9DTElDS0VELFxuICBHQU1FX1JFU1RBUlRFRCxcbiAgR0FNRV9RVUlULFxuICBQT1NUX0NFTExfQ0xJQ0tFRCxcbn0gZnJvbSAnLi9ldmVudC10eXBlcy5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCB0aW1lb3V0SWRMaXN0ID0gW107XG5cbmNvbnN0IG5vdGlmeUdhbWVDaGFuZ2VkID0gKGdhbWVTdGF0dXMpID0+IHtcbiAgUHViU3ViLnB1Ymxpc2goU1RBVFVTX0NIQU5HRUQsIGdhbWVTdGF0dXMpO1xuICBQdWJTdWIucHVibGlzaChCT0FSRF9DSEFOR0VELCBnYW1lU3RhdHVzKTtcbiAgaWYgKGdhbWUuaXNHYW1lT3ZlcigpKSB7XG4gICAgdGltZW91dElkTGlzdC5mb3JFYWNoKGNsZWFyVGltZW91dCk7XG4gICAgUHViU3ViLnB1Ymxpc2goR0FNRV9FTkRFRCwgZ2FtZVN0YXR1cyk7XG4gIH1cbn07XG5cbmNvbnN0IHN1YnNjcmliZVRvRXZlbnRzID0gKCkgPT4ge1xuICBQdWJTdWIuc3Vic2NyaWJlKEdBTUVfU1RBUlRFRCwgKHBsYXllcnMpID0+IHtcbiAgICBnYW1lLnN0YXJ0R2FtZShwbGF5ZXJzLnBsYXllcjEsIHBsYXllcnMucGxheWVyMik7XG5cbiAgICBjb25zdCBnYW1lU3RhdHVzID0gZ2FtZS5nZXRHYW1lU3RhdHVzKCk7XG4gICAgUHViU3ViLnB1Ymxpc2goU1RBVFVTX0NIQU5HRUQsIGdhbWVTdGF0dXMpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKEJPQVJEX0NIQU5HRUQsIGdhbWVTdGF0dXMpO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKEdBTUVfU1RBUlRFRF9BSV9WU19BSSwgKCkgPT4ge1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWUuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgZ2FtZS5wbGF5QUkoKTtcbiAgICAgICAgICBnYW1lLnN3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcblxuICAgICAgICAgIG5vdGlmeUdhbWVDaGFuZ2VkKGdhbWUuZ2V0R2FtZVN0YXR1cygpKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwMCAqIGkpO1xuICAgICAgdGltZW91dElkTGlzdC5wdXNoKGlkKTtcblxuICAgICAgaSArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShBSV9UVVJOLCAoKSA9PiB7XG4gICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllcigpLmdldFR5cGUoKSAhPT0gJ0FJJyB8fCBnYW1lLmlzR2FtZU92ZXIoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnYW1lLnBsYXlBSSgpO1xuICAgICAgZ2FtZS5zd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgICBub3RpZnlHYW1lQ2hhbmdlZChnYW1lLmdldEdhbWVTdGF0dXMoKSk7XG4gICAgfSwgMjAwMCk7XG4gICAgdGltZW91dElkTGlzdC5wdXNoKGlkKTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShDRUxMX0NMSUNLRUQsIChjZWxsKSA9PiB7XG4gICAgaWYgKGdhbWUuaXNHYW1lT3ZlcigpIHx8IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpLmdldFR5cGUoKSA9PT0gJ0FJJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFB1YlN1Yi5wdWJsaXNoKFBPU1RfQ0VMTF9DTElDS0VELCBjZWxsLmNlbGxEaXYpO1xuXG4gICAgY29uc3QgeyByb3csIGNvbCB9ID0gY2VsbDtcblxuICAgIGdhbWUucGxheUh1bWFuKFtyb3csIGNvbF0pO1xuICAgIGdhbWUuc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgbm90aWZ5R2FtZUNoYW5nZWQoZ2FtZS5nZXRHYW1lU3RhdHVzKCkpO1xuXG4gICAgUHViU3ViLnB1Ymxpc2goQUlfVFVSTik7XG4gIH0pO1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoR0FNRV9SRVNUQVJURUQsICgpID0+IHtcbiAgICB0aW1lb3V0SWRMaXN0LmZvckVhY2goKGlkKSA9PiBjbGVhclRpbWVvdXQoaWQpKTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShHQU1FX1FVSVQsICgpID0+IHtcbiAgICBnYW1lLnJlc2V0R2FtZSgpO1xuICAgIHRpbWVvdXRJZExpc3QuZm9yRWFjaCgoaWQpID0+IGNsZWFyVGltZW91dChpZCkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgc3Vic2NyaWJlVG9FdmVudHMgfTtcbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi9nYW1lLWJvYXJkLmpzJztcbmltcG9ydCBIdW1hblBsYXllciBmcm9tICcuL2h1bWFuLXBsYXllci5qcyc7XG5pbXBvcnQge1xuICBFYXN5QUlQbGF5ZXIsXG4gIE1lZGl1bUFJUGxheWVyLFxuICBIYXJkQUlQbGF5ZXIsXG4gIFVuYmVhdGFibGVBSVBsYXllcixcbn0gZnJvbSAnLi9haS1wbGF5ZXIuanMnO1xuXG5sZXQgcGxheWVyMTtcbmxldCBwbGF5ZXIyO1xubGV0IGN1cnJlbnRQbGF5ZXI7XG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbmxldCB3aW5uZXIgPSBudWxsO1xuXG4vKipcbiAqIGdldEdhbWVCb2FyZCByZXR1cm5zIHRoZSBnYW1lIGJvYXJkXG4gKiBAcmV0dXJucyB7Z2FtZUJvYXJkfSBnYW1lQm9hcmRcbiAqL1xuY29uc3QgZ2V0R2FtZUJvYXJkID0gKCkgPT4gZ2FtZUJvYXJkO1xuXG4vKipcbiAqIGdldFBsYXllcjEgcmV0dXJucyBwbGF5ZXIgMSAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllcixcbiAqIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqIEByZXR1cm5zIHtPYmplY3R9IChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLCBNZWRpdW1BSVBsYXllciwgSGFyZEFJUGxheWVyLCBVbmJlYXRhYmxlQUlQbGF5ZXIpXG4gKi9cbmNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBwbGF5ZXIxO1xuXG4vKipcbiAqIHNldFBsYXllcjEgc2V0cyBwbGF5ZXIgMSAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllcixcbiAqIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqIEBwYXJhbSB7T2JqZWN0fSBwbGF5ZXIgLSBjYWxsIGl0IHdpdGggKEh1bWFuUGxheWVyLCBFYXN5QUlQbGF5ZXIsXG4gKiBNZWRpdW1BSVBsYXllciwgSGFyZEFJUGxheWVyLCBVbmJlYXRhYmxlQUlQbGF5ZXIpXG4gKi9cbmNvbnN0IHNldFBsYXllcjEgPSAocGxheWVyKSA9PiB7XG4gIHBsYXllcjEgPSBwbGF5ZXI7XG59O1xuXG4vKipcbiAqIGdldFBsYXllcjIgcmV0dXJucyBwbGF5ZXIgMiAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllcixcbiAqIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqIEByZXR1cm5zIHtPYmplY3R9IChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLCBNZWRpdW1BSVBsYXllciwgSGFyZEFJUGxheWVyLCBVbmJlYXRhYmxlQUlQbGF5ZXIpXG4gKi9cbmNvbnN0IGdldFBsYXllcjIgPSAoKSA9PiBwbGF5ZXIyO1xuXG4vKipcbiAqIHNldFBsYXllcjIgc2V0cyBwbGF5ZXIgMiAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllcixcbiAqIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqIEBwYXJhbSB7T2JqZWN0fSBwbGF5ZXIgLSBjYWxsIGl0IHdpdGggKEh1bWFuUGxheWVyLCBFYXN5QUlQbGF5ZXIsXG4gKiBNZWRpdW1BSVBsYXllciwgSGFyZEFJUGxheWVyLCBVbmJlYXRhYmxlQUlQbGF5ZXIpXG4gKi9cbmNvbnN0IHNldFBsYXllcjIgPSAocGxheWVyKSA9PiB7XG4gIHBsYXllcjIgPSBwbGF5ZXI7XG59O1xuXG4vKipcbiAqIGdldEN1cnJlbnRQbGF5ZXIgcmV0dXJucyB0aGUgY3VycmVudCBwbGF5ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLCBNZWRpdW1BSVBsYXllciwgSGFyZEFJUGxheWVyLCBVbmJlYXRhYmxlQUlQbGF5ZXIpXG4gKi9cbmNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiBjdXJyZW50UGxheWVyO1xuXG4vKipcbiAqIHNldEN1cnJlbnRQbGF5ZXIgc2V0cyB0aGUgY3VycmVudCBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwbGF5ZXIgLSBjYWxsIGl0IHdpdGggcGxheWVyIDEgb3IgcGxheWVyIDJcbiAqL1xuY29uc3Qgc2V0Q3VycmVudFBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgY3VycmVudFBsYXllciA9IHBsYXllcjtcbn07XG5cbi8qKlxuICogaXNHYW1lT3ZlciByZXR1cm5zIHRydWUgaWYgdGhlIGdhbWUgaXMgb3ZlciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gZ2FtZU92ZXJcbiAqL1xuY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IGdhbWVPdmVyO1xuXG4vKipcbiAqIHNldEdhbWVPdmVyIHNldHMgdGhlIGdhbWVPdmVyIHZhcmlhYmxlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gY2FsbCBpdCB3aXRoIHRydWUgb3IgZmFsc2VcbiAqL1xuY29uc3Qgc2V0R2FtZU92ZXIgPSAodmFsdWUpID0+IHtcbiAgZ2FtZU92ZXIgPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogZ2V0V2lubmVyIHJldHVybnMgdGhlIHdpbm5lciAobnVsbCBpZiBubyB3aW5uZXIpXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllciwgTWVkaXVtQUlQbGF5ZXIsIEhhcmRBSVBsYXllciwgVW5iZWF0YWJsZUFJUGxheWVyKVxuICogb3IgbnVsbFxuICovXG5jb25zdCBnZXRXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XG5cbi8qKlxuICogc2V0V2lubmVyIHNldHMgdGhlIHdpbm5lclxuICogQHBhcmFtIHtPYmplY3R9IHBsYXllciAtIGNhbGwgaXQgd2l0aCBwbGF5ZXIgMSBvciBwbGF5ZXIgMlxuICogb3IgbnVsbCBpZiBubyB3aW5uZXJcbiAqL1xuY29uc3Qgc2V0V2lubmVyID0gKHBsYXllcikgPT4ge1xuICB3aW5uZXIgPSBwbGF5ZXI7XG59O1xuXG4vKipcbiAqIGNoZWNrRHJhdyByZXR1cm5zIHRydWUgaWYgdGhlIGdhbWUgaXMgYSBkcmF3LCBmYWxzZSBvdGhlcndpc2VcbiAqIEByZXR1cm5zIHtib29sZWFufSBkcmF3XG4gKi9cbmNvbnN0IGNoZWNrRHJhdyA9ICgpID0+IGdhbWVCb2FyZC5jaGVja0RyYXcoKTtcblxuLyoqXG4gKiBzd2l0Y2hDdXJyZW50UGxheWVyIHN3aXRjaGVzIHRoZSBjdXJyZW50IHBsYXllclxuICovXG5jb25zdCBzd2l0Y2hDdXJyZW50UGxheWVyID0gKCkgPT4ge1xuICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgIHNldEN1cnJlbnRQbGF5ZXIocGxheWVyMik7XG4gIH0gZWxzZSB7XG4gICAgc2V0Q3VycmVudFBsYXllcihwbGF5ZXIxKTtcbiAgfVxufTtcblxuLyoqXG4gKiByZXNldEdhbWUgcmVzZXRzIHRoZSBnYW1lXG4gKi9cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgZ2FtZUJvYXJkLnJlc2V0KCk7XG4gIHNldEdhbWVPdmVyKGZhbHNlKTtcbiAgc2V0V2lubmVyKG51bGwpO1xufTtcblxuLyoqXG4gKiBwbGF5IHBsYXlzIGEgcm91bmQgb2YgdGhlIGdhbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGNlbGwgLSBjYWxsIGl0IHdpdGggdGhlIGNlbGwgdG8gcGxheSAoZS5nLiBbMCwgMF0pXG4gKi9cbmNvbnN0IHBsYXkgPSAoY2VsbCkgPT4ge1xuICBpZiAoIWNlbGwgfHwgY2VsbFswXSA8IDAgfHwgY2VsbFswXSA+IDIgfHwgY2VsbFsxXSA8IDAgfHwgY2VsbFsxXSA+IDIpIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGNlbGw6ICR7Y2VsbH1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZ2FtZU92ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGdhbWVCb2FyZC5zZXRDZWxsKGNlbGxbMF0sIGNlbGxbMV0sIGN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCkpKSB7XG4gICAgaWYgKGdhbWVCb2FyZC5jaGVja1dpbigpKSB7XG4gICAgICBzZXRXaW5uZXIoY3VycmVudFBsYXllcik7XG4gICAgICBzZXRHYW1lT3Zlcih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZC5jaGVja0RyYXcoKSkge1xuICAgICAgc2V0R2FtZU92ZXIodHJ1ZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIHBsYXlBSSBwbGF5cyBhIHJvdW5kIG9mIHRoZSBnYW1lIGZvciB0aGUgQUlcbiAqL1xuY29uc3QgcGxheUFJID0gKCkgPT4ge1xuICBpZiAoZ2FtZU92ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBuZXh0TW92ZSA9IGN1cnJlbnRQbGF5ZXIuZ2V0TmV4dE1vdmUoZ2FtZUJvYXJkKTtcbiAgcGxheShuZXh0TW92ZSk7XG59O1xuXG4vKipcbiAqIHBsYXlSb3VuZCBwbGF5cyBhIHJvdW5kIG9mIHRoZSBnYW1lXG4gKiBJZiB0aGUgbmV4dCBwbGF5ZXIgaXMgYW4gQUksIGl0IHdpbGwgcGxheSBmb3IgdGhlIEFJXG4gKiBAcGFyYW0ge0FycmF5fSBjZWxsIC0gY2FsbCBpdCB3aXRoIHRoZSBjZWxsIHRvIHBsYXkgKGUuZy4gWzAsIDBdKVxuICovXG5jb25zdCBwbGF5SHVtYW4gPSAoY2VsbCkgPT4ge1xuICBpZiAoZ2FtZU92ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwbGF5KGNlbGwpO1xufTtcblxuLyoqXG4gKiBzdGFydEdhbWUgc3RhcnRzIHRoZSBnYW1lXG4gKiBJZiBBSSBWLlMgQUksIHRoZSBnYW1lIGJlZ2lucyBhdXRvbWF0aWNhbGx5IHVudGlsIGdhbWUgb3ZlclxuICogSWYgQUkgVi5TIEh1bWFuLCB0aGUgZ2FtZSBiZWdpbnMgd2l0aCB0aGUgZmlyc3QgcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gZmlyc3RQbGF5ZXIgLSBjYWxsIGl0IHdpdGggUGxheWVyIG9iamVjdCBlLmcuIHsgbmFtZTogJ1BsYXllciAxJywgdHlwZTogJ0h1bWFuJyB9XG4gKiBAcGFyYW0ge09iamVjdH0gc2Vjb25kUGxheWVyIC0gY2FsbCBpdCB3aXRoIFBsYXllciBvYmplY3QgZS5nLiB7IHR5cGU6ICdBSScsIGxldmVsOiAnRWFzeScgfVxuICovXG5jb25zdCBzdGFydEdhbWUgPSAoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllcikgPT4ge1xuICByZXNldEdhbWUoKTtcblxuICBjb25zdCBwbGF5ZXIxU3ltYm9sID0gJ1gnO1xuICBjb25zdCBwbGF5ZXIyU3ltYm9sID0gJ08nO1xuXG4gIGlmIChmaXJzdFBsYXllci50eXBlID09PSAnQUknICYmIGZpcnN0UGxheWVyLmxldmVsID09PSAnZWFzeScpIHtcbiAgICBzZXRQbGF5ZXIxKEVhc3lBSVBsYXllcihwbGF5ZXIxU3ltYm9sKSk7XG4gIH0gZWxzZSBpZiAoZmlyc3RQbGF5ZXIudHlwZSA9PT0gJ0FJJyAmJiBmaXJzdFBsYXllci5sZXZlbCA9PT0gJ21lZGl1bScpIHtcbiAgICBzZXRQbGF5ZXIxKE1lZGl1bUFJUGxheWVyKHBsYXllcjFTeW1ib2wpKTtcbiAgfSBlbHNlIGlmIChmaXJzdFBsYXllci50eXBlID09PSAnQUknICYmIGZpcnN0UGxheWVyLmxldmVsID09PSAnaGFyZCcpIHtcbiAgICBzZXRQbGF5ZXIxKEhhcmRBSVBsYXllcihwbGF5ZXIxU3ltYm9sKSk7XG4gIH0gZWxzZSBpZiAoZmlyc3RQbGF5ZXIudHlwZSA9PT0gJ0FJJyAmJiBmaXJzdFBsYXllci5sZXZlbCA9PT0gJ3VuYmVhdGFibGUnKSB7XG4gICAgc2V0UGxheWVyMShVbmJlYXRhYmxlQUlQbGF5ZXIocGxheWVyMVN5bWJvbCkpO1xuICB9IGVsc2Uge1xuICAgIHNldFBsYXllcjEoSHVtYW5QbGF5ZXIoZmlyc3RQbGF5ZXIubmFtZSwgcGxheWVyMVN5bWJvbCkpO1xuICB9XG5cbiAgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnQUknICYmIHNlY29uZFBsYXllci5sZXZlbCA9PT0gJ2Vhc3knKSB7XG4gICAgc2V0UGxheWVyMihFYXN5QUlQbGF5ZXIocGxheWVyMlN5bWJvbCkpO1xuICB9IGVsc2UgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnQUknICYmIHNlY29uZFBsYXllci5sZXZlbCA9PT0gJ21lZGl1bScpIHtcbiAgICBzZXRQbGF5ZXIyKE1lZGl1bUFJUGxheWVyKHBsYXllcjJTeW1ib2wpKTtcbiAgfSBlbHNlIGlmIChzZWNvbmRQbGF5ZXIudHlwZSA9PT0gJ0FJJyAmJiBzZWNvbmRQbGF5ZXIubGV2ZWwgPT09ICdoYXJkJykge1xuICAgIHNldFBsYXllcjIoSGFyZEFJUGxheWVyKHBsYXllcjJTeW1ib2wpKTtcbiAgfSBlbHNlIGlmIChcbiAgICBzZWNvbmRQbGF5ZXIudHlwZSA9PT0gJ0FJJyAmJlxuICAgIHNlY29uZFBsYXllci5sZXZlbCA9PT0gJ3VuYmVhdGFibGUnXG4gICkge1xuICAgIHNldFBsYXllcjIoVW5iZWF0YWJsZUFJUGxheWVyKHBsYXllcjJTeW1ib2wpKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRQbGF5ZXIyKEh1bWFuUGxheWVyKHNlY29uZFBsYXllci5uYW1lLCBwbGF5ZXIyU3ltYm9sKSk7XG4gIH1cblxuICBzZXRDdXJyZW50UGxheWVyKHBsYXllcjEpO1xufTtcblxuY29uc3QgZ2V0R2FtZVN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZVN0YXR1cyA9IHtcbiAgICBnYW1lQm9hcmQ6IGdldEdhbWVCb2FyZCgpLFxuICAgIHBsYXllcjE6IGdldFBsYXllcjEoKSxcbiAgICBwbGF5ZXIyOiBnZXRQbGF5ZXIyKCksXG4gICAgY3VycmVudFBsYXllcjogZ2V0Q3VycmVudFBsYXllcigpLFxuICAgIGlzR2FtZU92ZXI6IGlzR2FtZU92ZXIoKSxcbiAgICBpc0RyYXc6IGNoZWNrRHJhdygpLFxuICAgIHdpbm5lcjogZ2V0V2lubmVyKCksXG4gIH07XG5cbiAgcmV0dXJuIGdhbWVTdGF0dXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEdhbWVCb2FyZCxcbiAgZ2V0UGxheWVyMSxcbiAgZ2V0UGxheWVyMixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0V2lubmVyLFxuICBjaGVja0RyYXcsXG4gIGlzR2FtZU92ZXIsXG4gIGdldEdhbWVTdGF0dXMsXG4gIHN3aXRjaEN1cnJlbnRQbGF5ZXIsXG4gIHBsYXlIdW1hbixcbiAgcGxheUFJLFxuICBzdGFydEdhbWUsXG4gIHJlc2V0R2FtZSxcbn07XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcblxuLyoqXG4gKiBIdW1hblBsYXllciBpcyBhIG1vZHVsZSB0aGF0IGNvbnRhaW5zIGEgaHVtYW4gcGxheWVyIG9iamVjdCAoaW5oZXJpdHMgZnJvbSBQbGF5ZXIpXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGNhbGwgaXQgd2l0aCB0aGUgcGxheWVyJ3MgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHN5bWJvbCAtIGNhbGwgaXQgd2l0aCAnWCcgb3IgJ08nXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIdW1hblBsYXllciBvYmplY3RcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyICgnWCcgb3IgJ08nKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VHlwZSAtIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIHBsYXllciAoJ0h1bWFuJyBvciAnQUknKVxuICovXG5jb25zdCBIdW1hblBsYXllciA9IChuYW1lLCBzeW1ib2wpID0+ICh7XG4gIC4uLlBsYXllcihuYW1lLCBzeW1ib2wsICdIdW1hbicpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh1bWFuUGxheWVyO1xuIiwiaW1wb3J0IGdhbWVDb250cm9sbGVyIGZyb20gJy4vZ2FtZS1jb250cm9sbGVyLmpzJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXktY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBnYW1lQ29udHJvbGxlci5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICBkaXNwbGF5Q29udHJvbGxlci5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICBkaXNwbGF5Q29udHJvbGxlci5pbml0KCk7XG59XG5cbmluaXQoKTtcbiIsIi8qKlxuICogUGxheWVyIGlzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYSBwbGF5ZXIgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGNhbGwgaXQgd2l0aCB0aGUgcGxheWVyJ3MgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHN5bWJvbCAtIGNhbGwgaXQgd2l0aCAnWCcgb3IgJ08nXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQbGF5ZXIgb2JqZWN0XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROYW1lIC0gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTeW1ib2wgLSByZXR1cm5zIHRoZSBzeW1ib2wgb2YgdGhlIHBsYXllciAoJ1gnIG9yICdPJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFR5cGUgLSByZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBwbGF5ZXIgKCdIdW1hbicgb3IgJ0FJJylcbiAqL1xuY29uc3QgUGxheWVyID0gKG5hbWUsIHN5bWJvbCwgdHlwZSkgPT4ge1xuICAvKipcbiAgICogZ2V0TmFtZSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAgICogQHJldHVybnMge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgLyoqXG4gICAqIGdldFN5bWJvbCByZXR1cm5zIHRoZSBzeW1ib2wgb2YgdGhlIHBsYXllciAoJ1gnIG9yICdPJylcbiAgICogQHJldHVybnMge3N0cmluZ30gc3ltYm9sXG4gICAqL1xuICBjb25zdCBnZXRTeW1ib2wgPSAoKSA9PiBzeW1ib2w7XG5cbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHR5cGU7XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0U3ltYm9sLCBnZXRUeXBlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBldmVudHMgPSB7fTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdID8/IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbn07XG5cbmNvbnN0IHVuU3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwdWJsaXNoLFxuICBzdWJzY3JpYmUsXG4gIHVuU3Vic2NyaWJlLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==