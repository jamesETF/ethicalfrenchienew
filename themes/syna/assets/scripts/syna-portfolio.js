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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/portfolio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/helpers/jq-helpers.js":
/*!*****************************************!*\
  !*** ./assets/js/helpers/jq-helpers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _serialize2 = __webpack_require__(/*! ./serialize */ \"./assets/js/helpers/serialize.js\");\n\nvar _serialize3 = _interopRequireDefault(_serialize2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction $(selector) {\n  var nodes = typeof selector === 'string' ? Array.from((this && Array.isArray(this) ? this[0] : document).querySelectorAll(selector)) : [selector];\n\n  var _returnee = {\n    $nodes: nodes,\n    $: $.bind(nodes),\n    on: function on(event, selector, callback) {\n      if (typeof callback === 'undefined') {\n        callback = selector;\n        selector = null;\n      }\n\n      if (selector) {\n        nodes.forEach(function (node) {\n          node.addEventListener(event, function (e) {\n            if (e.target.matches(selector)) {\n              callback.call(node, e);\n            }\n          });\n        });\n      } else {\n        nodes.forEach(function (node) {\n          return node['on' + event] = callback.bind(node);\n        });\n      }\n      return _returnee;\n    },\n    addClass: function addClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.add(className);\n      });\n      return _returnee;\n    },\n    removeClass: function removeClass(className) {\n      nodes.forEach(function (node) {\n        return node.classList.remove(className);\n      });\n      return _returnee;\n    },\n    attr: function attr(attribute, value) {\n      if (value === undefined && nodes.length > 1) {\n        throw new Error('Can\\'t access value of several nodes\\' attributes');\n      }\n\n      if (value === undefined) {\n        return nodes[0].getAttribute(attribute);\n      } else if (value !== null) {\n        nodes.forEach(function (node) {\n          return node.setAttribute(attribute, value);\n        });\n      }\n      return _returnee;\n    },\n    removeAttr: function removeAttr(attribute) {\n      nodes.forEach(function (node) {\n        return node.removeAttribute(attribute);\n      });\n      return _returnee;\n    },\n    append: function append(innerHTML) {\n      nodes.forEach(function (node) {\n        return node.innerHTML += innerHTML;\n      });\n      return _returnee;\n    },\n    html: function html(innerHTML) {\n      if (innerHTML === undefined) {\n        if (nodes.length > 1) {\n          throw new Error('Can\\'t get several nodes innerHTML at once');\n        }\n\n        return nodes[0].innerHTML;\n      }\n\n      nodes.forEach(function (node) {\n        return node.innerHTML = innerHTML;\n      });\n      return _returnee;\n    },\n    text: function text(innerText) {\n      if (innerText === undefined) {\n        if (nodes.length > 1) {\n          throw new Error('Can\\'t get several nodes innerText at once');\n        }\n\n        return nodes[0].innerText;\n      }\n\n      if (innerText !== null) {\n        nodes.forEach(function (node) {\n          return node.innerText = innerText;\n        });\n      }\n      return _returnee;\n    },\n    val: function val(value) {\n      if (value === undefined) {\n        if (nodes.length > 1) {\n          throw new Error('Can\\'t get several nodes value at once');\n        }\n\n        return nodes[0].value;\n      }\n\n      nodes.forEach(function (node) {\n        return node.value = value;\n      });\n      return _returnee;\n    },\n    submit: function submit() {\n      return nodes.forEach(function (node) {\n        return node.submit();\n      });\n    },\n    serialize: function serialize() {\n      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (nodes.length > 1) {\n        throw new Error('Can\\'t serialize forms at once');\n      }\n\n      if (json) {\n        return (0, _serialize2.serializeJSON)(nodes[0]);\n      }\n\n      return (0, _serialize3.default)(nodes[0]);\n    },\n    length: nodes.length\n  };\n\n  nodes.forEach(function (node, index) {\n    return _returnee[index] = node;\n  });\n\n  return _returnee;\n}\n\n$.scrollTo = function scrollTo(element, to, duration) {\n  if (duration <= 0) return;\n  var difference = to - element.scrollTop;\n  var perTick = difference / duration * 10;\n  window.scrollTo(0, 0);\n  // setTimeout(function() {\n  //     element.scrollTop = element.scrollTop + perTick;\n  //     if (element.scrollTop === to) return;\n  //     scrollTo(element, to, duration - 10);\n  // }, 10);\n};\n\n$.ajax = function ajax(_ref) {\n  var method = _ref.method,\n      url = _ref.url,\n      data = _ref.data,\n      _ref$options = _ref.options,\n      options = _ref$options === undefined ? {\n    contentType: \"application/json;charset=UTF-8\"\n  } : _ref$options;\n\n  var xhr = new XMLHttpRequest();\n  xhr.open(method.toUpperCase(), url);\n  xhr.setRequestHeader(\"Content-Type\", options.contentType);\n  xhr.send(data);\n\n  return new Promise(function (resolve, reject) {\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState == 4) {\n        if (xhr.status == 200) {\n          resolve(JSON.parse(xhr.responseXML || xhr.responseText));\n        } else {\n          reject(xhr.statusText);\n        }\n      }\n    };\n  });\n};\n\n$.post = function (url, data, options) {\n  return $.ajax({ method: 'post', url: url, data: data, options: options });\n};\n\nexports.default = $;\n\n//# sourceURL=webpack:///./assets/js/helpers/jq-helpers.js?");

/***/ }),

/***/ "./assets/js/helpers/serialize.js":
/*!****************************************!*\
  !*** ./assets/js/helpers/serialize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = serialize;\nexports.serializeJSON = serializeJSON;\n// From https://code.google.com/archive/p/form-serialize/\nfunction serialize(form) {\n  if (!form || form.nodeName !== \"FORM\") {\n    return;\n  }\n  var i,\n      j,\n      q = [];\n  for (i = form.elements.length - 1; i >= 0; i = i - 1) {\n    if (form.elements[i].name === \"\") {\n      continue;\n    }\n    switch (form.elements[i].nodeName) {\n      case 'INPUT':\n        switch (form.elements[i].type) {\n          case 'text':\n          case 'hidden':\n          case 'password':\n          case 'button':\n          case 'reset':\n          case 'submit':\n            q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            break;\n          case 'checkbox':\n          case 'radio':\n            if (form.elements[i].checked) {\n              q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            }\n            break;\n          case 'file':\n            break;\n        }\n        break;\n      case 'TEXTAREA':\n        q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n        break;\n      case 'SELECT':\n        switch (form.elements[i].type) {\n          case 'select-one':\n            q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            break;\n          case 'select-multiple':\n            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {\n              if (form.elements[i].options[j].selected) {\n                q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].options[j].value));\n              }\n            }\n            break;\n        }\n        break;\n      case 'BUTTON':\n        switch (form.elements[i].type) {\n          case 'reset':\n          case 'submit':\n          case 'button':\n            q.push(form.elements[i].name + \"=\" + encodeURIComponent(form.elements[i].value));\n            break;\n        }\n        break;\n    }\n  }\n  return q.join(\"&\");\n}\n\nfunction serializeJSON(form) {\n  var obj = {};\n  var elements = form.querySelectorAll(\"input, select, textarea\");\n  for (var i = 0; i < elements.length; ++i) {\n    var element = elements[i];\n    var name = element.name;\n    var value = element.value;\n\n    if (name) {\n      if (element.type === 'radio' || element.type === 'checkbox') {\n        if (element.checked) {\n          obj[name] = value;\n        }\n      } else if (element.type !== 'file') {\n        obj[name] = value;\n      }\n    }\n  }\n\n  return JSON.stringify(obj);\n}\n\n//# sourceURL=webpack:///./assets/js/helpers/serialize.js?");

/***/ }),

/***/ "./assets/js/portfolio.js":
/*!********************************!*\
  !*** ./assets/js/portfolio.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jqHelpers = __webpack_require__(/*! ./helpers/jq-helpers */ \"./assets/js/helpers/jq-helpers.js\");\n\nvar _jqHelpers2 = _interopRequireDefault(_jqHelpers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar portfolioItem = (0, _jqHelpers2.default)('.portfolio-item.has-modal');\nvar _default = { innerHTML: '' };\n\nportfolioItem.on('click', function () {\n  window.syna.showModal({\n    title: (this.querySelector('.title') || _default).innerHTML,\n    subtitle: (this.querySelector('.subtitle') || _default).innerHTML,\n    content: (this.querySelector('.content') || _default).innerHTML,\n    image: (this.querySelector('img') || _default).src,\n    labels: (this.querySelector('.badge-container') || _default).innerHTML,\n    size: 'md'\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/portfolio.js?");

/***/ })

/******/ });