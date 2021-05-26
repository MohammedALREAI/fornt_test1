webpackHotUpdate_N_E("pages/product",{

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
    className: "min-h-screen bg-gray-100   mx-auto container ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-row justify-between mx-auto container items-center rounded-lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: " bg-gray-400 justify-center items-center border-1 rounded-lg border-gray-300",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          className: "m-2 font-light text-xl border-gray-400  border-t-2",
          children: "more info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: [" ", price, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "attr"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "text-lg font-bold flex justify-between m-2",
            children: attrs.map(function (c, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex justify-between m-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                      className: "text-lg font-bold",
                      children: "name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 14
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      children: [" ", c.name]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 19
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 14
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                      className: "text-lg font-bold",
                      children: "value"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 18
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      children: [" ", c.value]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 19
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 18
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 12
                }, _this)
              }, "".concat(index, "_").concat(c.name), false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 12
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }, _this), attrs.map(function (x, index) {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: "name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 18
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 18
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: "value"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 18
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.value]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 18
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 11
            }, _this)]
          }, "".concat(index, "_").concat(x.name), true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZW5kZXJQcm91ZGVjdC50c3giXSwibmFtZXMiOlsiU2luZ2xlUHJvZHVjdFByb2R1Y3QiLCJwcmljZSIsImF0dHJzIiwibWFwIiwiYyIsImluZGV4IiwibmFtZSIsInZhbHVlIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVdPLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBdUM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUN2RSxzQkFFSjtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHlFQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDhFQUFmO0FBQUEsZ0NBRUU7QUFBSSxtQkFBUyxFQUFDLG9EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSw0QkFBUUQsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUEsc0JBQTZEQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUdDLEtBQUg7QUFBQSxrQ0FDcEU7QUFBQSx1Q0FDQTtBQUFLLDJCQUFTLEVBQUMsMEJBQWY7QUFBQSwwQ0FDRTtBQUFBLDRDQUNBO0FBQUcsK0JBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEQSxlQUVLO0FBQUEsc0NBQVFELENBQUMsQ0FBQ0UsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBS007QUFBQSw0Q0FDQTtBQUFHLCtCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREEsZUFFQztBQUFBLHNDQUFRRixDQUFDLENBQUNHLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSwyQkFBYUYsS0FBYixjQUFzQkQsQ0FBQyxDQUFDRSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURvRTtBQUFBLGFBQVY7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsRUE0QkdKLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNLLENBQUQsRUFBR0gsS0FBSCxFQUFXO0FBQ2xCO0FBQUE7QUFBQSxvQ0FFQTtBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxzQ0FDTztBQUFHLHlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFAsZUFFTztBQUFBLGdDQUFRRyxDQUFDLENBQUNGLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxlQU9BO0FBQUssdUJBQVMsRUFBQywwQkFBZjtBQUFBLHNDQUNPO0FBQUcseUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUCxlQUVPO0FBQUEsZ0NBQVFFLENBQUMsQ0FBQ0QsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBBO0FBQUEsdUJBQWNGLEtBQWQsY0FBdUJHLENBQUMsQ0FBQ0YsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFILFNBZEEsQ0E1Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSTtBQXdESCxDQXpETTtLQUFNTixvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjFjMjgwMzBlMWI2ZTcwMGEyYmM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzU2luZ2xlUHJvZHVjdCB7XHJcbiBcclxuICAgXHJcbiAgICBwcmljZTpudW1iZXIsXHJcbiAgICBhdHRyczpbe1xyXG4gICAgICBuYW1lOnN0cmluZyx2YWx1ZTpzdHJpbmdcclxuICAgIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaW5nbGVQcm9kdWN0UHJvZHVjdCA9ICh7cHJpY2UsYXR0cnN9OiBQcm9wc1NpbmdsZVByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgICBteC1hdXRvIGNvbnRhaW5lciBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gY29udGFpbmVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1ncmF5LTQwMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTEgcm91bmRlZC1sZyBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgXHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJtLTIgZm9udC1saWdodCB0ZXh0LXhsIGJvcmRlci1ncmF5LTQwMCAgYm9yZGVyLXQtMlwiPm1vcmUgaW5mbzwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5wcmljZTwvcD5cclxuICAgICAgICA8c3Bhbj4ge3ByaWNlfSAkPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPmF0dHI8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj57YXR0cnMubWFwKChjLGluZGV4KT0+KFxyXG4gICAgICAgICAgIDxkaXYga2V5PXtgJHtpbmRleH1fJHtjLm5hbWV9YH0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiB7Yy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj52YWx1ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+IHtjLnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG5cclxuICAgICAge2F0dHJzLm1hcCgoeCxpbmRleCk9PntcclxuICAgICAgICAgIDwgZGl2IGtleT17YCR7aW5kZXh9XyR7eC5uYW1lfWB9PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5uYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPiB7eC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+dmFsdWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4+IHt4LnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvIGRpdj4gICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICApfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBcclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=