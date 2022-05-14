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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_benefitSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/benefitSlider */ \"./src/modules/benefitSlider.js\");\n/* harmony import */ var _modules_servicesSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/servicesSlider */ \"./src/modules/servicesSlider.js\");\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_benefitSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_servicesSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://glo_diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/benefitSlider.js":
/*!**************************************!*\
  !*** ./src/modules/benefitSlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefitSlider = () => {\n    const benefits = document.querySelector('.benefits-wrap');\n    const benefitsArrows = document.querySelector('.benefits-arrows');\n    let benefitsItems = document.querySelectorAll('.benefits__item');\n    let benefitsArr = [];\n\n    const newArr = () => {\n        benefitsArr = [];\n        for (let i = 0; i < benefitsItems.length; i++) {\n            benefitsItems[i].style.display = 'none';\n            benefitsArr.push(benefitsItems[i]);\n        }\n    }\n\n    const prevSlide = () => {\n        let lastElem = benefitsItems[benefitsArr.length - 1];\n        lastElem.remove();\n        benefitsItems[0].before(lastElem);\n        benefitsItems = document.querySelectorAll('.benefits__item');\n        newArr();\n    }\n\n    const nextSlide = () => {\n        let firstElem = benefitsArr[0];\n        firstElem.remove();\n        benefitsItems[benefitsArr.length - 1].after(firstElem);\n        benefitsItems = document.querySelectorAll('.benefits__item');\n        newArr();\n    }\n\n    const showSlide = () => {\n        if (window.screen.width >= 576) {\n            for (let i = 0; i < benefitsItems.length; i++) {\n                if (i < 3) {\n                    benefitsArr[i].style.display = 'block';\n                }\n            }\n        } else {\n            for (let i = 0; i < benefitsItems.length; i++) {\n                if (i == 0) {\n                    benefits.style.justifyContent = 'center';\n                    benefitsArr[i].style.display = 'block';\n                }\n            }\n        }\n    }\n\n    benefitsArrows.addEventListener('click', (e) => {\n        e.preventDefault();\n        if (e.target.matches('#benefits__arrow--left')) {\n            prevSlide();\n            showSlide();\n        } else if (e.target.matches('#benefits__arrow--right')) {\n            nextSlide();\n            showSlide();\n        }\n    })\n\n    newArr();\n    showSlide();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefitSlider);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/benefitSlider.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n}\n\n\n\n//# sourceURL=webpack://glo_diploma/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\nconst modal = () => {\n    const body = document.querySelector('body');\n    const modal = document.querySelector('.header-modal');\n    const modalOverlay = document.querySelector('.overlay');\n\n    const modalAnimate = () => {\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 300,\n            timing(timeFraction) {\n                return timeFraction;\n            },\n            draw(progress) {\n                modal.style.top = (progress * 85 - 35) + '%';\n            }\n        })\n    };\n\n    body.addEventListener('click', (e) => {\n        if (e.target.closest('#btn-callback')) {\n            e.preventDefault();\n            modal.style.display = 'block';\n            modalOverlay.style.display = 'block';\n            modalAnimate();\n        } else if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {\n            modal.style.display = 'none';\n            modalOverlay.style.display = 'none';\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesSlider = () => {\n    console.log('servicesSlider');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/servicesSlider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;