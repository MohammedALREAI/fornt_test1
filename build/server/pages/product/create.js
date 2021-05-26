module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/create.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/createProduct.tsx":
/*!**************************************!*\
  !*** ./components/createProduct.tsx ***!
  \**************************************/
/*! exports provided: CreateProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProduct", function() { return CreateProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\New folder\\frontend\\components\\createProduct.tsx";

/* eslint-disable max-len */




const CreateProduct = () => {
  const [createProductMutation, {
    data,
    loading,
    error
  }] = Object(_src_generated_graphql__WEBPACK_IMPORTED_MODULE_1__["useCreateProductMutation"])({
    // ther is missing data
    onCompleted: data => {
      const {
        createProduct: {
          price,
          id
        }
      } = data;
      alert(` the product item create success for  `);
    }
  });
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      price: 0,
      name_product: "",
      description: "",
      attrs: [{
        name: "",
        value: ""
      }]
    },
    onSubmit: values => {
      console.log("the prosuct is", values.description);
      createProductMutation({
        variables: {
          input: {
            products: {
              name: values.name_product,
              description: values.description
            },
            price: values.price,
            attrs: values.attrs
          }
        }
      });
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "bg-gray-100",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "md:grid md:grid-cols-3 md:gap-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "md:col-span-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
              className: "text-lg font-medium leading-6 text-gray-900",
              children: ["Add the product", " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "mt-1 text-sm text-gray-500",
              children: ["fill the filed to create Product", " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "mt-5 md:mt-0 md:col-span-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
              onSubmit: formik.handleSubmit,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("fieldset", {
                disabled: loading,
                "aria-busy": loading,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "grid grid-cols-6 gap-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col-span-6 sm:col-span-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                      htmlFor: "name_product",
                      className: "block text-sm font-medium text-gray-700",
                      children: "name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                      type: "text",
                      name: "name_product",
                      onChange: formik.handleChange,
                      defaultValue: formik.values.name_product,
                      id: "name_product",
                      autoComplete: "given-name" // eslint-disable-next-line max-len
                      ,
                      className: "mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col-span-6 sm:col-span-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                      htmlFor: "description",
                      className: "block text-sm font-medium text-gray-700",
                      children: "description"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                      type: "text",
                      name: "description",
                      onChange: formik.handleChange,
                      defaultValue: formik.values.description,
                      id: "description",
                      autoComplete: "given-description",
                      className: "mt-1   h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col-span-6 sm:col-span-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                      htmlFor: "price",
                      className: "block text-sm font-medium text-gray-700",
                      children: "price"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                      type: "number",
                      name: "price",
                      id: "price",
                      onChange: formik.handleChange,
                      defaultValue: formik.values.price,
                      autoComplete: "given-price",
                      className: "mt-1  h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col-span-6 sm:col-span-3 lg:col-span-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col-span-6 sm:col-span-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                      htmlFor: "name_arrts",
                      className: "block text-sm font-medium text-gray-700",
                      children: "name Arrts"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                      onChange: formik.handleChange,
                      defaultValue: formik.values.attrs[0].name,
                      type: "text",
                      name: "name_arrts",
                      id: "name_arrts",
                      autoComplete: "given-name_arrts",
                      className: "mt-1  h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "col-span-6 sm:col-span-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
                      htmlFor: "value_arrts",
                      className: "block text-sm font-medium text-gray-700",
                      children: "value Arrts"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                      onChange: formik.handleChange,
                      defaultValue: formik.values.attrs[0].value,
                      type: "text",
                      name: "value_arrts",
                      id: "value_arrts",
                      autoComplete: "given-value_arrts",
                      className: "mt-1  h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "flex justify-end mt-4 space-x-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                    type: "submit",
                    className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "create"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
                    type: "button",
                    className: "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "clean"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/product/create.tsx":
/*!**********************************!*\
  !*** ./pages/product/create.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateProductPage; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_createProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/createProduct */ "./components/createProduct.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\New folder\\frontend\\pages\\product\\create.tsx";




function CreateProductPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: " create Product pages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_createProduct__WEBPACK_IMPORTED_MODULE_1__["CreateProduct"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jcmVhdGVQcm9kdWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0L2NyZWF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdCIsImNyZWF0ZVByb2R1Y3RNdXRhdGlvbiIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VDcmVhdGVQcm9kdWN0TXV0YXRpb24iLCJvbkNvbXBsZXRlZCIsImNyZWF0ZVByb2R1Y3QiLCJwcmljZSIsImlkIiwiYWxlcnQiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJhdHRycyIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsImlucHV0IiwicHJvZHVjdHMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJDcmVhdGVQcm9kdWN0UGFnZSIsImRlZmF1bHRPcHRpb25zIiwiQ2FjaGVDb250cm9sU2NvcGUiLCJDcmVhdGVQcm9kdWN0RG9jdW1lbnQiLCJncWwiLCJiYXNlT3B0aW9ucyIsIm9wdGlvbnMiLCJBcG9sbG8iLCJQcm9kdWN0c0RvY3VtZW50IiwidXNlUHJvZHVjdHNRdWVyeSIsInVzZVByb2R1Y3RzTGF6eVF1ZXJ5Il0sIm1hcHBpbmdz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QUM3RyxRQUFNQyxPQUFPLG1DQUFPTCxjQUFQLEdBQTBCSSxXQUExQixDQUFiOztBQUNBLFNBQU9FLDJEQUFBLENBQTJEQyxnQkFBM0QsRUFBNkVGLE9BQTdFLENBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3hMVCwyQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0L2NyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdC9jcmVhdGUudHN4XCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uIH0gZnJvbSBcIi4uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm17XHJcbiAgICBuYW1lX3Byb2R1Y3Q6c3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246c3RyaW5nXHJcbiAgLFxyXG4gIHByaWNlOm51bWJlcixcclxuICBhdHRyczpbe1xyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICB2YWx1ZTpzdHJpbmdcclxuICB9XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlUHJvZHVjdCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbihcclxuICAgIHtcclxuICAgICAgLy8gdGhlciBpcyBtaXNzaW5nIGRhdGFcclxuICAgICAgb25Db21wbGV0ZWQ6KGRhdGEpPT57XHJcbiAgICAgICAgY29uc3Qge2NyZWF0ZVByb2R1Y3Q6e3ByaWNlLGlkfX0gPWRhdGFcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgICAgYWxlcnQoYCB0aGUgcHJvZHVjdCBpdGVtIGNyZWF0ZSBzdWNjZXNzIGZvciAgYCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbixcclxuICApO1xyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWs8SUZvcm0+KHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICBwcmljZTowLFxyXG4gICAgICBuYW1lX3Byb2R1Y3Q6XCJcIixcclxuICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICAgXHJcbiAgICAgYXR0cnM6W3tcclxuICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgIHZhbHVlOlwiXCJcclxuICAgICB9XVxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XHJcbmNvbnNvbGUubG9nKCBcInRoZSBwcm9zdWN0IGlzXCIsdmFsdWVzLmRlc2NyaXB0aW9uKVxyXG4gICAgICBjcmVhdGVQcm9kdWN0TXV0YXRpb24oe1xyXG4gICAgICAgIHZhcmlhYmxlczp7aW5wdXQ6e1xyXG4gICAgICAgICAgcHJvZHVjdHM6e1xyXG4gICAgICAgICAgICBuYW1lOnZhbHVlcy5uYW1lX3Byb2R1Y3QsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOnZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByaWNlOnZhbHVlcy5wcmljZSxcclxuICAgICAgICAgIGF0dHJzOnZhbHVlcy5hdHRyc1xyXG4gICAgICAgIH19XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHktNiBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdyBweC00IHB5LTUgc206cm91bmRlZC1sZyBzbTpwLTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMyBtZDpnYXAtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgQWRkIHRoZSBwcm9kdWN0e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgIGZpbGwgdGhlIGZpbGVkIHRvIGNyZWF0ZSBQcm9kdWN0e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtZDptdC0wIG1kOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiBzbTpjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVfcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZV9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1lX3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZV9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZ2l2ZW4tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgaC0xMCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHNtOmNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtaWsudmFsdWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZ2l2ZW4tZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xICAgaC0xMCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHNtOmNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Zvcm1pay52YWx1ZXMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImdpdmVuLXByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSAgaC0xMCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHNtOmNvbC1zcGFuLTMgbGc6Y29sLXNwYW4tMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHNtOmNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZV9hcnJ0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgQXJydHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zm9ybWlrLnZhbHVlcy5hdHRyc1swXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lX2FycnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lX2FycnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZ2l2ZW4tbmFtZV9hcnJ0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgIGgtMTAgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIHctZnVsbCBzaGFkb3ctc20gc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiBzbTpjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInZhbHVlX2FycnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgQXJydHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Zvcm1pay52YWx1ZXMuYXR0cnNbMF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZhbHVlX2FycnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWx1ZV9hcnJ0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImdpdmVuLXZhbHVlX2FycnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSAgaC0xMCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgbXQtNCBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsZWFuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY3JlYXRlUHJvZHVjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9kdWN0UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPiBjcmVhdGUgUHJvZHVjdCBwYWdlczwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDcmVhdGVQcm9kdWN0IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCAqIGFzIEFwb2xsbyBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gIHt9XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBgVXBsb2FkYCBzY2FsYXIgdHlwZSByZXByZXNlbnRzIGEgZmlsZSB1cGxvYWQuICovXG4gIFVwbG9hZDogYW55O1xufTtcblxuXG5leHBvcnQgdHlwZSBBdHRyc0lucHV0ID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgQXR0cnNQcm9kdWN0ID0ge1xuICBfX3R5cGVuYW1lPzogJ0F0dHJzUHJvZHVjdCc7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB2YWx1ZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgZW51bSBDYWNoZUNvbnRyb2xTY29wZSB7XG4gIFB1YmxpYyA9ICdQVUJMSUMnLFxuICBQcml2YXRlID0gJ1BSSVZBVEUnXG59XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVByb2R1Y3RJbnB1dCA9IHtcbiAgcHJvZHVjdHM6IFByb2R1Y3RJbnB1dDtcbiAgYXR0cnM6IEFycmF5PEF0dHJzSW5wdXQ+O1xuICBwcmljZTogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGNyZWF0ZVByb2R1Y3Q6IFByb2R1Y3RWYXJpYW50O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVByb2R1Y3RBcmdzID0ge1xuICBpbnB1dDogQ3JlYXRlUHJvZHVjdElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHtcbiAgX190eXBlbmFtZT86ICdQcm9kdWN0JztcbiAgaWQ6IFNjYWxhcnNbJ0lEJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzbHVnPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0SW5wdXQgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0VmFyaWFudCA9IHtcbiAgX190eXBlbmFtZT86ICdQcm9kdWN0VmFyaWFudCc7XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBwcmljZTogU2NhbGFyc1snSW50J107XG4gIGF0dHJzPzogTWF5YmU8QXJyYXk8TWF5YmU8QXR0cnNQcm9kdWN0Pj4+O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBwcm9kdWN0cz86IE1heWJlPEFycmF5PE1heWJlPFByb2R1Y3RWYXJpYW50Pj4+O1xufTtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBDcmVhdGVQcm9kdWN0SW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlUHJvZHVjdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQcm9kdWN0VmFyaWFudCcgfVxuICAgICYgUGljazxQcm9kdWN0VmFyaWFudCwgJ2lkJyB8ICdwcmljZSc+XG4gICAgJiB7IGF0dHJzPzogTWF5YmU8QXJyYXk8TWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0F0dHJzUHJvZHVjdCcgfVxuICAgICAgJiBQaWNrPEF0dHJzUHJvZHVjdCwgJ25hbWUnIHwgJ3ZhbHVlJz5cbiAgICApPj4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgUHJvZHVjdHNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBwcm9kdWN0cz86IE1heWJlPEFycmF5PE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUHJvZHVjdFZhcmlhbnQnIH1cbiAgICAmIFBpY2s8UHJvZHVjdFZhcmlhbnQsICdpZCcgfCAncHJpY2UnPlxuICAgICYgeyBhdHRycz86IE1heWJlPEFycmF5PE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdBdHRyc1Byb2R1Y3QnIH1cbiAgICAgICYgUGljazxBdHRyc1Byb2R1Y3QsICduYW1lJyB8ICd2YWx1ZSc+XG4gICAgKT4+PiB9XG4gICk+Pj4gfVxuKTtcblxuXG5leHBvcnQgY29uc3QgQ3JlYXRlUHJvZHVjdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIGNyZWF0ZVByb2R1Y3QoJGlucHV0OiBDcmVhdGVQcm9kdWN0SW5wdXQhKSB7XG4gIGNyZWF0ZVByb2R1Y3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGlkXG4gICAgcHJpY2VcbiAgICBhdHRycyB7XG4gICAgICBuYW1lXG4gICAgICB2YWx1ZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVQcm9kdWN0TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlUHJvZHVjdE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVQcm9kdWN0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVQcm9kdWN0TXV0YXRpb24sIENyZWF0ZVByb2R1Y3RNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q3JlYXRlUHJvZHVjdE11dGF0aW9uLCBDcmVhdGVQcm9kdWN0TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVByb2R1Y3REb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9kdWN0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVByb2R1Y3RNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVQcm9kdWN0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvZHVjdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVByb2R1Y3RNdXRhdGlvbiwgQ3JlYXRlUHJvZHVjdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBQcm9kdWN0c0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IHByb2R1Y3RzIHtcbiAgcHJvZHVjdHMge1xuICAgIGlkXG4gICAgcHJpY2VcbiAgICBhdHRycyB7XG4gICAgICBuYW1lXG4gICAgICB2YWx1ZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbi8qKlxuICogX191c2VQcm9kdWN0c1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVByb2R1Y3RzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VQcm9kdWN0c1F1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVByb2R1Y3RzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZHVjdHNRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KFByb2R1Y3RzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2R1Y3RzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8UHJvZHVjdHNRdWVyeSwgUHJvZHVjdHNRdWVyeVZhcmlhYmxlcz4oUHJvZHVjdHNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFByb2R1Y3RzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUHJvZHVjdHNRdWVyeT47XG5leHBvcnQgdHlwZSBQcm9kdWN0c0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQcm9kdWN0c0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBQcm9kdWN0c1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFByb2R1Y3RzUXVlcnksIFByb2R1Y3RzUXVlcnlWYXJpYWJsZXM+OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=