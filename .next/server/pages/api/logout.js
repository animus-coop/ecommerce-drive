"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7111);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__]);
_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const logout = async (req, res)=>{
    try {
        req.session.destroy();
        res.redirect("/#logout");
    } catch (e) {
        res.json(e);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__/* .withSessionRoute */ .j)(logout));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions),
/* harmony export */   "j": () => (/* binding */ withSessionRoute)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const sessionOptions = {
    password: _constants_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].IRON_SESSIONS_PASSWORD */ .Z.IRON_SESSIONS_PASSWORD,
    cookieName: "almargen_app",
    cookieOptions: {
        secure: false
    }
};
function withSessionRoute(handler) {
    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,684], () => (__webpack_exec__(9601)));
module.exports = __webpack_exports__;

})();