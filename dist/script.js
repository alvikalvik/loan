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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");


window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new _modules_slider__WEBPACK_IMPORTED_MODULE_0__["MainSlider"]('.page', '.page > div', '.next', undefined, '.sidecontrol > a:first-child');
  mainSlider.render();
  const mainPlayer = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup .play', '.overlay', 'frame');
  mainPlayer.init();
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: Slider, MainSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSlider", function() { return MainSlider; });
class Slider {
  constructor(sliderSelector, slidesSelector, nextSelector, prevSelector) {
    this.slider = document.querySelector(sliderSelector);
    this.slides = this.slider.querySelectorAll(slidesSelector);
    this.next = this.slider.querySelectorAll(nextSelector);
    this.prev = this.slider.querySelectorAll(prevSelector);
    this.slideIndex = 0;
  }

  hideAllSlides() {
    for (const slide of this.slides) {
      slide.classList.remove('animated', 'fadeIn');
      slide.style.display = 'none';
    }
  }

  showSlide(n) {
    this.slides[n].classList.add('animated', 'fadeIn');
    this.slides[n].style.display = '';
  }

  showNext() {
    if (this.slideIndex >= this.slides.length - 1) {
      this.slideIndex = 0;
    } else {
      this.slideIndex++;
    }

    this.hideAllSlides();
    this.showSlide(this.slideIndex);
  }

  showPrev() {
    if (this.slideIndex <= 0) {
      this.slideIndex = this.slides.length - 1;
    } else {
      this.slideIndex--;
    }

    this.hideAllSlides();
    this.showSlide(this.slideIndex);
  }

  render() {
    this.hideAllSlides();
    this.showSlide(this.slideIndex);

    try {
      for (const item of this.next) {
        item.addEventListener('click', evt => {
          if (evt.target) {
            evt.preventDefault();
          }

          this.showNext();
        });
      }

      for (const item of this.prev) {
        item.addEventListener('click', evt => {
          if (evt.target) {
            evt.preventDefault();
          }

          this.showPrev();
        });
      }
    } catch (error) {
      console.log(error);
    } // const intervalFunction = this.showNext.bind(this);
    // setInterval(intervalFunction, 3000);

  }

}
class MainSlider extends Slider {
  constructor(sliderSelector, slidesSelector, nextSelector, prevSelector, logoSelector) {
    super(sliderSelector, slidesSelector, nextSelector, prevSelector);
    this.logo = this.slider.querySelectorAll(logoSelector);

    try {
      this.hanson = this.slider.querySelector('.hanson');
    } catch (error) {
      console.log(error);
    }
  }

  showSlide(n) {
    super.showSlide(n);

    if (this.slideIndex === 2) {
      try {
        this.showHansonWithDelay(3000);
      } catch (error) {
        console.log(error);
      }
    }
  }

  showHansonWithDelay(delay) {
    this.hanson.style.display = 'none';
    this.hanson.classList.remove('animated', 'slideInUp');
    setTimeout(() => {
      this.hanson.style.display = '';
      this.hanson.classList.add('animated', 'slideInUp');
    }, delay);
  }

  render() {
    super.render();

    for (const item of this.logo) {
      item.addEventListener('click', evt => {
        if (evt.target) {
          evt.preventDefault();
        }

        this.slideIndex = 0;
        this.showSlide(this.slideIndex);
      });
    }
  }

}

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggersSelector, overlaySelector, containerId) {
    this.triggers = document.querySelectorAll(triggersSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.container = this.overlay.querySelector(`#${containerId}`);
    this.close = this.overlay.querySelector('.close');
    this.player = null;
  }

  loadYoutubeApi() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  createPlayer(path) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: path
    });
  }

  init() {
    this.loadYoutubeApi();
    this.handleTriggers();
  }

  handleTriggers() {
    for (const trigger of this.triggers) {
      trigger.addEventListener('click', evt => {
        if (evt.target) {
          evt.preventDefault();
        }

        if (this.player === null) {
          this.createPlayer(trigger.dataset.url);
        }

        this.overlay.style.display = 'flex';
        this.overlay.addEventListener('click', evt => {
          if (evt.target && (evt.target === this.overlay || evt.target === this.close)) {
            this.overlay.style.display = 'none';

            if (this.player !== null) {
              this.player.pauseVideo();
            }
          }
        });
      });
    }
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map