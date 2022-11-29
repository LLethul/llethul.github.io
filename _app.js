(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utils/themeProvider.tsx
var themeProvider = __webpack_require__(309);
;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx



const Layout = ({ children , onClick  })=>{
    const { theme  } = (0,themeProvider/* useTheme */.F)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-w-max text-xs md:min-w-full md:text-base",
        onClick: onClick,
        style: {
            color: theme.foreground
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "w-full h-full p-2",
            style: {
                background: theme.background
            },
            children: children
        })
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/layout/index.tsx



/***/ }),

/***/ 505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _m4tt72_matomo_tracker_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(501);
/* harmony import */ var _m4tt72_matomo_tracker_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_m4tt72_matomo_tracker_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(235);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(786);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_shellProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(939);
/* harmony import */ var _utils_themeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_shellProvider__WEBPACK_IMPORTED_MODULE_6__]);
_utils_shellProvider__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const App = ({ Component , pageProps  })=>{
    const inputRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);
    const onClickAnywhere = ()=>{
        inputRef.current.focus();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        localStorage.setItem("visitedAt", new Date().toString());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_themeProvider__WEBPACK_IMPORTED_MODULE_7__/* .ThemeProvider */ .f, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_shellProvider__WEBPACK_IMPORTED_MODULE_6__/* .ShellProvider */ .j, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }, "viewport")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
                    onClick: onClickAnywhere,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps,
                        inputRef: inputRef
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{
    const ENABLE_TRACKING = Boolean(+process.env.NEXT_PUBLIC_ENABLE_TRACKING);
    if (!ENABLE_TRACKING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
            ...props
        });
    }
    const instance = (0,_m4tt72_matomo_tracker_react__WEBPACK_IMPORTED_MODULE_1__.createInstance)({
        urlBase: process.env.NEXT_PUBLIC_TRACKING_URL,
        trackerUrl: `${process.env.NEXT_PUBLIC_TRACKING_URL}/js/`,
        srcUrl: `${process.env.NEXT_PUBLIC_TRACKING_URL}/js/`,
        siteId: +process.env.NEXT_PUBLIC_TRACKING_SITE_ID,
        configurations: {
            setRequestMethod: "GET"
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_m4tt72_matomo_tracker_react__WEBPACK_IMPORTED_MODULE_1__.MatomoProvider, {
        value: instance,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
            ...props
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 786:
/***/ (() => {



/***/ }),

/***/ 501:
/***/ ((module) => {

"use strict";
module.exports = require("@m4tt72/matomo-tracker-react");

/***/ }),

/***/ 925:
/***/ ((module) => {

"use strict";
module.exports = require("cowsay-browser");

/***/ }),

/***/ 146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [939], () => (__webpack_exec__(505)));
module.exports = __webpack_exports__;

})();