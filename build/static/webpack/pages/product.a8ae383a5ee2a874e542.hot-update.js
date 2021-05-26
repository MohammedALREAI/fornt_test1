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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderAllProduct__WEBPACK_IMPORTED_MODULE_2__["RenderAllProduct"], {
          data: arr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsImluZGV4IiwiaW5kZXgyIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBVUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQiwwQkFBaUNDLCtFQUFnQixFQUFqRDtBQUFBLE1BQVFDLE9BQVIscUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIscUJBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixxQkFBd0JBLElBQXhCOztBQUNBLE1BQUlDLEtBQVcsR0FBQyxFQUFoQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCSCxJQUF6QjtBQUNBLE1BQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0ssT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ1gsTUFBRyxDQUFDSixJQUFELElBQVNBLElBQUksQ0FBQ0ssUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBQW5DLEVBQXFDO0FBQ25DLHdCQUFPO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxNQUFHTixJQUFJLElBQUlBLElBQUksQ0FBQ0ssUUFBaEIsRUFBeUI7QUFDM0IsUUFBSUUsR0FBNkIsR0FBQyxFQUFsQztBQUNJLFFBQU1GLFFBQVEsR0FBQ0wsSUFBSSxDQUFDSyxRQUFwQjs7QUFFQSxTQUFLLElBQUlHLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSCxRQUFRLENBQUNDLE1BQXJDLEVBQTZDRSxLQUFLLEVBQWxELEVBQXNEO0FBQ2xELFdBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0csS0FBRCxDQUFSLENBQWdCUCxLQUFoQixDQUFzQkssTUFBcEQsRUFBNERHLE1BQU0sRUFBbEUsRUFBc0U7QUFDcEVSLGFBQUssQ0FBQ1MsSUFBTixDQUFXO0FBQ1RDLGNBQUksRUFBQ04sUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JQLEtBQWhCLENBQXNCUSxNQUF0QixFQUE4QkUsSUFEMUI7QUFFVEMsZUFBSyxFQUFDUCxRQUFRLENBQUNHLEtBQUQsQ0FBUixDQUFnQlAsS0FBaEIsQ0FBc0JRLE1BQXRCLEVBQThCRztBQUYzQixTQUFYO0FBSUQ7O0FBRURMLFNBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQ1BHLGFBQUssRUFBQ1IsUUFBUSxDQUFDRyxLQUFELENBQVIsQ0FBZ0JLLEtBRGY7QUFFUFosYUFBSyxFQUFMQTtBQUZPLE9BQVQ7QUFXTiwwQkFBTztBQUFBLCtCQUNMLHFFQUFDLGtFQUFEO0FBQWtCLGNBQUksRUFBRU07QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUdRO0FBQ1Q7QUFBQzs7R0FwQ09YLFE7VUFDMEJDLHVFOzs7S0FEMUJELFE7QUFzQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuYThhZTM4M2E1ZWUyYTg3NGU1NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHt1c2VQcm9kdWN0c1F1ZXJ5fSBmcm9tXCIuLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIlxyXG5pbXBvcnQgeyBQcm9wc1NpbmdsZVByb2R1Y3QgfSBmcm9tIFwiLi9yZW5kZXJQcm91ZGVjdFwiO1xyXG5pbXBvcnQgeyBSZW5kZXJBbGxQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyQWxsUHJvZHVjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEF0dHJze1xyXG4gIFxyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxuICBcclxuICAgIFxyXG4gIH1cclxuIFxyXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VQcm9kdWN0c1F1ZXJ5KCk7XHJcbiAgbGV0IGF0dHJzOkFycmF5PVtdXHJcbiAgY29uc29sZS5sb2coXCJteSBkYXRhIGlzXCIsZGF0YSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIGlmKCFkYXRhIHx8IGRhdGEucHJvZHVjdHMubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgaC04XCI+IHRoZXJlIGlzIG5vIGl0ZW0gZm91bmQgcmlnaHQgbm93IDwvZGl2PlxyXG4gIH1cclxuICBpZihkYXRhIHx8IGRhdGEucHJvZHVjdHMpe1xyXG5sZXQgYXJyOkFycmF5PFByb3BzU2luZ2xlUHJvZHVjdD49W11cclxuICAgIGNvbnN0IHByb2R1Y3RzPWRhdGEucHJvZHVjdHM7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9kdWN0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCBwcm9kdWN0c1tpbmRleF0uYXR0cnMubGVuZ3RoOyBpbmRleDIrKykge1xyXG4gICAgICAgICAgYXR0cnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0ubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6cHJvZHVjdHNbaW5kZXhdLmF0dHJzW2luZGV4Ml0udmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgcHJpY2U6cHJvZHVjdHNbaW5kZXhdLnByaWNlLFxyXG4gICAgICAgICAgYXR0cnMgXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICBcclxuXHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxSZW5kZXJBbGxQcm9kdWN0IGRhdGE9e2Fycn0vPlxyXG5cclxuICA8L2Rpdj47fVxyXG59fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=