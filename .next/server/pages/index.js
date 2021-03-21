module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GameCanvas.tsx":
/*!***********************************!*\
  !*** ./components/GameCanvas.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ \"pixi.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jonathansaudhof/Programming/AnnoJS/components/GameCanvas.tsx\";\n\n\n\nconst GameCanvas = props => {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const app = new pixi_js__WEBPACK_IMPORTED_MODULE_2__[\"Application\"]();\n    const canvas = document.getElementById(\"canvas\");\n    canvas.appendChild(app.view);\n    return () => {\n      canvas.removeChild(app.view);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"canvas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCanvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbWVDYW52YXMudHN4PzkxZTciXSwibmFtZXMiOlsiR2FtZUNhbnZhcyIsInByb3BzIiwidXNlRWZmZWN0IiwiYXBwIiwiUElYSSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInZpZXciLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsVUFBVSxHQUFJQyxLQUFELElBQWtCO0FBQ25DQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxHQUFHLEdBQUcsSUFBSUMsbURBQUosRUFBWjtBQUNBLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsVUFBTSxDQUFDRyxXQUFQLENBQW1CTCxHQUFHLENBQUNNLElBQXZCO0FBQ0EsV0FBTyxNQUFNO0FBQ1hKLFlBQU0sQ0FBQ0ssV0FBUCxDQUFtQlAsR0FBRyxDQUFDTSxJQUF2QjtBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBZEQ7O0FBZ0JlVCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FtZUNhbnZhcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBHYW1lQ2FudmFzID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKCk7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLmFwcGVuZENoaWxkKGFwcC52aWV3KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FudmFzLnJlbW92ZUNoaWxkKGFwcC52aWV3KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgaWQ9J2NhbnZhcyc+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ2FudmFzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GameCanvas.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GameCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GameCanvas */ \"./components/GameCanvas.tsx\");\n\nvar _jsxFileName = \"/Users/jonathansaudhof/Programming/AnnoJS/pages/index.tsx\";\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_GameCanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUFPLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDYW52YXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZUNhbnZhc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIDxHYW1lQ2FudmFzIC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "pixi.js":
/*!**************************!*\
  !*** external "pixi.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pixi.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwaXhpLmpzXCI/ZWI5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwaXhpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGl4aS5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pixi.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });