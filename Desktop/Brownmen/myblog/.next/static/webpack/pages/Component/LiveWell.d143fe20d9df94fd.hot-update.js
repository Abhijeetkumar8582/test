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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction DynamicHTML() {\n    const data = [\n        {\n            key: \"title1\",\n            text: \"This is the first title\"\n        },\n        {\n            key: \"heading1\",\n            text: \"This is the first heading\"\n        },\n        {\n            key: \"title2\",\n            text: \"This is the second title\"\n        },\n        {\n            key: \"heading2\",\n            text: \"This is the <br/> second heading\"\n        },\n        {\n            key: \"title3\",\n            text: \"This is the second title\",\n            img: \"https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"\n        },\n        {\n            key: \"heading3\",\n            text: \"This is the second heading\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                        lineNumber: 17,\n                        columnNumber: 44\n                    }, this),\n                    !item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                        lineNumber: 18,\n                        columnNumber: 45\n                    }, this),\n                    !item.key.startsWith(\"img\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.img,\n                        width: 400,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                        lineNumber: 19,\n                        columnNumber: 43\n                    }, this)\n                ]\n            }, item.key, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/LiveWell.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = DynamicHTML;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicHTML);\nvar _c;\n$RefreshReg$(_c, \"DynamicHTML\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnQvTGl2ZVdlbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLFNBQVNDLGNBQWM7SUFDckIsTUFBTUMsT0FBTztRQUNYO1lBQUVDLEtBQUs7WUFBVUMsTUFBTTtRQUEwQjtRQUNqRDtZQUFFRCxLQUFLO1lBQVlDLE1BQU07UUFBNEI7UUFDckQ7WUFBRUQsS0FBSztZQUFVQyxNQUFNO1FBQTJCO1FBQ2xEO1lBQUVELEtBQUs7WUFBWUMsTUFBTTtRQUFtQztRQUM1RDtZQUFFRCxLQUFLO1lBQVVDLE1BQU07WUFBMkJDLEtBQUk7UUFBb0k7UUFDMUw7WUFBRUYsS0FBSztZQUFZQyxNQUFNO1FBQTZCO0tBQ3ZEO0lBRUQscUJBQ0UsOERBQUNFO2tCQUNFSixLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNIOztvQkFDRUUsS0FBS0wsR0FBRyxDQUFDTyxVQUFVLENBQUMsMEJBQVksOERBQUNDO2tDQUFJSCxLQUFLSixJQUFJOzs7Ozs7b0JBQzlDLENBQUNJLEtBQUtMLEdBQUcsQ0FBQ08sVUFBVSxDQUFDLDBCQUFZLDhEQUFDRTtrQ0FBR0osS0FBS0osSUFBSTs7Ozs7O29CQUM5QyxDQUFDSSxLQUFLTCxHQUFHLENBQUNPLFVBQVUsQ0FBQyx3QkFBVSw4REFBQ0w7d0JBQUlRLEtBQUtMLEtBQUtILEdBQUc7d0JBQUVTLE9BQU87d0JBQUtDLFFBQVE7Ozs7Ozs7ZUFIaEVQLEtBQUtMLEdBQUc7Ozs7Ozs7Ozs7QUFRMUI7S0FyQlNGO0FBdUJULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudC9MaXZlV2VsbC5qcz9hZDU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIER5bmFtaWNIVE1MKCkge1xuICBjb25zdCBkYXRhID0gW1xuICAgIHsga2V5OiBcInRpdGxlMVwiLCB0ZXh0OiBcIlRoaXMgaXMgdGhlIGZpcnN0IHRpdGxlXCIgfSxcbiAgICB7IGtleTogXCJoZWFkaW5nMVwiLCB0ZXh0OiBcIlRoaXMgaXMgdGhlIGZpcnN0IGhlYWRpbmdcIiB9LFxuICAgIHsga2V5OiBcInRpdGxlMlwiLCB0ZXh0OiBcIlRoaXMgaXMgdGhlIHNlY29uZCB0aXRsZVwiIH0sXG4gICAgeyBrZXk6IFwiaGVhZGluZzJcIiwgdGV4dDogXCJUaGlzIGlzIHRoZSA8YnIvPiBzZWNvbmQgaGVhZGluZ1wiIH0sXG4gICAgeyBrZXk6IFwidGl0bGUzXCIsIHRleHQ6IFwiVGhpcyBpcyB0aGUgc2Vjb25kIHRpdGxlXCIsaW1nOlwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzg2MzAvYm9keWJ1aWxkZXItd2VpZ2h0LXRyYWluaW5nLXN0cmVzcy0zODYzMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIgfSxcbiAgICB7IGtleTogXCJoZWFkaW5nM1wiLCB0ZXh0OiBcIlRoaXMgaXMgdGhlIHNlY29uZCBoZWFkaW5nXCIgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInRpdGxlXCIpICYmIDxoMT57aXRlbS50ZXh0fTwvaDE+fVxuICAgICAgICAgIHshaXRlbS5rZXkuc3RhcnRzV2l0aChcInRpdGxlXCIpICYmIDxwPntpdGVtLnRleHR9PC9wPn1cbiAgICAgICAgICB7IWl0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJpbWdcIikgJiYgPGltZyBzcmM9e2l0ZW0uaW1nfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezMwMH0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0hUTUw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEeW5hbWljSFRNTCIsImRhdGEiLCJrZXkiLCJ0ZXh0IiwiaW1nIiwiZGl2IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3RhcnRzV2l0aCIsImgxIiwicCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Component/LiveWell.js\n"));

/***/ })

});