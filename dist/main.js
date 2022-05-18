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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal */ \"./src/modules/headerModal.js\");\n/* harmony import */ var _modules_benefitSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/benefitSlider */ \"./src/modules/benefitSlider.js\");\n/* harmony import */ var _modules_servicesSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/servicesSlider */ \"./src/modules/servicesSlider.js\");\n/* harmony import */ var _modules_servicesModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/servicesModal */ \"./src/modules/servicesModal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_sertificates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sertificates */ \"./src/modules/sertificates.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_benefitSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_servicesSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_servicesModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('22 may 2022')\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_sertificates__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n\n//# sourceURL=webpack://glo_diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/benefitSlider.js":
/*!**************************************!*\
  !*** ./src/modules/benefitSlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefitSlider = () => {\r\n    const benefits = document.querySelector('.benefits-wrap');\r\n    const benefitsArrows = document.querySelector('.benefits-arrows');\r\n    let benefitsItems = document.querySelectorAll('.benefits__item');\r\n    let benefitsArr = [];\r\n\r\n    //создание массива из имеющихся элементов\r\n    const newArr = () => {\r\n        benefitsArr = [];\r\n        for (let i = 0; i < benefitsItems.length; i++) {\r\n            benefitsItems[i].style.display = 'none';\r\n            benefitsArr.push(benefitsItems[i]);\r\n        }\r\n    }\r\n\r\n    //смена слайда при нажатии на кнопку назад с пересозданием массива элементов\r\n    const prevSlide = () => {\r\n        let lastElem = benefitsItems[benefitsArr.length - 1];\r\n        lastElem.remove();\r\n        benefitsItems[0].before(lastElem);\r\n        benefitsItems = document.querySelectorAll('.benefits__item');\r\n        newArr();\r\n    }\r\n\r\n    //смена слайда при нажатии на кнопку вперед с пересозданием массива элементов\r\n    const nextSlide = () => {\r\n        let firstElem = benefitsArr[0];\r\n        firstElem.remove();\r\n        benefitsItems[benefitsArr.length - 1].after(firstElem);\r\n        benefitsItems = document.querySelectorAll('.benefits__item');\r\n        newArr();\r\n    }\r\n\r\n    //изменение количенства видимых слайдов при разных размерах экранов\r\n    const showSlide = () => {\r\n        if (window.screen.width >= 576) {\r\n            for (let i = 0; i < benefitsItems.length; i++) {\r\n                if (i < 3) {\r\n                    benefitsArr[i].style.display = 'block';\r\n                }\r\n            }\r\n        } else {\r\n            for (let i = 0; i < benefitsItems.length; i++) {\r\n                if (i == 0) {\r\n                    benefits.style.justifyContent = 'center';\r\n                    benefitsArr[i].style.display = 'block';\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    //слушатель нажатия на кнопки смены слайдов\r\n    benefitsArrows.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (e.target.matches('#benefits__arrow--left')) {\r\n            prevSlide();\r\n            showSlide();\r\n        } else if (e.target.matches('#benefits__arrow--right')) {\r\n            nextSlide();\r\n            showSlide();\r\n        }\r\n    })\r\n\r\n    newArr();\r\n    showSlide();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefitSlider);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/benefitSlider.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/headerModal.js":
/*!************************************!*\
  !*** ./src/modules/headerModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst headerModal = () => {\r\n    const body = document.querySelector('body');\r\n    const modal = document.querySelector('.header-modal');\r\n    const modalOverlay = document.querySelector('.overlay');\r\n\r\n    //анимация появления модального окна через функцию-помощник\r\n    const modalAnimate = () => {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 300,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modal.style.top = (progress * 85 - 35) + '%';\r\n            }\r\n        })\r\n    };\r\n\r\n    //слушатель нажатия на кнопки заказ звонка и закрытия модального окна через крестик и через клик мимо окна\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target.closest('#btn-callback')) {\r\n            e.preventDefault();\r\n            modal.style.display = 'block';\r\n            modalOverlay.style.display = 'block';\r\n            modalAnimate();\r\n        } else if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {\r\n            modal.style.display = 'none';\r\n            modalOverlay.style.display = 'none';\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/headerModal.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\nfunction newArr({ arr, items }) {\r\n    arr = [];\r\n    for (let i = 0; i < items.length; i++) {\r\n        arr.push(items[i]);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://glo_diploma/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const smoothScroll = document.querySelector('.smooth-scroll');\r\n\r\n    // слушатель нажатия на стрелку \"подняться вверх\"\r\n    smoothScroll.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        document.querySelector('#header').scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n    // опции конструктора IntersectionObserver \r\n    const options = {\r\n        threshold: 1\r\n    };\r\n\r\n    // появление и исчезание стрелки \"подняться вверх\" при условии видимости #header\r\n    const viewSmoothScroll = function (entries) {\r\n        entries.forEach(function (entry) {\r\n            if (entry.intersectionRatio == 1) {\r\n                smoothScroll.classList.remove('smooth-scroll-active');\r\n            } else {\r\n                smoothScroll.classList.add('smooth-scroll-active');\r\n            }\r\n        })\r\n    };\r\n\r\n    // создание и запуск конструктора IntersectionObserver\r\n    const observer = new IntersectionObserver(viewSmoothScroll, options);\r\n\r\n    observer.observe(document.querySelector('#header'));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n    const forms = document.querySelectorAll('.order-form>form');\r\n    \r\n    forms.forEach((elem) => {\r\n        const nameForm = elem.name;\r\n        sendForms(nameForm);\r\n    })\r\n}\r\n\r\nconst sendForms = (nameForm) => {\r\n    const form = document.querySelector('[name=\"' + nameForm + '\"]');\r\n    const btn = form.querySelector('button');\r\n    const inputName = form.querySelectorAll('[name=\"fio\"]');\r\n    const inputPhone = form.querySelectorAll('[name=\"phone\"]');\r\n\r\n    const textOriginal = btn.textContent;\r\n    const loadText = 'Отправка...';\r\n    const errorText = 'Ошибка отправки!';\r\n    const successText = 'Скидка Ваша!';\r\n\r\n    const regularName = /^[а-яА-ЯЁёA-Za-z]+$/;\r\n    const regularPhone = /^\\+[\\d]{0,16}$/;\r\n\r\n    const validate = () => {\r\n        let success = true;\r\n        const userName = form.querySelector('[name=\"fio\"]');\r\n        const userPhone = form.querySelector('[name=\"phone\"]');\r\n\r\n        if (regularName.test(userName.value) && regularPhone.test(userPhone.value)) {\r\n            return success\r\n        } else {\r\n            return success = false\r\n        }\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        btn.textContent = loadText;\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        })\r\n\r\n        if (validate()) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    btn.textContent = successText;\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = '';\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    btn.textContent = errorText;\r\n                })\r\n        } else {\r\n            btn.textContent = errorText;\r\n            formElements.forEach(input => {\r\n                input.value = '';\r\n            })\r\n        }\r\n    }\r\n\r\n    const inputError = (inputElem, regular, alert) => {\r\n        for (let i = 0; i < inputElem.length; i++) {\r\n            const textError = document.createElement('span');\r\n\r\n            inputElem[i].parentElement.append(textError);\r\n            textError.classList.add('help-block');\r\n\r\n            inputElem[i].addEventListener('input', (e) => {\r\n                textError.innerHTML = '';\r\n                e.target.classList.remove('error');\r\n                if (!regular.test(e.target.value)) {\r\n                    e.target.classList.add('error');\r\n                    textError.innerHTML = alert;\r\n                }\r\n            });\r\n        };\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место, пожааалуйста))')\r\n        }\r\n\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n\r\n            submitForm();\r\n\r\n            setTimeout(() => btn.textContent = textOriginal, 2500);\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n\r\n    inputError(inputName, regularName, 'Вводите пожалуйста буквы');\r\n    inputError(inputPhone, regularPhone, 'Вводите телефон в формате \"+79276802419\"');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sertificates.js":
/*!*************************************!*\
  !*** ./src/modules/sertificates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// создание функции отображения документа во весь экран поверх страницы\r\nconst sertificates = () => {  \r\n    const body = document.querySelector('body');\r\n    const sertificateDocuments = document.querySelectorAll('.sertificate-document');\r\n    const modalOverlay = document.querySelector('.overlay');\r\n\r\n    const modalBlock = document.createElement('div');\r\n    const clone = modalOverlay.cloneNode(true);\r\n\r\n    sertificateDocuments.forEach(elem => {\r\n        elem.addEventListener('click', e => {\r\n            e.preventDefault();\r\n\r\n            //получение ссылки на оригинальную картинку\r\n            let href = e.target.closest('.sertificate-document').getAttribute('href'); \r\n            \r\n            const imgDocument = document.createElement('img');\r\n            imgDocument.setAttribute('src', href);\r\n            \r\n            body.append(modalBlock);\r\n            modalBlock.append(imgDocument);\r\n            modalBlock.append(clone);\r\n\r\n            imgDocument.style.display = 'block';\r\n            imgDocument.style.position = 'fixed';\r\n            imgDocument.style.top = '50%';\r\n            imgDocument.style.left = '50%';\r\n            imgDocument.style.zIndex = '9999';\r\n            imgDocument.style.transform = 'translate(-50%, -50%)';    \r\n            imgDocument.style.maxHeight = '95%';\r\n            clone.style.display = 'block';\r\n\r\n            modalBlock.addEventListener('click', () => {\r\n                modalBlock.innerHTML = '';\r\n                modalBlock.remove()\r\n            })\r\n        })\r\n    });\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sertificates);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/sertificates.js?");

/***/ }),

/***/ "./src/modules/servicesModal.js":
/*!**************************************!*\
  !*** ./src/modules/servicesModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst servicesModal = () => {\r\n    const body = document.querySelector('body');\r\n    const modal = document.querySelector('.services-modal');\r\n    const modalOverlay = document.querySelector('.overlay');\r\n\r\n    const modalAnimate = () => {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 300,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modal.style.top = (progress * 85 - 35) + '%';\r\n            }\r\n        })\r\n    };\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-button')) {\r\n            e.preventDefault();\r\n            modal.style.display = 'block';\r\n            modalOverlay.style.display = 'block';\r\n            modalAnimate();\r\n        } else if (e.target.closest('.services-modal__close') || e.target.closest('.overlay')) {\r\n            modal.style.display = 'none';\r\n            modalOverlay.style.display = 'none';\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/servicesModal.js?");

/***/ }),

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesSlider = () => {\r\n    const services = document.querySelector('#services');\r\n    let servicesItems = document.querySelectorAll('.service-block');\r\n    let servicesArr = []\r\n\r\n    const newArr = () => {\r\n        servicesArr = [];\r\n        for (let i = 0; i < servicesItems.length; i++) {\r\n            servicesItems[i].parentElement.style.display = 'none';\r\n            servicesArr.push(servicesItems[i].parentElement);\r\n        }\r\n    }\r\n\r\n    const prevSlide = () => {\r\n        let lastElem = servicesItems[servicesArr.length - 1].parentElement;\r\n        lastElem.remove();\r\n        servicesItems[0].parentElement.before(lastElem);\r\n        servicesItems = document.querySelectorAll('.service-block');\r\n        newArr();\r\n    }\r\n\r\n    const nextSlide = () => {\r\n        let firstElem = servicesItems[0].parentElement;\r\n        firstElem.remove();\r\n        servicesItems[servicesArr.length - 1].parentElement.after(firstElem);\r\n        servicesItems = document.querySelectorAll('.service-block');\r\n        newArr();\r\n    }\r\n\r\n    const showSlide = () => {\r\n        if (window.screen.width >= 576) {\r\n            for (let i = 0; i < servicesItems.length; i++) {\r\n                if (i < 2) {\r\n                    servicesArr[i].style.display = 'block';\r\n                }\r\n            }\r\n        } else {\r\n            for (let i = 0; i < servicesItems.length; i++) {\r\n                if (i == 0) {\r\n                    servicesArr[i].style.display = 'block';\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    services.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (e.target.matches('#services__arrow--left')) {\r\n            prevSlide();\r\n            showSlide();\r\n        } else if (e.target.matches('#services__arrow--right')) {\r\n            nextSlide();\r\n            showSlide();\r\n        }\r\n    })\r\n\r\n    newArr()\r\n    showSlide()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/servicesSlider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelectorAll('.count_1>span');\r\n    const timerHours = document.querySelectorAll('.count_2>span');\r\n    const timerMinutes = document.querySelectorAll('.count_3>span');\r\n    const timerSeconds = document.querySelectorAll('.count_4>span');\r\n    let interval\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n        if (timeRemaining <= 0) {\r\n            days = '0';\r\n            hours = '0';\r\n            minutes = '0';\r\n            seconds = '0';\r\n        }\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const pasteTextContent = (obj, elem) => {\r\n        for (let key in obj) {\r\n            if (obj.hasOwnProperty(key)) {\r\n                obj[key].textContent = elem < 10 ? '0' + elem : elem;\r\n            }\r\n        }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        pasteTextContent(timerDays, getTime.days);\r\n        pasteTextContent(timerHours, getTime.hours);\r\n        pasteTextContent(timerMinutes, getTime.minutes);\r\n        pasteTextContent(timerSeconds, getTime.seconds);\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(interval);\r\n        }\r\n    }\r\n\r\n    interval = setInterval(updateClock, 500);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo_diploma/./src/modules/timer.js?");

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