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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tools = __webpack_require__(1);
var tools = new Tools();

tools.getData("get", "./data1.json", function (data) {
    console.log(document.getElementsByTagName("h1")[0]);
    console.log(data.key);
    document.getElementsByTagName("h1")[0].innerHTML = data.key;
}, function (data) {
    console.log("is error");
});
tools.getData("get", "./data2.json", function (data) {
    console.log(document.getElementsByTagName("h2")[0]);
    console.log(data.key);
    document.getElementsByTagName("h2")[0].innerHTML = data.key;
}, function (data) {
    console.log("is error");
});
tools.getData("get", "./data3.json", function (data) {
    console.log(document.getElementsByTagName("h3")[0]);
    console.log(data.key);
    document.getElementsByTagName("h3")[0].innerHTML = data.key;
}, function (data) {
    console.log("is error");
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Tools() {
        _classCallCheck(this, Tools);
    }

    _createClass(Tools, [{
        key: 'getData',
        value: function getData(method, url, success, fail) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open(method, url, true);
            xmlhttp.send();
            console.log(xmlhttp);

            xmlhttp.onreadystatechange = function () {
                console.log(xmlhttp);
                console.log(33333);
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        console.log(xmlhttp.responseText);
                        var data = eval('(' + xmlhttp.responseText + ')');
                        console.log(data);
                        console.log(typeof data === 'undefined' ? 'undefined' : _typeof(data));
                        success(data);
                    } else {
                        fail(xmlhttp.responseText);
                    }
                }
            };
        }
    }]);

    return Tools;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map