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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pessoa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pessoa */ \"./components/Pessoa.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hoc_comAutorizacao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoc/comAutorizacao */ \"./hoc/comAutorizacao.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), idade = ref[0], setIdade = ref[1];\n    var pessoas = [\n        {\n            nome: 'Jo\\xe3o',\n            idade: 20\n        },\n        {\n            nome: 'Maria',\n            idade: 25\n        },\n        {\n            nome: 'Jos\\xe9',\n            idade: 30\n        },\n        {\n            nome: 'Pedro',\n            idade: 35\n        },\n        {\n            nome: 'Paulo',\n            idade: 40\n        }\n    ];\n    var incrementarIdade = function() {\n        setIdade(idade + 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"VARIAVEL DE AMBIENTE NEXT PUBLIC TESTE\"\n            }, void 0, false, {\n                fileName: \"/Users/ederu/Desktop/next-lab/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pessoa__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                nome: pessoa.nome,\n                idade: pessoa.idade\n            }, void 0, false, {\n                fileName: \"/Users/ederu/Desktop/next-lab/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ederu/Desktop/next-lab/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            pessoas.map(function(pessoa, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pessoa__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    nome: pessoa.nome,\n                    idade: pessoa.idade\n                }, index, false, {\n                    fileName: \"/Users/ederu/Desktop/next-lab/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 16\n                }, _this));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: incrementarIdade,\n                children: \"Incrementar idade\"\n            }, void 0, false, {\n                fileName: \"/Users/ederu/Desktop/next-lab/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Home, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNUO0FBQ2tCOztTQUV6Q0csSUFBSSxHQUFHLENBQUM7OztJQUNmLEdBQUssQ0FBcUJGLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTdCRyxLQUFLLEdBQWNILEdBQVcsS0FBdkJJLFFBQVEsR0FBSUosR0FBVztJQUNyQyxHQUFLLENBQUNLLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztZQUFDQyxJQUFJLEVBQUUsQ0FBTTtZQUFHSCxLQUFLLEVBQUUsRUFBRTtRQUFDLENBQUM7UUFDM0I7WUFBQ0csSUFBSSxFQUFFLENBQU87WUFBRUgsS0FBSyxFQUFFLEVBQUU7UUFBQyxDQUFDO1FBQzVCLENBQUM7WUFBQ0csSUFBSSxFQUFFLENBQU07WUFBRUgsS0FBSyxFQUFFLEVBQUU7UUFBQyxDQUFDO1FBQzNCLENBQUM7WUFBQ0csSUFBSSxFQUFFLENBQU87WUFBRUgsS0FBSyxFQUFFLEVBQUU7UUFBQyxDQUFDO1FBQzVCLENBQUM7WUFBQ0csSUFBSSxFQUFFLENBQU87WUFBRUgsS0FBSyxFQUFFLEVBQUU7UUFBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxHQUFLLENBQUNJLGdCQUFnQixHQUFHLFFBQzNCLEdBRGlDLENBQUM7UUFDOUJILFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU07O3dGQUVESyxDQUFFOzBCQUFFQyx3Q0FBNkI7Ozs7Ozt3RkFDakNWLDBEQUFNO2dCQUFDTyxJQUFJLEVBQUVNLE1BQU0sQ0FBQ04sSUFBSTtnQkFBRUgsS0FBSyxFQUFFUyxNQUFNLENBQUNULEtBQUs7Ozs7Ozt3RkFDN0NVLENBQUU7Ozs7O1lBRUZSLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEYsTUFBTSxFQUFFRyxLQUFLLEVBQUssQ0FBQztnQkFDL0IsTUFBTSw2RUFBRWhCLDBEQUFNO29CQUFhTyxJQUFJLEVBQUVNLE1BQU0sQ0FBQ04sSUFBSTtvQkFBRUgsS0FBSyxFQUFFUyxNQUFNLENBQUNULEtBQUs7bUJBQTdDWSxLQUFLOzs7OztZQUMzQixDQUFDO3dGQUVBQyxDQUFNO2dCQUFDQyxPQUFPLEVBQUVWLGdCQUFnQjswQkFBRSxDQUFpQjs7Ozs7Ozs7QUFHMUQsQ0FBQztHQTNCUUwsSUFBSTtLQUFKQSxJQUFJO0FBNkJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVzc29hIGZyb20gJy4uL2NvbXBvbmVudHMvUGVzc29hJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjb21BdXRvcml6YWNhbyBmcm9tICcuLi9ob2MvY29tQXV0b3JpemFjYW8nXG4gXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaWRhZGUsIHNldElkYWRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHBlc3NvYXMgPSBbXG4gICAgeyBub21lOiAnSm/Do28nLCBpZGFkZTogMjAgfSxcbiAgICB7IG5vbWU6ICdNYXJpYScsIGlkYWRlOiAyNSB9LFxuICAgIHsgbm9tZTogJ0pvc8OpJywgaWRhZGU6IDMwIH0sXG4gICAgeyBub21lOiAnUGVkcm8nLCBpZGFkZTogMzUgfSxcbiAgICB7IG5vbWU6ICdQYXVsbycsIGlkYWRlOiA0MCB9XG4gIF1cblxuICBjb25zdCBpbmNyZW1lbnRhcklkYWRlID0gKCkgPT4ge1xuICAgIHNldElkYWRlKGlkYWRlICsgMSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT57cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVEVTVEV9PC9oMT5cbiAgICAgIDxQZXNzb2Egbm9tZT17cGVzc29hLm5vbWV9IGlkYWRlPXtwZXNzb2EuaWRhZGV9IC8+XG4gICAgICA8YnIgLz5cblxuICAgICAge3Blc3NvYXMubWFwKChwZXNzb2EsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8UGVzc29hIGtleT17aW5kZXh9IG5vbWU9e3Blc3NvYS5ub21lfSBpZGFkZT17cGVzc29hLmlkYWRlfSAvPlxuICAgICAgfSl9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVtZW50YXJJZGFkZX0+SW5jcmVtZW50YXIgaWRhZGU8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJQZXNzb2EiLCJ1c2VTdGF0ZSIsImNvbUF1dG9yaXphY2FvIiwiSG9tZSIsImlkYWRlIiwic2V0SWRhZGUiLCJwZXNzb2FzIiwibm9tZSIsImluY3JlbWVudGFySWRhZGUiLCJoMSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19URVNURSIsInBlc3NvYSIsImJyIiwibWFwIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});