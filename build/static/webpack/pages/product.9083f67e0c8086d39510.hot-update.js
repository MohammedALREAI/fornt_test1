webpackHotUpdate_N_E("pages/product",{

/***/ "./components/products.tsx":
/*!*********************************!*\
  !*** ./components/products.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _renderAllProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderAllProduct */ "./components/renderAllProduct.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\New folder\\frontend\\components\\products.tsx",
    _s = $RefreshSig$();






function Products() {
  _s();

  var _useProductsQuery = Object(_src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useProductsQuery"])(),
      loading = _useProductsQuery.loading,
      error = _useProductsQuery.error,
      data = _useProductsQuery.data;

  var attrs = [];
  console.log("my data is", data);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 21
  }, this);

  if (!data || data.products.length < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "text-center text-xl font-bold w-full h-8",
      children: " there is no item found right now "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

  if (data || data.products) {
    var arr = [];
    var products = data.products;

    for (var index = 0; index < products.length; index++) {
      for (var index2 = 0; index2 < products[index].attrs.length; index2++) {
        attrs.push({
          name: products[index].attrs[index2].name,
          value: products[index].attrs[index2].value
        });
      }

      arr.push({
        price: products[index].price,
        attrs: attrs
      });
      console.log("the arr is ", arr);
      console.log("the attrs is ", arr);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderAllProduct__WEBPACK_IMPORTED_MODULE_2__["RenderAllProduct"], {
          data: arr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 10
      }, this);
    }
  }
}

_s(Products, "fDddlQT2lezbnWzIILLQr/iE0ks=", false, function () {
  return [_src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useProductsQuery"]];
});

_c = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/renderAllProduct.tsx":
/*!*****************************************!*\
  !*** ./components/renderAllProduct.tsx ***!
  \*****************************************/
/*! exports provided: RenderAllProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderAllProduct", function() { return RenderAllProduct; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderProudect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProudect */ "./components/renderProudect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "G:\\New folder\\frontend\\components\\renderAllProduct.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var RenderAllProduct = function RenderAllProduct(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "min-h-screen bg-gray-100 py-6   sm:py-12 mx-auto container ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "flex flex-row justify-between mx-auto container items-center rounded-lg",
      children: data && data.map(function (x, index) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderProudect__WEBPACK_IMPORTED_MODULE_2__["SingleProductProduct"], _objectSpread({}, x), "".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};
_c = RenderAllProduct;

var _c;

$RefreshReg$(_c, "RenderAllProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/renderProudect.tsx":
/*!***************************************!*\
  !*** ./components/renderProudect.tsx ***!
  \***************************************/
/*! exports provided: SingleProductProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductProduct", function() { return SingleProductProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\New folder\\frontend\\components\\renderProudect.tsx",
    _this = undefined;



var SingleProductProduct = function SingleProductProduct(_ref) {
  var price = _ref.price,
      attrs = _ref.attrs;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "min-h-screen bg-gray-100 py-6   sm:py-12 mx-auto container ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-row justify-between mx-auto container items-center rounded-lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "w-1/3 bg-gray-400 justify-center items-center border-1 rounded-lg border-gray-300",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          className: "m-2 font-light text-xl border-gray-400  border-t-2",
          children: "more info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: [" ", price, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "attr"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }, _this), attrs && attrs.map(function (x, index) {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: "name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 18
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 18
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: "value"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 18
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.value]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 18
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 11
            }, _this)]
          }, "".concat(index, "_").concat(x.name), true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 1
  }, _this);
};
_c = SingleProductProduct;

var _c;

$RefreshReg$(_c, "SingleProductProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/product/index.tsx":
/*!*********************************!*\
  !*** ./pages/product/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductPage; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/products */ "./components/products.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\New folder\\frontend\\pages\\product\\index.tsx";




function ProductPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Product pages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_products__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = ProductPage;

var _c;

$RefreshReg$(_c, "ProductPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: CacheControlScope, CreateProductDocument, useCreateProductMutation, ProductsDocument, useProductsQuery, useProductsLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheControlScope", function() { return CacheControlScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductDocument", function() { return CreateProductDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateProductMutation", function() { return useCreateProductMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDocument", function() { return ProductsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductsQuery", function() { return useProductsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductsLazyQuery", function() { return useProductsLazyQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");



var _templateObject,
    _s = $RefreshSig$(),
    _templateObject2,
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

var CacheControlScope;

(function (CacheControlScope) {
  CacheControlScope["Public"] = "PUBLIC";
  CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope || (CacheControlScope = {}));

var CreateProductDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation createProduct($input: CreateProductInput!) {\n  createProduct(input: $input) {\n    id\n    price\n    attrs {\n      name\n      value\n    }\n  }\n}\n    "])));

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateProductMutation(baseOptions) {
  _s();

  var options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"](CreateProductDocument, options);
}

_s(useCreateProductMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"]];
});

var ProductsDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query products {\n  products {\n    id\n    price\n    attrs {\n      name\n      value\n    }\n  }\n}\n    "])));
/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */

function useProductsQuery(baseOptions) {
  _s2();

  var options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"](ProductsDocument, options);
}

_s2(useProductsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

function useProductsLazyQuery(baseOptions) {
  _s3();

  var options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"](ProductsDocument, options);
}

_s3(useProductsLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVuZGVyQWxsUHJvZHVjdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVuZGVyUHJvdWRlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInVzZVByb2R1Y3RzUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiYXR0cnMiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInByb2R1Y3RzIiwibGVuZ3RoIiwiYXJyIiwiaW5kZXgiLCJpbmRleDIiLCJwdXNoIiwibmFtZSIsInZhbHVlIiwicHJpY2UiLCJSZW5kZXJBbGxQcm9kdWN0IiwibWFwIiwieCIsIlNpbmdsZVByb2R1Y3RQcm9kdWN0IiwiUHJvZHVjdFBhZ2UiLCJkZWZhdWx0T3B0aW9ucyIsIkNhY2hlQ29udHJvbFNjb3BlIiwiQ3JlYXRlUHJvZHVjdERvY3VtZW50IiwiZ3FsIiwidXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uIiwiYmFzZU9wdGlvbnMiLCJvcHRpb25zIiwiQXBvbGxvIiwiUHJvZHVjdHNEb2N1bWVudCIsInVzZVByb2R1Y3RzTGF6eVF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBVUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJB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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge3VzZVByb2R1Y3RzUXVlcnl9IGZyb21cIi4uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiXHJcbmltcG9ydCB7IFByb3BzU2luZ2xlUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlclByb3VkZWN0XCI7XHJcbmltcG9ydCB7IFJlbmRlckFsbFByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJBbGxQcm9kdWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQXR0cnN7XHJcbiAgXHJcbiAgICBuYW1lOnN0cmluZyxcclxuICAgIHZhbHVlOnN0cmluZ1xyXG4gIFxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVByb2R1Y3RzUXVlcnkoKTtcclxuICBsZXQgYXR0cnM6QXJyYXk8QXR0cnM+PVtdXHJcbiAgY29uc29sZS5sb2coXCJteSBkYXRhIGlzXCIsZGF0YSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIGlmKCFkYXRhIHx8IGRhdGEucHJvZHVjdHMubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgaC04XCI+IHRoZXJlIGlzIG5vIGl0ZW0gZm91bmQgcmlnaHQgbm93IDwvZGl2PlxyXG4gIH1cclxuICBpZihkYXRhIHx8IGRhdGEucHJvZHVjdHMpe1xyXG5sZXQgYXJyOkFycmF5PFByb3BzU2luZ2xlUHJvZHVjdD49W11cclxuICAgIGNvbnN0IHByb2R1Y3RzPWRhdGEucHJvZHVjdHM7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9kdWN0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBwcm9kdWN0c1tpbmRleF0uYXR0cnMubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgYXR0cnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0ubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0udmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgcHJpY2U6cHJvZHVjdHNbaW5kZXhdLnByaWNlLFxyXG4gICAgICAgICAgYXR0cnMgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgYXJyIGlzIFwiLGFycilcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBhdHRycyBpcyBcIixhcnIpXHJcblxyXG4gICAgICBcclxuXHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxSZW5kZXJBbGxQcm9kdWN0IGRhdGE9e2Fycn0vPlxyXG5cclxuICA8L2Rpdj47fVxyXG59fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvcHNTaW5nbGVQcm9kdWN0ICxTaW5nbGVQcm9kdWN0UHJvZHVjdH0gZnJvbSAnLi9yZW5kZXJQcm91ZGVjdCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbmRhdGE6QXJyYXk8UHJvcHNTaW5nbGVQcm9kdWN0PlxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZW5kZXJBbGxQcm9kdWN0ID0gKHtkYXRhfTogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcHktNiAgIHNtOnB5LTEyIG14LWF1dG8gY29udGFpbmVyIFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBjb250YWluZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGdcIj5cclxuICAgICAge2RhdGEgJiZkYXRhLm1hcCgoeCxpbmRleCk9PntcclxuICAgICAgICAgIDxTaW5nbGVQcm9kdWN0UHJvZHVjdCBrZXk9e2Ake2luZGV4fWB9IHsuLi54fS8+XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHNTaW5nbGVQcm9kdWN0IHtcclxuIFxyXG4gICBcclxuICAgIHByaWNlOm51bWJlcixcclxuICAgIGF0dHJzOlt7XHJcbiAgICAgICAgbmFtZTpzdHJpbmdcclxuICAgICAgICB2YWx1ZTpzdHJpbmdcclxuICAgICAgfV0gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaW5nbGVQcm9kdWN0UHJvZHVjdCA9ICh7cHJpY2UsYXR0cnN9OiBQcm9wc1NpbmdsZVByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcHktNiAgIHNtOnB5LTEyIG14LWF1dG8gY29udGFpbmVyIFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBjb250YWluZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGdcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgYmctZ3JheS00MDAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0xIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgIFxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibS0yIGZvbnQtbGlnaHQgdGV4dC14bCBib3JkZXItZ3JheS00MDAgIGJvcmRlci10LTJcIj5tb3JlIGluZm88L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+cHJpY2U8L3A+XHJcbiAgICAgICAgPHNwYW4+IHtwcmljZX0gJDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5hdHRyPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyBhdHRycyAmJiBhdHRycy5tYXAoKHgsaW5kZXgpPT57XHJcbiAgICAgICAgICA8IGRpdiBrZXk9e2Ake2luZGV4fV8ke3gubmFtZX1gfT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+bmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICA8c3Bhbj4ge3gubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPnZhbHVlPC9wPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPiB7eC52YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8LyBkaXY+ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgKX1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UHJvZHVjdCBwYWdlczwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQcm9kdWN0cyAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9ICB7fVxuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG4gIC8qKiBUaGUgYFVwbG9hZGAgc2NhbGFyIHR5cGUgcmVwcmVzZW50cyBhIGZpbGUgdXBsb2FkLiAqL1xuICBVcGxvYWQ6IGFueTtcbn07XG5cblxuZXhwb3J0IHR5cGUgQXR0cnNJbnB1dCA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHZhbHVlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEF0dHJzUHJvZHVjdCA9IHtcbiAgX190eXBlbmFtZT86ICdBdHRyc1Byb2R1Y3QnO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IGVudW0gQ2FjaGVDb250cm9sU2NvcGUge1xuICBQdWJsaWMgPSAnUFVCTElDJyxcbiAgUHJpdmF0ZSA9ICdQUklWQVRFJ1xufVxuXG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0SW5wdXQgPSB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0SW5wdXQ7XG4gIGF0dHJzOiBBcnJheTxBdHRyc0lucHV0PjtcbiAgcHJpY2U6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBjcmVhdGVQcm9kdWN0OiBQcm9kdWN0VmFyaWFudDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVQcm9kdWN0QXJncyA9IHtcbiAgaW5wdXQ6IENyZWF0ZVByb2R1Y3RJbnB1dDtcbn07XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUHJvZHVjdCc7XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc2x1Zz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZGVzY3JpcHRpb246IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdElucHV0ID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGVzY3JpcHRpb246IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdFZhcmlhbnQgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUHJvZHVjdFZhcmlhbnQnO1xuICBpZDogU2NhbGFyc1snSUQnXTtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgcHJpY2U6IFNjYWxhcnNbJ0ludCddO1xuICBhdHRycz86IE1heWJlPEFycmF5PE1heWJlPEF0dHJzUHJvZHVjdD4+Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgcHJvZHVjdHM/OiBNYXliZTxBcnJheTxNYXliZTxQcm9kdWN0VmFyaWFudD4+Pjtcbn07XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogQ3JlYXRlUHJvZHVjdElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZVByb2R1Y3Q6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUHJvZHVjdFZhcmlhbnQnIH1cbiAgICAmIFBpY2s8UHJvZHVjdFZhcmlhbnQsICdpZCcgfCAncHJpY2UnPlxuICAgICYgeyBhdHRycz86IE1heWJlPEFycmF5PE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdBdHRyc1Byb2R1Y3QnIH1cbiAgICAgICYgUGljazxBdHRyc1Byb2R1Y3QsICduYW1lJyB8ICd2YWx1ZSc+XG4gICAgKT4+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIFByb2R1Y3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcHJvZHVjdHM/OiBNYXliZTxBcnJheTxNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Byb2R1Y3RWYXJpYW50JyB9XG4gICAgJiBQaWNrPFByb2R1Y3RWYXJpYW50LCAnaWQnIHwgJ3ByaWNlJz5cbiAgICAmIHsgYXR0cnM/OiBNYXliZTxBcnJheTxNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnQXR0cnNQcm9kdWN0JyB9XG4gICAgICAmIFBpY2s8QXR0cnNQcm9kdWN0LCAnbmFtZScgfCAndmFsdWUnPlxuICAgICk+Pj4gfVxuICApPj4+IH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IENyZWF0ZVByb2R1Y3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBjcmVhdGVQcm9kdWN0KCRpbnB1dDogQ3JlYXRlUHJvZHVjdElucHV0ISkge1xuICBjcmVhdGVQcm9kdWN0KGlucHV0OiAkaW5wdXQpIHtcbiAgICBpZFxuICAgIHByaWNlXG4gICAgYXR0cnMge1xuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVQcm9kdWN0TXV0YXRpb24sIENyZWF0ZVByb2R1Y3RNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVQcm9kdWN0TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlUHJvZHVjdE11dGF0aW9uLCBDcmVhdGVQcm9kdWN0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVQcm9kdWN0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlUHJvZHVjdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVByb2R1Y3RNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVQcm9kdWN0TXV0YXRpb24sIENyZWF0ZVByb2R1Y3RNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUHJvZHVjdHNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBwcm9kdWN0cyB7XG4gIHByb2R1Y3RzIHtcbiAgICBpZFxuICAgIHByaWNlXG4gICAgYXR0cnMge1xuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlUHJvZHVjdHNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VQcm9kdWN0c1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUHJvZHVjdHNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VQcm9kdWN0c1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2R1Y3RzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPihQcm9kdWN0c0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kdWN0c0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KFByb2R1Y3RzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBQcm9kdWN0c1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVByb2R1Y3RzUXVlcnk+O1xuZXhwb3J0IHR5cGUgUHJvZHVjdHNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUHJvZHVjdHNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUHJvZHVjdHNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPjsiXSwic291cmNlUm9vdCI6IiJ9