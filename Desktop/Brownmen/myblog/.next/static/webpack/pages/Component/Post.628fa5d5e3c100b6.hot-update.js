"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Component/Post",{

/***/ "./pages/Component/Post.js":
/*!*********************************!*\
  !*** ./pages/Component/Post.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Post() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { pid  } = router.query;\n    console.log(_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__);\n    var blogJson = {};\n    for(let i = 0; i < _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__.length; i++){\n        if (_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].id === pid) {\n            blogJson = _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i];\n            console.log(\"Found matching blog post:\", _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n            break;\n        }\n        console.log(blogJson, \"test\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" box\",\n                children: blogJson.desc.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: [\n                                item.key.startsWith(\"topHeading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-start my-4\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 51\n                                }, this),\n                                item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-start my-4\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 46\n                                }, this),\n                                item.key.startsWith(\"heading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 48\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-center\",\n                                    children: item.key.startsWith(\"image\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.text,\n                                        style: {\n                                            width: \"100%\",\n                                            maxWidth: \"700px\"\n                                        },\n                                        alt: \"Dynamic Image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 46\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, item.key, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnQvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNHO0FBQ0o7QUFDcEMsU0FBU0ksT0FBTzs7SUFFZCxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QkMsUUFBUUMsR0FBRyxDQUFDTiw0Q0FBSUE7SUFDaEIsSUFBSU8sV0FBVyxDQUFDO0lBQ2hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixtREFBVyxFQUFFUSxJQUFLO1FBQ3BDLElBQUlSLDRDQUFJLENBQUNRLEVBQUUsQ0FBQ0UsRUFBRSxLQUFLUCxLQUFLO1lBQ3RCSSxXQUFXUCw0Q0FBSSxDQUFDUSxFQUFFO1lBQ2xCSCxRQUFRQyxHQUFHLENBQUMsNkJBQTZCTiw0Q0FBSSxDQUFDUSxFQUFFO1lBQ2hELEtBQU07UUFDUixDQUFDO1FBQ0RILFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUN4QjtJQUVBLHFCQUNFOzswQkFFRSw4REFBQ0k7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pMLFNBQVNNLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ0o7a0NBQ0MsNEVBQUNBOzRCQUFJQyxXQUFVOztnQ0FDZEcsS0FBS0MsR0FBRyxDQUFDQyxVQUFVLENBQUMsK0JBQWlCLDhEQUFDQztvQ0FBR04sV0FBVTs4Q0FBb0JHLEtBQUtJLElBQUk7Ozs7OztnQ0FDaEZKLEtBQUtDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLDBCQUFZLDhEQUFDRztvQ0FBR1IsV0FBVTs4Q0FBb0JHLEtBQUtJLElBQUk7Ozs7OztnQ0FDM0VKLEtBQUtDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLDRCQUFjLDhEQUFDSTtvQ0FBRVQsV0FBVTs4Q0FBZUcsS0FBS0ksSUFBSTs7Ozs7OzhDQUN4RSw4REFBQ1I7b0NBQUlDLFdBQVU7OENBQ2RHLEtBQUtDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLDBCQUFZLDhEQUFDSzt3Q0FBSUMsS0FBTVIsS0FBS0ksSUFBSTt3Q0FBR0ssT0FBTzs0Q0FBQ0MsT0FBTTs0Q0FBT0MsVUFBUzt3Q0FBTzt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTjdGWixLQUFLQyxHQUFHOzs7Ozs7Ozs7Ozs7QUFjNUI7R0FuQ1NmOztRQUVRRixrREFBU0E7OztLQUZqQkU7QUFxQ1QsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50L1Bvc3QuanM/ODllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9sZWdhY3kvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYmxvZyBmcm9tICcuLi9KU09OL0Jsb2cuanNvbidcbmZ1bmN0aW9uIFBvc3QoKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnNvbGUubG9nKGJsb2cpXG4gIHZhciBibG9nSnNvbiA9IHt9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvZy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChibG9nW2ldLmlkID09PSBwaWQpIHtcbiAgICAgIGJsb2dKc29uID0gYmxvZ1tpXVxuICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBtYXRjaGluZyBibG9nIHBvc3Q6XCIsIGJsb2dbaV0pXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc29sZS5sb2coYmxvZ0pzb24sIFwidGVzdFwiKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJveCc+XG4gICAgICAgIHtibG9nSnNvbi5kZXNjLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmtleX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidG9wSGVhZGluZ1wiKSAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTQnPnsoaXRlbS50ZXh0KX08L2gxPn1cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidGl0bGVcIikgJiYgPGgzIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS00Jz57KGl0ZW0udGV4dCl9PC9oMz59XG4gICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImhlYWRpbmdcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0Jz57KGl0ZW0udGV4dCl9PC9wPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImltYWdlXCIpICYmIDxpbWcgc3JjPXsoaXRlbS50ZXh0KX0gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXhXaWR0aDpcIjcwMHB4XCJ9fSAgYWx0PVwiRHluYW1pYyBJbWFnZVwiIC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInVzZVJvdXRlciIsImJsb2ciLCJQb3N0Iiwicm91dGVyIiwicGlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiYmxvZ0pzb24iLCJpIiwibGVuZ3RoIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjIiwibWFwIiwiaXRlbSIsImtleSIsInN0YXJ0c1dpdGgiLCJoMSIsInRleHQiLCJoMyIsInAiLCJpbWciLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwibWF4V2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Component/Post.js\n"));

/***/ })

});