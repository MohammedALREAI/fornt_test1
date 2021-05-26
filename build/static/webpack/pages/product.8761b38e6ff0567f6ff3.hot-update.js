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
  console;
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 21
  }, this);

  if (!data || data.products.length < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "text-center text-xl font-bold w-full h-8",
      children: " there is no item found right now "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderAllProduct__WEBPACK_IMPORTED_MODULE_2__["RenderAllProduct"], {
          data: arr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsImluZGV4IiwiaW5kZXgyIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBVUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixxQkFBd0JBLElBQXhCOztBQUNBLE1BQUlDLEtBR0MsR0FBRSxFQUhQO0FBSUFDLFNBQU87QUFDUCxNQUFJSixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNJLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUNYLE1BQUcsQ0FBQ0gsSUFBRCxJQUFTQSxJQUFJLENBQUNJLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFuQyxFQUFxQztBQUNuQyx3QkFBTztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBR0wsSUFBSSxJQUFJQSxJQUFJLENBQUNJLFFBQWhCLEVBQXlCO0FBQzNCLFFBQUlFLEdBQTZCLEdBQUMsRUFBbEM7QUFDSSxRQUFNRixRQUFRLEdBQUNKLElBQUksQ0FBQ0ksUUFBcEI7O0FBRUEsU0FBSyxJQUFJRyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxNQUFyQyxFQUE2Q0UsS0FBSyxFQUFsRCxFQUFzRDtBQUNsRCxXQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHSixRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQk4sS0FBaEIsQ0FBc0JJLE1BQXBELEVBQTRERyxNQUFNLEVBQWxFLEVBQXNFO0FBQ3BFUCxhQUFLLENBQUNRLElBQU4sQ0FBVztBQUNUQyxjQUFJLEVBQUNOLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCTixLQUFoQixDQUFzQk8sTUFBdEIsRUFBOEJFLElBRDFCO0FBRVRDLGVBQUssRUFBQ1AsUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JOLEtBQWhCLENBQXNCTyxNQUF0QixFQUE4Qkc7QUFGM0IsU0FBWDtBQUlEOztBQUVETCxTQUFHLENBQUNHLElBQUosQ0FBUztBQUNQRyxhQUFLLEVBQUNSLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCSyxLQURmO0FBRVBYLGFBQUssRUFBTEE7QUFGTyxPQUFUO0FBV04sMEJBQU87QUFBQSwrQkFDTCxxRUFBQyxrRUFBRDtBQUFrQixjQUFJLEVBQUVLO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFHUTtBQUNUO0FBQUM7O0dBdkNPVixRO1VBQzBCQyx1RTs7O0tBRDFCRCxRO0FBeUNNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0Ljg3NjFiMzhlNmZmMDU2N2Y2ZmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7dXNlUHJvZHVjdHNRdWVyeX0gZnJvbVwiLi4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsXCJcclxuaW1wb3J0IHsgUHJvcHNTaW5nbGVQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyUHJvdWRlY3RcIjtcclxuaW1wb3J0IHsgUmVuZGVyQWxsUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlckFsbFByb2R1Y3RcIjtcclxuXHJcbmludGVyZmFjZSBBdHRyc3tcclxuICBcclxuICAgIG5hbWU6c3RyaW5nLFxyXG4gICAgdmFsdWU6c3RyaW5nXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiBcclxuZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUHJvZHVjdHNRdWVyeSgpO1xyXG4gIGxldCBhdHRyczpbe1xyXG4gICAgbmFtZTpzdHJpbmdcclxuICAgIHZhbHVlOnN0cmluZ1xyXG4gIH1dfFtdID1bXVxyXG4gIGNvbnNvbGVcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIGlmKCFkYXRhIHx8IGRhdGEucHJvZHVjdHMubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgaC04XCI+IHRoZXJlIGlzIG5vIGl0ZW0gZm91bmQgcmlnaHQgbm93IDwvZGl2PlxyXG4gIH1cclxuICBpZihkYXRhIHx8IGRhdGEucHJvZHVjdHMpe1xyXG5sZXQgYXJyOkFycmF5PFByb3BzU2luZ2xlUHJvZHVjdD49W11cclxuICAgIGNvbnN0IHByb2R1Y3RzPWRhdGEucHJvZHVjdHM7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9kdWN0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBwcm9kdWN0c1tpbmRleF0uYXR0cnMubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgYXR0cnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0ubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0udmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgcHJpY2U6cHJvZHVjdHNbaW5kZXhdLnByaWNlLFxyXG4gICAgICAgICAgYXR0cnMgXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICBcclxuXHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxSZW5kZXJBbGxQcm9kdWN0IGRhdGE9e2Fycn0vPlxyXG5cclxuICA8L2Rpdj47fVxyXG59fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=