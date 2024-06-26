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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#nav {\r\n  display: flex;\r\n  gap: 6rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\nimg {\r\n  object-fit: contain;\r\n  max-inline-size: 99%;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8rem;\r\n  justify-content: center;\r\n  object-fit: contain;\r\n}\r\n\r\n#content h1 {\r\n  max-inline-size: 16ch;\r\n}\r\n\r\n#content p {\r\n  max-inline-size: 34ch;\r\n}\r\n\r\n#content img {\r\n  max-inline-size: 32%;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/about.jpg */ \"./src/images/about.jpg\");\n\r\n\r\nfunction loadAbout() {\r\n  const aboutBtn = document.getElementById(\"about\");\r\n  aboutBtn.addEventListener(\"click\", () => {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n\r\n    // Clear existing content\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    // Create the main container div\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.setAttribute(\"id\", \"container\");\r\n\r\n    // Create about us container\r\n    const about = document.createElement(\"div\");\r\n    about.setAttribute(\"id\", \"aboutUs\");\r\n\r\n    const img1 = document.createElement(\"img\");\r\n    img1.src = _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img1.alt = \"spaghetti and green cabbage salad\";\r\n\r\n    const aboutUs = document.createElement(\"h2\");\r\n    aboutUs.textContent = \"Welcome to Our Restaurant\";\r\n    const aboutText = document.createElement(\"p\");\r\n    aboutText.textContent =\r\n      \"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor\";\r\n\r\n    const open = document.createElement(\"div\");\r\n    open.setAttribute(\"id\", \"open\");\r\n\r\n    const hoursOpen = document.createElement(\"h2\");\r\n    hoursOpen.textContent = \"Opening Hours\";\r\n\r\n    const monday = document.createElement(\"div\");\r\n    monday.setAttribute(\"class\", \"day\");\r\n\r\n    const mondayText = document.createElement(\"p\");\r\n    mondayText.textContent = \"Monday - Friday\";\r\n    const mondayTime = document.createElement(\"p\");\r\n    mondayText.textContent = \"8:00 am to 9:00 pm\";\r\n\r\n    const saturday = document.createElement(\"div\");\r\n    monday.setAttribute(\"class\", \"day\");\r\n\r\n    const saturdayText = document.createElement(\"p\");\r\n    saturdayText.textContent = \"Saturday\";\r\n    const saturdayTime = document.createElement(\"p\");\r\n    saturdayText.textContent = \"8:00 am to 9:00 pm\";\r\n\r\n    const sunday = document.createElement(\"div\");\r\n    monday.setAttribute(\"class\", \"day\");\r\n\r\n    const sundayText = document.createElement(\"p\");\r\n    sundayText.textContent = \"Sunday\";\r\n    const sundayTime = document.createElement(\"p\");\r\n    sundayTime.textContent = \"CLOSED\";\r\n\r\n    const rights = document.createElement(\"p\");\r\n    rights.textContent =\r\n      \"2022 Restaurants. All Right Reserved. Designed by Jroycodes\";\r\n\r\n    monday.appendChild(mondayText);\r\n    monday.appendChild(mondayTime);\r\n\r\n    saturday.appendChild(saturdayText);\r\n    saturday.appendChild(saturdayTime);\r\n\r\n    sunday.appendChild(sundayText);\r\n    sunday.appendChild(sundayTime);\r\n\r\n    open.appendChild(hoursOpen);\r\n    open.appendChild(monday);\r\n    open.appendChild(saturday);\r\n    open.appendChild(sunday);\r\n\r\n    about.appendChild(img1);\r\n    about.appendChild(aboutUs);\r\n    about.appendChild(aboutText);\r\n\r\n    menuDiv.appendChild(about);\r\n    menuDiv.appendChild(open);\r\n    menuDiv.appendChild(rights);\r\n\r\n    contentDiv.appendChild(menuDiv);\r\n  });\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.js */ \"./src/logo.js\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_logo_js__WEBPACK_IMPORTED_MODULE_1__.loadLogo)();\r\n\r\n\r\n(0,_load_js__WEBPACK_IMPORTED_MODULE_2__.pageLoad)();\r\n\r\n\r\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuLoad)();\r\n\r\n\r\n(0,_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAbout)();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _images_Mask_group_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Mask group.jpg */ \"./src/images/Mask group.jpg\");\n\r\n\r\nfunction pageLoad() {\r\n  // Clear existing content\r\n  const contentDiv = document.getElementById(\"content\");\r\n  contentDiv.innerHTML = \"\";\r\n\r\n  // Create an image elemnt and set its source\r\n  const img = document.createElement(\"img\");\r\n  img.src = _images_Mask_group_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img.alt = \"Restaurant view\";\r\n\r\n  const textDiv = document.createElement(\"div\");\r\n\r\n  //   Create headline\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"We provide the best food for you\";\r\n\r\n  // create restaurant text\r\n  const info = document.createElement(\"p\");\r\n  info.textContent =\r\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\r\n\r\n  // append\r\n  textDiv.appendChild(headline);\r\n  textDiv.appendChild(info);\r\n\r\n  contentDiv.appendChild(textDiv);\r\n  contentDiv.appendChild(img);\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", pageLoad);\r\nconst homeBtn = document.getElementById(\"home\");\r\nhomeBtn.addEventListener(\"click\", pageLoad);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/logo.js":
/*!*********************!*\
  !*** ./src/logo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadLogo: () => (/* binding */ loadLogo)\n/* harmony export */ });\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.jpg */ \"./src/images/logo.jpg\");\n\r\n\r\nfunction loadLogo() {\r\n  const container = document.getElementById(\"nav\");\r\n  const logoDiv = document.createElement(\"div\");\r\n  logoDiv.setAttribute(\"class\", \"logo\");\r\n  const logo = document.createElement(\"img\");\r\n  logo.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  logo.alt = \"Restaurant page\";\r\n\r\n  logoDiv.appendChild(logo);\r\n  container.appendChild(logoDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/logo.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _images_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/dish1.jpg */ \"./src/images/dish1.jpg\");\n/* harmony import */ var _images_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dish2.jpg */ \"./src/images/dish2.jpg\");\n/* harmony import */ var _images_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dish3.jpg */ \"./src/images/dish3.jpg\");\n/* harmony import */ var _images_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dish4.jpg */ \"./src/images/dish4.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction menuLoad() {\r\n  const menuBtn = document.getElementById(\"menu\");\r\n  menuBtn.addEventListener(\"click\", () => {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n\r\n    // Clear existing content\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    // Create the main container div\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.setAttribute(\"class\", \"container\");\r\n\r\n    // Create a dish container\r\n    const dish1 = document.createElement(\"div\");\r\n    dish1.setAttribute(\"class\", \"dish1\");\r\n\r\n    // Create and set the content for the dish\r\n    const img1 = document.createElement(\"img\");\r\n    img1.src = _images_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img1.alt = \"Lumpia with suace\";\r\n    const dishName = document.createElement(\"h4\");\r\n    dishName.textContent = \"Lumpia with suace\";\r\n    const dishText = document.createElement(\"p\");\r\n    dishText.textContent =\r\n      \"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor\";\r\n\r\n    const dish2 = document.createElement(\"div\");\r\n    dish1.setAttribute(\"id\", \"dish2\");\r\n\r\n    const img2 = document.createElement(\"img\");\r\n    img2.src = _images_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    img2.alt = \"Fish and Veggie\";\r\n    const dish2Name = document.createElement(\"h4\");\r\n    dish2Name.textContent = \"Fish and Veggie\";\r\n    const dish2Text = document.createElement(\"p\");\r\n    dish2Text.textContent =\r\n      \"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor\";\r\n\r\n    const dish3 = document.createElement(\"div\");\r\n    dish1.setAttribute(\"id\", \"dish3\");\r\n\r\n    const img3 = document.createElement(\"img\");\r\n    img3.src = _images_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    img3.alt = \"Tofu Chili\";\r\n    const dish3Name = document.createElement(\"h4\");\r\n    dish3Name.textContent = \"Tofu Chili\";\r\n    const dish3Text = document.createElement(\"p\");\r\n    dish3Text.textContent =\r\n      \"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor\";\r\n\r\n    const dish4 = document.createElement(\"div\");\r\n    dish1.setAttribute(\"id\", \"dish4\");\r\n\r\n    const img4 = document.createElement(\"img\");\r\n    img4.src = _images_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n    img4.alt = \"Lumpia with suace\";\r\n    const dish4Name = document.createElement(\"h4\");\r\n    dish4Name.textContent = \"Egg and Cucumber\";\r\n    const dish4Text = document.createElement(\"p\");\r\n    dish4Text.textContent =\r\n      \"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor\";\r\n\r\n    // Append the content to the dish container\r\n    dish1.appendChild(img1);\r\n    dish1.appendChild(dishName);\r\n    dish1.appendChild(dishText);\r\n    dish2.appendChild(img2);\r\n    dish2.appendChild(dish2Name);\r\n    dish2.appendChild(dish2Text);\r\n    dish3.appendChild(img3);\r\n    dish3.appendChild(dish3Name);\r\n    dish3.appendChild(dish3Text);\r\n    dish4.appendChild(img4);\r\n    dish4.appendChild(dish4Name);\r\n    dish4.appendChild(dish4Text);\r\n    // Append the dish container to the main container\r\n    menuDiv.appendChild(dish1);\r\n    menuDiv.appendChild(dish2);\r\n    menuDiv.appendChild(dish3);\r\n    menuDiv.appendChild(dish4);\r\n\r\n    // Append the main container to the document body\r\n    contentDiv.appendChild(menuDiv);\r\n  });\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/Mask group.jpg":
/*!***********************************!*\
  !*** ./src/images/Mask group.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b8a74af3e0c19e2d158.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Mask_group.jpg?");

/***/ }),

/***/ "./src/images/about.jpg":
/*!******************************!*\
  !*** ./src/images/about.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d869cb34335f8b9277e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/about.jpg?");

/***/ }),

/***/ "./src/images/dish1.jpg":
/*!******************************!*\
  !*** ./src/images/dish1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"714b6f1f93fd9f228510.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dish1.jpg?");

/***/ }),

/***/ "./src/images/dish2.jpg":
/*!******************************!*\
  !*** ./src/images/dish2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af3d297e0f63720943a7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dish2.jpg?");

/***/ }),

/***/ "./src/images/dish3.jpg":
/*!******************************!*\
  !*** ./src/images/dish3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f314c75ea00b1244b2a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dish3.jpg?");

/***/ }),

/***/ "./src/images/dish4.jpg":
/*!******************************!*\
  !*** ./src/images/dish4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d6fb3e161bb61d5fbef.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dish4.jpg?");

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a808a4ddf5b59bf47fe2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/logo.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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