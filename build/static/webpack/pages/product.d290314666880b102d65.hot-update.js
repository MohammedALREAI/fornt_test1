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
      console.log("the arr is ");
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderAllProduct__WEBPACK_IMPORTED_MODULE_2__["RenderAllProduct"], {
          data: arr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsImluZGV4IiwiaW5kZXgyIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBVUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixxQkFBd0JBLElBQXhCOztBQUNBLE1BQUlDLEtBQWtCLEdBQUMsRUFBdkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QkgsSUFBekI7QUFDQSxNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNLLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUNYLE1BQUcsQ0FBQ0osSUFBRCxJQUFTQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFuQyxFQUFxQztBQUNuQyx3QkFBTztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBR04sSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQWhCLEVBQXlCO0FBQzNCLFFBQUlFLEdBQTZCLEdBQUMsRUFBbEM7QUFDSSxRQUFNRixRQUFRLEdBQUNMLElBQUksQ0FBQ0ssUUFBcEI7O0FBRUEsU0FBSyxJQUFJRyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxNQUFyQyxFQUE2Q0UsS0FBSyxFQUFsRCxFQUFzRDtBQUNsRCxXQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHSixRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQlAsS0FBaEIsQ0FBc0JLLE1BQXBELEVBQTRERyxNQUFNLEVBQWxFLEVBQXNFO0FBQ3BFUixhQUFLLENBQUNTLElBQU4sQ0FBVztBQUNUQyxjQUFJLEVBQUNOLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCUCxLQUFoQixDQUFzQlEsTUFBdEIsRUFBOEJFLElBRDFCO0FBRVRDLGVBQUssRUFBQ1AsUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JQLEtBQWhCLENBQXNCUSxNQUF0QixFQUE4Qkc7QUFGM0IsU0FBWDtBQUlEOztBQUVETCxTQUFHLENBQUNHLElBQUosQ0FBUztBQUNQRyxhQUFLLEVBQUNSLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCSyxLQURmO0FBRVBaLGFBQUssRUFBTEE7QUFGTyxPQUFUO0FBS0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFPTiwwQkFBTztBQUFBLCtCQUNMLHFFQUFDLGtFQUFEO0FBQWtCLGNBQUksRUFBRUk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUdRO0FBQ1Q7QUFBQzs7R0FyQ09YLFE7VUFDMEJDLHVFOzs7S0FEMUJELFE7QUF1Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuZDI5MDMxNDY2Njg4MGIxMDJkNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHt1c2VQcm9kdWN0c1F1ZXJ5fSBmcm9tXCIuLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIlxyXG5pbXBvcnQgeyBQcm9wc1NpbmdsZVByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJQcm91ZGVjdFwiO1xyXG5pbXBvcnQgeyBSZW5kZXJBbGxQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyQWxsUHJvZHVjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEF0dHJze1xyXG4gIFxyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxuICBcclxuICAgIFxyXG4gIH1cclxuIFxyXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VQcm9kdWN0c1F1ZXJ5KCk7XHJcbiAgbGV0IGF0dHJzOkFycmF5PEF0dHJzPj1bXVxyXG4gIGNvbnNvbGUubG9nKFwibXkgZGF0YSBpc1wiLGRhdGEpXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICBpZighZGF0YSB8fCBkYXRhLnByb2R1Y3RzLmxlbmd0aCA8IDEpe1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgdy1mdWxsIGgtOFwiPiB0aGVyZSBpcyBubyBpdGVtIGZvdW5kIHJpZ2h0IG5vdyA8L2Rpdj5cclxuICB9XHJcbiAgaWYoZGF0YSB8fCBkYXRhLnByb2R1Y3RzKXtcclxubGV0IGFycjpBcnJheTxQcm9wc1NpbmdsZVByb2R1Y3Q+PVtdXHJcbiAgICBjb25zdCBwcm9kdWN0cz1kYXRhLnByb2R1Y3RzO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvZHVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgcHJvZHVjdHNbaW5kZXhdLmF0dHJzLmxlbmd0aDsgaW5kZXgyKyspIHtcclxuICAgICAgICAgIGF0dHJzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOnByb2R1Y3RzW2luZGV4XS5hdHRyc1tpbmRleDJdLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOnByb2R1Y3RzW2luZGV4XS5hdHRyc1tpbmRleDJdLnZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIHByaWNlOnByb2R1Y3RzW2luZGV4XS5wcmljZSxcclxuICAgICAgICAgIGF0dHJzIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGFyciBpcyBcIilcclxuXHJcbiAgICAgIFxyXG5cclxuICBcclxuXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPFJlbmRlckFsbFByb2R1Y3QgZGF0YT17YXJyfS8+XHJcblxyXG4gIDwvZGl2Pjt9XHJcbn19XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==