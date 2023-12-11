/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");

function forms() {
  console.log("Привет");
  let btns = document.querySelectorAll("#button__form");
  let exit = document.querySelector(".modal__close");
  let modal = document.querySelector(".modal__show");
  let modalDialog = document.querySelector(".modal__dialog");
  let form = document.querySelector("form");
  const message = {
    // эти текста будут выводиться на сайт при нажатии на кнопку и при разном расскладе загрузки данных
    success: 'Спасибо мы скоро с вами свяжемся!',
    failure: 'Что-то пошло не так...',
    null: " "
  };
  console.log(btns);
  btns.forEach(btn => {
    btn.addEventListener("click", event => {
      console.log("Ты нажал на кнопку!!");
      document.body.style.overflow = 'hidden';
      modal.classList.remove("hide");
      modal.classList.add("show");
      modalDialog.classList.add("show");
      modalDialog.classList.remove("hide");
    });
  });
  exit.addEventListener("click", event => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.removeProperty("overflow");
  });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form); // сделали из нашей формы тип FormData благодяря этому можно эти данные сразу отправить 
    // !ВАЖНО В форме в input-(ах) должны быть поля name иначе будет ошибка 
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json) //Метод postData (url, данные из объекта)      
    .then(data => {
      // если все сработает то мы выводим форму с success текстом  
      console.log(data);
      showThanksModal(message.success);
    }).catch(error => {
      console.error('Error during request:', error);
      showThanksModal(message.failure);
    }).finally(() => {
      //здесь мы очищаем форму
      form.reset();
    });
  });
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog"); // это элемент 1 модального окна с 2 input-(ами)
    let modalSecond = document.createElement("div");
    prevModalDialog.classList.add('hide'); // мы прячем его тк мы не хотим его видеть после нажатия на кнопку 
    prevModalDialog.classList.remove("show"); //при повторном внесении данных что бы окно не оставалось

    modalSecond.classList.add("modal__dialog");
    modalSecond.innerHTML = ` 
        <div class="modal__content">
          <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        
        </div>

    
    `;
    modalSecond.addEventListener('click', e => {
      if (e.target.getAttribute('data-close') === '') {
        modal.classList.remove("show");
        document.body.style.removeProperty("overflow");
        modalSecond.remove();
      }
    });
    document.querySelector('.modal__show').append(modalSecond); // Добавляем новое окно в наш родительский класс для модальных окон
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mask() {
  $('input[name=phone]').mask("+7 (999) 999-99-99");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/scrollUp.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function scrollUp() {
  let scroll = document.querySelector(".scrollUp");
  window.addEventListener('scroll', function () {
    if (window.pageYOffset + document.documentElement.clientHeight >= 3500)
      // высота прокрутки сайта + количество пикселей, которые видны на экране без прокрутки >= высоты всей страницы, включая ту часть, которая не видна из-за прокрутки
      {
        scroll.classList.add("active");
      }
    if (window.pageYOffset + document.documentElement.clientHeight <= 2500)
      // высота прокрутки сайта + количество пикселей, которые видны на экране без прокрутки >= высоты всей страницы, включая ту часть, которая не видна из-за прокрутки
      {
        scroll.classList.remove("active");
      }
  });
  let scrollSecond = document.querySelector(".scrollUp__btn");
  scrollSecond.addEventListener("click", event => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  var slider = tns({
    container: '.my-slider',
    controlsContainer: "#custom_controlsContainer",
    prevButton: '#prev',
    nextButton: '#next',
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });
  var slider = tns({
    container: '.my-slider-second',
    items: 1,
    controlsContainer: "#custom_controlsContainer-second",
    prevButton: '#prev-second',
    nextButton: '#next-second',
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4
      }
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/stages.js":
/*!**********************************!*\
  !*** ./src/js/modules/stages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stages() {
  let divider = document.querySelector(".stages__Wrapperdivider__divider");
  let computedStyle = window.getComputedStyle(divider);
  let background = computedStyle.getPropertyValue('background');
  const img = document.querySelector(".stages__Wrapperdivider__divider__img");
  let reg = /\d\d\dpx/ig;
  let matches = background.match(reg);
  if (matches) {
    let pxValues = matches.map(match => match.replace(/px/g, ''));
    pxValues = pxValues.map(px => +px);
    console.log(pxValues);
    img.style.left = `${pxValues[0]}px`;
  } else {
    console.log('No matches found.');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stages);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  const bd = [[{
    textInfo: ["57 500", "213 000", "123 123", "123 900"],
    textInfoSecond: ["Сотрудники в различных странах", "Лучшие сотрудники года", "Разнообразные рабочие места", "Высококвалифицированные специалисты"]
  }], [{
    textInfo: ["175 000", "696 366", "116 266", "236 466"],
    textInfoSecond: ["Годовая статистика процедур", "Высокий уровень медицинской практики", "Множество видов медицинских вмешательств", "Рекордное количество успешных операций"]
  }], [{
    textInfo: ["175 000", "626", "111 266", "26 666"],
    textInfoSecond: ["Годовая статистика процедур", "Высокий уровень медицинской практики", "Множество видов медицинских вмешательств", "Рекордное количество успешных операций"]
  }], [{
    textInfo: ["13,4 млн", "717 111", "77 007", "723 111"],
    textInfoSecond: ["Обслуживание множества абонентов", "Постоянные клиенты и подписчики", "Широкополосный доступ в интернет", "Высокая степень удовлетворенности клиентов"]
  }], [{
    textInfo: ["50 000", "322 311", "122", "233"],
    textInfoSecond: ["Стратегические поставки оборудования", "Оборудование для региональных рынков", "Множество инновационных технологий", "Эффективные поставки современного оборудования"]
  }]];
  const upArrow = document.querySelectorAll(".aboutPartners__wrapper-information__upArrow");
  const downArrow = document.querySelectorAll(".aboutPartners__wrapper-information__douwnArrow");
  let text = document.querySelectorAll(".aboutPartners__wrapper-information__text");
  let textSecond = document.querySelectorAll(".aboutPartners__wrapper-information__text-second");
  let index = 0;
  text.forEach((text, i) => {
    text.innerText = bd[i][0].textInfo[0];
  });
  textSecond.forEach((text, i) => {
    text.innerText = bd[i][0].textInfoSecond[0];
  });
  const cardIndexes = Array(bd.length).fill(0); // Инициализация индексов для каждой карточки

  upArrow.forEach((item, dataIndex) => {
    item.addEventListener("click", () => handleArrowClick(dataIndex, true));
  });
  downArrow.forEach((item, dataIndex) => {
    item.addEventListener("click", () => handleArrowClick(dataIndex, false));
  });
  function handleArrowClick(dataIndex, isUp) {
    const correspondingTextElement = document.querySelectorAll(".aboutPartners__wrapper-information__text")[dataIndex];
    const correspondingTextSecondElement = document.querySelectorAll(".aboutPartners__wrapper-information__text-second")[dataIndex];
    if (isUp) {
      cardIndexes[dataIndex]++;
      if (cardIndexes[dataIndex] === bd[dataIndex][0].textInfo.length) {
        cardIndexes[dataIndex] = 0;
      }
    } else {
      cardIndexes[dataIndex]--;
      if (cardIndexes[dataIndex] < 0) {
        cardIndexes[dataIndex] = bd[dataIndex][0].textInfo.length - 1;
      }
    }
    correspondingTextElement.innerText = bd[dataIndex][0].textInfo[cardIndexes[dataIndex]];
    correspondingTextSecondElement.innerText = bd[dataIndex][0].textInfoSecond[cardIndexes[dataIndex]];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRes: () => (/* binding */ getRes),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  // сдесь мы создаем функцию в которой через fetch будем отправлять данные на db.json
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Error during request:', error);
    throw error; // Повторное возбуждение ошибки для того, чтобы ее могли обработать в вызывающем коде
  }
};

const getRes = async url => {
  // создали функцию в которой есть fetch и аргумент в виде url 
  const res = await fetch(url); // создали промис из fetch

  if (!res.ok) {
    // показывает что промис выдал сбой в подключении
    throw new Error(`Could not fetch ${url}, status ${res.status}`); // ошибка где есть url и код ошибки throw (возвращает то что там было)
  }

  return await res.json(); // сдесь если не произошло сбоев то мы возращаем полученый json и сразу парсим его в объект 
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_stages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/stages */ "./src/js/modules/stages.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ "./src/js/modules/scrollUp.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");






window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_stages__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map