(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DuongNH\Project\Blog_Angular_SpringMVC\fontend\web\Blog-Dependency\src\styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.font-style {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.body-blog {\r\n    margin: 0px 23%;\r\n    padding-top: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: center; */\r\n    flex-direction: column;\r\n    /* justify-items: center; */\r\n}\r\n\r\n.ads_resp {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.cus-ads-list {\r\n    flex: 25%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.cus-ads-item {\r\n    height: 50%;\r\n    padding: 10px 30px;\r\n}\r\n\r\n.btn-post {\r\n    width: 170px;\r\n    height: auto;\r\n    /* margin-top: 20px; */\r\n    padding: 15px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    background-color: #0085a1;\r\n}\r\n\r\n.btn-post-delete {\r\n    background-color: #dc3545;\r\n}\r\n\r\n.btn-acount {\r\n    background-color: #fff;\r\n    color: #0085a1;\r\n    border: 0.5px solid #0085a1;\r\n}\r\n\r\n.btn-acount:hover {\r\n    color: #fff;\r\n    background-color: #0085a1;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.btn-post:hover {\r\n    background-color: #216672;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.full-background {\r\n    height: 100%;\r\n    background-color: #212529;\r\n    /* padding-bottom: 150px; */\r\n}\r\n\r\n.form-post {\r\n    z-index: 0;\r\n    margin: 0px;\r\n    /* margin-bottom: -90px; */\r\n    padding: 0px;\r\n    padding-bottom: 100px;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #212529;\r\n    position: relative;\r\n    top: -90px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* background-image: none; */\r\n}\r\n\r\n.input-text {\r\n    padding: 10px;\r\n    width: 90%;\r\n    height: 30px;\r\n    line-height: 20px;\r\n    margin: 10px 0;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-family: robotocondensed,Arial,sans-serif;\r\n    font-size: medium;\r\n    outline: none;\r\n}\r\n\r\n.input-text:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 133, 161, .25);\r\n    border-color: rgba(0, 133, 161, .25);\r\n    transition: all 0.5s;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .form-post {\r\n        margin-top: -90px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAAA,8EAA8E;;AAE9E;;IAEI,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;;;;;IAKI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,oEAAoE;AACxE;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,oEAAoE;AACxE;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,oEAAoE;IACpE,YAAY;IACZ,WAAW;IACX,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,cAAc;IACd,4CAA4C;IAC5C,6CAA6C;IAC7C,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,+CAA+C;IAC/C,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.font-style {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.body-blog {\r\n    margin: 0px 23%;\r\n    padding-top: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: center; */\r\n    flex-direction: column;\r\n    /* justify-items: center; */\r\n}\r\n\r\n.ads_resp {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.cus-ads-list {\r\n    flex: 25%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.cus-ads-item {\r\n    height: 50%;\r\n    padding: 10px 30px;\r\n}\r\n\r\n.btn-post {\r\n    width: 170px;\r\n    height: auto;\r\n    /* margin-top: 20px; */\r\n    padding: 15px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    background-color: #0085a1;\r\n}\r\n\r\n.btn-post-delete {\r\n    background-color: #dc3545;\r\n}\r\n\r\n.btn-acount {\r\n    background-color: #fff;\r\n    color: #0085a1;\r\n    border: 0.5px solid #0085a1;\r\n}\r\n\r\n.btn-acount:hover {\r\n    color: #fff;\r\n    background-color: #0085a1;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.btn-post:hover {\r\n    background-color: #216672;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.full-background {\r\n    height: 100%;\r\n    background-color: #212529;\r\n    /* padding-bottom: 150px; */\r\n}\r\n\r\n.form-post {\r\n    z-index: 0;\r\n    margin: 0px;\r\n    /* margin-bottom: -90px; */\r\n    padding: 0px;\r\n    padding-bottom: 100px;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #212529;\r\n    position: relative;\r\n    top: -90px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* background-image: none; */\r\n}\r\n\r\n.input-text {\r\n    padding: 10px;\r\n    width: 90%;\r\n    height: 30px;\r\n    line-height: 20px;\r\n    margin: 10px 0;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-family: robotocondensed,Arial,sans-serif;\r\n    font-size: medium;\r\n    outline: none;\r\n}\r\n\r\n.input-text:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 133, 161, .25);\r\n    border-color: rgba(0, 133, 161, .25);\r\n    transition: all 0.5s;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .form-post {\r\n        margin-top: -90px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map