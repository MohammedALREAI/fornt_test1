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
    return products.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 py-6   sm:py-12 mx-auto container ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-row justify-between mx-auto container items-center rounded-lg",
          children: [console.log, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderProudect__WEBPACK_IMPORTED_MODULE_2__["SingleProductProduct"], {
            price: item.price,
            attrs: item.attrs
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsIm1hcCIsIml0ZW0iLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7O0FBV0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixxQkFBd0JBLElBQXhCOztBQUNBLE1BQUlDLEtBQWtCLEdBQUMsRUFBdkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QkgsSUFBekI7QUFDQSxNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNLLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUNYLE1BQUcsQ0FBQ0osSUFBRCxJQUFTQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFuQyxFQUFxQztBQUNuQyx3QkFBTztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBR04sSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQWhCLEVBQXlCO0FBQzNCLFFBQUlFLEdBQTZCLEdBQUMsRUFBbEM7QUFDSSxRQUFNRixRQUFRLEdBQUNMLElBQUksQ0FBQ0ssUUFBcEI7QUFJRSxXQUFPQSxRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsMEJBQ3hCO0FBQUssaUJBQVMsRUFBQyw2REFBZjtBQUFBLCtCQUNBO0FBQUssbUJBQVMsRUFBQyx5RUFBZjtBQUFBLHFCQUNHUCxPQUFPLENBQUNDLEdBRFgsZUFFRSxxRUFBQyxvRUFBRDtBQUFzQixpQkFBSyxFQUFFTSxJQUFJLENBQUNDLEtBQWxDO0FBQXVELGlCQUFLLEVBQUVELElBQUksQ0FBQ1I7QUFBbkUsYUFBOENRLElBQUksQ0FBQ0UsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCO0FBQUEsS0FBakIsQ0FBUDtBQVFMO0FBQUM7O0dBdkJPZixRO1VBQzBCQyx1RTs7O0tBRDFCRCxRO0FBeUJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjBiOTUwYmY3YzE2Mzc0MjUxYzUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7dXNlUHJvZHVjdHNRdWVyeX0gZnJvbVwiLi4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsXCJcclxuaW1wb3J0IHsgUHJvcHNTaW5nbGVQcm9kdWN0LCBTaW5nbGVQcm9kdWN0UHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlclByb3VkZWN0XCI7XHJcbmltcG9ydCB7IFJlbmRlckFsbFByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJBbGxQcm9kdWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQXR0cnN7XHJcbiAgXHJcbiAgICBuYW1lOnN0cmluZyxcclxuICAgIHZhbHVlOnN0cmluZ1xyXG4gIFxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVByb2R1Y3RzUXVlcnkoKTtcclxuICBsZXQgYXR0cnM6QXJyYXk8QXR0cnM+PVtdXHJcbiAgY29uc29sZS5sb2coXCJteSBkYXRhIGlzXCIsZGF0YSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIGlmKCFkYXRhIHx8IGRhdGEucHJvZHVjdHMubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgaC04XCI+IHRoZXJlIGlzIG5vIGl0ZW0gZm91bmQgcmlnaHQgbm93IDwvZGl2PlxyXG4gIH1cclxuICBpZihkYXRhIHx8IGRhdGEucHJvZHVjdHMpe1xyXG5sZXQgYXJyOkFycmF5PFByb3BzU2luZ2xlUHJvZHVjdD49W11cclxuICAgIGNvbnN0IHByb2R1Y3RzPWRhdGEucHJvZHVjdHM7XHJcbiAgICBcclxuICAgXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gcHJvZHVjdHMubWFwKGl0ZW09PihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcHktNiAgIHNtOnB5LTEyIG14LWF1dG8gY29udGFpbmVyIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gY29udGFpbmVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAge2NvbnNvbGUubG9nfVxyXG4gICAgICAgIDxTaW5nbGVQcm9kdWN0UHJvZHVjdCBwcmljZT17aXRlbS5wcmljZX0ga2V5PXtpdGVtLmlkfSBhdHRycz17aXRlbS5hdHRyc30vPlxyXG4gICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgKSlcclxuXHJcbn19XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==