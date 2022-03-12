/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _otherfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otherfile */ \"./otherfile.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var weatherInput = document.querySelector(\"#weatherInput\");\n  var btn = document.querySelector(\"#btn\");\n  var displayWeather = document.querySelector(\".displayWeather\");\n\n  var appender = function appender(appendee) {\n    for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      items[_key - 1] = arguments[_key];\n    }\n\n    items.forEach(function (item) {\n      return appendee.appendChild(item);\n    });\n  };\n\n  var ChangeToFarenheight = function ChangeToFarenheight(item, values) {\n    item.addEventListener(\"click\", function () {\n      if (item.innerText === \"\".concat(values[0], \"\\xBAC\")) {\n        item.innerText = \"\".concat(values[1], \"\\xBAF\");\n      } else {\n        item.innerText = \"\".concat(values[0], \"\\xBAC\");\n      }\n    });\n  };\n\n  var checkIfLoading = function checkIfLoading() {\n    displayWeather.innerHTML = \"loading ...\";\n  };\n\n  var showData = function showData(data) {\n    if (!data[0] && !data[1]) {\n      displayWeather.innerHTML = \"<h1>\" + \"Please Input a Valid Location\" + \"<h1>\";\n      return;\n    } else if (data[0] && data[1]) {\n      displayWeather.innerHTML = \"\";\n      var card = document.createElement(\"div\");\n      card.classList.add(\"card\"); // header for card\n\n      var h2 = document.createElement(\"h2\");\n      h2.classList.add(\"conditionh3\");\n      h2.innerText = \"The Weather for \".concat(data[1].name, \", \").concat(data[1].country); // weather conditions\n\n      var h3 = document.createElement(\"h3\");\n      h3.innerText = \"\".concat(data[0].condition.text); // temp text \n\n      var tempH3 = document.createElement(\"h3\");\n      tempH3.classList.add(\"tempH3\");\n      tempH3.innerText = \"\".concat(data[0].temp_c, \"\\xBAC\");\n      ChangeToFarenheight(tempH3, [data[0].temp_c, data[0].temp_f]); // img\n\n      var img = document.createElement(\"img\");\n      img.setAttribute(\"src\", \"\".concat(data[0].condition.icon));\n      img.classList.add(\"mainImg\");\n      appender(card, h2, h3, img, tempH3);\n      appender(displayWeather, card);\n    }\n  };\n\n  function callForWeather() {\n    checkIfLoading();\n    return fetch(\"https://api.weatherapi.com/v1/current.json?key=\".concat(_otherfile__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apiKey, \"&q=\").concat(weatherInput.value, \"&aqi=no\")).then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      setTimeout(function () {\n        if (data) {\n          var current = data.current;\n          var location = data.location;\n          showData([current, location]);\n          weatherInput.value = \"\";\n        }\n      }, 1000);\n    })[\"catch\"](function (e) {\n      console.log(e, \"failed\");\n    });\n  }\n\n  btn.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    callForWeather();\n  });\n  weatherInput.addEventListener(\"keydown\", function (e) {\n    if (e.key === \"Enter\") return callForWeather();\n  });\n});\n\n//# sourceURL=webpack://weather-app-/./index.js?");

/***/ }),

/***/ "./otherfile.js":
/*!**********************!*\
  !*** ./otherfile.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar keyObject = {\n  apiKey: \"a0ca6b01420a496da3f165005221103\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyObject);\n\n//# sourceURL=webpack://weather-app-/./otherfile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;