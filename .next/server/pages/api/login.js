"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 6781:
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 5087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);


const login = async (req, res)=>{
    const googleAuth = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    try {
        const url = await googleAuth.getAuthUrl();
        res.redirect(url);
    } catch (e) {
        console.log(e, "Error in login");
        res.json(e);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [684,96,74], () => (__webpack_exec__(5087)));
module.exports = __webpack_exports__;

})();