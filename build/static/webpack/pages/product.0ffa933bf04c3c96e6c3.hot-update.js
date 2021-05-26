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
      console.log();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsImluZGV4IiwiaW5kZXgyIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBVUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixxQkFBd0JBLElBQXhCOztBQUNBLE1BQUlDLEtBQWtCLEdBQUMsRUFBdkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QkgsSUFBekI7QUFDQSxNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNLLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQOztBQUNYLE1BQUcsQ0FBQ0osSUFBRCxJQUFTQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFuQyxFQUFxQztBQUNuQyx3QkFBTztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBR04sSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQWhCLEVBQXlCO0FBQzNCLFFBQUlFLEdBQTZCLEdBQUMsRUFBbEM7QUFDSSxRQUFNRixRQUFRLEdBQUNMLElBQUksQ0FBQ0ssUUFBcEI7O0FBRUEsU0FBSyxJQUFJRyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxNQUFyQyxFQUE2Q0UsS0FBSyxFQUFsRCxFQUFzRDtBQUNsRCxXQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHSixRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQlAsS0FBaEIsQ0FBc0JLLE1BQXBELEVBQTRERyxNQUFNLEVBQWxFLEVBQXNFO0FBQ3BFUixhQUFLLENBQUNTLElBQU4sQ0FBVztBQUNUQyxjQUFJLEVBQUNOLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCUCxLQUFoQixDQUFzQlEsTUFBdEIsRUFBOEJFLElBRDFCO0FBRVRDLGVBQUssRUFBQ1AsUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JQLEtBQWhCLENBQXNCUSxNQUF0QixFQUE4Qkc7QUFGM0IsU0FBWDtBQUlEOztBQUVETCxTQUFHLENBQUNHLElBQUosQ0FBUztBQUNQRyxhQUFLLEVBQUNSLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCSyxLQURmO0FBRVBaLGFBQUssRUFBTEE7QUFGTyxPQUFUO0FBS0FDLGFBQU8sQ0FBQ0MsR0FBUjtBQU9OLDBCQUFPO0FBQUEsK0JBQ0wscUVBQUMsa0VBQUQ7QUFBa0IsY0FBSSxFQUFFSTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBR1E7QUFDVDtBQUFDOztHQXJDT1gsUTtVQUMwQkMsdUU7OztLQUQxQkQsUTtBQXVDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4wZmZhOTMzYmYwNGMzYzk2ZTZjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge3VzZVByb2R1Y3RzUXVlcnl9IGZyb21cIi4uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiXHJcbmltcG9ydCB7IFByb3BzU2luZ2xlUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlclByb3VkZWN0XCI7XHJcbmltcG9ydCB7IFJlbmRlckFsbFByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJBbGxQcm9kdWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQXR0cnN7XHJcbiAgXHJcbiAgICBuYW1lOnN0cmluZyxcclxuICAgIHZhbHVlOnN0cmluZ1xyXG4gIFxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVByb2R1Y3RzUXVlcnkoKTtcclxuICBsZXQgYXR0cnM6QXJyYXk8QXR0cnM+PVtdXHJcbiAgY29uc29sZS5sb2coXCJteSBkYXRhIGlzXCIsZGF0YSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIGlmKCFkYXRhIHx8IGRhdGEucHJvZHVjdHMubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgaC04XCI+IHRoZXJlIGlzIG5vIGl0ZW0gZm91bmQgcmlnaHQgbm93IDwvZGl2PlxyXG4gIH1cclxuICBpZihkYXRhIHx8IGRhdGEucHJvZHVjdHMpe1xyXG5sZXQgYXJyOkFycmF5PFByb3BzU2luZ2xlUHJvZHVjdD49W11cclxuICAgIGNvbnN0IHByb2R1Y3RzPWRhdGEucHJvZHVjdHM7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9kdWN0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBwcm9kdWN0c1tpbmRleF0uYXR0cnMubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgYXR0cnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0ubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0udmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgcHJpY2U6cHJvZHVjdHNbaW5kZXhdLnByaWNlLFxyXG4gICAgICAgICAgYXR0cnMgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coKVxyXG5cclxuICAgICAgXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8UmVuZGVyQWxsUHJvZHVjdCBkYXRhPXthcnJ9Lz5cclxuXHJcbiAgPC9kaXY+O31cclxufX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9