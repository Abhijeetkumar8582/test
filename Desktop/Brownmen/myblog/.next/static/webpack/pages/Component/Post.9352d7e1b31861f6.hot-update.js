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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Post() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { pid  } = router.query;\n    console.log(_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__);\n    var blogJson = {};\n    for(let i = 0; i < _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__.length; i++){\n        if (_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].id === pid) {\n            blogJson = _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i];\n            console.log(\"Found matching blog post:\", _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n            break;\n        }\n        console.log(blogJson, \"test\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"10px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container box\",\n                children: blogJson.desc.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: [\n                                item.key.startsWith(\"topHeading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-start my-4\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 51\n                                }, this),\n                                item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-start my-4\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 46\n                                }, this),\n                                item.key.startsWith(\"heading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 48\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-center\",\n                                    children: item.key.startsWith(\"image\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.text,\n                                        style: {\n                                            width: \"100%\",\n                                            maxWidth: \"700px\"\n                                        },\n                                        alt: \"Dynamic Image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 46\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, item.key, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnQvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNHO0FBQ0o7QUFDcEMsU0FBU0ksT0FBTzs7SUFFZCxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QkMsUUFBUUMsR0FBRyxDQUFDTiw0Q0FBSUE7SUFDaEIsSUFBSU8sV0FBVyxDQUFDO0lBQ2hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixtREFBVyxFQUFFUSxJQUFLO1FBQ3BDLElBQUlSLDRDQUFJLENBQUNRLEVBQUUsQ0FBQ0UsRUFBRSxLQUFLUCxLQUFLO1lBQ3RCSSxXQUFXUCw0Q0FBSSxDQUFDUSxFQUFFO1lBQ2xCSCxRQUFRQyxHQUFHLENBQUMsNkJBQTZCTiw0Q0FBSSxDQUFDUSxFQUFFO1lBQ2hELEtBQU07UUFDUixDQUFDO1FBQ0RILFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUN4QjtJQUVBLHFCQUNFOzswQkFFRSw4REFBQ0k7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUNDLFNBQVE7Z0JBQU07Ozs7OzswQkFDN0MsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaTCxTQUFTUSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEIsOERBQUNOO2tDQUNDLDRFQUFDQTs0QkFBSUMsV0FBVTs7Z0NBQ2RLLEtBQUtDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLCtCQUFpQiw4REFBQ0M7b0NBQUdSLFdBQVU7OENBQW9CSyxLQUFLSSxJQUFJOzs7Ozs7Z0NBQ2hGSixLQUFLQyxHQUFHLENBQUNDLFVBQVUsQ0FBQywwQkFBWSw4REFBQ0c7b0NBQUdWLFdBQVU7OENBQW9CSyxLQUFLSSxJQUFJOzs7Ozs7Z0NBQzNFSixLQUFLQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyw0QkFBYyw4REFBQ0k7b0NBQUVYLFdBQVU7OENBQWVLLEtBQUtJLElBQUk7Ozs7Ozs4Q0FDeEUsOERBQUNWO29DQUFJQyxXQUFVOzhDQUNkSyxLQUFLQyxHQUFHLENBQUNDLFVBQVUsQ0FBQywwQkFBWSw4REFBQ0s7d0NBQUlDLEtBQU1SLEtBQUtJLElBQUk7d0NBQUdSLE9BQU87NENBQUNhLE9BQU07NENBQU9DLFVBQVM7d0NBQU87d0NBQUlDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU43RlgsS0FBS0MsR0FBRzs7Ozs7Ozs7Ozs7O0FBYzVCO0dBbkNTakI7O1FBRVFGLGtEQUFTQTs7O0tBRmpCRTtBQXFDVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnQvUG9zdC5qcz84OWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2xlZ2FjeS9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBibG9nIGZyb20gJy4uL0pTT04vQmxvZy5qc29uJ1xuZnVuY3Rpb24gUG9zdCgpIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc29sZS5sb2coYmxvZylcbiAgdmFyIGJsb2dKc29uID0ge31cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9nLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGJsb2dbaV0uaWQgPT09IHBpZCkge1xuICAgICAgYmxvZ0pzb24gPSBibG9nW2ldXG4gICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIG1hdGNoaW5nIGJsb2cgcG9zdDpcIiwgYmxvZ1tpXSlcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhibG9nSnNvbiwgXCJ0ZXN0XCIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZScgc3R5bGU9e3twYWRkaW5nOlwiMTBweFwifX0+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIGNvbnRhaW5lciBib3gnID5cbiAgICAgICAge2Jsb2dKc29uLmRlc2MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0b3BIZWFkaW5nXCIpICYmIDxoMSBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktNCc+eyhpdGVtLnRleHQpfTwvaDE+fVxuICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0aXRsZVwiKSAmJiA8aDMgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTQnPnsoaXRlbS50ZXh0KX08L2gzPn1cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaGVhZGluZ1wiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQnPnsoaXRlbS50ZXh0KX08L3A+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgPGltZyBzcmM9eyhpdGVtLnRleHQpfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLG1heFdpZHRoOlwiNzAwcHhcIn19ICBhbHQ9XCJEeW5hbWljIEltYWdlXCIgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwidXNlUm91dGVyIiwiYmxvZyIsIlBvc3QiLCJyb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJibG9nSnNvbiIsImkiLCJsZW5ndGgiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZyIsImRlc2MiLCJtYXAiLCJpdGVtIiwia2V5Iiwic3RhcnRzV2l0aCIsImgxIiwidGV4dCIsImgzIiwicCIsImltZyIsInNyYyIsIndpZHRoIiwibWF4V2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Component/Post.js\n"));

/***/ })

});