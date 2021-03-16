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
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");





window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sliderSelector: '.page',
    slidesSelector: '.page > div',
    nextSelector: '.next',
    logoSelector: '.sidecontrol > a:first-child'
  });
  mainSlider.render();
  const modulePageSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sliderSelector: '.moduleapp',
    slidesSelector: '.moduleapp > div',
    nextSelector: '.next, .nextmodule',
    prevSelector: '.prev, .prevmodule',
    logoSelector: '.sidecontrol > a:first-child'
  });
  modulePageSlider.render();
  const showupSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    sliderSelector: '.showup__content-slider',
    slidesSelector: '.showup__content-slider > .card',
    nextSelector: '.showup__next',
    prevSelector: '.showup__prev',
    activeClass: 'card-active',
    animated: true
  });
  showupSlider.render();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    sliderSelector: '.modules__content-slider',
    slidesSelector: '.modules__content-slider > .card',
    nextSelector: '.modules .slick-next',
    prevSelector: '.modules .slick-prev',
    activeClass: 'card-active',
    autoplay: true,
    animated: true
  });
  modulesSlider.render();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    sliderSelector: '.feed__slider',
    slidesSelector: '.feed__slider > .feed__item',
    nextSelector: '.feed__slider .slick-next',
    prevSelector: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
    autoplay: false,
    animated: false
  });
  feedSlider.render();
  new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay', 'frame').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officer__card-item', '.card__click').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officernew', '.officer__card-item', '.card__click').init();
  new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"]('.form', './assets/question.php').initForms();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(containerSelector, itemsSelector, triggerSelector) {
    try {
      this.container = document.querySelector(containerSelector);
      this.items = this.container.querySelectorAll(itemsSelector);
      this.trigger = this.container.querySelector(triggerSelector);
      this.counter = 0;
    } catch (error) {}
  }

  hideItems() {
    for (const item of this.items) {
      if (item !== this.items[this.items.length - 1]) {
        item.style.display = 'none';
      }
    }
  }

  handleTrigger() {
    this.trigger.addEventListener('click', evt => {
      if (evt.target) {
        evt.preventDefault();
      }

      this.items[this.counter].style.display = '';
      this.items[this.counter].classList.add('animated', 'fadeIn');
      this.counter++;

      if (this.counter >= this.items.length - 1) {
        this.items[this.items.length - 1].remove();
      }
    });
  }

  init() {
    try {
      this.hideItems();
      this.handleTrigger();
    } catch (error) {}
  }

}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Forms; });
class Forms {
  constructor(formsSelector, url) {
    this.forms = document.querySelectorAll(formsSelector);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Мы с Вами скоро свяжемся!',
      fail: 'Ошибка отправки данных...'
    };
    this.currentMessage = '';
    this.submitUrl = url;
  }

  async sendForm(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });

    if (response.ok) {
      return await response.text();
    } else {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }
  }

  clearInputs() {
    for (const input of this.inputs) {
      input.value = '';
    }
  }

  checkEmailInputs() {
    const emailInputs = document.querySelectorAll('input[type="email"]');

    for (const input of emailInputs) {
      input.addEventListener('input', () => {
        if (/[а-яё]/gi.test(input.value)) {
          console.log('shakeX');
          input.classList.add('animated', 'shake');
          setTimeout(() => {
            input.classList.remove('animated', 'shake');
          }, 300);
        }

        input.value = input.value.replace(/[а-яё]/gi, '');
      });
    }
  }

  checkTelInputs() {
    let inputs = document.querySelectorAll('input[name="phone"]');

    for (const input of inputs) {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    }

    function setCursorPosition(pos, elem) {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function createMask(evt) {
      let matrix = '+1 (___) ___-____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (evt.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
  }

  initForms() {
    for (const form of this.forms) {
      form.addEventListener('submit', evt => {
        evt.preventDefault();
        const formData = new FormData(form);
        const messageBox = document.createElement('div');
        messageBox.textContent = this.message.loading;
        messageBox.style.cssText = `
                    margin: 15px;
                    font-size: 16px;
                    color: grey;
                    text-align: center;
                    border: 2px solid grey;
                `;
        form.parentElement.append(messageBox);
        this.sendForm(this.submitUrl, formData).then(response => {
          this.currentMessage = this.message.success;
          console.log(response);
          return response;
        }).catch(error => {
          this.currentMessage = `${this.message.fail}: ${error}`;
        }).finally(() => {
          messageBox.textContent = this.currentMessage;
          setTimeout(() => {
            messageBox.remove();
            this.clearInputs();
          }, 5000);
        });
      });
    }

    this.checkEmailInputs();
    this.checkEmailInputs();
    this.checkTelInputs();
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    sliderSelector,
    slidesSelector,
    nextSelector,
    prevSelector,
    logoSelector = null
  } = {}) {
    super({
      sliderSelector,
      slidesSelector,
      nextSelector,
      prevSelector
    });

    try {
      this.logo = this.slider.querySelectorAll(logoSelector);
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
    if (this.slider) {
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

}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  hideAllSlides() {
    for (const slide of this.slides) {
      slide.classList.remove(this.activeClass);

      if (this.animated) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    }
  }

  showSlide(n) {
    this.slides[n].classList.add(this.activeClass);

    if (this.animated) {
      this.slides[n].querySelector('.card__title').style.opacity = '1';
      this.slides[n].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  showNext() {
    this.slider.append(this.slides[this.slideIndex]);

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

    this.slider.prepend(this.slides[this.slideIndex]);
    this.hideAllSlides();
    this.showSlide(this.slideIndex);
  }

  runAutoplay() {
    setInterval(() => {
      this.showNext();
    }, 5000);
  }

  render() {
    try {
      super.render();
      this.slider.style.cssText = `
                overflow: hidden;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
            `;

      if (this.autoplay) {
        this.runAutoplay();
      }
    } catch (error) {}
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    sliderSelector = null,
    slidesSelector = null,
    nextSelector = null,
    prevSelector = null,
    activeClass = '',
    autoplay = false,
    animated = false
  } = {}) {
    this.slider = document.querySelector(sliderSelector);

    try {
      this.slides = this.slider.querySelectorAll(slidesSelector);
    } catch (e) {}

    this.next = document.querySelectorAll(nextSelector);
    this.prev = document.querySelectorAll(prevSelector);
    this.activeClass = activeClass;
    this.autoplay = autoplay;
    this.animated = animated;
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
    if (this.slider) {
      this.hideAllSlides();
      this.showSlide(this.slideIndex);

      try {
        for (const item of this.next) {
          item.addEventListener('click', evt => {
            if (evt.target) {
              evt.preventDefault();
              evt.stopPropagation();
            }

            this.showNext();
          });
        }

        for (const item of this.prev) {
          item.addEventListener('click', evt => {
            if (evt.target) {
              evt.preventDefault();
              evt.stopPropagation();
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