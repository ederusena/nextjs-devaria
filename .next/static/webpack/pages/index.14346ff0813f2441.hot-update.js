"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hoc/comAutorizacao.js":
/*!*******************************!*\
  !*** ./hoc/comAutorizacao.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ comAutorizacao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction comAutorizacao(Componente) {\n    var _this = this;\n    var _s = $RefreshSig$();\n    var estaLogado = false;\n    return _s(function(props) {\n        _s();\n        var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        if (estaLogado) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Componente, _objectSpread({}, props), void 0, false, {\n                fileName: \"/Users/ederu/Desktop/next-lab/hoc/comAutorizacao.js\",\n                lineNumber: 11,\n                columnNumber: 14\n            }, _this));\n        }\n        router.pushRouter('/login');\n        return null;\n    }, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n        ];\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob2MvY29tQXV0b3JpemFjYW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixRQUFRLENBQUNDLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7OztJQUVsRCxHQUFLLENBQUNDLFVBQVUsR0FBRyxLQUFLO0lBRXhCLE1BQU0sSUFBQyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztRQUNqQixHQUFLLENBQUNDLE1BQU0sR0FBR0wsc0RBQVM7UUFFeEIsRUFBRSxFQUFFRyxVQUFVLEVBQUUsQ0FBQztZQUNmLE1BQU0sNkVBQUVELFVBQVUsb0JBQUtFLEtBQUs7Ozs7O1FBQzlCLENBQUM7UUFFRkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBUTtRQUMxQixNQUFNLENBQUMsSUFBSTtJQUNaLENBQUM7O1lBUmdCTixrREFBUzs7O0FBUzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9jL2NvbUF1dG9yaXphY2FvLmpzP2FmNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbUF1dG9yaXphY2FvKENvbXBvbmVudGUpIHtcblxuICBjb25zdCBlc3RhTG9nYWRvID0gZmFsc2U7XG5cbiAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgaWYgKGVzdGFMb2dhZG8pIHtcbiAgICAgIHJldHVybiA8Q29tcG9uZW50ZSB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICByb3V0ZXIucHVzaFJvdXRlcignL2xvZ2luJyk7XG4gICByZXR1cm4gbnVsbFxuICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImNvbUF1dG9yaXphY2FvIiwiQ29tcG9uZW50ZSIsImVzdGFMb2dhZG8iLCJwcm9wcyIsInJvdXRlciIsInB1c2hSb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hoc/comAutorizacao.js\n");

/***/ })

});