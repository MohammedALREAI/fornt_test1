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
/* harmony import */ var _renderProudect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProudect */ "./components/renderProudect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\New folder\\frontend\\components\\products.tsx",
    _s = $RefreshSig$();






function Products() {
  _s();

  var _this = this;

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
    products.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 py-6   sm:py-12 mx-auto container ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-row justify-between mx-auto container items-center rounded-lg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderProudect__WEBPACK_IMPORTED_MODULE_2__["SingleProductProduct"], {
            price: item.price,
            attrs: item.attrs
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this);
    });
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
          lineNumber: 17,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: [" ", price, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "attr"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
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
                lineNumber: 29,
                columnNumber: 18
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 18
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: "value"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 18
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.value]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 18
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 11
            }, _this)]
          }, "".concat(index, "_").concat(x.name), true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVuZGVyUHJvdWRlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInVzZVByb2R1Y3RzUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiYXR0cnMiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInByb2R1Y3RzIiwibGVuZ3RoIiwiYXJyIiwibWFwIiwiaXRlbSIsInByaWNlIiwiaWQiLCJTaW5nbGVQcm9kdWN0UHJvZHVjdCIsIngiLCJpbmRleCIsIm5hbWUiLCJ2YWx1ZSIsIlByb2R1Y3RQYWdlIiwiZGVmYXVsdE9wdGlvbnMiLCJDYWNoZUNvbnRyb2xTY29wZSIsIkNyZWF0ZVByb2R1Y3REb2N1bWVudCIsImdxbCIsInVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbiIsImJhc2VPcHRpb25zIiwib3B0aW9ucyIsIkFwb2xsbyIsIlByb2R1Y3RzRG9jdW1lbnQiLCJ1c2VQcm9kdWN0c0xhenlRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7OztBQVdBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsMEJBQWlDQywrRUFBZ0IsRUFBakQ7QUFBQSxNQUFRQyxPQUFSLHFCQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLHFCQUFpQkEsS0FBakI7QUFBQSxNQUF3QkMsSUFBeEIscUJBQXdCQSxJQUF4Qjs7QUFDQSxNQUFJQyxLQUFrQixHQUFDLEVB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QTs7QUF1Qk8sSUFBS0MsaUJBQVo7O1dBQVlBLGlCO0FBQUFBLG1CO0FBQUFBLG1CO0dBQUFBLGlCLEtBQUFBLGlCOztBQWlGTCxJQUFNQyxxQkFBcUIsR0FBR0MsMERBQUgsMFRBQTNCOztBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyx3QkFBVCxDQUFrQ0MsV0FBbEMsRUFBbUk7QUFBQTs7QUFDbEksTUFBTUMsT0FBTyxtQ0FBT04sY0FBUCxHQUEwQkssV0FBMUIsQ0FBYjs7QUFDQSxTQUFPRSwwREFBQSxDQUEwRUwscUJBQTFFLEVBQWlHSSxPQUFqRyxDQUFQO0FBQ0Q7O0dBSFNGLHdCO1VBRURHLDBEOzs7QUFLUixJQUFNQyxnQkFBZ0IsR0FBR0wsMERBQUgsbVFBQXRCO0FBYVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN4QixnQkFBVCxDQUEwQjBCLFdBQTFCLEVBQXdHO0FBQUE7O0FBQ3ZHLE1BQU1DLE9BQU8sbUNBQU9OLGNBQVAsR0FBMEJLLFdBQTFCLENBQWI7O0FBQ0EsU0FBT0UsdURBQUEsQ0FBdURDLGdCQUF2RCxFQUF5RUYsT0FBekUsQ0FBUDtBQUNEOztJQUhTM0IsZ0I7VUFFRDRCLHVEOzs7QUFFUixTQUFTRSxvQkFBVCxDQUE4QkosV0FBOUIsRUFBZ0g7QUFBQTs7QUFDN0csTUFBTUMsT0FBTyxtQ0FBT04sY0FBUCxHQUEwQkssV0FBMUIsQ0FBYjs7QUFDQSxTQUFPRSwyREFBQSxDQUEyREMsZ0JBQTNELEVBQTZFRixPQUE3RSxDQUFQO0FBQ0Q7O0lBSE9HLG9CO1VBRUNGLDJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuNjU5NzczZWE3NzA4MzhjMDNjM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHt1c2VQcm9kdWN0c1F1ZXJ5fSBmcm9tXCIuLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIlxyXG5pbXBvcnQgeyBQcm9wc1NpbmdsZVByb2R1Y3QsIFNpbmdsZVByb2R1Y3RQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyUHJvdWRlY3RcIjtcclxuaW1wb3J0IHsgUmVuZGVyQWxsUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlckFsbFByb2R1Y3RcIjtcclxuXHJcbmludGVyZmFjZSBBdHRyc3tcclxuICBcclxuICAgIG5hbWU6c3RyaW5nLFxyXG4gICAgdmFsdWU6c3RyaW5nXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiBcclxuZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUHJvZHVjdHNRdWVyeSgpO1xyXG4gIGxldCBhdHRyczpBcnJheTxBdHRycz49W11cclxuICBjb25zb2xlLmxvZyhcIm15IGRhdGEgaXNcIixkYXRhKVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgaWYoIWRhdGEgfHwgZGF0YS5wcm9kdWN0cy5sZW5ndGggPCAxKXtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHctZnVsbCBoLThcIj4gdGhlcmUgaXMgbm8gaXRlbSBmb3VuZCByaWdodCBub3cgPC9kaXY+XHJcbiAgfVxyXG4gIGlmKGRhdGEgfHwgZGF0YS5wcm9kdWN0cyl7XHJcbmxldCBhcnI6QXJyYXk8UHJvcHNTaW5nbGVQcm9kdWN0Pj1bXVxyXG4gICAgY29uc3QgcHJvZHVjdHM9ZGF0YS5wcm9kdWN0cztcclxuICAgIFxyXG4gICBcclxuICAgICAgXHJcbiAgICBwcm9kdWN0cy5tYXAoaXRlbT0+KFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBweS02ICAgc206cHktMTIgbXgtYXV0byBjb250YWluZXIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBjb250YWluZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICA8U2luZ2xlUHJvZHVjdFByb2R1Y3QgcHJpY2U9e2l0ZW0ucHJpY2V9IGtleT17aXRlbS5pZH0gYXR0cnM9e2l0ZW0uYXR0cnN9Lz5cclxuICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICkpXHJcblxyXG59fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHNTaW5nbGVQcm9kdWN0IHtcclxuIFxyXG4gICBcclxuICAgIHByaWNlOm51bWJlcixcclxuICAgIGF0dHJzOkFycmF5PGFueT4gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaW5nbGVQcm9kdWN0UHJvZHVjdCA9ICh7cHJpY2UsYXR0cnN9OiBQcm9wc1NpbmdsZVByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcHktNiAgIHNtOnB5LTEyIG14LWF1dG8gY29udGFpbmVyIFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBjb250YWluZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGdcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgYmctZ3JheS00MDAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0xIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgIFxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibS0yIGZvbnQtbGlnaHQgdGV4dC14bCBib3JkZXItZ3JheS00MDAgIGJvcmRlci10LTJcIj5tb3JlIGluZm88L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+cHJpY2U8L3A+XHJcbiAgICAgICAgPHNwYW4+IHtwcmljZX0gJDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5hdHRyPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyBhdHRycyAmJiBhdHRycy5tYXAoKHgsaW5kZXgpPT57XHJcbiAgICAgICAgICA8IGRpdiBrZXk9e2Ake2luZGV4fV8ke3gubmFtZX1gfT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+bmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICA8c3Bhbj4ge3gubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPnZhbHVlPC9wPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPiB7eC52YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8LyBkaXY+ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgKX1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UHJvZHVjdCBwYWdlczwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQcm9kdWN0cyAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9ICB7fVxuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG4gIC8qKiBUaGUgYFVwbG9hZGAgc2NhbGFyIHR5cGUgcmVwcmVzZW50cyBhIGZpbGUgdXBsb2FkLiAqL1xuICBVcGxvYWQ6IGFueTtcbn07XG5cblxuZXhwb3J0IHR5cGUgQXR0cnNJbnB1dCA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHZhbHVlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEF0dHJzUHJvZHVjdCA9IHtcbiAgX190eXBlbmFtZT86ICdBdHRyc1Byb2R1Y3QnO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IGVudW0gQ2FjaGVDb250cm9sU2NvcGUge1xuICBQdWJsaWMgPSAnUFVCTElDJyxcbiAgUHJpdmF0ZSA9ICdQUklWQVRFJ1xufVxuXG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0SW5wdXQgPSB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0SW5wdXQ7XG4gIGF0dHJzOiBBcnJheTxBdHRyc0lucHV0PjtcbiAgcHJpY2U6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBjcmVhdGVQcm9kdWN0OiBQcm9kdWN0VmFyaWFudDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVQcm9kdWN0QXJncyA9IHtcbiAgaW5wdXQ6IENyZWF0ZVByb2R1Y3RJbnB1dDtcbn07XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUHJvZHVjdCc7XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc2x1Zz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZGVzY3JpcHRpb246IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdElucHV0ID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGVzY3JpcHRpb246IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdFZhcmlhbnQgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUHJvZHVjdFZhcmlhbnQnO1xuICBpZDogU2NhbGFyc1snSUQnXTtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgcHJpY2U6IFNjYWxhcnNbJ0ludCddO1xuICBhdHRycz86IE1heWJlPEFycmF5PE1heWJlPEF0dHJzUHJvZHVjdD4+Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgcHJvZHVjdHM/OiBNYXliZTxBcnJheTxNYXliZTxQcm9kdWN0VmFyaWFudD4+Pjtcbn07XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogQ3JlYXRlUHJvZHVjdElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZVByb2R1Y3Q6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUHJvZHVjdFZhcmlhbnQnIH1cbiAgICAmIFBpY2s8UHJvZHVjdFZhcmlhbnQsICdpZCcgfCAncHJpY2UnPlxuICAgICYgeyBhdHRycz86IE1heWJlPEFycmF5PE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdBdHRyc1Byb2R1Y3QnIH1cbiAgICAgICYgUGljazxBdHRyc1Byb2R1Y3QsICduYW1lJyB8ICd2YWx1ZSc+XG4gICAgKT4+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIFByb2R1Y3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcHJvZHVjdHM/OiBNYXliZTxBcnJheTxNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Byb2R1Y3RWYXJpYW50JyB9XG4gICAgJiBQaWNrPFByb2R1Y3RWYXJpYW50LCAnaWQnIHwgJ3ByaWNlJz5cbiAgICAmIHsgYXR0cnM/OiBNYXliZTxBcnJheTxNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnQXR0cnNQcm9kdWN0JyB9XG4gICAgICAmIFBpY2s8QXR0cnNQcm9kdWN0LCAnbmFtZScgfCAndmFsdWUnPlxuICAgICk+Pj4gfVxuICApPj4+IH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IENyZWF0ZVByb2R1Y3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBjcmVhdGVQcm9kdWN0KCRpbnB1dDogQ3JlYXRlUHJvZHVjdElucHV0ISkge1xuICBjcmVhdGVQcm9kdWN0KGlucHV0OiAkaW5wdXQpIHtcbiAgICBpZFxuICAgIHByaWNlXG4gICAgYXR0cnMge1xuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVQcm9kdWN0TXV0YXRpb24sIENyZWF0ZVByb2R1Y3RNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVQcm9kdWN0TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlUHJvZHVjdE11dGF0aW9uLCBDcmVhdGVQcm9kdWN0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVQcm9kdWN0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlUHJvZHVjdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVByb2R1Y3RNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVQcm9kdWN0TXV0YXRpb24sIENyZWF0ZVByb2R1Y3RNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUHJvZHVjdHNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBwcm9kdWN0cyB7XG4gIHByb2R1Y3RzIHtcbiAgICBpZFxuICAgIHByaWNlXG4gICAgYXR0cnMge1xuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlUHJvZHVjdHNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VQcm9kdWN0c1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUHJvZHVjdHNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VQcm9kdWN0c1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2R1Y3RzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPihQcm9kdWN0c0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kdWN0c0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KFByb2R1Y3RzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBQcm9kdWN0c1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVByb2R1Y3RzUXVlcnk+O1xuZXhwb3J0IHR5cGUgUHJvZHVjdHNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUHJvZHVjdHNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUHJvZHVjdHNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxQcm9kdWN0c1F1ZXJ5LCBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzPjsiXSwic291cmNlUm9vdCI6IiJ9