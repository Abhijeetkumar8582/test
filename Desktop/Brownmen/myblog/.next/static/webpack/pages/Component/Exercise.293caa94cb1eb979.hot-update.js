"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Component/Exercise",{

/***/ "./pages/Component/Exercise.js":
/*!*************************************!*\
  !*** ./pages/Component/Exercise.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category(param) {\n    let { response  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleCLick = (id)=>{\n        console.log(id);\n        router.push({\n            pathname: \"/Component/Post\",\n            query: {\n                pid: id\n            }\n        });\n    };\n    console.log(response);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col\",\n                        children: \"col\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                        lineNumber: 24,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col\",\n                        children: \"col\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                        lineNumber: 25,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Fitness\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>handleCLick(element.id),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card\",\n                                        style: {\n                                            maxWidth: \"18rem\",\n                                            width: \"100%\",\n                                            maxHeight: \"400px\",\n                                            height: \"100%\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: \"...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        children: element.by\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        className: \"card-text\",\n                                                        children: element.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: element.reviewed\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Exercise.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnQvRXhlcmNpc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNSO0FBQ0U7QUFDUztBQUl2QyxTQUFTSyxTQUFTLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUNoQixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUksY0FBYyxDQUFDQyxLQUFPO1FBQzFCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pGLE9BQU9LLElBQUksQ0FBQztZQUNWQyxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUVDLEtBQUtOO1lBQUc7UUFFbkI7SUFDRjtJQUNBQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1oscUJBQ0U7OzBCQUNFLDhEQUFDVTtnQkFBSUMsT0FBTTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxPQUFNO2tDQUFNOzs7Ozs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsT0FBTTtrQ0FBTTs7Ozs7Ozs7Ozs7OzBCQU1iLDhEQUFDRDtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNIO3dCQUFJRSxXQUFVO2tDQUNaakIsa0RBQVUsQ0FBQyxHQUFHLElBQUlvQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQy9CLDhEQUFDUDtnQ0FBSUUsV0FBVTswQ0FDYiw0RUFBQ2hCLGtEQUFJQTtvQ0FBQ3NCLE1BQUs7b0NBQUlDLFNBQVMsSUFBTWpCLFlBQVljLFFBQVFiLEVBQUU7b0NBQUdpQixPQUFPO3dDQUFFQyxnQkFBZ0I7b0NBQU87OENBQ3JGLDRFQUFDWDt3Q0FBSUUsV0FBVTt3Q0FBT1EsT0FBTzs0Q0FBRUUsVUFBVTs0Q0FBU0MsT0FBTzs0Q0FBUUMsV0FBVzs0Q0FBU0MsUUFBUTt3Q0FBTzs7MERBQ2xHLDhEQUFDNUIsbURBQUtBO2dEQUFDNkIsU0FBUTtnREFBT0MsS0FBS1gsUUFBUVksS0FBSztnREFBRUwsT0FBTztnREFBS0UsUUFBUTtnREFBS2IsV0FBVTtnREFBZWlCLEtBQUk7Ozs7OzswREFDaEcsOERBQUNuQjtnREFBSUUsV0FBVTs7a0VBQ2IsOERBQUNrQjtrRUFBSWQsUUFBUWUsRUFBRTs7Ozs7O2tFQUNmLDhEQUFDQzt3REFBR3BCLFdBQVU7a0VBQWFJLFFBQVFpQixLQUFLOzs7Ozs7a0VBQ3hDLDhEQUFDQztrRUFBR2xCLFFBQVFtQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFQU2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpEO0dBM0NTbEI7O1FBQ1FELGtEQUFTQTs7O0tBRGpCQztBQThDVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnQvRXhlcmNpc2UuanM/YjkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vSlNPTi9CbG9nLmpzb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuZnVuY3Rpb24gQ2F0ZWdvcnkoeyByZXNwb25zZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlQ0xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZClcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9Db21wb25lbnQvUG9zdCcsXG4gICAgICBxdWVyeTogeyBwaWQ6IGlkIH0sXG5cbiAgICB9KVxuICB9XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2xcIj5jb2w8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbFwiPmNvbDwvZGl2PlxuICA8L2Rpdj5cblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBmbGV4LXdyYXAgbXktNSAnPlxuICAgICAgICA8aDE+Rml0bmVzczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbXgtNCBteS0zICc+XG4gICAgICAgICAge2Jsb2cuc2xpY2UoMCwgMTIpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMyBteS0zICcga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNMaWNrKGVsZW1lbnQuaWQpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMThyZW1cIiwgd2lkdGg6IFwiMTAwJVwiLCBtYXhIZWlnaHQ6IFwiNDAwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBsb2FkaW5nPSdsYXp5JyBzcmM9e2VsZW1lbnQuaW1hZ2V9IHdpZHRoPXsyODV9IGhlaWdodD17MjIwfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PntlbGVtZW50LmJ5fTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZWxlbWVudC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD57ZWxlbWVudC5yZXZpZXdlZH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJuYW1lcyI6WyJSZWFjdCIsImJsb2ciLCJMaW5rIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJDYXRlZ29yeSIsInJlc3BvbnNlIiwicm91dGVyIiwiaGFuZGxlQ0xpY2siLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInBpZCIsImRpdiIsImNsYXNzIiwiY2xhc3NOYW1lIiwiaDEiLCJzbGljZSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImhyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJoZWlnaHQiLCJsb2FkaW5nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoNiIsImJ5IiwiaDQiLCJ0aXRsZSIsInAiLCJyZXZpZXdlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Component/Exercise.js\n"));

/***/ })

});