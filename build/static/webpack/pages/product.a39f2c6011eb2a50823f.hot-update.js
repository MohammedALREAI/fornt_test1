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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsImluZGV4IiwiaW5kZXgyIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBVUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixxQkFBd0JBLElBQXhCOztBQUNBLE1BQUlDLEtBQWtCLEdBQUMsRUFBdkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QkgsSUFBekI7QUFDQSxNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNLLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUNYLE1BQUcsQ0FBQ0osSUFBRCxJQUFTQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFuQyxFQUFxQztBQUNuQyx3QkFBTztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBR04sSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQWhCLEVBQXlCO0FBQzNCLFFBQUlFLEdBQTZCLEdBQUMsRUFBbEM7QUFDSSxRQUFNRixRQUFRLEdBQUNMLElBQUksQ0FBQ0ssUUFBcEI7O0FBRUEsU0FBSyxJQUFJRyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxNQUFyQyxFQUE2Q0UsS0FBSyxFQUFsRCxFQUFzRDtBQUNsRCxXQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHSixRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQlAsS0FBaEIsQ0FBc0JLLE1BQXBELEVBQTRERyxNQUFNLEVBQWxFLEVBQXNFO0FBQ3BFUixhQUFLLENBQUNTLElBQU4sQ0FBVztBQUNUQyxjQUFJLEVBQUNOLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCUCxLQUFoQixDQUFzQlEsTUFBdEIsRUFBOEJFLElBRDFCO0FBRVRDLGVBQUssRUFBQ1AsUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JQLEtBQWhCLENBQXNCUSxNQUF0QixFQUE4Qkc7QUFGM0IsU0FBWDtBQUlEOztBQUVETCxTQUFHLENBQUNHLElBQUosQ0FBUztBQUNQRyxhQUFLLEVBQUNSLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCSyxLQURmO0FBRVBaLGFBQUssRUFBTEE7QUFGTyxPQUFUO0FBS0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMEJJLEdBQTFCO0FBT04sMEJBQU87QUFBQSwrQkFDTCxxRUFBQyxrRUFBRDtBQUFrQixjQUFJLEVBQUVBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFHUTtBQUNUO0FBQUM7O0dBckNPWCxRO1VBQzBCQyx1RTs7O0tBRDFCRCxRO0FBdUNNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LmEzOWYyYzYwMTFlYjJhNTA4MjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7dXNlUHJvZHVjdHNRdWVyeX0gZnJvbVwiLi4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsXCJcclxuaW1wb3J0IHsgUHJvcHNTaW5nbGVQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyUHJvdWRlY3RcIjtcclxuaW1wb3J0IHsgUmVuZGVyQWxsUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlckFsbFByb2R1Y3RcIjtcclxuXHJcbmludGVyZmFjZSBBdHRyc3tcclxuICBcclxuICAgIG5hbWU6c3RyaW5nLFxyXG4gICAgdmFsdWU6c3RyaW5nXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiBcclxuZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUHJvZHVjdHNRdWVyeSgpO1xyXG4gIGxldCBhdHRyczpBcnJheTxBdHRycz49W11cclxuICBjb25zb2xlLmxvZyhcIm15IGRhdGEgaXNcIixkYXRhKVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgaWYoIWRhdGEgfHwgZGF0YS5wcm9kdWN0cy5sZW5ndGggPCAxKXtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHctZnVsbCBoLThcIj4gdGhlcmUgaXMgbm8gaXRlbSBmb3VuZCByaWdodCBub3cgPC9kaXY+XHJcbiAgfVxyXG4gIGlmKGRhdGEgfHwgZGF0YS5wcm9kdWN0cyl7XHJcbmxldCBhcnI6QXJyYXk8UHJvcHNTaW5nbGVQcm9kdWN0Pj1bXVxyXG4gICAgY29uc3QgcHJvZHVjdHM9ZGF0YS5wcm9kdWN0cztcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2R1Y3RzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4MiA9IDA7IGluZGV4MiA8IHByb2R1Y3RzW2luZGV4XS5hdHRycy5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICBhdHRycy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTpwcm9kdWN0c1tpbmRleF0uYXR0cnNbaW5kZXgyXS5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTpwcm9kdWN0c1tpbmRleF0uYXR0cnNbaW5kZXgyXS52YWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICBwcmljZTpwcm9kdWN0c1tpbmRleF0ucHJpY2UsXHJcbiAgICAgICAgICBhdHRycyBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBhcnIgaXMgXCIsYXJyKVxyXG5cclxuICAgICAgXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8UmVuZGVyQWxsUHJvZHVjdCBkYXRhPXthcnJ9Lz5cclxuXHJcbiAgPC9kaXY+O31cclxufX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9