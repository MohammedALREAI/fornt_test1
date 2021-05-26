module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/products.tsx":
/*!*********************************!*\
  !*** ./components/products.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _renderProudect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProudect */ "./components/renderProudect.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\New folder\\frontend\\components\\products.tsx";






function Products() {
  const {
    loading,
    error,
    data
  } = Object(_src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useProductsQuery"])();
  let attrs = [];
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
    let arr = [];
    const products = data.products;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100   mx-auto container ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "grid grid-cols-3 gap-4 mx-auto container items-center rounded-lg",
          children: products.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_renderProudect__WEBPACK_IMPORTED_MODULE_2__["SingleProductProduct"], {
            price: item.price,
            attrs: item.attrs
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }, this))
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

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/renderProudect.tsx":
/*!***************************************!*\
  !*** ./components/renderProudect.tsx ***!
  \***************************************/
/*! exports provided: SingleProductProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductProduct", function() { return SingleProductProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\New folder\\frontend\\components\\renderProudect.tsx";


const SingleProductProduct = ({
  price,
  attrs
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: " bg-gray-100   mx-auto container ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: " mx-auto container items-center rounded-lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: " bg-gray-400 justify-center items-center border-1 rounded-lg border-gray-300",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          className: "m-2 font-light text-xl border-gray-400  border-t-2",
          children: "more info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: [" ", price, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex justify-between m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "text-lg font-bold",
            children: "attr"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "text-lg font-bold flex justify-between m-2",
            children: attrs.map((c, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
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
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    children: [" ", c.name]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "text-lg font-bold",
                    children: "value"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 18
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    children: [" ", c.value]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 18
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 12
              }, undefined)
            }, `${index}_${c.name}`, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 12
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }, undefined), attrs.map((x, index) => {
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
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 18
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: "value"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 18
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: [" ", x.value]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 18
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 11
            }, undefined)]
          }, `${index}_${x.name}`, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 1
  }, undefined);
};

/***/ }),

/***/ "./pages/product/index.tsx":
/*!*********************************!*\
  !*** ./pages/product/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductPage; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/products */ "./components/products.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\New folder\\frontend\\pages\\product\\index.tsx";




function ProductPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Product pages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_products__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: CacheControlScope, CreateProductDocument, useCreateProductMutation, ProductsDocument, useProductsQuery, useProductsLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheControlScope", function() { return CacheControlScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductDocument", function() { return CreateProductDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateProductMutation", function() { return useCreateProductMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDocument", function() { return ProductsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductsQuery", function() { return useProductsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductsLazyQuery", function() { return useProductsLazyQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

let CacheControlScope;

(function (CacheControlScope) {
  CacheControlScope["Public"] = "PUBLIC";
  CacheControlScope["Private"] = "PRIVATE";
})(CacheControlScope || (CacheControlScope = {}));

const CreateProductDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation createProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    price
    attrs {
      name
      value
    }
  }
}
    `;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateProductMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateProductDocument, options);
}
const ProductsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query products {
  products {
    id
    price
    attrs {
      name
      value
    }
  }
}
    `;
/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */

function useProductsQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](ProductsDocument, options);
}
function useProductsLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](ProductsDocument, options);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZW5kZXJQcm91ZGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUHJvZHVjdHNRdWVyeSIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsImFyciIsIm1hcCIsIml0ZW0iLCJwcmljZSIsImlkIiwiU2luZ2xlUHJvZHVjdFByb2R1Y3QiLCJjIiwiaW5kZXgiLCJuYW1lIiwidmFsdWUiLCJ4IiwiUHJvZHVjdFBhZ2UiLCJkZWZhdWx0T3B0aW9ucyIsIkNhY2hlQ29udHJvbFNjb3BlIiwiQ3JlYXRlUHJvZHVjdERvY3VtZW50IiwiZ3FsIiwidXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uIiwiYmFzZU9wdGlvbnMiLCJvcHRpb25zIiwiQXBvbGxvIiwiUHJvZHVjdHNEb2N1bWVudCIsInVzZVByb2R1Y3RzTGF6eVF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FYTzs7QUFjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0Msd0JBQVQsQ0FBa0NDLFdBQWxDLEVBQW1JO0FBQ2xJLFFBQU1DLE9BQU8sbUNBQU9OLGNBQVAsR0FBMEJLLFdBQTFCLENBQWI7O0FBQ0EsU0FBT0UsMERBQUEsQ0FBMEVMLHFCQUExRSxFQUFpR0ksT0FBakcsQ0FBUDtBQUNEO0FBSUEsTUFBTUUsZ0JBQWdCLEdBQUdMLGtEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FYTztBQWFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTdEIsZ0JBQVQsQ0FBMEJ3QixXQUExQixFQUF3RztBQUN2RyxRQUFNQyxPQUFPLG1DQUFPTixjQUFQLEdBQTBCSyxXQUExQixDQUFiOztBQUNBLFNBQU9FLHVEQUFBLENBQXVEQyxnQkFBdkQsRUFBeUVGLE9BQXpFLENBQVA7QUFDRDtBQUNBLFNBQVNHLG9CQUFULENBQThCSixXQUE5QixFQUFnSDtBQUM3RyxRQUFNQyxPQUFPLG1DQUFPTixjQUFQLEdBQTBCSyxXQUExQixDQUFiOztBQUNBLFNBQU9FLDJEQUFBLENBQTJEQyxnQkFBM0QsRUFBNkVGLE9BQTdFLENBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3hMVCwyQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0L2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHt1c2VQcm9kdWN0c1F1ZXJ5fSBmcm9tXCIuLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIlxyXG5pbXBvcnQgeyBQcm9wc1NpbmdsZVByb2R1Y3QsIFNpbmdsZVByb2R1Y3RQcm9kdWN0IH0gZnJvbSBcIi4vcmVuZGVyUHJvdWRlY3RcIjtcclxuaW1wb3J0IHsgUmVuZGVyQWxsUHJvZHVjdCB9IGZyb20gXCIuL3JlbmRlckFsbFByb2R1Y3RcIjtcclxuXHJcbmludGVyZmFjZSBBdHRyc3tcclxuICBcclxuICAgIG5hbWU6c3RyaW5nLFxyXG4gICAgdmFsdWU6c3RyaW5nXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiBcclxuZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUHJvZHVjdHNRdWVyeSgpO1xyXG4gIGxldCBhdHRyczpBcnJheTxBdHRycz49W11cclxuICBjb25zb2xlLmxvZyhcIm15IGRhdGEgaXNcIixkYXRhKVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgaWYoIWRhdGEgfHwgZGF0YS5wcm9kdWN0cy5sZW5ndGggPCAxKXtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIHctZnVsbCBoLThcIj4gdGhlcmUgaXMgbm8gaXRlbSBmb3VuZCByaWdodCBub3cgPC9kaXY+XHJcbiAgfVxyXG4gIGlmKGRhdGEgfHwgZGF0YS5wcm9kdWN0cyl7XHJcbmxldCBhcnI6QXJyYXk8UHJvcHNTaW5nbGVQcm9kdWN0Pj1bXVxyXG4gICAgY29uc3QgcHJvZHVjdHM9ZGF0YS5wcm9kdWN0cztcclxuICAgIFxyXG4gICBcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwICAgbXgtYXV0byBjb250YWluZXIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNCBteC1hdXRvIGNvbnRhaW5lciBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZ1wiPlxyXG4gICAgICB7IHByb2R1Y3RzLm1hcChpdGVtPT4oXHJcbiAgICAgICAgPFNpbmdsZVByb2R1Y3RQcm9kdWN0IHByaWNlPXtpdGVtLnByaWNlfSBrZXk9e2l0ZW0uaWR9IGF0dHJzPXtpdGVtLmF0dHJzfS8+XHJcbiAgICApKX1cclxuICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgPC8+KVxyXG5cclxufX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzU2luZ2xlUHJvZHVjdCB7XHJcbiBcclxuICAgXHJcbiAgICBwcmljZTpudW1iZXIsXHJcbiAgICBhdHRyczpbe1xyXG4gICAgICBuYW1lOnN0cmluZyx2YWx1ZTpzdHJpbmdcclxuICAgIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaW5nbGVQcm9kdWN0UHJvZHVjdCA9ICh7cHJpY2UsYXR0cnN9OiBQcm9wc1NpbmdsZVByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuPGRpdiBjbGFzc05hbWU9XCIgYmctZ3JheS0xMDAgICBteC1hdXRvIGNvbnRhaW5lciBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIiBteC1hdXRvIGNvbnRhaW5lciBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZ1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctZ3JheS00MDAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0xIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgIFxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibS0yIGZvbnQtbGlnaHQgdGV4dC14bCBib3JkZXItZ3JheS00MDAgIGJvcmRlci10LTJcIj5tb3JlIGluZm88L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+cHJpY2U8L3A+XHJcbiAgICAgICAgPHNwYW4+IHtwcmljZX0gJDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5hdHRyPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+e2F0dHJzLm1hcCgoYyxpbmRleCk9PihcclxuICAgICAgICAgICA8ZGl2IGtleT17YCR7aW5kZXh9XyR7Yy5uYW1lfWB9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0yXCI+XHJcbiAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5uYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ge2MubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+dmFsdWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiB7Yy52YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuXHJcbiAgICAgIHthdHRycy5tYXAoKHgsaW5kZXgpPT57XHJcbiAgICAgICAgICA8IGRpdiBrZXk9e2Ake2luZGV4fV8ke3gubmFtZX1gfT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+bmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICA8c3Bhbj4ge3gubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtLTJcIj5cclxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPnZhbHVlPC9wPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPiB7eC52YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8LyBkaXY+ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgKX1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qcm9kdWN0IHBhZ2VzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFByb2R1Y3RzIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCAqIGFzIEFwb2xsbyBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gIHt9XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBgVXBsb2FkYCBzY2FsYXIgdHlwZSByZXByZXNlbnRzIGEgZmlsZSB1cGxvYWQuICovXG4gIFVwbG9hZDogYW55O1xufTtcblxuXG5leHBvcnQgdHlwZSBBdHRyc0lucHV0ID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgQXR0cnNQcm9kdWN0ID0ge1xuICBfX3R5cGVuYW1lPzogJ0F0dHJzUHJvZHVjdCc7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB2YWx1ZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgZW51bSBDYWNoZUNvbnRyb2xTY29wZSB7XG4gIFB1YmxpYyA9ICdQVUJMSUMnLFxuICBQcml2YXRlID0gJ1BSSVZBVEUnXG59XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVByb2R1Y3RJbnB1dCA9IHtcbiAgcHJvZHVjdHM6IFByb2R1Y3RJbnB1dDtcbiAgYXR0cnM6IEFycmF5PEF0dHJzSW5wdXQ+O1xuICBwcmljZTogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGNyZWF0ZVByb2R1Y3Q6IFByb2R1Y3RWYXJpYW50O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVByb2R1Y3RBcmdzID0ge1xuICBpbnB1dDogQ3JlYXRlUHJvZHVjdElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHtcbiAgX190eXBlbmFtZT86ICdQcm9kdWN0JztcbiAgaWQ6IFNjYWxhcnNbJ0lEJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzbHVnPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0SW5wdXQgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0VmFyaWFudCA9IHtcbiAgX190eXBlbmFtZT86ICdQcm9kdWN0VmFyaWFudCc7XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBwcmljZTogU2NhbGFyc1snSW50J107XG4gIGF0dHJzPzogTWF5YmU8QXJyYXk8TWF5YmU8QXR0cnNQcm9kdWN0Pj4+O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBwcm9kdWN0cz86IE1heWJlPEFycmF5PE1heWJlPFByb2R1Y3RWYXJpYW50Pj4+O1xufTtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBDcmVhdGVQcm9kdWN0SW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlUHJvZHVjdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQcm9kdWN0VmFyaWFudCcgfVxuICAgICYgUGljazxQcm9kdWN0VmFyaWFudCwgJ2lkJyB8ICdwcmljZSc+XG4gICAgJiB7IGF0dHJzPzogTWF5YmU8QXJyYXk8TWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0F0dHJzUHJvZHVjdCcgfVxuICAgICAgJiBQaWNrPEF0dHJzUHJvZHVjdCwgJ25hbWUnIHwgJ3ZhbHVlJz5cbiAgICApPj4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgUHJvZHVjdHNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBwcm9kdWN0cz86IE1heWJlPEFycmF5PE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUHJvZHVjdFZhcmlhbnQnIH1cbiAgICAmIFBpY2s8UHJvZHVjdFZhcmlhbnQsICdpZCcgfCAncHJpY2UnPlxuICAgICYgeyBhdHRycz86IE1heWJlPEFycmF5PE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdBdHRyc1Byb2R1Y3QnIH1cbiAgICAgICYgUGljazxBdHRyc1Byb2R1Y3QsICduYW1lJyB8ICd2YWx1ZSc+XG4gICAgKT4+PiB9XG4gICk+Pj4gfVxuKTtcblxuXG5leHBvcnQgY29uc3QgQ3JlYXRlUHJvZHVjdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIGNyZWF0ZVByb2R1Y3QoJGlucHV0OiBDcmVhdGVQcm9kdWN0SW5wdXQhKSB7XG4gIGNyZWF0ZVByb2R1Y3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGlkXG4gICAgcHJpY2VcbiAgICBhdHRycyB7XG4gICAgICBuYW1lXG4gICAgICB2YWx1ZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVQcm9kdWN0TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlUHJvZHVjdE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVQcm9kdWN0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVQcm9kdWN0TXV0YXRpb24sIENyZWF0ZVByb2R1Y3RNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q3JlYXRlUHJvZHVjdE11dGF0aW9uLCBDcmVhdGVQcm9kdWN0TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVByb2R1Y3REb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVByb2R1Y3RNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVQcm9kdWN0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBQcm9kdWN0c0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IHByb2R1Y3RzIHtcbiAgcHJvZHVjdHMge1xuICAgIGlkXG4gICAgcHJpY2VcbiAgICBhdHRycyB7XG4gICAgICBuYW1lXG4gICAgICB2YWx1ZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbi8qKlxuICogX191c2VQcm9kdWN0c1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVByb2R1Y3RzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VQcm9kdWN0c1F1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVByb2R1Y3RzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZHVjdHNRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KFByb2R1Y3RzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2R1Y3RzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8UHJvZHVjdHNRdWVyeSwgUHJvZHVjdHNRdWVyeVZhcmlhYmxlcz4oUHJvZHVjdHNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFByb2R1Y3RzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUHJvZHVjdHNRdWVyeT47XG5leHBvcnQgdHlwZSBQcm9kdWN0c0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQcm9kdWN0c0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBQcm9kdWN0c1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==