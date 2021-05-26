webpackHotUpdate_N_E("pages/product",{

/***/ "./components/products.tsx":
/*!*********************************!*\
  !*** ./components/products.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/renderAllProduct.tsx":
false,

/***/ "./components/renderProudect.tsx":
false,

/***/ "./node_modules/@apollo/client/cache/core/cache.js":
false,

/***/ "./node_modules/@apollo/client/cache/core/types/Cache.js":
false,

/***/ "./node_modules/@apollo/client/cache/core/types/common.js":
false,

/***/ "./node_modules/@apollo/client/cache/index.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/entityStore.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/fixPolyfills.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/helpers.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/policies.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/types.js":
false,

/***/ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js":
false,

/***/ "./node_modules/@apollo/client/core/ApolloClient.js":
false,

/***/ "./node_modules/@apollo/client/core/LocalState.js":
false,

/***/ "./node_modules/@apollo/client/core/ObservableQuery.js":
false,

/***/ "./node_modules/@apollo/client/core/QueryInfo.js":
false,

/***/ "./node_modules/@apollo/client/core/QueryManager.js":
false,

/***/ "./node_modules/@apollo/client/core/Reobserver.js":
false,

/***/ "./node_modules/@apollo/client/core/index.js":
false,

/***/ "./node_modules/@apollo/client/core/networkStatus.js":
false,

/***/ "./node_modules/@apollo/client/core/types.js":
false,

/***/ "./node_modules/@apollo/client/errors/index.js":
false,

/***/ "./node_modules/@apollo/client/index.js":
false,

/***/ "./node_modules/@apollo/client/link/core/ApolloLink.js":
false,

/***/ "./node_modules/@apollo/client/link/core/concat.js":
false,

/***/ "./node_modules/@apollo/client/link/core/empty.js":
false,

/***/ "./node_modules/@apollo/client/link/core/execute.js":
false,

/***/ "./node_modules/@apollo/client/link/core/from.js":
false,

/***/ "./node_modules/@apollo/client/link/core/index.js":
false,

/***/ "./node_modules/@apollo/client/link/core/split.js":
false,

/***/ "./node_modules/@apollo/client/link/core/types.js":
false,

/***/ "./node_modules/@apollo/client/link/http/HttpLink.js":
false,

/***/ "./node_modules/@apollo/client/link/http/checkFetcher.js":
false,

/***/ "./node_modules/@apollo/client/link/http/createHttpLink.js":
false,

/***/ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js":
false,

/***/ "./node_modules/@apollo/client/link/http/index.js":
false,

/***/ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
false,

/***/ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js":
false,

/***/ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
false,

/***/ "./node_modules/@apollo/client/link/http/selectURI.js":
false,

/***/ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/createOperation.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/fromError.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/fromPromise.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/index.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/throwServerError.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/toPromise.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/transformOperation.js":
false,

/***/ "./node_modules/@apollo/client/link/utils/validateOperation.js":
false,

/***/ "./node_modules/@apollo/client/node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/@apollo/client/node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js":
false,

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@apollo/client/react/context/ApolloConsumer.js":
false,

/***/ "./node_modules/@apollo/client/react/context/ApolloContext.js":
false,

/***/ "./node_modules/@apollo/client/react/context/ApolloProvider.js":
false,

/***/ "./node_modules/@apollo/client/react/context/index.js":
false,

/***/ "./node_modules/@apollo/client/react/data/MutationData.js":
false,

/***/ "./node_modules/@apollo/client/react/data/OperationData.js":
false,

/***/ "./node_modules/@apollo/client/react/data/QueryData.js":
false,

/***/ "./node_modules/@apollo/client/react/data/SubscriptionData.js":
false,

/***/ "./node_modules/@apollo/client/react/data/index.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/index.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/useApolloClient.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/useMutation.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/useQuery.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/useReactiveVar.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/useSubscription.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js":
false,

/***/ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js":
false,

/***/ "./node_modules/@apollo/client/react/index.js":
false,

/***/ "./node_modules/@apollo/client/react/parser/index.js":
false,

/***/ "./node_modules/@apollo/client/react/types/types.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/arrays.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/canUse.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/cloneDeep.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/compact.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/environment.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/errorHandling.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/filterInPlace.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
false,

/***/ "./node_modules/@apollo/client/utilities/common/mergeDeep.js":
false,

/***/ "./node_modules/@apollo/client/utilities/graphql/directives.js":
false,

/***/ "./node_modules/@apollo/client/utilities/graphql/fragments.js":
false,

/***/ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js":
false,

/***/ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js":
false,

/***/ "./node_modules/@apollo/client/utilities/graphql/transform.js":
false,

/***/ "./node_modules/@apollo/client/utilities/index.js":
false,

/***/ "./node_modules/@apollo/client/utilities/observables/Concast.js":
false,

/***/ "./node_modules/@apollo/client/utilities/observables/Observable.js":
false,

/***/ "./node_modules/@apollo/client/utilities/observables/asyncMap.js":
false,

/***/ "./node_modules/@apollo/client/utilities/observables/iteration.js":
false,

/***/ "./node_modules/@apollo/client/utilities/observables/subclassing.js":
false,

/***/ "./node_modules/@apollo/client/utilities/policies/pagination.js":
false,

/***/ "./node_modules/@apollo/client/version.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@wry/context/lib/context.esm.js":
false,

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
false,

/***/ "./node_modules/@wry/trie/lib/trie.esm.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
false,

/***/ "./node_modules/graphql-tag/lib/index.js":
false,

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
false,

/***/ "./node_modules/graphql/error/formatError.mjs":
false,

/***/ "./node_modules/graphql/error/index.mjs":
false,

/***/ "./node_modules/graphql/error/locatedError.mjs":
false,

/***/ "./node_modules/graphql/error/syntaxError.mjs":
false,

/***/ "./node_modules/graphql/execution/execute.mjs":
false,

/***/ "./node_modules/graphql/execution/index.mjs":
false,

/***/ "./node_modules/graphql/execution/values.mjs":
false,

/***/ "./node_modules/graphql/graphql.mjs":
false,

/***/ "./node_modules/graphql/index.mjs":
false,

/***/ "./node_modules/graphql/jsutils/Path.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
false,

/***/ "./node_modules/graphql/jsutils/didYouMean.mjs":
false,

/***/ "./node_modules/graphql/jsutils/identityFunc.mjs":
false,

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
false,

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isAsyncIterable.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
false,

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
false,

/***/ "./node_modules/graphql/jsutils/naturalCompare.mjs":
false,

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
false,

/***/ "./node_modules/graphql/jsutils/printPathArray.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
false,

/***/ "./node_modules/graphql/jsutils/safeArrayFrom.mjs":
false,

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/toObjMap.mjs":
false,

/***/ "./node_modules/graphql/language/ast.mjs":
false,

/***/ "./node_modules/graphql/language/blockString.mjs":
false,

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
false,

/***/ "./node_modules/graphql/language/index.mjs":
false,

/***/ "./node_modules/graphql/language/kinds.mjs":
false,

/***/ "./node_modules/graphql/language/lexer.mjs":
false,

/***/ "./node_modules/graphql/language/location.mjs":
false,

/***/ "./node_modules/graphql/language/parser.mjs":
false,

/***/ "./node_modules/graphql/language/predicates.mjs":
false,

/***/ "./node_modules/graphql/language/printLocation.mjs":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/language/source.mjs":
false,

/***/ "./node_modules/graphql/language/tokenKind.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/graphql/polyfills/arrayFrom.mjs":
false,

/***/ "./node_modules/graphql/polyfills/find.mjs":
false,

/***/ "./node_modules/graphql/polyfills/isFinite.mjs":
false,

/***/ "./node_modules/graphql/polyfills/isInteger.mjs":
false,

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
false,

/***/ "./node_modules/graphql/polyfills/objectValues.mjs":
false,

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
false,

/***/ "./node_modules/graphql/subscription/index.mjs":
false,

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
false,

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
false,

/***/ "./node_modules/graphql/type/definition.mjs":
false,

/***/ "./node_modules/graphql/type/directives.mjs":
false,

/***/ "./node_modules/graphql/type/index.mjs":
false,

/***/ "./node_modules/graphql/type/introspection.mjs":
false,

/***/ "./node_modules/graphql/type/scalars.mjs":
false,

/***/ "./node_modules/graphql/type/schema.mjs":
false,

/***/ "./node_modules/graphql/type/validate.mjs":
false,

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
false,

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
false,

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/coerceInputValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
false,

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
false,

/***/ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
false,

/***/ "./node_modules/graphql/utilities/index.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/printSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
false,

/***/ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
false,

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
false,

/***/ "./node_modules/graphql/validation/index.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs":
false,

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
false,

/***/ "./node_modules/graphql/validation/validate.mjs":
false,

/***/ "./node_modules/graphql/version.mjs":
false,

/***/ "./node_modules/optimism/lib/bundle.esm.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/zen-observable/index.js":
false,

/***/ "./node_modules/zen-observable/lib/Observable.js":
false,

/***/ "./pages/product/index.tsx":
/*!*********************************!*\
  !*** ./pages/product/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductPage; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/products */ "./components/products.tsx");
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_products__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_products__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = ProductPage;

var _c;

$RefreshReg$(_c, "ProductPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generated/graphql.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZHVjdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQVNEO0tBVnVCQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuZDZkOTc3M2ZlODhhNmRjNDcwZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlByb2R1Y3QgcGFnZXM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UHJvZHVjdHMgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==