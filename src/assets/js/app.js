/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./resources/css/owl.theme.default.min.css":
/*!*************************************************!*\
  !*** ./resources/css/owl.theme.default.min.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/magnific-popup.css":
/*!******************************************!*\
  !*** ./resources/css/magnific-popup.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/animate.css":
/*!***********************************!*\
  !*** ./resources/css/animate.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/boxicons.min.css":
/*!****************************************!*\
  !*** ./resources/css/boxicons.min.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/flaticon.css":
/*!************************************!*\
  !*** ./resources/css/flaticon.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/meanmenu.css":
/*!************************************!*\
  !*** ./resources/css/meanmenu.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/nice-select.css":
/*!***************************************!*\
  !*** ./resources/css/nice-select.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/odometer.css":
/*!************************************!*\
  !*** ./resources/css/odometer.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/bootstrap-select.min.css":
/*!************************************************!*\
  !*** ./resources/css/bootstrap-select.min.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/responsive.css":
/*!**************************************!*\
  !*** ./resources/css/responsive.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/swipebox.css":
/*!************************************!*\
  !*** ./resources/css/swipebox.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/bootstrap.min.css":
/*!*****************************************!*\
  !*** ./resources/css/bootstrap.min.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/owl.carousel.min.css":
/*!********************************************!*\
  !*** ./resources/css/owl.carousel.min.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/front/js/app": 0,
/******/ 			"front/css/owl.carousel.min": 0,
/******/ 			"front/css/bootstrap.min": 0,
/******/ 			"front/css/swipebox": 0,
/******/ 			"front/css/responsive": 0,
/******/ 			"front/css/app": 0,
/******/ 			"front/css/bootstrap-select.min": 0,
/******/ 			"front/css/odometer": 0,
/******/ 			"front/css/nice-select": 0,
/******/ 			"front/css/meanmenu": 0,
/******/ 			"front/css/flaticon": 0,
/******/ 			"front/css/boxicons.min": 0,
/******/ 			"front/css/animate": 0,
/******/ 			"front/css/magnific-popup": 0,
/******/ 			"front/css/owl.theme.default.min": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkepoch"] = self["webpackChunkepoch"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/responsive.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/swipebox.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/bootstrap.min.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/owl.carousel.min.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/owl.theme.default.min.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/magnific-popup.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/animate.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/boxicons.min.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/flaticon.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/meanmenu.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/nice-select.css")))
/******/ 	__webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/odometer.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["front/css/owl.carousel.min","front/css/bootstrap.min","front/css/swipebox","front/css/responsive","front/css/app","front/css/bootstrap-select.min","front/css/odometer","front/css/nice-select","front/css/meanmenu","front/css/flaticon","front/css/boxicons.min","front/css/animate","front/css/magnific-popup","front/css/owl.theme.default.min"], () => (__webpack_require__("./resources/css/bootstrap-select.min.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;