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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const next = document.querySelector('.e-photo-slider__arrows-right'),\r\n      prev = document.querySelector('.e-photo-slider__arrows-left'),\r\n      slidesWrapper =document.querySelector('.e-wrapper'),\r\n      slidesField = document.querySelector('.e-slider'),\r\n      height = window.getComputedStyle(slidesWrapper).height,\r\n      slides = document.querySelectorAll('.e-section__content'),\r\n      photoSliderWrapper = document.querySelector('.photo-slider-wrapper'),\r\n      photoSlider = document.querySelector('.e-section__photo-slider'),\r\n      width = window.getComputedStyle(photoSlider).width,\r\n      photo = document.querySelectorAll('.photo');\r\n\r\nlet offset = 0,\r\n    photoOffset = 0;\r\n\r\nslidesField.style.height = 100 * slides.length + '%';\r\nphotoSliderWrapper.style.width = 100 * slides.length + '%';\r\n\r\nslides.forEach(slide => {\r\n    slide.style.height = height;\r\n});\r\n\r\nphoto.forEach(slide => {\r\n    slide.style.width = width;\r\n});\r\nnext.addEventListener('click', ()=>{\r\n    if(offset == +height.slice(0, height.length -2) * (slides.length - 1)){\r\n        // offset = 0; \r\n    } else{\r\n        offset += +height.slice(0, height.length -2);\r\n    }\r\n    slidesField.style.transform = `translateY(-${offset}px)`;\r\n\r\n\r\n    if(photoOffset == +width.slice(0, width.length -2) * (slides.length - 1)){\r\n        // photoOffset = 0;\r\n    } else{\r\n        photoOffset += +width.slice(0, width.length -2);\r\n    }\r\n    photoSliderWrapper.style.transform = `translateX(-${photoOffset}px)`;\r\n\r\n    arrowUse(photoOffset);\r\n});\r\n\r\nprev.addEventListener('click', ()=>{\r\n    if(offset == 0){\r\n        // offset = +height.slice(0, height.length -2) * (slides.length - 1);  \r\n    } \r\n    else{\r\n        offset -= +height.slice(0, height.length -2);\r\n    }\r\n    slidesField.style.transform = `translateY(-${offset}px)`;\r\n\r\n\r\n    if(photoOffset == 0){\r\n        // photoOffset = +width.slice(0, width.length -2) * (slides.length - 1); \r\n    } \r\n    else{\r\n        photoOffset -= +width.slice(0, width.length -2);\r\n    }\r\n    photoSliderWrapper.style.transform = `translateX(-${photoOffset}px)`;\r\n\r\n    arrowUse(photoOffset);\r\n});\r\n\r\n//\r\n\r\nfunction arrowUse(photoOffset) {\r\n    if(photoOffset == 0) {\r\n        prev.classList.add('hidden-arrow');\r\n        next.classList.remove('hidden-arrow');\r\n    }\r\n\r\n    if (photoOffset == +width.slice(0, width.length -2) * (slides.length - 1)){\r\n        next.classList.add('hidden-arrow');\r\n        prev.classList.remove('hidden-arrow');\r\n    }\r\n\r\n    if(photoOffset != 0 && photoOffset != +width.slice(0, width.length -2) * (slides.length - 1)){\r\n        prev.classList.remove('hidden-arrow');\r\n        next.classList.remove('hidden-arrow');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });