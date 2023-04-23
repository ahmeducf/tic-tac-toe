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
___CSS_LOADER_EXPORT___.push([module.id, "/* Importing fonts */\n@font-face {\n  font-family: 'Outfit';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Variables */\n:root {\n  --primary: #1a2b33;\n  --secondary: #1e3640;\n  --grey: #a9bec8;\n  --dark-grey: #5c6b73;\n  --dark-cyan: #34c3be;\n  --lighten-yellow: #f2b138;\n  --white: #fffbfb;\n}\n\n/* Global styles */\nhtml {\n  box-sizing: border-box;\n  font-family: 'Outfit', system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  min-height: 100vh;\n  background-color: var(--primary);\n  text-transform: uppercase;\n}\n\n*,\n*::before,\n*::after {\n  /* CSS Reset */\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  /* Disable text selection */\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Catch errors */\n  font-family: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n.preload * {\n  transition: none !important;\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -ms-transition: none !important;\n  -o-transition: none !important;\n}\n\nheader {\n  width: 85%;\n  height: 100px;\n}\n\nbutton {\n  color: var(--primary);\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: inset 0 -3px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n\n/*** Game ***/\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n/* Game Header */\n\n.game header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n}\n\n/* Game Actions */\n\n.game__actions {\n  position: fixed;\n  right: 40px;\n  top: 32px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.game__restart-btn,\n.game__quit-btn {\n  width: 50px;\n  height: 50px;\n  background-color: var(--grey);\n  transition: all 0.3 ease;\n}\n\n.game__restart-btn img,\n.game__quit-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Game Status */\n\n.game__status {\n  grid-column: 1 / -1;\n  grid-row: 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  gap: 30px;\n  color: var(--grey);\n  border: 1px solid var(--secondary);\n}\n\n/* Game Status Player */\n\n.game__status-player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--secondary);\n}\n\n.game__status-player-id {\n  flex: 1;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  padding: 10px;\n  width: 162px;\n  word-wrap: break-word;\n}\n\n.game__status-player-symbol img {\n  width: 15px;\n  height: 15px;\n}\n\n.game__status-player-name {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: -3px;\n  overflow: auto;\n}\n\n.game__status-player-icon {\n  grid-column: 1 / -1;\n}\n\n.game__status-player-icon img {\n  width: 80px;\n  height: 80px;\n}\n\n/* Game Status Message */\n\n.game__status-message {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding: 10px 100px;\n}\n\n.status-message__turn-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.status-message__turn-icon[data-turn='X'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / 100%;\n}\n\n.status-message__turn-icon[data-turn='O'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center / 100%;\n}\n\n/* Game Board */\n\n.game main {\n  grid-column: 1 / 2;\n  grid-row: 3 / -1;\n  margin: 30px 0;\n}\n\n.game__board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 30px;\n  justify-items: center;\n  align-items: center;\n}\n\n.game__board-cell {\n  width: 120px;\n  height: 120px;\n  background-color: var(--secondary);\n  outline: 2px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.game__board-cell[data-win='X'] {\n  background-color: var(--dark-cyan);\n}\n\n.game__board-cell[data-win='O'] {\n  background-color: var(--lighten-yellow);\n}\n\n.game-over-draw {\n  background-color: var(--dark-grey);\n}\n\n.game__board-cell .cell-symbol {\n  width: 100%;\n  height: 100%;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.5s ease;\n}\n\n.game__board-cell .cell-symbol[data-set='X'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.game__board-cell .cell-symbol[data-set='O'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.game__board-cell .cell-symbol[data-turn='X']:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.game__board-cell .cell-symbol[data-turn='O']:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.game__board-cell[data-win='X'] .cell-symbol[data-set='X'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n.game__board-cell[data-win='O'] .cell-symbol[data-set='O'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n/*** Game-Initializer ***/\n\n.game-initializer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Game-Initializer Header */\n\n.game-initializer header {\n  width: 85%;\n  height: 100px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.game-initializer main {\n  width: 70%;\n}\n\n/* Game-Initializer Options */\n\n.game-initializer__options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 500px));\n  grid-gap: 20px;\n  justify-items: center;\n  justify-content: center;\n  align-content: center;\n}\n\n/* Game Initializer Player */\n\n.game-initializer__options .player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding-bottom: 20px;\n}\n\n/* Options Player Symbol */\n\n.player .player__symbol {\n  width: 100%;\n  background-color: var(--secondary);\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.player__symbol img {\n  width: 40px;\n}\n\n/* Options Player Icon */\n\n.player .player__icon {\n  margin-top: 10px;\n}\n\n/* Options Player Type-Selector */\n\n.player__type-selector {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  justify-items: center;\n  align-items: center;\n  width: 60%;\n  height: 50px;\n  border-radius: 5px;\n  background: var(--secondary);\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.player__type-selector input[type='radio'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  position: absolute;\n  width: 50%;\n  height: 100%;\n}\n\n.player__type-selector input[type='radio']:first-of-type {\n  left: 0;\n}\n\n.player__type-selector input[type='radio']:last-of-type {\n  right: 0;\n}\n\n.player__type-selector label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--grey);\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-style: italic;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  padding: 10px;\n  transition: all 0.3s ease;\n}\n\n.player__type-selector input[type='radio']:checked + label {\n  background-color: var(--grey);\n  color: var(--primary);\n}\n\n/* Options Player Player-Name */\n/* Options Player AI-Type */\n\n.player__name,\n.player__ai-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.player__name input[type='text'],\n.player__ai-type select {\n  width: 60%;\n  height: 40px;\n  padding: 5px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  outline: none;\n  color: var(--primary);\n  background-color: var(--grey);\n  border: none;\n  border-radius: 5px;\n}\n\n.player__name label,\n.player__ai-type label {\n  border: 0;\n  clip-path: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip-path: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.player__name input[type='text'] {\n  transition: all 0.3s ease;\n}\n\n.player__name input[type='text']::placeholder {\n  color: var(--primary);\n  opacity: 0.5;\n  text-transform: none;\n  font-weight: 400;\n}\n\n.player__name input[type='text'].invalid::placeholder {\n  color: var(--white);\n}\n\n/* Options Start-Game */\n\n.game-initializer__start {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.start-game-btn {\n  width: 35%;\n  height: 64px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 700;\n}\n\n/* Result-Modal */\n\n.result-modal-container {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.result-modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  text-align: center;\n  padding: 40px 0;\n  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.3);\n  width: 100%;\n}\n\n.result-modal__content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: clamp(300px, 50%, 500px);\n}\n\n/* Result-Modal Header */\n\n.result-modal__header {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.result-modal__title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--grey);\n}\n\n.result-modal__close-btn {\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  background-color: transparent;\n  box-shadow: none;\n  transition: all 0.3s ease;\n}\n\n.result-modal__close-btn:hover {\n  transform: scale(1.1);\n}\n\n.result-modal__close-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Result-Modal Body */\n\n.result-modal__message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  color: var(--grey);\n}\n\n.result-modal__message[data-winner='X'] {\n  color: var(--dark-cyan);\n}\n\n.result-modal__message[data-winner='O'] {\n  color: var(--lighten-yellow);\n}\n\n.result-modal__winner-symbol {\n  width: 45px;\n  height: 45px;\n}\n\n.result-modal__winner-symbol[data-winner='X'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / 100%;\n}\n\n.result-modal__winner-symbol[data-winner='O'] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center / 100%;\n}\n\n/* Result-Modal Footer */\n\n.result-modal__footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding-top: 26px;\n}\n\n.result-modal__restart-btn,\n.result-modal__quit-btn {\n  width: 50%;\n  height: 56px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 600;\n}\n\n.result-modal__restart-btn {\n  background-color: var(--lighten-yellow);\n}\n\n.result-modal__quit-btn {\n  background-color: var(--grey);\n}\n\n/*** Misc ***/\n\n/* Used to hide elements via JavaScript */\n.disabled {\n  display: none;\n}\n\n.clicked {\n  transform: scale(0.95) translateY(5px);\n  box-shadow: 0 0 0, inset 0 2px 10px rgba(0, 0, 0, 0.4);\n  filter: brightness(1.2);\n}\n\n.invalid {\n  border: 2px solid #b92326 !important;\n  background-color: rgba(185, 35, 38, 0.2) !important;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Importing fonts */\n@font-face {\n  font-family: 'Outfit';\n  src: url('./fonts/outfit.ttf');\n}\n\n/* Variables */\n:root {\n  --primary: #1a2b33;\n  --secondary: #1e3640;\n  --grey: #a9bec8;\n  --dark-grey: #5c6b73;\n  --dark-cyan: #34c3be;\n  --lighten-yellow: #f2b138;\n  --white: #fffbfb;\n}\n\n/* Global styles */\nhtml {\n  box-sizing: border-box;\n  font-family: 'Outfit', system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  min-height: 100vh;\n  background-color: var(--primary);\n  text-transform: uppercase;\n}\n\n*,\n*::before,\n*::after {\n  /* CSS Reset */\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  /* Disable text selection */\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Catch errors */\n  font-family: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n.preload * {\n  transition: none !important;\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -ms-transition: none !important;\n  -o-transition: none !important;\n}\n\nheader {\n  width: 85%;\n  height: 100px;\n}\n\nbutton {\n  color: var(--primary);\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: inset 0 -3px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n\n/*** Game ***/\n\n.game {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n/* Game Header */\n\n.game header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n}\n\n/* Game Actions */\n\n.game__actions {\n  position: fixed;\n  right: 40px;\n  top: 32px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n.game__restart-btn,\n.game__quit-btn {\n  width: 50px;\n  height: 50px;\n  background-color: var(--grey);\n  transition: all 0.3 ease;\n}\n\n.game__restart-btn img,\n.game__quit-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Game Status */\n\n.game__status {\n  grid-column: 1 / -1;\n  grid-row: 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  gap: 30px;\n  color: var(--grey);\n  border: 1px solid var(--secondary);\n}\n\n/* Game Status Player */\n\n.game__status-player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--secondary);\n}\n\n.game__status-player-id {\n  flex: 1;\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  padding: 10px;\n  width: 162px;\n  word-wrap: break-word;\n}\n\n.game__status-player-symbol img {\n  width: 15px;\n  height: 15px;\n}\n\n.game__status-player-name {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: -3px;\n  overflow: auto;\n}\n\n.game__status-player-icon {\n  grid-column: 1 / -1;\n}\n\n.game__status-player-icon img {\n  width: 80px;\n  height: 80px;\n}\n\n/* Game Status Message */\n\n.game__status-message {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding: 10px 100px;\n}\n\n.status-message__turn-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.status-message__turn-icon[data-turn='X'] {\n  background: url(./assets/icon-x.svg) no-repeat center / 100%;\n}\n\n.status-message__turn-icon[data-turn='O'] {\n  background: url(./assets/icon-o.svg) no-repeat center / 100%;\n}\n\n/* Game Board */\n\n.game main {\n  grid-column: 1 / 2;\n  grid-row: 3 / -1;\n  margin: 30px 0;\n}\n\n.game__board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 30px;\n  justify-items: center;\n  align-items: center;\n}\n\n.game__board-cell {\n  width: 120px;\n  height: 120px;\n  background-color: var(--secondary);\n  outline: 2px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.game__board-cell[data-win='X'] {\n  background-color: var(--dark-cyan);\n}\n\n.game__board-cell[data-win='O'] {\n  background-color: var(--lighten-yellow);\n}\n\n.game-over-draw {\n  background-color: var(--dark-grey);\n}\n\n.game__board-cell .cell-symbol {\n  width: 100%;\n  height: 100%;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.5s ease;\n}\n\n.game__board-cell .cell-symbol[data-set='X'] {\n  background-image: url(./assets/icon-x.svg);\n}\n\n.game__board-cell .cell-symbol[data-set='O'] {\n  background-image: url(./assets/icon-o.svg);\n}\n\n.game__board-cell .cell-symbol[data-turn='X']:hover {\n  background-image: url(./assets/icon-x-outline.svg);\n}\n\n.game__board-cell .cell-symbol[data-turn='O']:hover {\n  background-image: url(./assets/icon-o-outline.svg);\n}\n\n.game__board-cell[data-win='X'] .cell-symbol[data-set='X'] {\n  background-image: url(./assets/icon-x-transparent.svg);\n}\n\n.game__board-cell[data-win='O'] .cell-symbol[data-set='O'] {\n  background-image: url(./assets/icon-o-transparent.svg);\n}\n\n/*** Game-Initializer ***/\n\n.game-initializer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Game-Initializer Header */\n\n.game-initializer header {\n  width: 85%;\n  height: 100px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.game-initializer main {\n  width: 70%;\n}\n\n/* Game-Initializer Options */\n\n.game-initializer__options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 500px));\n  grid-gap: 20px;\n  justify-items: center;\n  justify-content: center;\n  align-content: center;\n}\n\n/* Game Initializer Player */\n\n.game-initializer__options .player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  border: 1px solid var(--secondary);\n  border-radius: 5px;\n  padding-bottom: 20px;\n}\n\n/* Options Player Symbol */\n\n.player .player__symbol {\n  width: 100%;\n  background-color: var(--secondary);\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.player__symbol img {\n  width: 40px;\n}\n\n/* Options Player Icon */\n\n.player .player__icon {\n  margin-top: 10px;\n}\n\n/* Options Player Type-Selector */\n\n.player__type-selector {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  justify-items: center;\n  align-items: center;\n  width: 60%;\n  height: 50px;\n  border-radius: 5px;\n  background: var(--secondary);\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.player__type-selector input[type='radio'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  position: absolute;\n  width: 50%;\n  height: 100%;\n}\n\n.player__type-selector input[type='radio']:first-of-type {\n  left: 0;\n}\n\n.player__type-selector input[type='radio']:last-of-type {\n  right: 0;\n}\n\n.player__type-selector label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--grey);\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-style: italic;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  padding: 10px;\n  transition: all 0.3s ease;\n}\n\n.player__type-selector input[type='radio']:checked + label {\n  background-color: var(--grey);\n  color: var(--primary);\n}\n\n/* Options Player Player-Name */\n/* Options Player AI-Type */\n\n.player__name,\n.player__ai-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.player__name input[type='text'],\n.player__ai-type select {\n  width: 60%;\n  height: 40px;\n  padding: 5px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  outline: none;\n  color: var(--primary);\n  background-color: var(--grey);\n  border: none;\n  border-radius: 5px;\n}\n\n.player__name label,\n.player__ai-type label {\n  border: 0;\n  clip-path: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip-path: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.player__name input[type='text'] {\n  transition: all 0.3s ease;\n}\n\n.player__name input[type='text']::placeholder {\n  color: var(--primary);\n  opacity: 0.5;\n  text-transform: none;\n  font-weight: 400;\n}\n\n.player__name input[type='text'].invalid::placeholder {\n  color: var(--white);\n}\n\n/* Options Start-Game */\n\n.game-initializer__start {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.start-game-btn {\n  width: 35%;\n  height: 64px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 700;\n}\n\n/* Result-Modal */\n\n.result-modal-container {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.result-modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--secondary);\n  text-align: center;\n  padding: 40px 0;\n  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.3);\n  width: 100%;\n}\n\n.result-modal__content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: clamp(300px, 50%, 500px);\n}\n\n/* Result-Modal Header */\n\n.result-modal__header {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.result-modal__title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--grey);\n}\n\n.result-modal__close-btn {\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  background-color: transparent;\n  box-shadow: none;\n  transition: all 0.3s ease;\n}\n\n.result-modal__close-btn:hover {\n  transform: scale(1.1);\n}\n\n.result-modal__close-btn img {\n  width: 30px;\n  height: 30px;\n}\n\n/* Result-Modal Body */\n\n.result-modal__message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  color: var(--grey);\n}\n\n.result-modal__message[data-winner='X'] {\n  color: var(--dark-cyan);\n}\n\n.result-modal__message[data-winner='O'] {\n  color: var(--lighten-yellow);\n}\n\n.result-modal__winner-symbol {\n  width: 45px;\n  height: 45px;\n}\n\n.result-modal__winner-symbol[data-winner='X'] {\n  background: url(./assets/icon-x.svg) no-repeat center / 100%;\n}\n\n.result-modal__winner-symbol[data-winner='O'] {\n  background: url(./assets/icon-o.svg) no-repeat center / 100%;\n}\n\n/* Result-Modal Footer */\n\n.result-modal__footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding-top: 26px;\n}\n\n.result-modal__restart-btn,\n.result-modal__quit-btn {\n  width: 50%;\n  height: 56px;\n  padding-bottom: 5px;\n  background-color: var(--lighten-yellow);\n  font-weight: 600;\n}\n\n.result-modal__restart-btn {\n  background-color: var(--lighten-yellow);\n}\n\n.result-modal__quit-btn {\n  background-color: var(--grey);\n}\n\n/*** Misc ***/\n\n/* Used to hide elements via JavaScript */\n.disabled {\n  display: none;\n}\n\n.clicked {\n  transform: scale(0.95) translateY(5px);\n  box-shadow: 0 0 0, inset 0 2px 10px rgba(0, 0, 0, 0.4);\n  filter: brightness(1.2);\n}\n\n.invalid {\n  border: 2px solid #b92326 !important;\n  background-color: rgba(185, 35, 38, 0.2) !important;\n}\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta name=\"theme-color\" content=\"#1A2B33\" />\n    <meta name=\"msapplication-navbutton-color\" content=\"#1A2B33\" />\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#1A2B33\" />\n    <meta name=\"description\" content=\"Tic Tac Toe\" />\n    <meta name=\"keywords\" content=\"Tic Tac Toe\" />\n    <meta name=\"author\" content=\"Ahmed Salah\" />\n    <link\n      rel=\"apple-touch-icon\"\n      sizes=\"180x180\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"32x32\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"16x16\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n    />\n    <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" />\n    <title>Tic Tac Toe</title>\n  </head>\n  <body class=\"preload\">\n    <section class=\"disabled game\">\n      <header>\n        <div class=\"logo\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Tic Tac Toe\" />\n        </div>\n      </header>\n\n      <div class=\"game__actions\">\n        <button class=\"game__restart-btn\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Restart Game\" />\n        </button>\n        <button class=\"game__quit-btn\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Quit Game\" />\n        </button>\n      </div>\n\n      <div class=\"game__status\">\n        <div class=\"game__status-player\">\n          <div class=\"game__status-player-id\">\n            <div class=\"game__status-player-symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"X\" />\n            </div>\n            <div class=\"game__status-player-name\">Player 1</div>\n          </div>\n          <div class=\"game__status-player-icon\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Human Player\" />\n          </div>\n        </div>\n\n        <div class=\"game__status-message\">\n          <div class=\"status-message__turn-icon\" data-turn=\"\"></div>\n          <p class=\"status-message__text\">Turn</p>\n        </div>\n\n        <div class=\"game__status-player\">\n          <div class=\"game__status-player-id\">\n            <div class=\"game__status-player-symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"O\" />\n            </div>\n            <div class=\"game__status-player-name\">Player 2</div>\n          </div>\n          <div class=\"game__status-player-icon\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"AI Player\" />\n          </div>\n        </div>\n      </div>\n\n      <main>\n        <div class=\"game__board\">\n          <button class=\"game__board-cell\" data-cell-row=\"0\" data-cell-col=\"0\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"0\" data-cell-col=\"1\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"0\" data-cell-col=\"2\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"1\" data-cell-col=\"0\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"1\" data-cell-col=\"1\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"1\" data-cell-col=\"2\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"2\" data-cell-col=\"0\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"2\" data-cell-col=\"1\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n          <button class=\"game__board-cell\" data-cell-row=\"2\" data-cell-col=\"2\">\n            <div class=\"cell-symbol\" data-turn=\"\" data-set=\"\"></div>\n          </button>\n        </div>\n      </main>\n    </section>\n\n    <section class=\"game-initializer\">\n      <header>\n        <div class=\"logo\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Tic Tac Toe\" />\n        </div>\n      </header>\n      <main>\n        <form class=\"game-initializer__options\">\n          <div class=\"player\">\n            <div class=\"player__symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"X\" />\n            </div>\n            <div class=\"player__icon\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Human Player\" />\n            </div>\n            <div class=\"player__type-selector\">\n              <input\n                type=\"radio\"\n                name=\"player1-type\"\n                id=\"player1-human\"\n                value=\"human\"\n                checked\n              />\n              <label for=\"player1-human\">Human</label>\n              <input\n                type=\"radio\"\n                name=\"player1-type\"\n                id=\"player1-ai\"\n                value=\"AI\"\n              />\n              <label for=\"player1-ai\">AI</label>\n            </div>\n            <div class=\"player__name\">\n              <label for=\"player1-name\">Player Name</label>\n              <input\n                type=\"text\"\n                id=\"player1-name\"\n                placeholder=\"Enter player name ...\"\n                required\n                autocomplete=\"off\"\n              />\n            </div>\n            <div class=\"disabled player__ai-type\">\n              <label for=\"ai1-type\">AI Type</label>\n              <select name=\"player__ai-type\" id=\"ai1-type\">\n                <option value=\"easy\">Easy</option>\n                <option value=\"medium\">Medium</option>\n                <option value=\"hard\">Hard</option>\n                <option value=\"unbeatable\">Unbeatable</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"player\">\n            <div class=\"player__symbol\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"O\" />\n            </div>\n            <div class=\"player__icon\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"AI Player\" />\n            </div>\n            <div class=\"player__type-selector\">\n              <input\n                type=\"radio\"\n                name=\"player2-type\"\n                id=\"player2-human\"\n                value=\"Human\"\n              />\n              <label for=\"player2-human\">Human</label>\n              <input\n                type=\"radio\"\n                name=\"player2-type\"\n                id=\"player2-ai\"\n                value=\"AI\"\n                checked\n              />\n              <label for=\"player2-ai\">AI</label>\n            </div>\n            <div class=\"disabled player__name\">\n              <label for=\"player2-name\">Player Name</label>\n              <input\n                type=\"text\"\n                id=\"player2-name\"\n                placeholder=\"Enter player name ...\"\n                autocomplete=\"off\"\n              />\n            </div>\n            <div class=\"player__ai-type\">\n              <label for=\"ai2-type\">AI Type</label>\n              <select name=\"player__ai-type\" id=\"ai2-type\" required>\n                <option value=\"easy\">Easy</option>\n                <option value=\"medium\">Medium</option>\n                <option value=\"hard\">Hard</option>\n                <option value=\"unbeatable\">Unbeatable</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"game-initializer__start\">\n            <button class=\"start-game-btn\">Start Game</button>\n          </div>\n        </form>\n      </main>\n    </section>\n\n    <div class=\"disabled result-modal-container\">\n      <section class=\"result-modal\">\n        <div class=\"result-modal__content\">\n          <div class=\"result-modal__header\">\n            <h2 class=\"result-modal__title\">Game Over</h2>\n            <button class=\"result-modal__close-btn\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Close\" />\n            </button>\n          </div>\n\n          <div class=\"result-modal__body\">\n            <div class=\"result-modal__message\" data-winner=\"\">\n              <div class=\"result-modal__winner-symbol\" data-winner=\"\"></div>\n              <p></p>\n            </div>\n          </div>\n\n          <div class=\"result-modal__footer\">\n            <button class=\"result-modal__restart-btn\">Play Again</button>\n            <button class=\"result-modal__quit-btn\">Quit</button>\n          </div>\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n";
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
/* harmony import */ var _assets_player_ai_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/player-ai.svg */ "./src/assets/player-ai.svg");
/* harmony import */ var _assets_player_human_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/player-human.svg */ "./src/assets/player-human.svg");





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
    playerIconImg.setAttribute('src', _assets_player_ai_svg__WEBPACK_IMPORTED_MODULE_2__);
  } else {
    playerIconImg.setAttribute('src', _assets_player_human_svg__WEBPACK_IMPORTED_MODULE_3__);
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
  window.addEventListener('load', () => {
    document.querySelector('body').classList.remove('preload');
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsMklBQWtEO0FBQzlGLDRDQUE0QywySUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkVBQTZFLDBCQUEwQix5REFBeUQsR0FBRyw0QkFBNEIsdUJBQXVCLHlCQUF5QixvQkFBb0IseUJBQXlCLHlCQUF5Qiw4QkFBOEIscUJBQXFCLEdBQUcsK0JBQStCLDJCQUEyQiw4SUFBOEksc0JBQXNCLHFDQUFxQyw4QkFBOEIsR0FBRyw4QkFBOEIsOENBQThDLGVBQWUsY0FBYyw2RUFBNkUsOEJBQThCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLHNCQUFzQiwrQ0FBK0Msb0JBQW9CLDZCQUE2QixHQUFHLGdCQUFnQixnQ0FBZ0Msd0NBQXdDLHFDQUFxQyxvQ0FBb0MsbUNBQW1DLEdBQUcsWUFBWSxlQUFlLGtCQUFrQixHQUFHLFlBQVksMEJBQTBCLGlCQUFpQix1QkFBdUIsa0JBQWtCLHNCQUFzQixvQkFBb0Isb0RBQW9ELDhCQUE4QixHQUFHLDZCQUE2QixrQkFBa0IsK0JBQStCLHNDQUFzQywwQkFBMEIsd0JBQXdCLEdBQUcsdUNBQXVDLHdCQUF3QixvQkFBb0Isa0JBQWtCLHdCQUF3QixHQUFHLDBDQUEwQyxvQkFBb0IsZ0JBQWdCLGNBQWMsa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcsMENBQTBDLGdCQUFnQixpQkFBaUIsa0NBQWtDLDZCQUE2QixHQUFHLGtEQUFrRCxnQkFBZ0IsaUJBQWlCLEdBQUcsd0NBQXdDLHdCQUF3QixvQkFBb0Isa0JBQWtCLG1DQUFtQyxjQUFjLHVCQUF1Qix1Q0FBdUMsR0FBRyxzREFBc0Qsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyx1Q0FBdUMsR0FBRyw2QkFBNkIsWUFBWSxrQkFBa0IsYUFBYSw0QkFBNEIsd0JBQXdCLHVDQUF1QyxrQkFBa0IsaUJBQWlCLDBCQUEwQixHQUFHLHFDQUFxQyxnQkFBZ0IsaUJBQWlCLEdBQUcsK0JBQStCLG9CQUFvQixxQkFBcUIscUJBQXFCLG1CQUFtQixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyxtQ0FBbUMsZ0JBQWdCLGlCQUFpQixHQUFHLHdEQUF3RCxrQkFBa0Isd0JBQXdCLGNBQWMsc0JBQXNCLHFCQUFxQiwyQkFBMkIsdUNBQXVDLHVCQUF1Qix3QkFBd0IsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQixHQUFHLCtDQUErQyx3RkFBd0YsR0FBRywrQ0FBK0Msd0ZBQXdGLEdBQUcsb0NBQW9DLHVCQUF1QixxQkFBcUIsbUJBQW1CLEdBQUcsa0JBQWtCLGtCQUFrQiwwQ0FBMEMsdUNBQXVDLGNBQWMsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsa0JBQWtCLHVDQUF1QyxnREFBZ0QsK0NBQStDLEdBQUcscUNBQXFDLHVDQUF1QyxHQUFHLHFDQUFxQyw0Q0FBNEMsR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsb0NBQW9DLGdCQUFnQixpQkFBaUIseUJBQXlCLGlDQUFpQyxnQ0FBZ0MsOEJBQThCLEdBQUcsa0RBQWtELHNFQUFzRSxHQUFHLGtEQUFrRCxzRUFBc0UsR0FBRyx5REFBeUQsc0VBQXNFLEdBQUcseURBQXlELHNFQUFzRSxHQUFHLGdFQUFnRSxzRUFBc0UsR0FBRyxnRUFBZ0Usc0VBQXNFLEdBQUcscURBQXFELGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsK0RBQStELGVBQWUsa0JBQWtCLGtCQUFrQiwwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLGVBQWUsR0FBRyxrRUFBa0Usa0JBQWtCLDJEQUEyRCxtQkFBbUIsMEJBQTBCLDRCQUE0QiwwQkFBMEIsR0FBRyx5RUFBeUUsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIseUJBQXlCLEdBQUcsNERBQTRELGdCQUFnQix1Q0FBdUMsa0JBQWtCLDRCQUE0QixrQkFBa0IsR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcsd0RBQXdELHFCQUFxQixHQUFHLGtFQUFrRSxrQkFBa0IsbUNBQW1DLG1CQUFtQiwwQkFBMEIsd0JBQXdCLGVBQWUsaUJBQWlCLHVCQUF1QixpQ0FBaUMsdUJBQXVCLHdCQUF3QixHQUFHLGdEQUFnRCw2QkFBNkIsMEJBQTBCLHFCQUFxQixrQkFBa0IsOEJBQThCLG9CQUFvQix1QkFBdUIsZUFBZSxpQkFBaUIsR0FBRyw4REFBOEQsWUFBWSxHQUFHLDZEQUE2RCxhQUFhLEdBQUcsa0NBQWtDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixzQkFBc0IscUJBQXFCLHVCQUF1QixvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsa0JBQWtCLDhCQUE4QixHQUFHLGdFQUFnRSxrQ0FBa0MsMEJBQTBCLEdBQUcsd0dBQXdHLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixHQUFHLGdFQUFnRSxlQUFlLGlCQUFpQixpQkFBaUIsc0JBQXNCLHFCQUFxQixrQkFBa0IsMEJBQTBCLGtDQUFrQyxpQkFBaUIsdUJBQXVCLEdBQUcsa0RBQWtELGNBQWMsc0NBQXNDLHNEQUFzRCxnQkFBZ0IsaUJBQWlCLHFCQUFxQixlQUFlLHVCQUF1QixlQUFlLEdBQUcsc0NBQXNDLDhCQUE4QixHQUFHLG1EQUFtRCwwQkFBMEIsaUJBQWlCLHlCQUF5QixxQkFBcUIsR0FBRywyREFBMkQsd0JBQXdCLEdBQUcsMERBQTBELHdCQUF3QixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsR0FBRyxxQkFBcUIsZUFBZSxpQkFBaUIsd0JBQXdCLDRDQUE0QyxxQkFBcUIsR0FBRyxtREFBbUQsZ0JBQWdCLGtCQUFrQixvQkFBb0IsY0FBYyxhQUFhLHFDQUFxQyxrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHVDQUF1Qyx1QkFBdUIsb0JBQW9CLCtDQUErQyxnQkFBZ0IsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQixjQUFjLG9DQUFvQyxHQUFHLHdEQUF3RCxrQkFBa0IsK0JBQStCLEdBQUcsMEJBQTBCLHNCQUFzQixxQkFBcUIsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixnQkFBZ0IsY0FBYyxrQ0FBa0MscUJBQXFCLDhCQUE4QixHQUFHLG9DQUFvQywwQkFBMEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixHQUFHLHVEQUF1RCxrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLHNCQUFzQixxQkFBcUIsdUJBQXVCLEdBQUcsNkNBQTZDLDRCQUE0QixHQUFHLDZDQUE2QyxpQ0FBaUMsR0FBRyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixHQUFHLG1EQUFtRCx3RkFBd0YsR0FBRyxtREFBbUQsd0ZBQXdGLEdBQUcsd0RBQXdELGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsc0JBQXNCLEdBQUcsMERBQTBELGVBQWUsaUJBQWlCLHdCQUF3Qiw0Q0FBNEMscUJBQXFCLEdBQUcsZ0NBQWdDLDRDQUE0QyxHQUFHLDZCQUE2QixrQ0FBa0MsR0FBRyw2RUFBNkUsa0JBQWtCLEdBQUcsY0FBYywyQ0FBMkMsMkRBQTJELDRCQUE0QixHQUFHLGNBQWMseUNBQXlDLHdEQUF3RCxHQUFHLFNBQVMsdUZBQXVGLE1BQU0sWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLGNBQWMsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLHNCQUFzQixhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxh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QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQWMsQ0FBQyxzREFBUzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksMERBQWMsQ0FBQyx5REFBWSxJQUFJLDJDQUEyQztBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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QUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BQK0I7O0FBRWpDO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQixjQUFjLFVBQVU7QUFDeEIsY0FBYyxVQUFVO0FBQ3hCLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0EsS0FBSyxzREFBTTtBQUNYLENBQUM7O0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnVCO0FBQ007QUFDakM7QUFDRDs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLDZFQUFnQztBQUNsQyxFQUFFLGdGQUFtQztBQUNyQyxFQUFFLG1FQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsVUFBVTtBQUN4QixjQUFjLFVBQVU7QUFDeEIsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNCdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvanMvYWktcGxheWVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2NlbGwuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvanMvZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2V2ZW50LXR5cGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2dhbWUtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvanMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvanMvaHVtYW4tcGxheWVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9qcy9wdWJzdWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvb3V0Zml0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLW8uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi14LW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1vLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi14LXRyYW5zcGFyZW50LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24tby10cmFuc3BhcmVudC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBJbXBvcnRpbmcgZm9udHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3V0Zml0JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjMWEyYjMzO1xcbiAgLS1zZWNvbmRhcnk6ICMxZTM2NDA7XFxuICAtLWdyZXk6ICNhOWJlYzg7XFxuICAtLWRhcmstZ3JleTogIzVjNmI3MztcXG4gIC0tZGFyay1jeWFuOiAjMzRjM2JlO1xcbiAgLS1saWdodGVuLXllbGxvdzogI2YyYjEzODtcXG4gIC0td2hpdGU6ICNmZmZiZmI7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ091dGZpdCcsIHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZixcXG4gICAgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLyogQ1NTIFJlc2V0ICovXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIERpc2FibGUgdGV4dCBzZWxlY3Rpb24gKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogQ2F0Y2ggZXJyb3JzICovXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLnByZWxvYWQgKiB7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKioqIEdhbWUgKioqL1xcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEdhbWUgSGVhZGVyICovXFxuXFxuLmdhbWUgaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZSBBY3Rpb25zICovXFxuXFxuLmdhbWVfX2FjdGlvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmdhbWVfX3Jlc3RhcnQtYnRuLFxcbi5nYW1lX19xdWl0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xcbn1cXG5cXG4uZ2FtZV9fcmVzdGFydC1idG4gaW1nLFxcbi5nYW1lX19xdWl0LWJ0biBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIEdhbWUgU3RhdHVzICovXFxuXFxuLmdhbWVfX3N0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIEdhbWUgU3RhdHVzIFBsYXllciAqL1xcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLWlkIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxNjJweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItc3ltYm9sIGltZyB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZ2FtZV9fc3RhdHVzLXBsYXllci1pY29uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLWljb24gaW1nIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4vKiBHYW1lIFN0YXR1cyBNZXNzYWdlICovXFxuXFxuLmdhbWVfX3N0YXR1cy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2VfX3R1cm4taWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlX190dXJuLWljb25bZGF0YS10dXJuPSdYJ10ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlX190dXJuLWljb25bZGF0YS10dXJuPSdPJ10ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLyogR2FtZSBCb2FyZCAqL1xcblxcbi5nYW1lIG1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyAtMTtcXG4gIG1hcmdpbjogMzBweCAwO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbFtkYXRhLXdpbj0nWCddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY3lhbik7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsW2RhdGEtd2luPSdPJ10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWRyYXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwgLmNlbGwtc3ltYm9sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwgLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdYJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwgLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdPJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwgLmNlbGwtc3ltYm9sW2RhdGEtdHVybj0nWCddOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXR1cm49J08nXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbFtkYXRhLXdpbj0nWCddIC5jZWxsLXN5bWJvbFtkYXRhLXNldD0nWCddIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsW2RhdGEtd2luPSdPJ10gLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdPJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG59XFxuXFxuLyoqKiBHYW1lLUluaXRpYWxpemVyICoqKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEdhbWUtSW5pdGlhbGl6ZXIgSGVhZGVyICovXFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXIgaGVhZGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWluaXRpYWxpemVyIG1haW4ge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLyogR2FtZS1Jbml0aWFsaXplciBPcHRpb25zICovXFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXJfX29wdGlvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgzMDBweCwgNTAwcHgpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIEdhbWUgSW5pdGlhbGl6ZXIgUGxheWVyICovXFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXJfX29wdGlvbnMgLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyogT3B0aW9ucyBQbGF5ZXIgU3ltYm9sICovXFxuXFxuLnBsYXllciAucGxheWVyX19zeW1ib2wge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBsYXllcl9fc3ltYm9sIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLyogT3B0aW9ucyBQbGF5ZXIgSWNvbiAqL1xcblxcbi5wbGF5ZXIgLnBsYXllcl9faWNvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBUeXBlLVNlbGVjdG9yICovXFxuXFxuLnBsYXllcl9fdHlwZS1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBsYXllcl9fdHlwZS1zZWxlY3RvciBpbnB1dFt0eXBlPSdyYWRpbyddOmZpcnN0LW9mLXR5cGUge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnBsYXllcl9fdHlwZS1zZWxlY3RvciBpbnB1dFt0eXBlPSdyYWRpbyddOmxhc3Qtb2YtdHlwZSB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnBsYXllcl9fdHlwZS1zZWxlY3RvciBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnBsYXllcl9fdHlwZS1zZWxlY3RvciBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLyogT3B0aW9ucyBQbGF5ZXIgUGxheWVyLU5hbWUgKi9cXG4vKiBPcHRpb25zIFBsYXllciBBSS1UeXBlICovXFxuXFxuLnBsYXllcl9fbmFtZSxcXG4ucGxheWVyX19haS10eXBlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBsYXllcl9fbmFtZSBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuLnBsYXllcl9fYWktdHlwZSBzZWxlY3Qge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnBsYXllcl9fbmFtZSBsYWJlbCxcXG4ucGxheWVyX19haS10eXBlIGxhYmVsIHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXAtcGF0aDogcmVjdCgxcHggMXB4IDFweCAxcHgpOyAvKiBJRTYsIElFNyAqL1xcbiAgY2xpcC1wYXRoOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnBsYXllcl9fbmFtZSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnBsYXllcl9fbmFtZSBpbnB1dFt0eXBlPSd0ZXh0J106OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnBsYXllcl9fbmFtZSBpbnB1dFt0eXBlPSd0ZXh0J10uaW52YWxpZDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyogT3B0aW9ucyBTdGFydC1HYW1lICovXFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXJfX3N0YXJ0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ0biB7XFxuICB3aWR0aDogMzUlO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIFJlc3VsdC1Nb2RhbCAqL1xcblxcbi5yZXN1bHQtbW9kYWwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZoIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDUwMHB4KTtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsIEhlYWRlciAqL1xcblxcbi5yZXN1bHQtbW9kYWxfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNHB4O1xcbiAgdG9wOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fY2xvc2UtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fY2xvc2UtYnRuIGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsIEJvZHkgKi9cXG5cXG4ucmVzdWx0LW1vZGFsX19tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX21lc3NhZ2VbZGF0YS13aW5uZXI9J1gnXSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1jeWFuKTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fbWVzc2FnZVtkYXRhLXdpbm5lcj0nTyddIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVuLXllbGxvdyk7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3dpbm5lci1zeW1ib2wge1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3dpbm5lci1zeW1ib2xbZGF0YS13aW5uZXI9J1gnXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgLyAxMDAlO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX193aW5uZXItc3ltYm9sW2RhdGEtd2lubmVyPSdPJ10ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsIEZvb3RlciAqL1xcblxcbi5yZXN1bHQtbW9kYWxfX2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDI2cHg7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3Jlc3RhcnQtYnRuLFxcbi5yZXN1bHQtbW9kYWxfX3F1aXQtYnRuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fcmVzdGFydC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19xdWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLyoqKiBNaXNjICoqKi9cXG5cXG4vKiBVc2VkIHRvIGhpZGUgZWxlbWVudHMgdmlhIEphdmFTY3JpcHQgKi9cXG4uZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDVweCk7XFxuICBib3gtc2hhZG93OiAwIDAgMCwgaW5zZXQgMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2I5MjMyNiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDM1LCAzOCwgMC4yKSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBOEI7QUFDaEM7O0FBRUEsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHNCQUFzQjtFQUN0Qjs0REFDMEQ7RUFDMUQsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0Isd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VB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Ki9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3V0Zml0JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL291dGZpdC50dGYnKTtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjMWEyYjMzO1xcbiAgLS1zZWNvbmRhcnk6ICMxZTM2NDA7XFxuICAtLWdyZXk6ICNhOWJlYzg7XFxuICAtLWRhcmstZ3JleTogIzVjNmI3MztcXG4gIC0tZGFyay1jeWFuOiAjMzRjM2JlO1xcbiAgLS1saWdodGVuLXllbGxvdzogI2YyYjEzODtcXG4gIC0td2hpdGU6ICNmZmZiZmI7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ091dGZpdCcsIHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZixcXG4gICAgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLyogQ1NTIFJlc2V0ICovXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIERpc2FibGUgdGV4dCBzZWxlY3Rpb24gKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogQ2F0Y2ggZXJyb3JzICovXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLnByZWxvYWQgKiB7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKioqIEdhbWUgKioqL1xcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEdhbWUgSGVhZGVyICovXFxuXFxuLmdhbWUgaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZSBBY3Rpb25zICovXFxuXFxuLmdhbWVfX2FjdGlvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmdhbWVfX3Jlc3RhcnQtYnRuLFxcbi5nYW1lX19xdWl0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xcbn1cXG5cXG4uZ2FtZV9fcmVzdGFydC1idG4gaW1nLFxcbi5nYW1lX19xdWl0LWJ0biBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIEdhbWUgU3RhdHVzICovXFxuXFxuLmdhbWVfX3N0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIEdhbWUgU3RhdHVzIFBsYXllciAqL1xcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLWlkIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxNjJweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItc3ltYm9sIGltZyB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmdhbWVfX3N0YXR1cy1wbGF5ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZ2FtZV9fc3RhdHVzLXBsYXllci1pY29uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi5nYW1lX19zdGF0dXMtcGxheWVyLWljb24gaW1nIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4vKiBHYW1lIFN0YXR1cyBNZXNzYWdlICovXFxuXFxuLmdhbWVfX3N0YXR1cy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2VfX3R1cm4taWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdlX190dXJuLWljb25bZGF0YS10dXJuPSdYJ10ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2ljb24teC5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgLyAxMDAlO1xcbn1cXG5cXG4uc3RhdHVzLW1lc3NhZ2VfX3R1cm4taWNvbltkYXRhLXR1cm49J08nXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvaWNvbi1vLnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XFxufVxcblxcbi8qIEdhbWUgQm9hcmQgKi9cXG5cXG4uZ2FtZSBtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gLTE7XFxuICBtYXJnaW46IDMwcHggMDtcXG59XFxuXFxuLmdhbWVfX2JvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMzBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGxbZGF0YS13aW49J1gnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWN5YW4pO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbFtkYXRhLXdpbj0nTyddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG59XFxuXFxuLmdhbWUtb3Zlci1kcmF3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXNldD0nWCddIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pY29uLXguc3ZnKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGwgLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdPJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb24tby5zdmcpO1xcbn1cXG5cXG4uZ2FtZV9fYm9hcmQtY2VsbCAuY2VsbC1zeW1ib2xbZGF0YS10dXJuPSdYJ106aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb24teC1vdXRsaW5lLnN2Zyk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsIC5jZWxsLXN5bWJvbFtkYXRhLXR1cm49J08nXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbi1vLW91dGxpbmUuc3ZnKTtcXG59XFxuXFxuLmdhbWVfX2JvYXJkLWNlbGxbZGF0YS13aW49J1gnXSAuY2VsbC1zeW1ib2xbZGF0YS1zZXQ9J1gnXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbi14LXRyYW5zcGFyZW50LnN2Zyk7XFxufVxcblxcbi5nYW1lX19ib2FyZC1jZWxsW2RhdGEtd2luPSdPJ10gLmNlbGwtc3ltYm9sW2RhdGEtc2V0PSdPJ10ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb24tby10cmFuc3BhcmVudC5zdmcpO1xcbn1cXG5cXG4vKioqIEdhbWUtSW5pdGlhbGl6ZXIgKioqL1xcblxcbi5nYW1lLWluaXRpYWxpemVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZS1Jbml0aWFsaXplciBIZWFkZXIgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplciBoZWFkZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtaW5pdGlhbGl6ZXIgbWFpbiB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4vKiBHYW1lLUluaXRpYWxpemVyIE9wdGlvbnMgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplcl9fb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMwMHB4LCA1MDBweCkpO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZSBJbml0aWFsaXplciBQbGF5ZXIgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplcl9fb3B0aW9ucyAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBTeW1ib2wgKi9cXG5cXG4ucGxheWVyIC5wbGF5ZXJfX3N5bWJvbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucGxheWVyX19zeW1ib2wgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBJY29uICovXFxuXFxuLnBsYXllciAucGxheWVyX19pY29uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi8qIE9wdGlvbnMgUGxheWVyIFR5cGUtU2VsZWN0b3IgKi9cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wbGF5ZXJfX3R5cGUtc2VsZWN0b3IgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ106Zmlyc3Qtb2YtdHlwZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ106bGFzdC1vZi10eXBlIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucGxheWVyX190eXBlLXNlbGVjdG9yIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4vKiBPcHRpb25zIFBsYXllciBQbGF5ZXItTmFtZSAqL1xcbi8qIE9wdGlvbnMgUGxheWVyIEFJLVR5cGUgKi9cXG5cXG4ucGxheWVyX19uYW1lLFxcbi5wbGF5ZXJfX2FpLXR5cGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXSxcXG4ucGxheWVyX19haS10eXBlIHNlbGVjdCB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGxhYmVsLFxcbi5wbGF5ZXJfX2FpLXR5cGUgbGFiZWwge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcC1wYXRoOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXFxuICBjbGlwLXBhdGg6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucGxheWVyX19uYW1lIGlucHV0W3R5cGU9J3RleHQnXS5pbnZhbGlkOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKiBPcHRpb25zIFN0YXJ0LUdhbWUgKi9cXG5cXG4uZ2FtZS1pbml0aWFsaXplcl9fc3RhcnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUtYnRuIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsICovXFxuXFxuLnJlc3VsdC1tb2RhbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZXN1bHQtbW9kYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdmggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDUwJSwgNTAwcHgpO1xcbn1cXG5cXG4vKiBSZXN1bHQtTW9kYWwgSGVhZGVyICovXFxuXFxuLnJlc3VsdC1tb2RhbF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE0cHg7XFxuICB0b3A6IDE0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jbG9zZS1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19jbG9zZS1idG4gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBSZXN1bHQtTW9kYWwgQm9keSAqL1xcblxcbi5yZXN1bHQtbW9kYWxfX21lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fbWVzc2FnZVtkYXRhLXdpbm5lcj0nWCddIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWN5YW4pO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19tZXNzYWdlW2RhdGEtd2lubmVyPSdPJ10ge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZW4teWVsbG93KTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbCB7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbFtkYXRhLXdpbm5lcj0nWCddIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9pY29uLXguc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbFtkYXRhLXdpbm5lcj0nTyddIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9pY29uLW8uc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gMTAwJTtcXG59XFxuXFxuLyogUmVzdWx0LU1vZGFsIEZvb3RlciAqL1xcblxcbi5yZXN1bHQtbW9kYWxfX2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDI2cHg7XFxufVxcblxcbi5yZXN1bHQtbW9kYWxfX3Jlc3RhcnQtYnRuLFxcbi5yZXN1bHQtbW9kYWxfX3F1aXQtYnRuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnJlc3VsdC1tb2RhbF9fcmVzdGFydC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlbi15ZWxsb3cpO1xcbn1cXG5cXG4ucmVzdWx0LW1vZGFsX19xdWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLyoqKiBNaXNjICoqKi9cXG5cXG4vKiBVc2VkIHRvIGhpZGUgZWxlbWVudHMgdmlhIEphdmFTY3JpcHQgKi9cXG4uZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDVweCk7XFxuICBib3gtc2hhZG93OiAwIDAgMCwgaW5zZXQgMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2I5MjMyNiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDM1LCAzOCwgMC4yKSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2Zhdmljb24tMzJ4MzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZmF2aWNvbi0xNngxNi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zaXRlLndlYm1hbmlmZXN0XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLXJlc3RhcnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1xdWl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wbGF5ZXItaHVtYW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1vLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wbGF5ZXItYWkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb24teC1ncmF5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29uLW8tZ3JheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi1jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzlfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF85X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEzX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInRoZW1lLWNvbG9yXFxcIiBjb250ZW50PVxcXCIjMUEyQjMzXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJtc2FwcGxpY2F0aW9uLW5hdmJ1dHRvbi1jb2xvclxcXCIgY29udGVudD1cXFwiIzFBMkIzM1xcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVxcXCIgY29udGVudD1cXFwieWVzXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXFxcIiBjb250ZW50PVxcXCIjMUEyQjMzXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiVGljIFRhYyBUb2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcImtleXdvcmRzXFxcIiBjb250ZW50PVxcXCJUaWMgVGFjIFRvZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXV0aG9yXFxcIiBjb250ZW50PVxcXCJBaG1lZCBTYWxhaFxcXCIgLz5cXG4gICAgPGxpbmtcXG4gICAgICByZWw9XFxcImFwcGxlLXRvdWNoLWljb25cXFwiXFxuICAgICAgc2l6ZXM9XFxcIjE4MHgxODBcXFwiXFxuICAgICAgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rXFxuICAgICAgcmVsPVxcXCJpY29uXFxcIlxcbiAgICAgIHR5cGU9XFxcImltYWdlL3BuZ1xcXCJcXG4gICAgICBzaXplcz1cXFwiMzJ4MzJcXFwiXFxuICAgICAgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rXFxuICAgICAgcmVsPVxcXCJpY29uXFxcIlxcbiAgICAgIHR5cGU9XFxcImltYWdlL3BuZ1xcXCJcXG4gICAgICBzaXplcz1cXFwiMTZ4MTZcXFwiXFxuICAgICAgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiXFxuICAgIC8+XFxuICAgIDxsaW5rIHJlbD1cXFwibWFuaWZlc3RcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiAvPlxcbiAgICA8dGl0bGU+VGljIFRhYyBUb2U8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHkgY2xhc3M9XFxcInByZWxvYWRcXFwiPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZGlzYWJsZWQgZ2FtZVxcXCI+XFxuICAgICAgPGhlYWRlcj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiVGljIFRhYyBUb2VcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2hlYWRlcj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19hY3Rpb25zXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX3Jlc3RhcnQtYnRuXFxcIj5cXG4gICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyArIFwiXFxcIiBhbHQ9XFxcIlJlc3RhcnQgR2FtZVxcXCIgLz5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fcXVpdC1idG5cXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fICsgXCJcXFwiIGFsdD1cXFwiUXVpdCBHYW1lXFxcIiAvPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fc3RhdHVzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX3N0YXR1cy1wbGF5ZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLWlkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLXN5bWJvbFxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fICsgXCJcXFwiIGFsdD1cXFwiWFxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLW5hbWVcXFwiPlBsYXllciAxPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyLWljb25cXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gKyBcIlxcXCIgYWx0PVxcXCJIdW1hbiBQbGF5ZXJcXFwiIC8+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtbWVzc2FnZVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXR1cy1tZXNzYWdlX190dXJuLWljb25cXFwiIGRhdGEtdHVybj1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXR1cy1tZXNzYWdlX190ZXh0XFxcIj5UdXJuPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lX19zdGF0dXMtcGxheWVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fc3RhdHVzLXBsYXllci1pZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fc3RhdHVzLXBsYXllci1zeW1ib2xcXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyArIFwiXFxcIiBhbHQ9XFxcIk9cXFwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fc3RhdHVzLXBsYXllci1uYW1lXFxcIj5QbGF5ZXIgMjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZV9fc3RhdHVzLXBsYXllci1pY29uXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiXFxcIiBhbHQ9XFxcIkFJIFBsYXllclxcXCIgLz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8bWFpbj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWVfX2JvYXJkXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmQtY2VsbFxcXCIgZGF0YS1jZWxsLXJvdz1cXFwiMFxcXCIgZGF0YS1jZWxsLWNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VsbC1zeW1ib2xcXFwiIGRhdGEtdHVybj1cXFwiXFxcIiBkYXRhLXNldD1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX2JvYXJkLWNlbGxcXFwiIGRhdGEtY2VsbC1yb3c9XFxcIjBcXFwiIGRhdGEtY2VsbC1jb2w9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbGwtc3ltYm9sXFxcIiBkYXRhLXR1cm49XFxcIlxcXCIgZGF0YS1zZXQ9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19ib2FyZC1jZWxsXFxcIiBkYXRhLWNlbGwtcm93PVxcXCIwXFxcIiBkYXRhLWNlbGwtY29sPVxcXCIyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsLXN5bWJvbFxcXCIgZGF0YS10dXJuPVxcXCJcXFwiIGRhdGEtc2V0PVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmQtY2VsbFxcXCIgZGF0YS1jZWxsLXJvdz1cXFwiMVxcXCIgZGF0YS1jZWxsLWNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VsbC1zeW1ib2xcXFwiIGRhdGEtdHVybj1cXFwiXFxcIiBkYXRhLXNldD1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX2JvYXJkLWNlbGxcXFwiIGRhdGEtY2VsbC1yb3c9XFxcIjFcXFwiIGRhdGEtY2VsbC1jb2w9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbGwtc3ltYm9sXFxcIiBkYXRhLXR1cm49XFxcIlxcXCIgZGF0YS1zZXQ9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19ib2FyZC1jZWxsXFxcIiBkYXRhLWNlbGwtcm93PVxcXCIxXFxcIiBkYXRhLWNlbGwtY29sPVxcXCIyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsLXN5bWJvbFxcXCIgZGF0YS10dXJuPVxcXCJcXFwiIGRhdGEtc2V0PVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2FtZV9fYm9hcmQtY2VsbFxcXCIgZGF0YS1jZWxsLXJvdz1cXFwiMlxcXCIgZGF0YS1jZWxsLWNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VsbC1zeW1ib2xcXFwiIGRhdGEtdHVybj1cXFwiXFxcIiBkYXRhLXNldD1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdhbWVfX2JvYXJkLWNlbGxcXFwiIGRhdGEtY2VsbC1yb3c9XFxcIjJcXFwiIGRhdGEtY2VsbC1jb2w9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbGwtc3ltYm9sXFxcIiBkYXRhLXR1cm49XFxcIlxcXCIgZGF0YS1zZXQ9XFxcIlxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJnYW1lX19ib2FyZC1jZWxsXFxcIiBkYXRhLWNlbGwtcm93PVxcXCIyXFxcIiBkYXRhLWNlbGwtY29sPVxcXCIyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsLXN5bWJvbFxcXCIgZGF0YS10dXJuPVxcXCJcXFwiIGRhdGEtc2V0PVxcXCJcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbWFpbj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZ2FtZS1pbml0aWFsaXplclxcXCI+XFxuICAgICAgPGhlYWRlcj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPlxcbiAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiVGljIFRhYyBUb2VcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2hlYWRlcj5cXG4gICAgICA8bWFpbj5cXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJnYW1lLWluaXRpYWxpemVyX19vcHRpb25zXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJfX3N5bWJvbFxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyArIFwiXFxcIiBhbHQ9XFxcIlhcXFwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyX19pY29uXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gKyBcIlxcXCIgYWx0PVxcXCJIdW1hbiBQbGF5ZXJcXFwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyX190eXBlLXNlbGVjdG9yXFxcIj5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwicGxheWVyMS10eXBlXFxcIlxcbiAgICAgICAgICAgICAgICBpZD1cXFwicGxheWVyMS1odW1hblxcXCJcXG4gICAgICAgICAgICAgICAgdmFsdWU9XFxcImh1bWFuXFxcIlxcbiAgICAgICAgICAgICAgICBjaGVja2VkXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGxheWVyMS1odW1hblxcXCI+SHVtYW48L2xhYmVsPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJwbGF5ZXIxLXR5cGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJwbGF5ZXIxLWFpXFxcIlxcbiAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiQUlcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGxheWVyMS1haVxcXCI+QUk8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYXllcl9fbmFtZVxcXCI+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5ZXIxLW5hbWVcXFwiPlBsYXllciBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICBpZD1cXFwicGxheWVyMS1uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgcGxheWVyIG5hbWUgLi4uXFxcIlxcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlzYWJsZWQgcGxheWVyX19haS10eXBlXFxcIj5cXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFpMS10eXBlXFxcIj5BSSBUeXBlPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cXFwicGxheWVyX19haS10eXBlXFxcIiBpZD1cXFwiYWkxLXR5cGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJlYXN5XFxcIj5FYXN5PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm1lZGl1bVxcXCI+TWVkaXVtPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImhhcmRcXFwiPkhhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidW5iZWF0YWJsZVxcXCI+VW5iZWF0YWJsZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBsYXllcl9fc3ltYm9sXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEyX19fICsgXCJcXFwiIGFsdD1cXFwiT1xcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJfX2ljb25cXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gKyBcIlxcXCIgYWx0PVxcXCJBSSBQbGF5ZXJcXFwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyX190eXBlLXNlbGVjdG9yXFxcIj5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwicGxheWVyMi10eXBlXFxcIlxcbiAgICAgICAgICAgICAgICBpZD1cXFwicGxheWVyMi1odW1hblxcXCJcXG4gICAgICAgICAgICAgICAgdmFsdWU9XFxcIkh1bWFuXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBsYXllcjItaHVtYW5cXFwiPkh1bWFuPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwicGxheWVyMi10eXBlXFxcIlxcbiAgICAgICAgICAgICAgICBpZD1cXFwicGxheWVyMi1haVxcXCJcXG4gICAgICAgICAgICAgICAgdmFsdWU9XFxcIkFJXFxcIlxcbiAgICAgICAgICAgICAgICBjaGVja2VkXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGxheWVyMi1haVxcXCI+QUk8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRpc2FibGVkIHBsYXllcl9fbmFtZVxcXCI+XFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5ZXIyLW5hbWVcXFwiPlBsYXllciBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICBpZD1cXFwicGxheWVyMi1uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgcGxheWVyIG5hbWUgLi4uXFxcIlxcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGxheWVyX19haS10eXBlXFxcIj5cXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFpMi10eXBlXFxcIj5BSSBUeXBlPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cXFwicGxheWVyX19haS10eXBlXFxcIiBpZD1cXFwiYWkyLXR5cGVcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJlYXN5XFxcIj5FYXN5PC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm1lZGl1bVxcXCI+TWVkaXVtPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImhhcmRcXFwiPkhhcmQ8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidW5iZWF0YWJsZVxcXCI+VW5iZWF0YWJsZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWluaXRpYWxpemVyX19zdGFydFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic3RhcnQtZ2FtZS1idG5cXFwiPlN0YXJ0IEdhbWU8L2J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgPC9tYWluPlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImRpc2FibGVkIHJlc3VsdC1tb2RhbC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX19jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX19oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX190aXRsZVxcXCI+R2FtZSBPdmVyPC9oMj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX2Nsb3NlLWJ0blxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xM19fXyArIFwiXFxcIiBhbHQ9XFxcIkNsb3NlXFxcIiAvPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX19ib2R5XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX21lc3NhZ2VcXFwiIGRhdGEtd2lubmVyPVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX193aW5uZXItc3ltYm9sXFxcIiBkYXRhLXdpbm5lcj1cXFwiXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxwPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc3VsdC1tb2RhbF9fZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyZXN1bHQtbW9kYWxfX3Jlc3RhcnQtYnRuXFxcIj5QbGF5IEFnYWluPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicmVzdWx0LW1vZGFsX19xdWl0LWJ0blxcXCI+UXVpdDwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG4vKipcbiAqIEFJUGxheWVyIGlzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYW4gQUkgcGxheWVyIG9iamVjdCAoaW5oZXJpdHMgZnJvbSBQbGF5ZXIpXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ltYm9sIC0gY2FsbCBpdCB3aXRoICdYJyBvciAnTydcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFJUGxheWVyIG9iamVjdFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TmV4dE1vdmUgLSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSBiYXNlZCBvbiBkaWZmaWN1bHR5IGxldmVsXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROYW1lIC0gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTeW1ib2wgLSByZXR1cm5zIHRoZSBzeW1ib2wgb2YgdGhlIHBsYXllciAoJ1gnIG9yICdPJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFR5cGUgLSByZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBwbGF5ZXIgKCdIdW1hbicgb3IgJ0FJJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldExldmVsIC0gcmV0dXJucyB0aGUgZGlmZmljdWx0eSBsZXZlbCBvZiB0aGUgQUkgKCdFYXN5JywgJ01lZGl1bScsICdIYXJkJywgJ1VuYmVhdGFibGUnKVxuICovXG5jb25zdCBBSVBsYXllciA9IChzeW1ib2wsIGxldmVsKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBgJHtsZXZlbH0gQUlgO1xuXG4gIC8qKlxuICAgKiBsZXZlbCBpcyB0aGUgZGlmZmljdWx0eSBsZXZlbCBvZiB0aGUgQUlcbiAgICogKEVhc3ksIE1lZGl1bSwgSGFyZCwgVW5iZWF0YWJsZSlcbiAgICovXG4gIGNvbnN0IGdldExldmVsID0gKCkgPT4gbGV2ZWw7XG5cbiAgLyoqXG4gICAqIG1pbmltYXggaXMgYSByZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBldmFsdWF0ZXMgdGhlIGJvYXJkIGFuZCByZXR1cm5zIGEgc2NvcmVcbiAgICogQHBhcmFtIHtnYW1lQm9hcmR9IGJvYXJkIC0gY2FsbCBpdCB3aXRoIHRoZSBjdXJyZW50IGJvYXJkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNYXhpbWl6aW5nIC0gY2FsbCBpdCB3aXRoIHRydWUgaWYgdGhlIGN1cnJlbnQgbW92ZSBpcyBtYXhpbWl6aW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBkZXB0aFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBzY29yZVxuICAgKi9cbiAgY29uc3QgbWluaW1heCA9IChib2FyZCwgaXNNYXhpbWl6aW5nLCBkZXB0aCkgPT4ge1xuICAgIGNvbnN0IG9wcG9uZW50U3ltYm9sID0gc3ltYm9sID09PSAnWCcgPyAnTycgOiAnWCc7XG5cbiAgICAvLyBldmFsdWF0ZSB0aGUgYm9hcmRcbiAgICBjb25zdCB3aW5uZXIgPSBib2FyZC5jaGVja1dpbigpO1xuXG4gICAgLy8gYmFzZSBjYXNlOiBpZiB0aGUgZ2FtZSBpcyB3b24gYnkgdGhlIG1heGltaXppbmcgcGxheWVyIChBSSksIHJldHVybiBoaWdoIHNjb3JlICgxKVxuICAgIGlmICh3aW5uZXIgPT09IHN5bWJvbCkge1xuICAgICAgcmV0dXJuIDEwMCAtIGRlcHRoO1xuICAgIH1cbiAgICAvLyBiYXNlIGNhc2U6IGlmIHRoZSBnYW1lIGlzIHdvbiBieSB0aGUgbWluaW1pemluZyBwbGF5ZXIgKG9wcG9uZW50KSwgcmV0dXJuIGxvdyBzY29yZSAoLTEpXG4gICAgaWYgKHdpbm5lciA9PT0gb3Bwb25lbnRTeW1ib2wpIHtcbiAgICAgIHJldHVybiAtMTAwICsgZGVwdGg7XG4gICAgfVxuICAgIC8vIGJhc2UgY2FzZTogaWYgdGhlIGdhbWUgaXMgYSB0aWUsIHJldHVybiAwXG4gICAgaWYgKGJvYXJkLmNoZWNrRHJhdygpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyByZWN1cnNpdmUgY2FzZTogaWYgdGhlIGN1cnJlbnQgbW92ZSBpcyBtYXhpbWl6aW5nLCByZXR1cm4gdGhlIG1heGltdW0gc2NvcmVcbiAgICBpZiAoaXNNYXhpbWl6aW5nKSB7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgY29uc3QgZW1wdHlDZWxscyA9IGJvYXJkLmdldEVtcHR5Q2VsbHMoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eUNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGVtcHR5Q2VsbHNbaV07XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgbW92ZVxuICAgICAgICBib2FyZC5zZXRDZWxsKHgsIHksIHN5bWJvbCk7XG5cbiAgICAgICAgLy8gZXZhbHVhdGUgdGhlIGJvYXJkIGlmIHRoZSBtb3ZlIGlzIG1hZGVcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCBmYWxzZSwgZGVwdGggKyAxKTtcblxuICAgICAgICAvLyB1bmRvIHRoZSBtb3ZlXG4gICAgICAgIGJvYXJkLnJlc2V0Q2VsbCh4LCB5KTtcblxuICAgICAgICAvLyB1cGRhdGUgdGhlIGJlc3Qgc2NvcmVcbiAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5tYXgoc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZSBjYXNlOiBpZiB0aGUgY3VycmVudCBtb3ZlIGlzIG1pbmltaXppbmcsIHJldHVybiB0aGUgbWluaW11bSBzY29yZVxuICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gYm9hcmQuZ2V0RW1wdHlDZWxscygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlDZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgW3gsIHldID0gZW1wdHlDZWxsc1tpXTtcblxuICAgICAgLy8gbWFrZSB0aGUgbW92ZVxuICAgICAgYm9hcmQuc2V0Q2VsbCh4LCB5LCBzeW1ib2wgPT09ICdYJyA/ICdPJyA6ICdYJyk7XG5cbiAgICAgIC8vIGV2YWx1YXRlIHRoZSBib2FyZCBpZiB0aGUgbW92ZSBpcyBtYWRlXG4gICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIHRydWUsIGRlcHRoICsgMSk7XG5cbiAgICAgIC8vIHVuZG8gdGhlIG1vdmVcbiAgICAgIGJvYXJkLnJlc2V0Q2VsbCh4LCB5KTtcblxuICAgICAgLy8gdXBkYXRlIHRoZSBiZXN0IHNjb3JlXG4gICAgICBiZXN0U2NvcmUgPSBNYXRoLm1pbihzY29yZSwgYmVzdFNjb3JlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdFNjb3JlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXRCZXN0TW92ZSByZXR1cm5zIHRoZSBiZXN0IG5leHQgbW92ZSBmb3IgdGhlIEFJLFxuICAgKiByZXR1cm5zIG51bGwgaWYgYm9hcmQgaXMgZnVsbFxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmRcbiAgICogQHJldHVybnMge0FycmF5fSBiZXN0TW92ZVxuICAgKi9cbiAgY29uc3QgZ2V0QmVzdE1vdmUgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gYm9hcmQuZ2V0RW1wdHlDZWxscygpO1xuICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgbGV0IGJlc3RNb3ZlO1xuXG4gICAgaWYgKGVtcHR5Q2VsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGVtcHR5Q2VsbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gZW1wdHlDZWxsc1swXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtcHR5Q2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGVtcHR5Q2VsbHNbaV07XG5cbiAgICAgIC8vIG1ha2UgdGhlIG1vdmVcbiAgICAgIGJvYXJkLnNldENlbGwoeCwgeSwgc3ltYm9sKTtcblxuICAgICAgLy8gZXZhbHVhdGUgdGhlIGJvYXJkIGlmIHRoZSBtb3ZlIGlzIG1hZGVcbiAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZmFsc2UsIDEpO1xuXG4gICAgICAvLyB1bmRvIHRoZSBtb3ZlXG4gICAgICBib2FyZC5yZXNldENlbGwoeCwgeSk7XG5cbiAgICAgIC8vIHVwZGF0ZSB0aGUgYmVzdCBzY29yZSBhbmQgbW92ZVxuICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICBiZXN0TW92ZSA9IFt4LCB5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdE1vdmU7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldFJhbmRvbU1vdmUgcmV0dXJucyBhIHJhbmRvbSBuZXh0IG1vdmUgZm9yIHRoZSBBSVxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmQgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtBcnJheX0gcmFuZG9tTW92ZVxuICAgKiAqL1xuICBjb25zdCBnZXRSYW5kb21Nb3ZlID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgZW1wdHlDZWxscyA9IGJvYXJkLmdldEVtcHR5Q2VsbHMoKTtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5Q2VsbHMubGVuZ3RoKTtcblxuICAgIHJldHVybiBlbXB0eUNlbGxzW3JhbmRvbUluZGV4XTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0TmV4dE1vdmUgcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgYmFzZWQgb24gZGlmZmljdWx0eSBsZXZlbFxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmQgb2JqZWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaWZmaWN1bHR5UGVyY2VudGFnZSAtIGNhbGwgaXQgd2l0aCB0aGUgZGlmZmljdWx0eSBwZXJjZW50YWdlICgwLTEwMClcbiAgICogQHJldHVybnMge0FycmF5fSBuZXh0TW92ZVxuICAgKiAqL1xuICBjb25zdCBnZXROZXh0TW92ZSA9IChib2FyZCwgZGlmZmljdWx0eVBlcmNlbnRhZ2UpID0+IHtcbiAgICAvLyByYW5kb20gcGVyY2VudGFnZSBiZXR3ZWVuIDAgYW5kIDEwMFxuICAgIGNvbnN0IHJhbmRvbVBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDEpO1xuXG4gICAgaWYgKHJhbmRvbVBlcmNlbnRhZ2UgPCBkaWZmaWN1bHR5UGVyY2VudGFnZSkge1xuICAgICAgcmV0dXJuIGdldEJlc3RNb3ZlKGJvYXJkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0UmFuZG9tTW92ZShib2FyZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TGV2ZWwsIGdldE5leHRNb3ZlLCAuLi5QbGF5ZXIobmFtZSwgc3ltYm9sLCAnQUknKSB9O1xufTtcblxuLyoqXG4gKiBFYXN5QUlQbGF5ZXIgaXMgYSBtb2R1bGVzIHRoYXQgY29udGFpbnMgdGhlIGxvZ2ljIGZvciB0aGUgZWFzeSBBSSBwbGF5ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzeW1ib2wgLSBjYWxsIGl0IHdpdGggJ1gnIG9yICdPJ1xuICogQHJldHVybnMge09iamVjdH0gRWFzeUFJUGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROYW1lIC0gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTeW1ib2wgLSByZXR1cm5zIHRoZSBzeW1ib2wgb2YgdGhlIHBsYXllclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VHlwZSAtIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIHBsYXllciAoYWx3YXlzICdBSScpXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRMZXZlbCAtIHJldHVybnMgdGhlIGxldmVsIG9mIHRoZSBBSSAoYWx3YXlzICdFYXN5JylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5leHRNb3ZlIC0gcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgd2l0aCBhIGRpZmZpY3VsdHkgb2YgZWFzeSAocmFuZG9tIG1vdmUpXG4gKi9cbmNvbnN0IEVhc3lBSVBsYXllciA9IChzeW1ib2wpID0+IHtcbiAgY29uc3QgYWlQbGF5ZXIgPSBBSVBsYXllcihzeW1ib2wsICdFYXN5Jyk7XG5cbiAgLyoqXG4gICAqIGdldE5leHRNb3ZlIHJldHVybnMgdGhlIG5leHQgbW92ZSBmb3IgdGhlIEFJIHdpdGggYSBkaWZmaWN1bHR5IG9mIGVhc3kgKHJhbmRvbSBtb3ZlKVxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmQgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtBcnJheX0gbmV4dE1vdmVcbiAgICovXG4gIGNvbnN0IGdldE5leHRNb3ZlID0gKGJvYXJkKSA9PiBhaVBsYXllci5nZXROZXh0TW92ZShib2FyZCwgMCk7XG5cbiAgcmV0dXJuIHsgLi4uYWlQbGF5ZXIsIGdldE5leHRNb3ZlIH07XG59O1xuXG4vKipcbiAqIE1lZGl1bUFJUGxheWVyIGlzIGEgbW9kdWxlcyB0aGF0IGNvbnRhaW5zIHRoZSBsb2dpYyBmb3IgdGhlIG1lZGl1bSBBSSBwbGF5ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzeW1ib2wgLSBjYWxsIGl0IHdpdGggJ1gnIG9yICdPJ1xuICogQHJldHVybnMge09iamVjdH0gTWVkaXVtQUlQbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRUeXBlIC0gcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgcGxheWVyIChhbHdheXMgJ0FJJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldExldmVsIC0gcmV0dXJucyB0aGUgbGV2ZWwgb2YgdGhlIEFJIChhbHdheXMgJ01lZGl1bScpXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROZXh0TW92ZSAtIHJldHVybnMgdGhlIG5leHQgbW92ZSBmb3IgdGhlIEFJIHdpdGggYSBkaWZmaWN1bHR5IG9mIG1lZGl1bSAoNTAlIGNoYW5jZSBvZiBiZXN0IG1vdmUpXG4gKi9cbmNvbnN0IE1lZGl1bUFJUGxheWVyID0gKHN5bWJvbCkgPT4ge1xuICBjb25zdCBhaVBsYXllciA9IEFJUGxheWVyKHN5bWJvbCwgJ01lZGl1bScpO1xuXG4gIC8qKlxuICAgKiBnZXROZXh0TW92ZSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSB3aXRoIGEgZGlmZmljdWx0eSBvZiBtZWRpdW0gKDUwJSBjaGFuY2Ugb2YgYmVzdCBtb3ZlKVxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmQgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtBcnJheX0gbmV4dE1vdmVcbiAgICovXG4gIGNvbnN0IGdldE5leHRNb3ZlID0gKGJvYXJkKSA9PiBhaVBsYXllci5nZXROZXh0TW92ZShib2FyZCwgNTApO1xuXG4gIHJldHVybiB7IC4uLmFpUGxheWVyLCBnZXROZXh0TW92ZSB9O1xufTtcblxuLyoqXG4gKiBIYXJkQUlQbGF5ZXIgaXMgYSBtb2R1bGVzIHRoYXQgY29udGFpbnMgdGhlIGxvZ2ljIGZvciB0aGUgaGFyZCBBSSBwbGF5ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzeW1ib2wgLSBjYWxsIGl0IHdpdGggJ1gnIG9yICdPJ1xuICogQHJldHVybnMge09iamVjdH0gSGFyZEFJUGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROYW1lIC0gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTeW1ib2wgLSByZXR1cm5zIHRoZSBzeW1ib2wgb2YgdGhlIHBsYXllclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VHlwZSAtIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIHBsYXllciAoYWx3YXlzICdBSScpXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRMZXZlbCAtIHJldHVybnMgdGhlIGxldmVsIG9mIHRoZSBBSSAoYWx3YXlzICdIYXJkJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5leHRNb3ZlIC0gcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgd2l0aCBhIGRpZmZpY3VsdHkgb2YgaGFyZCAoNzUlIGNoYW5jZSBvZiBiZXN0IG1vdmUpXG4gKi9cbmNvbnN0IEhhcmRBSVBsYXllciA9IChzeW1ib2wpID0+IHtcbiAgY29uc3QgYWlQbGF5ZXIgPSBBSVBsYXllcihzeW1ib2wsICdIYXJkJyk7XG5cbiAgLyoqXG4gICAqIGdldE5leHRNb3ZlIHJldHVybnMgdGhlIG5leHQgbW92ZSBmb3IgdGhlIEFJIHdpdGggYSBkaWZmaWN1bHR5IG9mIGhhcmQgKDc1JSBjaGFuY2Ugb2YgYmVzdCBtb3ZlKVxuICAgKiBAcGFyYW0ge2dhbWVCb2FyZH0gYm9hcmQgLSBjYWxsIGl0IHdpdGggdGhlIGN1cnJlbnQgYm9hcmQgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtBcnJheX0gbmV4dE1vdmVcbiAgICovXG4gIGNvbnN0IGdldE5leHRNb3ZlID0gKGJvYXJkKSA9PiBhaVBsYXllci5nZXROZXh0TW92ZShib2FyZCwgNzUpO1xuXG4gIHJldHVybiB7IC4uLmFpUGxheWVyLCBnZXROZXh0TW92ZSB9O1xufTtcblxuLyoqXG4gKiBVbmJlYXRhYmxlQUlQbGF5ZXIgaXMgYSBtb2R1bGVzIHRoYXQgY29udGFpbnMgdGhlIGxvZ2ljIGZvciB0aGUgdW5iZWF0YWJsZSBBSSBwbGF5ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzeW1ib2wgLSBjYWxsIGl0IHdpdGggJ1gnIG9yICdPJ1xuICogQHJldHVybnMge09iamVjdH0gVW5iZWF0YWJsZUFJUGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXROYW1lIC0gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTeW1ib2wgLSByZXR1cm5zIHRoZSBzeW1ib2wgb2YgdGhlIHBsYXllclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VHlwZSAtIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIHBsYXllciAoYWx3YXlzICdBSScpXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRMZXZlbCAtIHJldHVybnMgdGhlIGxldmVsIG9mIHRoZSBBSSAoYWx3YXlzICdVbmJlYXRhYmxlJylcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5leHRNb3ZlIC0gcmV0dXJucyB0aGUgbmV4dCBtb3ZlIGZvciB0aGUgQUkgd2l0aCBhIGRpZmZpY3VsdHkgb2YgdW5iZWF0YWJsZSAoYmVzdCBtb3ZlIHBvc3NpYmxlKVxuICovXG5jb25zdCBVbmJlYXRhYmxlQUlQbGF5ZXIgPSAoc3ltYm9sKSA9PiB7XG4gIGNvbnN0IGFpUGxheWVyID0gQUlQbGF5ZXIoc3ltYm9sLCAnVW5iZWF0YWJsZScpO1xuXG4gIC8qKlxuICAgKiBnZXROZXh0TW92ZSByZXR1cm5zIHRoZSBuZXh0IG1vdmUgZm9yIHRoZSBBSSB3aXRoIGEgZGlmZmljdWx0eSBvZiB1bmJlYXRhYmxlIChiZXN0IG1vdmUgcG9zc2libGUpXG4gICAqIEBwYXJhbSB7Z2FtZUJvYXJkfSBib2FyZCAtIGNhbGwgaXQgd2l0aCB0aGUgY3VycmVudCBib2FyZCBvYmplY3RcbiAgICogQHJldHVybnMge0FycmF5fSBuZXh0TW92ZVxuICAgKiAqL1xuICBjb25zdCBnZXROZXh0TW92ZSA9IChib2FyZCkgPT4gYWlQbGF5ZXIuZ2V0TmV4dE1vdmUoYm9hcmQsIDEwMCk7XG5cbiAgcmV0dXJuIHsgLi4uYWlQbGF5ZXIsIGdldE5leHRNb3ZlIH07XG59O1xuXG5leHBvcnQgeyBFYXN5QUlQbGF5ZXIsIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllciB9O1xuIiwiLyoqXG4gKiBDZWxsIGlzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYSBjZWxsIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gQ2VsbCBvYmplY3RcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFZhbHVlIC0gcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGNlbGxcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldFZhbHVlIC0gc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNlbGwgdG8gdGhlIGdpdmVuIHZhbHVlXG4gKi9cbmNvbnN0IENlbGwgPSAoKSA9PiB7XG4gIC8vIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbCAoZWl0aGVyICdYJywgJ08nLCBvciAnXycpXG4gIGxldCB2YWx1ZSA9ICdfJztcblxuICAvKipcbiAgICogZ2V0VmFsdWUgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGNlbGxcbiAgICogQHJldHVybnMge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4gdmFsdWU7XG5cbiAgLyoqXG4gICAqIHNldFZhbHVlIHNldHMgdGhlIHZhbHVlIG9mIHRoZSBjZWxsIHRvIHRoZSBnaXZlbiB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgLSBjYWxsIGl0IHdpdGggJ1gnLCAnTycsIG9yICdfJ1xuICAgKi9cbiAgY29uc3Qgc2V0VmFsdWUgPSAobmV3VmFsdWUpID0+IHtcbiAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFZhbHVlLCBzZXRWYWx1ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuaW1wb3J0IHtcbiAgQk9BUkRfQ0hBTkdFRCxcbiAgR0FNRV9FTkRFRCxcbiAgR0FNRV9TVEFSVEVELFxuICBHQU1FX1NUQVJURURfQUlfVlNfQUksXG4gIEFJX1RVUk4sXG4gIFNUQVRVU19DSEFOR0VELFxuICBDRUxMX0NMSUNLRUQsXG4gIEdBTUVfUkVTVEFSVEVELFxuICBHQU1FX1FVSVQsXG4gIFBPU1RfQ0VMTF9DTElDS0VELFxufSBmcm9tICcuL2V2ZW50LXR5cGVzLmpzJztcbmltcG9ydCBhaVBsYXllckljb24gZnJvbSAnLi4vYXNzZXRzL3BsYXllci1haS5zdmcnO1xuaW1wb3J0IGh1bWFuUGxheWVySWNvbiBmcm9tICcuLi9hc3NldHMvcGxheWVyLWh1bWFuLnN2Zyc7XG5cbi8qIERPTSBFbGVtZW50cyAqL1xuXG5jb25zdCBnYW1lSW5pdGlhbGl6ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW5pdGlhbGl6ZXInKTtcblxuLy8gUGxheWVyIDFcbmNvbnN0IHBsYXllcjFUeXBlUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgJ2lucHV0W25hbWU9XCJwbGF5ZXIxLXR5cGVcIl0nXG4pO1xuY29uc3QgcGxheWVyMUljb25JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLnBsYXllcjpudGgtb2YtdHlwZSgxKSAucGxheWVyX19pY29uIGltZydcbik7XG5jb25zdCBwbGF5ZXIxTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcucGxheWVyOm50aC1vZi10eXBlKDEpIC5wbGF5ZXJfX25hbWUnXG4pO1xuY29uc3QgcGxheWVyMU5hbWVJbnB1dCA9IHBsYXllcjFOYW1lRGl2Lmxhc3RFbGVtZW50Q2hpbGQ7XG5jb25zdCBwbGF5ZXIxQUlUeXBlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wbGF5ZXI6bnRoLW9mLXR5cGUoMSkgLnBsYXllcl9fYWktdHlwZSdcbik7XG5jb25zdCBwbGF5ZXIxQUlMZXZlbFNlbGVjdCA9IHBsYXllcjFBSVR5cGVEaXYubGFzdEVsZW1lbnRDaGlsZDtcblxuLy8gUGxheWVyIDJcbmNvbnN0IHBsYXllcjJUeXBlUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgJ2lucHV0W25hbWU9XCJwbGF5ZXIyLXR5cGVcIl0nXG4pO1xuY29uc3QgcGxheWVyMkljb25JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLnBsYXllcjpudGgtb2YtdHlwZSgyKSAucGxheWVyX19pY29uIGltZydcbik7XG5jb25zdCBwbGF5ZXIyTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcucGxheWVyOm50aC1vZi10eXBlKDIpIC5wbGF5ZXJfX25hbWUnXG4pO1xuY29uc3QgcGxheWVyMk5hbWVJbnB1dCA9IHBsYXllcjJOYW1lRGl2Lmxhc3RFbGVtZW50Q2hpbGQ7XG5jb25zdCBwbGF5ZXIyQUlUeXBlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wbGF5ZXI6bnRoLW9mLXR5cGUoMikgLnBsYXllcl9fYWktdHlwZSdcbik7XG5jb25zdCBwbGF5ZXIyQUlMZXZlbFNlbGVjdCA9IHBsYXllcjJBSVR5cGVEaXYubGFzdEVsZW1lbnRDaGlsZDtcblxuY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnRuJyk7XG5cbi8vIEdhbWUgU2VjdGlvblxuY29uc3QgZ2FtZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuY29uc3QgW2dhbWVTdGF0dXNQbGF5ZXIxSW1nLCBnYW1lU3RhdHVzUGxheWVyMkltZ10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAnLmdhbWVfX3N0YXR1cy1wbGF5ZXItaWNvbiBpbWcnXG4pO1xuY29uc3QgW2dhbWVTdGF0dXNQbGF5ZXIxTmFtZURpdiwgZ2FtZVN0YXR1c1BsYXllcjJOYW1lRGl2XSA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lX19zdGF0dXMtcGxheWVyLW5hbWUnKTtcbmNvbnN0IGdhbWVTdGF0dXNNZXNzYWdlVHVybkljb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLnN0YXR1cy1tZXNzYWdlX190dXJuLWljb24nXG4pO1xuY29uc3QgZ2FtZUJvYXJkQ2VsbERpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVfX2JvYXJkLWNlbGwnKV07XG5cbi8vIFJlc3VsdCBTZWN0aW9uXG5jb25zdCByZXN1bHRNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtbW9kYWwtY29udGFpbmVyJyk7XG5cbi8qIFV0aWxpdHkgRnVuY3Rpb25zICovXG5cbmNvbnN0IHNldFBsYXllckljb24gPSAocGxheWVySWNvbkltZywgcGxheWVyVHlwZSkgPT4ge1xuICBpZiAocGxheWVyVHlwZSA9PT0gJ0FJJykge1xuICAgIHBsYXllckljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhaVBsYXllckljb24pO1xuICB9IGVsc2Uge1xuICAgIHBsYXllckljb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBodW1hblBsYXllckljb24pO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZCcpO1xufTtcblxuY29uc3QgYXBwbHlUcmFuc2l0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG59O1xuXG5jb25zdCByZW1vdmVDbGlja2VkQ2xhc3MgPSAoZSkgPT4ge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG59O1xuXG5jb25zdCB1cGRhdGVHYW1lU3RhdHVzID0gKGdhbWVTdGF0dXMpID0+IHtcbiAgY29uc3QgeyBwbGF5ZXIxLCBwbGF5ZXIyLCBjdXJyZW50UGxheWVyIH0gPSBnYW1lU3RhdHVzO1xuXG4gIHNldFBsYXllckljb24oZ2FtZVN0YXR1c1BsYXllcjFJbWcsIHBsYXllcjEuZ2V0VHlwZSgpKTtcbiAgc2V0UGxheWVySWNvbihnYW1lU3RhdHVzUGxheWVyMkltZywgcGxheWVyMi5nZXRUeXBlKCkpO1xuXG4gIGdhbWVTdGF0dXNQbGF5ZXIxTmFtZURpdi50ZXh0Q29udGVudCA9IHBsYXllcjEuZ2V0TmFtZSgpO1xuICBnYW1lU3RhdHVzUGxheWVyMk5hbWVEaXYudGV4dENvbnRlbnQgPSBwbGF5ZXIyLmdldE5hbWUoKTtcblxuICBnYW1lU3RhdHVzTWVzc2FnZVR1cm5JY29uRGl2LmRhdGFzZXQudHVybiA9IGN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCk7XG59O1xuXG5jb25zdCB1cGRhdGVHYW1lQm9hcmQgPSAoZ2FtZVN0YXR1cykgPT4ge1xuICBjb25zdCB7IGN1cnJlbnRQbGF5ZXIsIGdhbWVCb2FyZCwgaXNHYW1lT3ZlciwgaXNEcmF3LCB3aW5uZXIgfSA9IGdhbWVTdGF0dXM7XG5cbiAgZ2FtZUJvYXJkQ2VsbERpdnMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudENlbGwgPSBjZWxsO1xuICAgIGNvbnN0IGNlbGxTeW1ib2xEaXYgPSBwYXJlbnRDZWxsLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHBhcmVudENlbGwuZGF0YXNldC5jZWxsUm93LCAxMCk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQocGFyZW50Q2VsbC5kYXRhc2V0LmNlbGxDb2wsIDEwKTtcbiAgICBjb25zdCBMb2dpY2FsQ2VsbFZhbHVlID0gZ2FtZUJvYXJkLmdldENlbGwocm93LCBjb2wpLmdldFZhbHVlKCk7XG5cbiAgICBzd2l0Y2ggKExvZ2ljYWxDZWxsVmFsdWUpIHtcbiAgICAgIGNhc2UgJ18nOlxuICAgICAgICBpZiAoY3VycmVudFBsYXllci5nZXRUeXBlKCkgPT09ICdIdW1hbicpIHtcbiAgICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQudHVybiA9IGN1cnJlbnRQbGF5ZXIuZ2V0U3ltYm9sKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbFN5bWJvbERpdi5kYXRhc2V0LnR1cm4gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBjZWxsU3ltYm9sRGl2LmRhdGFzZXQuc2V0ID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC50dXJuID0gJyc7XG4gICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC5zZXQgPSAnWCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTyc6XG4gICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC50dXJuID0gJyc7XG4gICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC5zZXQgPSAnTyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcGFyZW50Q2VsbC5kYXRhc2V0LndpbiA9ICcnO1xuICAgIHBhcmVudENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1vdmVyLWRyYXcnKTtcbiAgfSk7XG5cbiAgaWYgKGlzR2FtZU92ZXIpIHtcbiAgICBpZiAoaXNEcmF3KSB7XG4gICAgICBnYW1lQm9hcmRDZWxsRGl2cy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudENlbGwgPSBjZWxsO1xuICAgICAgICBjb25zdCBjZWxsU3ltYm9sRGl2ID0gcGFyZW50Q2VsbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgY2VsbFN5bWJvbERpdi5kYXRhc2V0LnR1cm4gPSAnJztcblxuICAgICAgICBwYXJlbnRDZWxsLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1kcmF3Jyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZUJvYXJkQ2VsbERpdnMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRDZWxsID0gY2VsbDtcbiAgICAgICAgY29uc3QgY2VsbFN5bWJvbERpdiA9IHBhcmVudENlbGwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNlbGxTeW1ib2xEaXYuZGF0YXNldC50dXJuID0gJyc7XG5cbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNlbGxSb3csIDEwKTtcbiAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNlbGxDb2wsIDEwKTtcbiAgICAgICAgY29uc3Qgd2lubmluZ0NlbGxzID0gZ2FtZUJvYXJkLmdldFdpbm5pbmdDZWxscygpO1xuICAgICAgICBjb25zdCBpc1dpbm5pbmdDZWxsID0gd2lubmluZ0NlbGxzLnNvbWUoXG4gICAgICAgICAgKHdpbm5pbmdDZWxsKSA9PiB3aW5uaW5nQ2VsbFswXSA9PT0gcm93ICYmIHdpbm5pbmdDZWxsWzFdID09PSBjb2xcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaXNXaW5uaW5nQ2VsbCkge1xuICAgICAgICAgIHBhcmVudENlbGwuZGF0YXNldC53aW4gPSB3aW5uZXIuZ2V0U3ltYm9sKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2hvd0dhbWVSZXN1bHQgPSAoZ2FtZVN0YXR1cykgPT4ge1xuICBjb25zdCB7IGlzRHJhdywgd2lubmVyIH0gPSBnYW1lU3RhdHVzO1xuXG4gIGNvbnN0IHJlc3VsdE1vZGFsV2lubmVyU3ltYm9sRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnJlc3VsdC1tb2RhbF9fd2lubmVyLXN5bWJvbCdcbiAgKTtcbiAgY29uc3QgcmVzdWx0TW9kYWxNZXNzYWdlUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5yZXN1bHQtbW9kYWxfX21lc3NhZ2UgcCdcbiAgKTtcblxuICBpZiAoaXNEcmF3KSB7XG4gICAgcmVzdWx0TW9kYWxXaW5uZXJTeW1ib2xEaXYuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICByZXN1bHRNb2RhbE1lc3NhZ2VQLnRleHRDb250ZW50ID0gXCJJdCdzIGEgZHJhdyFcIjtcbiAgfSBlbHNlIGlmICh3aW5uZXIpIHtcbiAgICByZXN1bHRNb2RhbFdpbm5lclN5bWJvbERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgIHJlc3VsdE1vZGFsTWVzc2FnZVAuZGF0YXNldC53aW5uZXIgPSB3aW5uZXIuZ2V0U3ltYm9sKCk7XG4gICAgcmVzdWx0TW9kYWxXaW5uZXJTeW1ib2xEaXYuZGF0YXNldC53aW5uZXIgPSB3aW5uZXIuZ2V0U3ltYm9sKCk7XG4gICAgcmVzdWx0TW9kYWxNZXNzYWdlUC50ZXh0Q29udGVudCA9ICdXb24gdGhlIGdhbWUhJztcbiAgfVxuICB0b2dnbGVFbGVtZW50KHJlc3VsdE1vZGFsQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGdldFBsYXllckRhdGEgPSAodHlwZVJhZGlvcywgbmFtZUlucHV0LCBhaUxldmVsU2VsZWN0KSA9PiAoe1xuICB0eXBlOiB0eXBlUmFkaW9zWzBdLmNoZWNrZWQgPyAnSHVtYW4nIDogJ0FJJyxcbiAgbmFtZTogbmFtZUlucHV0LnZhbHVlLFxuICBsZXZlbDogYWlMZXZlbFNlbGVjdC52YWx1ZSxcbn0pO1xuXG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuICBQdWJTdWIucHVibGlzaChHQU1FX1NUQVJURUQsIHsgcGxheWVyMSwgcGxheWVyMiB9KTtcblxuICBpZiAocGxheWVyMS50eXBlID09PSAnQUknICYmIHBsYXllcjIudHlwZSA9PT0gJ0FJJykge1xuICAgIFB1YlN1Yi5wdWJsaXNoKEdBTUVfU1RBUlRFRF9BSV9WU19BSSk7XG4gIH0gZWxzZSBpZiAocGxheWVyMS50eXBlID09PSAnQUknKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goQUlfVFVSTik7XG4gIH1cbn07XG5cbmNvbnN0IHJlc3RhcnRCdG5DbGlja0xpc3RlbmVyID0gKGUpID0+IHtcbiAgUHViU3ViLnB1Ymxpc2goR0FNRV9SRVNUQVJURUQpO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBnZXRQbGF5ZXJEYXRhKFxuICAgIHBsYXllcjFUeXBlUmFkaW9zLFxuICAgIHBsYXllcjFOYW1lSW5wdXQsXG4gICAgcGxheWVyMUFJTGV2ZWxTZWxlY3RcbiAgKTtcblxuICBjb25zdCBwbGF5ZXIyID0gZ2V0UGxheWVyRGF0YShcbiAgICBwbGF5ZXIyVHlwZVJhZGlvcyxcbiAgICBwbGF5ZXIyTmFtZUlucHV0LFxuICAgIHBsYXllcjJBSUxldmVsU2VsZWN0XG4gICk7XG5cbiAgc3RhcnRHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xufTtcblxuY29uc3QgcXVpdEJ0bkNsaWNrTGlzdGVuZXIgPSAoZSkgPT4ge1xuICBQdWJTdWIucHVibGlzaChHQU1FX1FVSVQpO1xuXG4gIHBsYXllcjFOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgcGxheWVyMk5hbWVJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgaGFuZGxlR2FtZUluaXRpYWxpemVyU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaGFuZGxlUGxheWVyVHlwZUNoYW5nZSA9IChcbiAgICBwbGF5ZXJUeXBlUmFkaW9zLFxuICAgIHBsYXllckljb25JbWcsXG4gICAgcGxheWVyTmFtZURpdixcbiAgICBwbGF5ZXJBSVR5cGVEaXZcbiAgKSA9PiB7XG4gICAgWy4uLnBsYXllclR5cGVSYWRpb3NdLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKHJhZGlvLnZhbHVlID09PSAnQUknKSB7XG4gICAgICAgICAgICBzZXRQbGF5ZXJJY29uKHBsYXllckljb25JbWcsICdBSScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQbGF5ZXJJY29uKHBsYXllckljb25JbWcsICdIdW1hbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvZ2dsZUVsZW1lbnQocGxheWVyTmFtZURpdik7XG4gICAgICAgICAgdG9nZ2xlRWxlbWVudChwbGF5ZXJBSVR5cGVEaXYpO1xuXG4gICAgICAgICAgcGxheWVyTmFtZURpdi5sYXN0RWxlbWVudENoaWxkLnRvZ2dsZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lQnRuTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBsYXllcjEgPSBnZXRQbGF5ZXJEYXRhKFxuICAgICAgcGxheWVyMVR5cGVSYWRpb3MsXG4gICAgICBwbGF5ZXIxTmFtZUlucHV0LFxuICAgICAgcGxheWVyMUFJTGV2ZWxTZWxlY3RcbiAgICApO1xuXG4gICAgY29uc3QgcGxheWVyMiA9IGdldFBsYXllckRhdGEoXG4gICAgICBwbGF5ZXIyVHlwZVJhZGlvcyxcbiAgICAgIHBsYXllcjJOYW1lSW5wdXQsXG4gICAgICBwbGF5ZXIyQUlMZXZlbFNlbGVjdFxuICAgICk7XG5cbiAgICBpZiAocGxheWVyMS50eXBlID09PSAnSHVtYW4nICYmIHBsYXllcjEubmFtZSA9PT0gJycpIHtcbiAgICAgIHBsYXllcjFOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgaWYgKHBsYXllcjIudHlwZSA9PT0gJ0h1bWFuJyAmJiBwbGF5ZXIyLm5hbWUgPT09ICcnKSB7XG4gICAgICAgIHBsYXllcjJOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXIyLnR5cGUgPT09ICdIdW1hbicgJiYgcGxheWVyMi5uYW1lID09PSAnJykge1xuICAgICAgcGxheWVyMk5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG5cbiAgICAgIGlmIChwbGF5ZXIxLnR5cGUgPT09ICdIdW1hbicgJiYgcGxheWVyMS5uYW1lID09PSAnJykge1xuICAgICAgICBwbGF5ZXIxTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhcHBseVRyYW5zaXRpb24oZS50YXJnZXQpO1xuICAgIHN0YXJ0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgfTtcblxuICBoYW5kbGVQbGF5ZXJUeXBlQ2hhbmdlKFxuICAgIHBsYXllcjFUeXBlUmFkaW9zLFxuICAgIHBsYXllcjFJY29uSW1nLFxuICAgIHBsYXllcjFOYW1lRGl2LFxuICAgIHBsYXllcjFBSVR5cGVEaXZcbiAgKTtcbiAgaGFuZGxlUGxheWVyVHlwZUNoYW5nZShcbiAgICBwbGF5ZXIyVHlwZVJhZGlvcyxcbiAgICBwbGF5ZXIySWNvbkltZyxcbiAgICBwbGF5ZXIyTmFtZURpdixcbiAgICBwbGF5ZXIyQUlUeXBlRGl2XG4gICk7XG5cbiAgLyogRXZlbnQgTGlzdGVuZXJzICovXG5cbiAgcGxheWVyMU5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICB9KTtcbiAgcGxheWVyMk5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICB9KTtcblxuICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWVCdG5MaXN0ZW5lcik7XG4gIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKGUpID0+IHtcbiAgICByZW1vdmVDbGlja2VkQ2xhc3MoZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnYW1lSW5pdGlhbGl6ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICBnYW1lU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgIH0sIDMwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlR2FtZVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fcmVzdGFydC1idG4nKTtcbiAgY29uc3QgcXVpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19xdWl0LWJ0bicpO1xuXG4gIGNvbnN0IGNlbGxDbGlja0xpc3RlbmVyID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5jZWxsUm93O1xuICAgIGNvbnN0IGNvbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5jZWxsQ29sO1xuXG4gICAgUHViU3ViLnB1Ymxpc2goQ0VMTF9DTElDS0VELCB7IHJvdywgY29sLCBjZWxsRGl2OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50IH0pO1xuICB9O1xuXG4gIC8qIEV2ZW50IGxpc3RlbmVycyAqL1xuICBnYW1lQm9hcmRDZWxsRGl2cy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNlbGxDbGlja0xpc3RlbmVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCByZW1vdmVDbGlja2VkQ2xhc3MpO1xuICB9KTtcblxuICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFwcGx5VHJhbnNpdGlvbihyZXN0YXJ0QnRuKTtcbiAgICByZXN0YXJ0QnRuQ2xpY2tMaXN0ZW5lcigpO1xuICB9KTtcbiAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKGUpID0+IHtcbiAgICByZW1vdmVDbGlja2VkQ2xhc3MoZSk7XG4gIH0pO1xuXG4gIHF1aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYXBwbHlUcmFuc2l0aW9uKHF1aXRCdG4pO1xuICAgIHF1aXRCdG5DbGlja0xpc3RlbmVyKCk7XG4gIH0pO1xuICBxdWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZSkgPT4ge1xuICAgIHJlbW92ZUNsaWNrZWRDbGFzcyhlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGdhbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICBnYW1lSW5pdGlhbGl6ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVSZXN1bHRTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1tb2RhbF9fcmVzdGFydC1idG4nKTtcbiAgY29uc3QgcXVpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtbW9kYWxfX3F1aXQtYnRuJyk7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1tb2RhbF9fY2xvc2UtYnRuJyk7XG5cbiAgLyogRXZlbnQgbGlzdGVuZXJzICovXG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFwcGx5VHJhbnNpdGlvbihlLnRhcmdldCk7XG4gICAgcmVzdGFydEJ0bkNsaWNrTGlzdGVuZXIoKTtcbiAgfSk7XG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgcmVtb3ZlQ2xpY2tlZENsYXNzKGUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdWx0TW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9LCAzMDApO1xuICB9KTtcbiAgcXVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYXBwbHlUcmFuc2l0aW9uKGUudGFyZ2V0KTtcbiAgICBxdWl0QnRuQ2xpY2tMaXN0ZW5lcigpO1xuICB9KTtcbiAgcXVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKGUpID0+IHtcbiAgICByZW1vdmVDbGlja2VkQ2xhc3MoZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXN1bHRNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgZ2FtZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIGdhbWVJbml0aWFsaXplclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9LCAzMDApO1xuICB9KTtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzdWx0TW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBoYW5kbGVHYW1lSW5pdGlhbGl6ZXJTZWN0aW9uKCk7XG4gIGhhbmRsZUdhbWVTZWN0aW9uKCk7XG4gIGhhbmRsZVJlc3VsdFNlY3Rpb24oKTtcbn07XG5cbmNvbnN0IHN1YnNjcmliZVRvRXZlbnRzID0gKCkgPT4ge1xuICBQdWJTdWIuc3Vic2NyaWJlKFBPU1RfQ0VMTF9DTElDS0VELCBhcHBseVRyYW5zaXRpb24pO1xuICBQdWJTdWIuc3Vic2NyaWJlKFNUQVRVU19DSEFOR0VELCB1cGRhdGVHYW1lU3RhdHVzKTtcbiAgUHViU3ViLnN1YnNjcmliZShCT0FSRF9DSEFOR0VELCB1cGRhdGVHYW1lQm9hcmQpO1xuICBQdWJTdWIuc3Vic2NyaWJlKEdBTUVfRU5ERUQsIChnYW1lU3RhdHVzKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93R2FtZVJlc3VsdChnYW1lU3RhdHVzKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQsXG4gIHN1YnNjcmliZVRvRXZlbnRzLFxufTtcbiIsImV4cG9ydCBjb25zdCBHQU1FX1NUQVJURUQgPSBTeW1ib2woJ0dBTUVfU1RBUlRFRCcpO1xuZXhwb3J0IGNvbnN0IEdBTUVfU1RBUlRFRF9BSV9WU19BSSA9IFN5bWJvbCgnR0FNRV9TVEFSVEVEX0FJX1ZTX0FJJyk7XG5leHBvcnQgY29uc3QgR0FNRV9SRVNUQVJURUQgPSBTeW1ib2woJ0dBTUVfUkVTVEFSVEVEJyk7XG5leHBvcnQgY29uc3QgR0FNRV9RVUlUID0gU3ltYm9sKCdHQU1FX1FVSVQnKTtcbmV4cG9ydCBjb25zdCBHQU1FX0VOREVEID0gU3ltYm9sKCdHQU1FX0VOREVEJyk7XG5leHBvcnQgY29uc3QgQUlfVFVSTiA9IFN5bWJvbCgnQUlfVFVSTicpO1xuZXhwb3J0IGNvbnN0IFNUQVRVU19DSEFOR0VEID0gU3ltYm9sKCdTVEFUVVNfQ0hBTkdFRCcpO1xuZXhwb3J0IGNvbnN0IEJPQVJEX0NIQU5HRUQgPSBTeW1ib2woJ0JPQVJEX0NIQU5HRUQnKTtcbmV4cG9ydCBjb25zdCBDRUxMX0NMSUNLRUQgPSBTeW1ib2woJ0NFTExfQ0xJQ0tFRCcpO1xuZXhwb3J0IGNvbnN0IFBPU1RfQ0VMTF9DTElDS0VEID0gU3ltYm9sKCdQT1NUX0NFTExfQ0xJQ0tFRCcpO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsLmpzJztcblxuLyoqXG4gKiBnYW1lQm9hcmQgaXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBhIGdhbWUgYm9hcmQgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBnYW1lQm9hcmQgb2JqZWN0XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZXNldCAtIHJlc2V0cyB0aGUgYm9hcmQgdG8gYWxsIGVtcHR5IGNlbGxzXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRCb2FyZCAtIHJldHVybnMgdGhlIGJvYXJkXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRDZWxsIC0gcmV0dXJucyB0aGUgY2VsbCBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldENlbGwgLSBzZXRzIHRoZSBjZWxsIGF0IHRoZSBnaXZlbiBjb29yZGluYXRlcyB0byB0aGUgZ2l2ZW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHJlc2V0Q2VsbCAtIHJlc2V0cyB0aGUgY2VsbCBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGlzRnVsbCAtIHJldHVybnMgdHJ1ZSBpZiB0aGUgYm9hcmQgaXMgZnVsbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRFbXB0eUNlbGxzIC0gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgaW5kaWNlcyBvZiBlbXB0eSBjZWxsc1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2hlY2tXaW4gLSByZXR1cm5zIGZhbHNlIGlmIG5vIHdpbm5lciwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIHdpbm5lclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gcHJpbnRCb2FyZCAtIHByaW50cyB0aGUgYm9hcmQgdG8gdGhlIGNvbnNvbGVcbiAqL1xuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICAvLyBib2FyZCBpcyBhIDN4MyBhcnJheSBvZiBjZWxsc1xuICBjb25zdCBib2FyZCA9IFtbXSwgW10sIFtdXTtcblxuICAvKipcbiAgICogcmVzZXQgcmVzZXRzIHRoZSBib2FyZCB0byBhbGwgZW1wdHkgY2VsbHNcbiAgICovXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IENlbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldEJvYXJkIHJldHVybnMgdGhlIGJvYXJkXG4gICAqIEByZXR1cm5zIHtBcnJheX0gYm9hcmRcbiAgICovXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgLyoqXG4gICAqIGdldENlbGwgcmV0dXJucyB0aGUgY2VsbCBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBjYWxsIGl0IHdpdGggdGhlIHggY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIGNhbGwgaXQgd2l0aCB0aGUgeSBjb29yZGluYXRlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENlbGwgb2JqZWN0XG4gICAqL1xuICBjb25zdCBnZXRDZWxsID0gKHgsIHkpID0+IHtcbiAgICBpZiAoeCA+PSAwICYmIHggPCAzICYmIHkgPj0gMCAmJiB5IDwgMykge1xuICAgICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgQ29vcmRpbmF0ZXMgKCR7eH0sICR7eX0pYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNldENlbGwgc2V0cyB0aGUgY2VsbCBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgdG8gdGhlIGdpdmVuIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gY2FsbCBpdCB3aXRoIHRoZSB4IGNvb3JkaW5hdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBjYWxsIGl0IHdpdGggdGhlIHkgY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBjYWxsIGl0IHdpdGggJ1gnLCAnTycsIG9yICdfJ1xuICAgKi9cbiAgY29uc3Qgc2V0Q2VsbCA9ICh4LCB5LCB2YWx1ZSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XS5nZXRWYWx1ZSgpICE9PSAnXycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENlbGwgKCR7eH0sICR7eX0pIGlzIGFscmVhZHkgb2NjdXBpZWRgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBib2FyZFt4XVt5XS5zZXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gYm9hcmRbeF1beV07XG4gIH07XG5cbiAgLyoqXG4gICAqIHJlc2V0Q2VsbCByZXNldHMgdGhlIGNlbGwgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gY2FsbCBpdCB3aXRoIHRoZSB4IGNvb3JkaW5hdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgIC0gY2FsbCBpdCB3aXRoIHRoZSB5IGNvb3JkaW5hdGVcbiAgICovXG4gIGNvbnN0IHJlc2V0Q2VsbCA9ICh4LCB5KSA9PiB7XG4gICAgYm9hcmRbeF1beV0uc2V0VmFsdWUoJ18nKTtcbiAgfTtcblxuICAvKipcbiAgICogaXNGdWxsIHJldHVybnMgdHJ1ZSBpZiB0aGUgYm9hcmQgaXMgZnVsbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBpc0Z1bGxcbiAgICovXG4gIGNvbnN0IGlzRnVsbCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdLmdldFZhbHVlKCkgPT09ICdfJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0RW1wdHlDZWxscyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBpbmRpY2VzIG9mIGVtcHR5IGNlbGxzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gZW1wdHlDZWxsc1xuICAgKi9cbiAgY29uc3QgZ2V0RW1wdHlDZWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXS5nZXRWYWx1ZSgpID09PSAnXycpIHtcbiAgICAgICAgICBlbXB0eUNlbGxzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW1wdHlDZWxscztcbiAgfTtcblxuICAvKipcbiAgICogY2hlY2tXaW4gcmV0dXJucyBmYWxzZSBpZiBubyB3aW5uZXIsIG90aGVyd2lzZSByZXR1cm5zIHRoZSB3aW5uZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHdpbm5lciAtIGZhbHNlIGlmIG5vIHdpbm5lciwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIHdpbm5lclxuICAgKi9cbiAgY29uc3QgY2hlY2tXaW4gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbaV1bMF0uZ2V0VmFsdWUoKSA9PT0gYm9hcmRbaV1bMV0uZ2V0VmFsdWUoKSAmJlxuICAgICAgICBib2FyZFtpXVsxXS5nZXRWYWx1ZSgpID09PSBib2FyZFtpXVsyXS5nZXRWYWx1ZSgpICYmXG4gICAgICAgIGJvYXJkW2ldWzBdLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBib2FyZFtpXVswXS5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBib2FyZFswXVtpXS5nZXRWYWx1ZSgpID09PSBib2FyZFsxXVtpXS5nZXRWYWx1ZSgpICYmXG4gICAgICAgIGJvYXJkWzFdW2ldLmdldFZhbHVlKCkgPT09IGJvYXJkWzJdW2ldLmdldFZhbHVlKCkgJiZcbiAgICAgICAgYm9hcmRbMF1baV0uZ2V0VmFsdWUoKSAhPT0gJ18nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkWzBdW2ldLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGJvYXJkWzBdWzBdLmdldFZhbHVlKCkgPT09IGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgPT09IGJvYXJkWzJdWzJdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzBdWzBdLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICkge1xuICAgICAgcmV0dXJuIGJvYXJkWzBdWzBdLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGJvYXJkWzBdWzJdLmdldFZhbHVlKCkgPT09IGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgPT09IGJvYXJkWzJdWzBdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzBdWzJdLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICkge1xuICAgICAgcmV0dXJuIGJvYXJkWzBdWzJdLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0V2lubmluZ0NlbGxzIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGluZGljZXMgb2YgdGhlIHdpbm5pbmcgY2VsbHNcbiAgICogQHJldHVybnMge0FycmF5fSB3aW5uaW5nQ2VsbHNcbiAgICovXG4gIGNvbnN0IGdldFdpbm5pbmdDZWxscyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBib2FyZFtpXVswXS5nZXRWYWx1ZSgpID09PSBib2FyZFtpXVsxXS5nZXRWYWx1ZSgpICYmXG4gICAgICAgIGJvYXJkW2ldWzFdLmdldFZhbHVlKCkgPT09IGJvYXJkW2ldWzJdLmdldFZhbHVlKCkgJiZcbiAgICAgICAgYm9hcmRbaV1bMF0uZ2V0VmFsdWUoKSAhPT0gJ18nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBbaSwgMF0sXG4gICAgICAgICAgW2ksIDFdLFxuICAgICAgICAgIFtpLCAyXSxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbMF1baV0uZ2V0VmFsdWUoKSA9PT0gYm9hcmRbMV1baV0uZ2V0VmFsdWUoKSAmJlxuICAgICAgICBib2FyZFsxXVtpXS5nZXRWYWx1ZSgpID09PSBib2FyZFsyXVtpXS5nZXRWYWx1ZSgpICYmXG4gICAgICAgIGJvYXJkWzBdW2ldLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgWzAsIGldLFxuICAgICAgICAgIFsxLCBpXSxcbiAgICAgICAgICBbMiwgaV0sXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGJvYXJkWzBdWzBdLmdldFZhbHVlKCkgPT09IGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgPT09IGJvYXJkWzJdWzJdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzBdWzBdLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsyLCAyXSxcbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGJvYXJkWzBdWzJdLmdldFZhbHVlKCkgPT09IGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzFdWzFdLmdldFZhbHVlKCkgPT09IGJvYXJkWzJdWzBdLmdldFZhbHVlKCkgJiZcbiAgICAgIGJvYXJkWzBdWzJdLmdldFZhbHVlKCkgIT09ICdfJ1xuICAgICkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgWzAsIDJdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsyLCAwXSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogY2hlY2tEcmF3IHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2FtZSBpcyBhIGRyYXcsIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXNEcmF3XG4gICAqL1xuICBjb25zdCBjaGVja0RyYXcgPSAoKSA9PiBpc0Z1bGwoKSAmJiAhY2hlY2tXaW4oKTtcblxuICAvKipcbiAgICogcHJpbnRCb2FyZCBwcmludHMgdGhlIGJvYXJkIHRvIHRoZSBjb25zb2xlXG4gICAqL1xuICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgcm93JHtcbiAgICAgICAgICByb3dJbmRleCArIDFcbiAgICAgICAgfTogJHtyb3dbMF0uZ2V0VmFsdWUoKX0gICR7cm93WzFdLmdldFZhbHVlKCl9ICAke3Jvd1syXS5nZXRWYWx1ZSgpfWBcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVzZXQoKTtcblxuICByZXR1cm4ge1xuICAgIHJlc2V0LFxuICAgIGdldEJvYXJkLFxuICAgIGdldENlbGwsXG4gICAgc2V0Q2VsbCxcbiAgICByZXNldENlbGwsXG4gICAgY2hlY2tEcmF3LFxuICAgIGdldEVtcHR5Q2VsbHMsXG4gICAgY2hlY2tXaW4sXG4gICAgZ2V0V2lubmluZ0NlbGxzLFxuICAgIHByaW50Qm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQoKTtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuaW1wb3J0IHtcbiAgR0FNRV9TVEFSVEVELFxuICBHQU1FX1NUQVJURURfQUlfVlNfQUksXG4gIEFJX1RVUk4sXG4gIFNUQVRVU19DSEFOR0VELFxuICBCT0FSRF9DSEFOR0VELFxuICBHQU1FX0VOREVELFxuICBDRUxMX0NMSUNLRUQsXG4gIEdBTUVfUkVTVEFSVEVELFxuICBHQU1FX1FVSVQsXG4gIFBPU1RfQ0VMTF9DTElDS0VELFxufSBmcm9tICcuL2V2ZW50LXR5cGVzLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IHRpbWVvdXRJZExpc3QgPSBbXTtcblxuY29uc3Qgbm90aWZ5R2FtZUNoYW5nZWQgPSAoZ2FtZVN0YXR1cykgPT4ge1xuICBQdWJTdWIucHVibGlzaChTVEFUVVNfQ0hBTkdFRCwgZ2FtZVN0YXR1cyk7XG4gIFB1YlN1Yi5wdWJsaXNoKEJPQVJEX0NIQU5HRUQsIGdhbWVTdGF0dXMpO1xuICBpZiAoZ2FtZS5pc0dhbWVPdmVyKCkpIHtcbiAgICB0aW1lb3V0SWRMaXN0LmZvckVhY2goY2xlYXJUaW1lb3V0KTtcbiAgICBQdWJTdWIucHVibGlzaChHQU1FX0VOREVELCBnYW1lU3RhdHVzKTtcbiAgfVxufTtcblxuY29uc3Qgc3Vic2NyaWJlVG9FdmVudHMgPSAoKSA9PiB7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoR0FNRV9TVEFSVEVELCAocGxheWVycykgPT4ge1xuICAgIGdhbWUuc3RhcnRHYW1lKHBsYXllcnMucGxheWVyMSwgcGxheWVycy5wbGF5ZXIyKTtcblxuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBnYW1lLmdldEdhbWVTdGF0dXMoKTtcbiAgICBQdWJTdWIucHVibGlzaChTVEFUVVNfQ0hBTkdFRCwgZ2FtZVN0YXR1cyk7XG4gICAgUHViU3ViLnB1Ymxpc2goQk9BUkRfQ0hBTkdFRCwgZ2FtZVN0YXR1cyk7XG4gIH0pO1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoR0FNRV9TVEFSVEVEX0FJX1ZTX0FJLCAoKSA9PiB7XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghZ2FtZS5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICBnYW1lLnBsYXlBSSgpO1xuICAgICAgICAgIGdhbWUuc3dpdGNoQ3VycmVudFBsYXllcigpO1xuXG4gICAgICAgICAgbm90aWZ5R2FtZUNoYW5nZWQoZ2FtZS5nZXRHYW1lU3RhdHVzKCkpO1xuICAgICAgICB9XG4gICAgICB9LCAyMDAwICogaSk7XG4gICAgICB0aW1lb3V0SWRMaXN0LnB1c2goaWQpO1xuXG4gICAgICBpICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKEFJX1RVUk4sICgpID0+IHtcbiAgICBpZiAoZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkuZ2V0VHlwZSgpICE9PSAnQUknIHx8IGdhbWUuaXNHYW1lT3ZlcigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGdhbWUucGxheUFJKCk7XG4gICAgICBnYW1lLnN3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIG5vdGlmeUdhbWVDaGFuZ2VkKGdhbWUuZ2V0R2FtZVN0YXR1cygpKTtcbiAgICB9LCAyMDAwKTtcbiAgICB0aW1lb3V0SWRMaXN0LnB1c2goaWQpO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKENFTExfQ0xJQ0tFRCwgKGNlbGwpID0+IHtcbiAgICBpZiAoZ2FtZS5pc0dhbWVPdmVyKCkgfHwgZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkuZ2V0VHlwZSgpID09PSAnQUknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgUHViU3ViLnB1Ymxpc2goUE9TVF9DRUxMX0NMSUNLRUQsIGNlbGwuY2VsbERpdik7XG5cbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjZWxsO1xuXG4gICAgZ2FtZS5wbGF5SHVtYW4oW3JvdywgY29sXSk7XG4gICAgZ2FtZS5zd2l0Y2hDdXJyZW50UGxheWVyKCk7XG5cbiAgICBub3RpZnlHYW1lQ2hhbmdlZChnYW1lLmdldEdhbWVTdGF0dXMoKSk7XG5cbiAgICBQdWJTdWIucHVibGlzaChBSV9UVVJOKTtcbiAgfSk7XG5cbiAgUHViU3ViLnN1YnNjcmliZShHQU1FX1JFU1RBUlRFRCwgKCkgPT4ge1xuICAgIHRpbWVvdXRJZExpc3QuZm9yRWFjaCgoaWQpID0+IGNsZWFyVGltZW91dChpZCkpO1xuICB9KTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKEdBTUVfUVVJVCwgKCkgPT4ge1xuICAgIGdhbWUucmVzZXRHYW1lKCk7XG4gICAgdGltZW91dElkTGlzdC5mb3JFYWNoKChpZCkgPT4gY2xlYXJUaW1lb3V0KGlkKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBzdWJzY3JpYmVUb0V2ZW50cyB9O1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tICcuL2dhbWUtYm9hcmQuanMnO1xuaW1wb3J0IEh1bWFuUGxheWVyIGZyb20gJy4vaHVtYW4tcGxheWVyLmpzJztcbmltcG9ydCB7XG4gIEVhc3lBSVBsYXllcixcbiAgTWVkaXVtQUlQbGF5ZXIsXG4gIEhhcmRBSVBsYXllcixcbiAgVW5iZWF0YWJsZUFJUGxheWVyLFxufSBmcm9tICcuL2FpLXBsYXllci5qcyc7XG5cbmxldCBwbGF5ZXIxO1xubGV0IHBsYXllcjI7XG5sZXQgY3VycmVudFBsYXllcjtcbmxldCBnYW1lT3ZlciA9IGZhbHNlO1xubGV0IHdpbm5lciA9IG51bGw7XG5cbi8qKlxuICogZ2V0R2FtZUJvYXJkIHJldHVybnMgdGhlIGdhbWUgYm9hcmRcbiAqIEByZXR1cm5zIHtnYW1lQm9hcmR9IGdhbWVCb2FyZFxuICovXG5jb25zdCBnZXRHYW1lQm9hcmQgPSAoKSA9PiBnYW1lQm9hcmQ7XG5cbi8qKlxuICogZ2V0UGxheWVyMSByZXR1cm5zIHBsYXllciAxIChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLFxuICogTWVkaXVtQUlQbGF5ZXIsIEhhcmRBSVBsYXllciwgVW5iZWF0YWJsZUFJUGxheWVyKVxuICogQHJldHVybnMge09iamVjdH0gKEh1bWFuUGxheWVyLCBFYXN5QUlQbGF5ZXIsIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqL1xuY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IHBsYXllcjE7XG5cbi8qKlxuICogc2V0UGxheWVyMSBzZXRzIHBsYXllciAxIChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLFxuICogTWVkaXVtQUlQbGF5ZXIsIEhhcmRBSVBsYXllciwgVW5iZWF0YWJsZUFJUGxheWVyKVxuICogQHBhcmFtIHtPYmplY3R9IHBsYXllciAtIGNhbGwgaXQgd2l0aCAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllcixcbiAqIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqL1xuY29uc3Qgc2V0UGxheWVyMSA9IChwbGF5ZXIpID0+IHtcbiAgcGxheWVyMSA9IHBsYXllcjtcbn07XG5cbi8qKlxuICogZ2V0UGxheWVyMiByZXR1cm5zIHBsYXllciAyIChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLFxuICogTWVkaXVtQUlQbGF5ZXIsIEhhcmRBSVBsYXllciwgVW5iZWF0YWJsZUFJUGxheWVyKVxuICogQHJldHVybnMge09iamVjdH0gKEh1bWFuUGxheWVyLCBFYXN5QUlQbGF5ZXIsIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqL1xuY29uc3QgZ2V0UGxheWVyMiA9ICgpID0+IHBsYXllcjI7XG5cbi8qKlxuICogc2V0UGxheWVyMiBzZXRzIHBsYXllciAyIChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLFxuICogTWVkaXVtQUlQbGF5ZXIsIEhhcmRBSVBsYXllciwgVW5iZWF0YWJsZUFJUGxheWVyKVxuICogQHBhcmFtIHtPYmplY3R9IHBsYXllciAtIGNhbGwgaXQgd2l0aCAoSHVtYW5QbGF5ZXIsIEVhc3lBSVBsYXllcixcbiAqIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqL1xuY29uc3Qgc2V0UGxheWVyMiA9IChwbGF5ZXIpID0+IHtcbiAgcGxheWVyMiA9IHBsYXllcjtcbn07XG5cbi8qKlxuICogZ2V0Q3VycmVudFBsYXllciByZXR1cm5zIHRoZSBjdXJyZW50IHBsYXllclxuICogQHJldHVybnMge09iamVjdH0gKEh1bWFuUGxheWVyLCBFYXN5QUlQbGF5ZXIsIE1lZGl1bUFJUGxheWVyLCBIYXJkQUlQbGF5ZXIsIFVuYmVhdGFibGVBSVBsYXllcilcbiAqL1xuY29uc3QgZ2V0Q3VycmVudFBsYXllciA9ICgpID0+IGN1cnJlbnRQbGF5ZXI7XG5cbi8qKlxuICogc2V0Q3VycmVudFBsYXllciBzZXRzIHRoZSBjdXJyZW50IHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IHBsYXllciAtIGNhbGwgaXQgd2l0aCBwbGF5ZXIgMSBvciBwbGF5ZXIgMlxuICovXG5jb25zdCBzZXRDdXJyZW50UGxheWVyID0gKHBsYXllcikgPT4ge1xuICBjdXJyZW50UGxheWVyID0gcGxheWVyO1xufTtcblxuLyoqXG4gKiBpc0dhbWVPdmVyIHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2FtZSBpcyBvdmVyLCBmYWxzZSBvdGhlcndpc2VcbiAqIEByZXR1cm5zIHtib29sZWFufSBnYW1lT3ZlclxuICovXG5jb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gZ2FtZU92ZXI7XG5cbi8qKlxuICogc2V0R2FtZU92ZXIgc2V0cyB0aGUgZ2FtZU92ZXIgdmFyaWFibGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgLSBjYWxsIGl0IHdpdGggdHJ1ZSBvciBmYWxzZVxuICovXG5jb25zdCBzZXRHYW1lT3ZlciA9ICh2YWx1ZSkgPT4ge1xuICBnYW1lT3ZlciA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBnZXRXaW5uZXIgcmV0dXJucyB0aGUgd2lubmVyIChudWxsIGlmIG5vIHdpbm5lcilcbiAqIEByZXR1cm5zIHtPYmplY3R9IChIdW1hblBsYXllciwgRWFzeUFJUGxheWVyLCBNZWRpdW1BSVBsYXllciwgSGFyZEFJUGxheWVyLCBVbmJlYXRhYmxlQUlQbGF5ZXIpXG4gKiBvciBudWxsXG4gKi9cbmNvbnN0IGdldFdpbm5lciA9ICgpID0+IHdpbm5lcjtcblxuLyoqXG4gKiBzZXRXaW5uZXIgc2V0cyB0aGUgd2lubmVyXG4gKiBAcGFyYW0ge09iamVjdH0gcGxheWVyIC0gY2FsbCBpdCB3aXRoIHBsYXllciAxIG9yIHBsYXllciAyXG4gKiBvciBudWxsIGlmIG5vIHdpbm5lclxuICovXG5jb25zdCBzZXRXaW5uZXIgPSAocGxheWVyKSA9PiB7XG4gIHdpbm5lciA9IHBsYXllcjtcbn07XG5cbi8qKlxuICogY2hlY2tEcmF3IHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2FtZSBpcyBhIGRyYXcsIGZhbHNlIG90aGVyd2lzZVxuICogQHJldHVybnMge2Jvb2xlYW59IGRyYXdcbiAqL1xuY29uc3QgY2hlY2tEcmF3ID0gKCkgPT4gZ2FtZUJvYXJkLmNoZWNrRHJhdygpO1xuXG4vKipcbiAqIHN3aXRjaEN1cnJlbnRQbGF5ZXIgc3dpdGNoZXMgdGhlIGN1cnJlbnQgcGxheWVyXG4gKi9cbmNvbnN0IHN3aXRjaEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7XG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgc2V0Q3VycmVudFBsYXllcihwbGF5ZXIyKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRDdXJyZW50UGxheWVyKHBsYXllcjEpO1xuICB9XG59O1xuXG4vKipcbiAqIHJlc2V0R2FtZSByZXNldHMgdGhlIGdhbWVcbiAqL1xuY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICBnYW1lQm9hcmQucmVzZXQoKTtcbiAgc2V0R2FtZU92ZXIoZmFsc2UpO1xuICBzZXRXaW5uZXIobnVsbCk7XG59O1xuXG4vKipcbiAqIHBsYXkgcGxheXMgYSByb3VuZCBvZiB0aGUgZ2FtZVxuICogQHBhcmFtIHtBcnJheX0gY2VsbCAtIGNhbGwgaXQgd2l0aCB0aGUgY2VsbCB0byBwbGF5IChlLmcuIFswLCAwXSlcbiAqL1xuY29uc3QgcGxheSA9IChjZWxsKSA9PiB7XG4gIGlmICghY2VsbCB8fCBjZWxsWzBdIDwgMCB8fCBjZWxsWzBdID4gMiB8fCBjZWxsWzFdIDwgMCB8fCBjZWxsWzFdID4gMikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgY2VsbDogJHtjZWxsfWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChnYW1lT3Zlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZ2FtZUJvYXJkLnNldENlbGwoY2VsbFswXSwgY2VsbFsxXSwgY3VycmVudFBsYXllci5nZXRTeW1ib2woKSkpIHtcbiAgICBpZiAoZ2FtZUJvYXJkLmNoZWNrV2luKCkpIHtcbiAgICAgIHNldFdpbm5lcihjdXJyZW50UGxheWVyKTtcbiAgICAgIHNldEdhbWVPdmVyKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkLmNoZWNrRHJhdygpKSB7XG4gICAgICBzZXRHYW1lT3Zlcih0cnVlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogcGxheUFJIHBsYXlzIGEgcm91bmQgb2YgdGhlIGdhbWUgZm9yIHRoZSBBSVxuICovXG5jb25zdCBwbGF5QUkgPSAoKSA9PiB7XG4gIGlmIChnYW1lT3Zlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5leHRNb3ZlID0gY3VycmVudFBsYXllci5nZXROZXh0TW92ZShnYW1lQm9hcmQpO1xuICBwbGF5KG5leHRNb3ZlKTtcbn07XG5cbi8qKlxuICogcGxheVJvdW5kIHBsYXlzIGEgcm91bmQgb2YgdGhlIGdhbWVcbiAqIElmIHRoZSBuZXh0IHBsYXllciBpcyBhbiBBSSwgaXQgd2lsbCBwbGF5IGZvciB0aGUgQUlcbiAqIEBwYXJhbSB7QXJyYXl9IGNlbGwgLSBjYWxsIGl0IHdpdGggdGhlIGNlbGwgdG8gcGxheSAoZS5nLiBbMCwgMF0pXG4gKi9cbmNvbnN0IHBsYXlIdW1hbiA9IChjZWxsKSA9PiB7XG4gIGlmIChnYW1lT3Zlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBsYXkoY2VsbCk7XG59O1xuXG4vKipcbiAqIHN0YXJ0R2FtZSBzdGFydHMgdGhlIGdhbWVcbiAqIElmIEFJIFYuUyBBSSwgdGhlIGdhbWUgYmVnaW5zIGF1dG9tYXRpY2FsbHkgdW50aWwgZ2FtZSBvdmVyXG4gKiBJZiBBSSBWLlMgSHVtYW4sIHRoZSBnYW1lIGJlZ2lucyB3aXRoIHRoZSBmaXJzdCBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaXJzdFBsYXllciAtIGNhbGwgaXQgd2l0aCBQbGF5ZXIgb2JqZWN0IGUuZy4geyBuYW1lOiAnUGxheWVyIDEnLCB0eXBlOiAnSHVtYW4nIH1cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWNvbmRQbGF5ZXIgLSBjYWxsIGl0IHdpdGggUGxheWVyIG9iamVjdCBlLmcuIHsgdHlwZTogJ0FJJywgbGV2ZWw6ICdFYXN5JyB9XG4gKi9cbmNvbnN0IHN0YXJ0R2FtZSA9IChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyKSA9PiB7XG4gIHJlc2V0R2FtZSgpO1xuXG4gIGNvbnN0IHBsYXllcjFTeW1ib2wgPSAnWCc7XG4gIGNvbnN0IHBsYXllcjJTeW1ib2wgPSAnTyc7XG5cbiAgaWYgKGZpcnN0UGxheWVyLnR5cGUgPT09ICdBSScgJiYgZmlyc3RQbGF5ZXIubGV2ZWwgPT09ICdlYXN5Jykge1xuICAgIHNldFBsYXllcjEoRWFzeUFJUGxheWVyKHBsYXllcjFTeW1ib2wpKTtcbiAgfSBlbHNlIGlmIChmaXJzdFBsYXllci50eXBlID09PSAnQUknICYmIGZpcnN0UGxheWVyLmxldmVsID09PSAnbWVkaXVtJykge1xuICAgIHNldFBsYXllcjEoTWVkaXVtQUlQbGF5ZXIocGxheWVyMVN5bWJvbCkpO1xuICB9IGVsc2UgaWYgKGZpcnN0UGxheWVyLnR5cGUgPT09ICdBSScgJiYgZmlyc3RQbGF5ZXIubGV2ZWwgPT09ICdoYXJkJykge1xuICAgIHNldFBsYXllcjEoSGFyZEFJUGxheWVyKHBsYXllcjFTeW1ib2wpKTtcbiAgfSBlbHNlIGlmIChmaXJzdFBsYXllci50eXBlID09PSAnQUknICYmIGZpcnN0UGxheWVyLmxldmVsID09PSAndW5iZWF0YWJsZScpIHtcbiAgICBzZXRQbGF5ZXIxKFVuYmVhdGFibGVBSVBsYXllcihwbGF5ZXIxU3ltYm9sKSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0UGxheWVyMShIdW1hblBsYXllcihmaXJzdFBsYXllci5uYW1lLCBwbGF5ZXIxU3ltYm9sKSk7XG4gIH1cblxuICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdBSScgJiYgc2Vjb25kUGxheWVyLmxldmVsID09PSAnZWFzeScpIHtcbiAgICBzZXRQbGF5ZXIyKEVhc3lBSVBsYXllcihwbGF5ZXIyU3ltYm9sKSk7XG4gIH0gZWxzZSBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdBSScgJiYgc2Vjb25kUGxheWVyLmxldmVsID09PSAnbWVkaXVtJykge1xuICAgIHNldFBsYXllcjIoTWVkaXVtQUlQbGF5ZXIocGxheWVyMlN5bWJvbCkpO1xuICB9IGVsc2UgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnQUknICYmIHNlY29uZFBsYXllci5sZXZlbCA9PT0gJ2hhcmQnKSB7XG4gICAgc2V0UGxheWVyMihIYXJkQUlQbGF5ZXIocGxheWVyMlN5bWJvbCkpO1xuICB9IGVsc2UgaWYgKFxuICAgIHNlY29uZFBsYXllci50eXBlID09PSAnQUknICYmXG4gICAgc2Vjb25kUGxheWVyLmxldmVsID09PSAndW5iZWF0YWJsZSdcbiAgKSB7XG4gICAgc2V0UGxheWVyMihVbmJlYXRhYmxlQUlQbGF5ZXIocGxheWVyMlN5bWJvbCkpO1xuICB9IGVsc2Uge1xuICAgIHNldFBsYXllcjIoSHVtYW5QbGF5ZXIoc2Vjb25kUGxheWVyLm5hbWUsIHBsYXllcjJTeW1ib2wpKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRQbGF5ZXIocGxheWVyMSk7XG59O1xuXG5jb25zdCBnZXRHYW1lU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBnYW1lU3RhdHVzID0ge1xuICAgIGdhbWVCb2FyZDogZ2V0R2FtZUJvYXJkKCksXG4gICAgcGxheWVyMTogZ2V0UGxheWVyMSgpLFxuICAgIHBsYXllcjI6IGdldFBsYXllcjIoKSxcbiAgICBjdXJyZW50UGxheWVyOiBnZXRDdXJyZW50UGxheWVyKCksXG4gICAgaXNHYW1lT3ZlcjogaXNHYW1lT3ZlcigpLFxuICAgIGlzRHJhdzogY2hlY2tEcmF3KCksXG4gICAgd2lubmVyOiBnZXRXaW5uZXIoKSxcbiAgfTtcblxuICByZXR1cm4gZ2FtZVN0YXR1cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0R2FtZUJvYXJkLFxuICBnZXRQbGF5ZXIxLFxuICBnZXRQbGF5ZXIyLFxuICBnZXRDdXJyZW50UGxheWVyLFxuICBnZXRXaW5uZXIsXG4gIGNoZWNrRHJhdyxcbiAgaXNHYW1lT3ZlcixcbiAgZ2V0R2FtZVN0YXR1cyxcbiAgc3dpdGNoQ3VycmVudFBsYXllcixcbiAgcGxheUh1bWFuLFxuICBwbGF5QUksXG4gIHN0YXJ0R2FtZSxcbiAgcmVzZXRHYW1lLFxufTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG4vKipcbiAqIEh1bWFuUGxheWVyIGlzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYSBodW1hbiBwbGF5ZXIgb2JqZWN0IChpbmhlcml0cyBmcm9tIFBsYXllcilcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gY2FsbCBpdCB3aXRoIHRoZSBwbGF5ZXIncyBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ltYm9sIC0gY2FsbCBpdCB3aXRoICdYJyBvciAnTydcbiAqIEByZXR1cm5zIHtPYmplY3R9IEh1bWFuUGxheWVyIG9iamVjdFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0TmFtZSAtIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHBsYXllclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0U3ltYm9sIC0gcmV0dXJucyB0aGUgc3ltYm9sIG9mIHRoZSBwbGF5ZXIgKCdYJyBvciAnTycpXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRUeXBlIC0gcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgcGxheWVyICgnSHVtYW4nIG9yICdBSScpXG4gKi9cbmNvbnN0IEh1bWFuUGxheWVyID0gKG5hbWUsIHN5bWJvbCkgPT4gKHtcbiAgLi4uUGxheWVyKG5hbWUsIHN5bWJvbCwgJ0h1bWFuJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHVtYW5QbGF5ZXI7XG4iLCJpbXBvcnQgZ2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9nYW1lLWNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XG4gIH0pO1xuXG4gIGdhbWVDb250cm9sbGVyLnN1YnNjcmliZVRvRXZlbnRzKCk7XG4gIGRpc3BsYXlDb250cm9sbGVyLnN1YnNjcmliZVRvRXZlbnRzKCk7XG4gIGRpc3BsYXlDb250cm9sbGVyLmluaXQoKTtcbn1cblxuaW5pdCgpO1xuIiwiLyoqXG4gKiBQbGF5ZXIgaXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBhIHBsYXllciBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gY2FsbCBpdCB3aXRoIHRoZSBwbGF5ZXIncyBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc3ltYm9sIC0gY2FsbCBpdCB3aXRoICdYJyBvciAnTydcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBsYXllciBvYmplY3RcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE5hbWUgLSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFN5bWJvbCAtIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyICgnWCcgb3IgJ08nKVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VHlwZSAtIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIHBsYXllciAoJ0h1bWFuJyBvciAnQUknKVxuICovXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgc3ltYm9sLCB0eXBlKSA9PiB7XG4gIC8qKlxuICAgKiBnZXROYW1lIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHBsYXllclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAvKipcbiAgICogZ2V0U3ltYm9sIHJldHVybnMgdGhlIHN5bWJvbCBvZiB0aGUgcGxheWVyICgnWCcgb3IgJ08nKVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzeW1ib2xcbiAgICovXG4gIGNvbnN0IGdldFN5bWJvbCA9ICgpID0+IHN5bWJvbDtcblxuICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZTtcblxuICByZXR1cm4geyBnZXROYW1lLCBnZXRTeW1ib2wsIGdldFR5cGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IGV2ZW50cyA9IHt9O1xuXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oZGF0YSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gPz8gW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xufTtcblxuY29uc3QgdW5TdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHB1Ymxpc2gsXG4gIHN1YnNjcmliZSxcbiAgdW5TdWJzY3JpYmUsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9