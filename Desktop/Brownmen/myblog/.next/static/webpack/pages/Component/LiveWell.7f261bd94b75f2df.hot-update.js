"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Component/LiveWell",{

/***/ "./pages/Component/LiveWell.js":
/*!*************************************!*\
  !*** ./pages/Component/LiveWell.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction DynamicHTML() {\n    const data = [\n        {\n            key: \"title1\",\n            text: \"This is the first title\"\n        },\n        {\n            key: \"heading1\",\n            text: \"This is the first heading\"\n        },\n        {\n            key: \"title2\",\n            text: \"This is the second title\"\n        },\n        {\n            key: \"heading2\",\n            text: \"This is the second heading\"\n        },\n        {\n            key: \"title3\",\n            text: \"This is the second title\",\n            img: \"\"\n        },\n        {\n            key: \"heading3\",\n            text: \"This is the second heading\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                        lineNumber: 17,\n                        columnNumber: 44\n                    }, this),\n                    !item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                        lineNumber: 18,\n                        columnNumber: 45\n                    }, this)\n                ]\n            }, item.key, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = DynamicHTML;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicHTML);\nvar _c;\n$RefreshReg$(_c, \"DynamicHTML\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnQvTGl2ZVdlbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLFNBQVNDLGNBQWM7SUFDckIsTUFBTUMsT0FBTztRQUNYO1lBQUVDLEtBQUs7WUFBVUMsTUFBTTtRQUEwQjtRQUNqRDtZQUFFRCxLQUFLO1lBQVlDLE1BQU07UUFBNEI7UUFDckQ7WUFBRUQsS0FBSztZQUFVQyxNQUFNO1FBQTJCO1FBQ2xEO1lBQUVELEtBQUs7WUFBWUMsTUFBTTtRQUE2QjtRQUN0RDtZQUFFRCxLQUFLO1lBQVVDLE1BQU07WUFBMkJDLEtBQUk7UUFBRztRQUN6RDtZQUFFRixLQUFLO1lBQVlDLE1BQU07UUFBNkI7S0FDdkQ7SUFFRCxxQkFDRSw4REFBQ0U7a0JBQ0VKLEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQ0g7O29CQUNFRSxLQUFLTCxHQUFHLENBQUNPLFVBQVUsQ0FBQywwQkFBWSw4REFBQ0M7a0NBQUlILEtBQUtKLElBQUk7Ozs7OztvQkFDOUMsQ0FBQ0ksS0FBS0wsR0FBRyxDQUFDTyxVQUFVLENBQUMsMEJBQVksOERBQUNFO2tDQUFHSixLQUFLSixJQUFJOzs7Ozs7O2VBRnZDSSxLQUFLTCxHQUFHOzs7Ozs7Ozs7O0FBTzFCO0tBcEJTRjtBQXNCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnQvTGl2ZVdlbGwuanM/YWQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBEeW5hbWljSFRNTCgpIHtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7IGtleTogXCJ0aXRsZTFcIiwgdGV4dDogXCJUaGlzIGlzIHRoZSBmaXJzdCB0aXRsZVwiIH0sXG4gICAgeyBrZXk6IFwiaGVhZGluZzFcIiwgdGV4dDogXCJUaGlzIGlzIHRoZSBmaXJzdCBoZWFkaW5nXCIgfSxcbiAgICB7IGtleTogXCJ0aXRsZTJcIiwgdGV4dDogXCJUaGlzIGlzIHRoZSBzZWNvbmQgdGl0bGVcIiB9LFxuICAgIHsga2V5OiBcImhlYWRpbmcyXCIsIHRleHQ6IFwiVGhpcyBpcyB0aGUgc2Vjb25kIGhlYWRpbmdcIiB9LFxuICAgIHsga2V5OiBcInRpdGxlM1wiLCB0ZXh0OiBcIlRoaXMgaXMgdGhlIHNlY29uZCB0aXRsZVwiLGltZzpcIlwiIH0sXG4gICAgeyBrZXk6IFwiaGVhZGluZzNcIiwgdGV4dDogXCJUaGlzIGlzIHRoZSBzZWNvbmQgaGVhZGluZ1wiIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpdGVtLmtleX0+XG4gICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0aXRsZVwiKSAmJiA8aDE+e2l0ZW0udGV4dH08L2gxPn1cbiAgICAgICAgICB7IWl0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0aXRsZVwiKSAmJiA8cD57aXRlbS50ZXh0fTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNIVE1MO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRHluYW1pY0hUTUwiLCJkYXRhIiwia2V5IiwidGV4dCIsImltZyIsImRpdiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInN0YXJ0c1dpdGgiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Component/LiveWell.js\n"));

/***/ })

});