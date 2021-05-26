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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex justify-between m-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "text-lg font-bold",
                    children: "name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 19
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
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex justify-between m-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "text-lg font-bold",
                    children: "value"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    children: [" ", c.value]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 12
                }, _this)]
              }, "".concat(index, "_").concat(c.name), true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZW5kZXJQcm91ZGVjdC50c3giXSwibmFtZXMiOlsiU2luZ2xlUHJvZHVjdFByb2R1Y3QiLCJwcmljZSIsImF0dHJzIiwibWFwIiwiYyIsImluZGV4IiwibmFtZSIsInZhbHVlIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVdPLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBdUM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUN2RSxzQkFFSjtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHlFQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1GQUFmO0FBQUEsZ0NBRUU7QUFBSSxtQkFBUyxFQUFDLG9EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSw0QkFBUUQsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUEsc0JBQTZEQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUdDLEtBQUg7QUFBQSxrQ0FDcEU7QUFBQSx3Q0FFQTtBQUFLLDJCQUFTLEVBQUMsMEJBQWY7QUFBQSwwQ0FDTztBQUFHLDZCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFAsZUFFTztBQUFBLG9DQUFRRCxDQUFDLENBQUNFLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGQSxlQU9BO0FBQUssMkJBQVMsRUFBQywwQkFBZjtBQUFBLDBDQUNPO0FBQUcsNkJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEUCxlQUVPO0FBQUEsb0NBQVFGLENBQUMsQ0FBQ0csS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBBO0FBQUEsMkJBQWFGLEtBQWIsY0FBc0JELENBQUMsQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEb0U7QUFBQSxhQUFWO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBNEJHSixLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDSyxDQUFELEVBQUdILEtBQUgsRUFBVztBQUNsQjtBQUFBO0FBQUEsb0NBRUE7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ087QUFBRyx5QkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURQLGVBRU87QUFBQSxnQ0FBUUcsQ0FBQyxDQUFDRixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkEsZUFPQTtBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxzQ0FDTztBQUFHLHlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFAsZUFFTztBQUFBLGdDQUFRRSxDQUFDLENBQUNELEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQQTtBQUFBLHVCQUFjRixLQUFkLGNBQXVCRyxDQUFDLENBQUNGLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhSCxTQWRBLENBNUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkk7QUF3REgsQ0F6RE07S0FBTU4sb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC42ZDkxZTUzMDIzMjAzOTkwNTdiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wc1NpbmdsZVByb2R1Y3Qge1xyXG4gXHJcbiAgIFxyXG4gICAgcHJpY2U6bnVtYmVyLFxyXG4gICAgYXR0cnM6W3tcclxuICAgICAgbmFtZTpzdHJpbmcsdmFsdWU6c3RyaW5nXHJcbiAgICB9XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlUHJvZHVjdFByb2R1Y3QgPSAoe3ByaWNlLGF0dHJzfTogUHJvcHNTaW5nbGVQcm9kdWN0KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbjxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIHB5LTYgICBzbTpweS0xMiBteC1hdXRvIGNvbnRhaW5lciBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gY29udGFpbmVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIGJnLWdyYXktNDAwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMSByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICBcclxuICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMiBmb250LWxpZ2h0IHRleHQteGwgYm9yZGVyLWdyYXktNDAwICBib3JkZXItdC0yXCI+bW9yZSBpbmZvPC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPnByaWNlPC9wPlxyXG4gICAgICAgIDxzcGFuPiB7cHJpY2V9ICQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+YXR0cjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIGZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPnthdHRycy5tYXAoKGMsaW5kZXgpPT4oXHJcbiAgICAgICAgICAgPGRpdiBrZXk9e2Ake2luZGV4fV8ke2MubmFtZX1gfT5cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5uYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ge2MubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj52YWx1ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+IHtjLnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgIDwvIGRpdj4gXHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcblxyXG4gICAgICB7YXR0cnMubWFwKCh4LGluZGV4KT0+e1xyXG4gICAgICAgICAgPCBkaXYga2V5PXtgJHtpbmRleH1fJHt4Lm5hbWV9YH0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4+IHt4Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj52YWx1ZTwvcD5cclxuICAgICAgICAgICAgICAgICA8c3Bhbj4ge3gudmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC8gZGl2PiAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICl9XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==