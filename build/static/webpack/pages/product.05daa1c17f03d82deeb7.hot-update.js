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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100    sm:py-12 mx-auto container ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "grid grid-cols-3 gap-4 mx-auto container items-center rounded-lg",
          children: products.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderProudect__WEBPACK_IMPORTED_MODULE_2__["SingleProductProduct"], {
              price: item.price,
              attrs: item.attrs
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 9
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)
    }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsIm1hcCIsIml0ZW0iLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7OztBQVdBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsMEJBQWlDQywrRUFBZ0IsRUFBakQ7QUFBQSxNQUFRQyxPQUFSLHFCQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLHFCQUFpQkEsS0FBakI7QUFBQSxNQUF3QkMsSUFBeEIscUJBQXdCQSxJQUF4Qjs7QUFDQSxNQUFJQyxLQUFrQixHQUFDLEVBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBeUJILElBQXpCO0FBQ0EsTUFBSUYsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDSyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDs7QUFDWCxNQUFHLENBQUNKLElBQUQsSUFBU0EsSUFBSSxDQUFDSyxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FBbkMsRUFBcUM7QUFDbkMsd0JBQU87QUFBSyxlQUFTLEVBQUMsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQUdOLElBQUksSUFBSUEsSUFBSSxDQUFDSyxRQUFoQixFQUF5QjtBQUMzQixRQUFJRSxHQUE2QixHQUFDLEVBQWxDO0FBQ0ksUUFBTUYsUUFBUSxHQUFDTCxJQUFJLENBQUNLLFFBQXBCO0FBR0Usd0JBQ0U7QUFBQSw2QkFDRjtBQUFLLGlCQUFTLEVBQUMseURBQWY7QUFBQSwrQkFDQTtBQUFLLG1CQUFTLEVBQUMsa0VBQWY7QUFBQSxvQkFDRUEsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLGdDQUNqQixxRUFBQyxvRUFBRDtBQUFzQixtQkFBSyxFQUFFQSxJQUFJLENBQUNDLEtBQWxDO0FBQXVELG1CQUFLLEVBQUVELElBQUksQ0FBQ1I7QUFBbkUsZUFBOENRLElBQUksQ0FBQ0UsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEaUI7QUFBQSxXQUFqQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREUscUJBREY7QUFVTDtBQUFDOztHQXhCT2YsUTtVQUMwQkMsdUU7OztLQUQxQkQsUTtBQTBCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4wNWRhYTFjMTdmMDNkODJkZWViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge3VzZVByb2R1Y3RzUXVlcnl9IGZyb21cIi4uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiXHJcbmltcG9ydCB7IFByb3BzU2luZ2xlUHJvZHVjdCwgU2luZ2xlUHJvZHVjdFByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJQcm91ZGVjdFwiO1xyXG5pbXBvcnQgeyBSZW5kZXJBbGxQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyQWxsUHJvZHVjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEF0dHJze1xyXG4gIFxyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxuICBcclxuICAgIFxyXG4gIH1cclxuIFxyXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VQcm9kdWN0c1F1ZXJ5KCk7XHJcbiAgbGV0IGF0dHJzOkFycmF5PEF0dHJzPj1bXVxyXG4gIGNvbnNvbGUubG9nKFwibXkgZGF0YSBpc1wiLGRhdGEpXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICBpZighZGF0YSB8fCBkYXRhLnByb2R1Y3RzLmxlbmd0aCA8IDEpe1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgdy1mdWxsIGgtOFwiPiB0aGVyZSBpcyBubyBpdGVtIGZvdW5kIHJpZ2h0IG5vdyA8L2Rpdj5cclxuICB9XHJcbiAgaWYoZGF0YSB8fCBkYXRhLnByb2R1Y3RzKXtcclxubGV0IGFycjpBcnJheTxQcm9wc1NpbmdsZVByb2R1Y3Q+PVtdXHJcbiAgICBjb25zdCBwcm9kdWN0cz1kYXRhLnByb2R1Y3RzO1xyXG4gICAgXHJcbiAgIFxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgICAgc206cHktMTIgbXgtYXV0byBjb250YWluZXIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNCBteC1hdXRvIGNvbnRhaW5lciBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZ1wiPlxyXG4gICAgICB7IHByb2R1Y3RzLm1hcChpdGVtPT4oXHJcbiAgICAgICAgPFNpbmdsZVByb2R1Y3RQcm9kdWN0IHByaWNlPXtpdGVtLnByaWNlfSBrZXk9e2l0ZW0uaWR9IGF0dHJzPXtpdGVtLmF0dHJzfS8+XHJcbiAgICApKX1cclxuICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgPC8+KVxyXG5cclxufX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9