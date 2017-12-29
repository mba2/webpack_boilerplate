/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_user_area_user_area__ = __webpack_require__(2);


// // import test from "./blocks/firebase/firebase";


// // MODEL
// let model = {
//   /** STATE INFO */
//   "states" : {
//     "userInfo": false
//   },
//   "loadedModules" : [],
//   "failedModules" : [],
//   /** STATE INFO */

//   "user" : {},

//   /**
//    * FUNCTIONS THAT MUST BE CALLED TO LOAD THE APP DATA 
//   */
//   loadUserInfo : function(userId) {
//     if(typeof userId === "undefined") {
//       throw new Error("Please, pass a valid 'id'");
//       return false;
//     }

//     let self = this;
//     fetch('http://mariobrusarosco.com/code-editor/test-support/fake-data.json')
//       .then( (response) => { 
//         if(response.status !== 200) console.error("error ==> ", response.status)
        
//         response.json().then( data => {     
//           model.user = data["users"][userId];      /** Store the returned data into the model object */          
//           model.states.userInfo = true; /** Set the model state for 'User Info' as 'Loaded' */
//         });
//     });
//   },

//   /**
//    * Check each model's states... only if all of them are fully loaded...
//    * remove the page's loader     * 
//   */
//   loaderChecker : function() {
//     const self = this;                                               /** Store the Object reference for future use */   
//     if(!this.loaderChecker.counter) this.loaderChecker.counter = 0;  /** Set a counter into this function */

//     this.failedModules = this.failedModules = [];                    /** Clears the arrays that store the model's modules to perform a new verification */ 
    
//     for (const state in model.states) {
//       if(!model.states[state]) this.failedModules.push(state);    // Defines which modules are fully loaded
//       else this.loadedModules.push(state);                        // Defines which modules aren't fully loaded 
//     }

//     /** If all modules are fully loaded ... terminates the verification process */
//     if(!this.failedModules.length) {
//       // console.log("Everything were loaded!");
//       controller.removeMainLoader();
//       return true;
//     }
//     /* If after 20 verifications any module still pending... stop the verifications
//     *  and consider this scenario as a critical error...
//     */
//     else if(++this.loaderChecker.counter === 5) {
//       console.warn("Some essential data couldn't be loaded");
//       return false;
//     }
//     /** Otherwise...execute another verification */
//     setTimeout(() => self.loaderChecker() , 1500);
//   },

//   init : function() {
//     this.loaderChecker();
//     this.loadUserInfo(0);
//   }
// };
// // CONTROLLER
// let controller = {

//   removeMainLoader : () => {
//     const el = document.querySelector(".js_loader-main");
//       el.parentNode.removeChild(el);
//   },

//   getUsername : function(){
//     model.user.test;
//     console.log("test",model.user.test);
//   }, 
        
//   init : function() {
//     model.init();
//     // view.init();
//   }
// };
// // VIEWS
// let view = {
//     cacheElements : function() {
//         this.navbar_wrapper = document.querySelector(".app-navbar__wrapper");
//     },
    
//     mountUserArea : function() {
//         const mainEl = document.createElement("div");
//             mainEl.classList.add("user-area");

//         const userName = document.createElement("div");
//             userName.classList.add("user-area__name");
//             userName.textContent = controller.getUsername();

//         mainEl.appendChild(userName);
//         this.navbar_wrapper.appendChild(mainEl);
//     },
    
    
//     render : function() {

//     },    
    
//     init : function() {
//         this.cacheElements();
//         this.mountUserArea();
//     }
// };


window.addEventListener('DOMContentLoaded', () => {
    // controller.init();
    console.log("Jeeeeessse");
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_area_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_area_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__user_area_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);


console.log("user-area!!!");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);