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

  var attrs;
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }, this);

  if (!data || data.products.length < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "text-center text-xl font-bold w-full h-8",
      children: " there is no item found right now "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }, this);
  }

  if (data || data.products) {
    var arr = [];
    var _attrs = [];
    var products = data.products;

    for (var index = 0; index < products.length; index++) {
      for (var index2 = 0; index2 < products[index].attrs.length; index2++) {
        _attrs.push({
          name: products[index].attrs[index2].name,
          value: products[index].attrs[index2].value
        });
      }

      arr.push({
        price: products[index].price,
        attrs: _attrs
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwibWVzc2FnZSIsInByb2R1Y3RzIiwibGVuZ3RoIiwiYXJyIiwiaW5kZXgiLCJpbmRleDIiLCJwdXNoIiwibmFtZSIsInZhbHVlIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBOzs7QUFVQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLDBCQUFpQ0MsK0VBQWdCLEVBQWpEO0FBQUEsTUFBUUMsT0FBUixxQkFBUUEsT0FBUjtBQUFBLE1BQWlCQyxLQUFqQixxQkFBaUJBLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLHFCQUF3QkEsSUFBeEI7O0FBQ0EsTUFBSUMsS0FBSjtBQUlBLE1BQUlILE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0csT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ1gsTUFBRyxDQUFDRixJQUFELElBQVNBLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBQW5DLEVBQXFDO0FBQ25DLHdCQUFPO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxNQUFHSixJQUFJLElBQUlBLElBQUksQ0FBQ0csUUFBaEIsRUFBeUI7QUFDM0IsUUFBSUUsR0FBNkIsR0FBQyxFQUFsQztBQUNBLFFBQUlKLE1BQUssR0FBQyxFQUFWO0FBQ0ksUUFBTUUsUUFBUSxHQUFDSCxJQUFJLENBQUNHLFFBQXBCOztBQUVBLFNBQUssSUFBSUcsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsTUFBckMsRUFBNkNFLEtBQUssRUFBbEQsRUFBc0Q7QUFDbEQsV0FBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBbEIsRUFBcUJBLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JMLEtBQWhCLENBQXNCRyxNQUFwRCxFQUE0REcsTUFBTSxFQUFsRSxFQUFzRTtBQUNwRU4sY0FBSyxDQUFDTyxJQUFOLENBQVc7QUFDVEMsY0FBSSxFQUFDTixRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQkwsS0FBaEIsQ0FBc0JNLE1BQXRCLEVBQThCRSxJQUQxQjtBQUVUQyxlQUFLLEVBQUNQLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCTCxLQUFoQixDQUFzQk0sTUFBdEIsRUFBOEJHO0FBRjNCLFNBQVg7QUFJRDs7QUFFREwsU0FBRyxDQUFDRyxJQUFKLENBQVM7QUFDUEcsYUFBSyxFQUFDUixRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQkssS0FEZjtBQUVQVixhQUFLLEVBQUxBO0FBRk8sT0FBVDtBQVdOLDBCQUFPO0FBQUEsK0JBQ0wscUVBQUMsa0VBQUQ7QUFBa0IsY0FBSSxFQUFFSTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBR1E7QUFDVDtBQUFDOztHQXZDT1QsUTtVQUMwQkMsdUU7OztLQUQxQkQsUTtBQXlDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5lMjI0OWY0MWQ1NGZjYzE1OWYxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge3VzZVByb2R1Y3RzUXVlcnl9IGZyb21cIi4uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiXHJcbmltcG9ydCB7IFByb3BzU2luZ2xlUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlclByb3VkZWN0XCI7XHJcbmltcG9ydCB7IFJlbmRlckFsbFByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJBbGxQcm9kdWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQXR0cnN7XHJcbiAgXHJcbiAgICBuYW1lOnN0cmluZyxcclxuICAgIHZhbHVlOnN0cmluZ1xyXG4gIFxyXG4gICAgXHJcbiAgfVxyXG4gXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVByb2R1Y3RzUXVlcnkoKTtcclxuICBsZXQgYXR0cnM6W3tcclxuICAgIG5hbWU6c3RyaW5nXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxuICB9XSBcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIGlmKCFkYXRhIHx8IGRhdGEucHJvZHVjdHMubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgaC04XCI+IHRoZXJlIGlzIG5vIGl0ZW0gZm91bmQgcmlnaHQgbm93IDwvZGl2PlxyXG4gIH1cclxuICBpZihkYXRhIHx8IGRhdGEucHJvZHVjdHMpe1xyXG5sZXQgYXJyOkFycmF5PFByb3BzU2luZ2xlUHJvZHVjdD49W11cclxubGV0IGF0dHJzPVtdXHJcbiAgICBjb25zdCBwcm9kdWN0cz1kYXRhLnByb2R1Y3RzO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvZHVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXgyID0gMDsgaW5kZXgyIDwgcHJvZHVjdHNbaW5kZXhdLmF0dHJzLmxlbmd0aDsgaW5kZXgyKyspIHtcclxuICAgICAgICAgIGF0dHJzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOnByb2R1Y3RzW2luZGV4XS5hdHRyc1tpbmRleDJdLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOnByb2R1Y3RzW2luZGV4XS5hdHRyc1tpbmRleDJdLnZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgIHByaWNlOnByb2R1Y3RzW2luZGV4XS5wcmljZSxcclxuICAgICAgICAgIGF0dHJzIFxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8UmVuZGVyQWxsUHJvZHVjdCBkYXRhPXthcnJ9Lz5cclxuXHJcbiAgPC9kaXY+O31cclxufX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9