"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
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

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7111);
/* harmony import */ var _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7419);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__]);
_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const oauthCallback = async (req, res)=>{
    const googleAuth = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    try {
        const code = req.query.code;
        if (!code) {
            res.json({
                error: true,
                message: "code doesnt exists"
            });
        }
        /* Get Profile from Google OAuth2*/ const clientCredentials = await googleAuth.getUserTokens(code);
        const profile = await googleAuth.getProfileInfo(clientCredentials);
        /* Get User's List from Google Sheet*/ const googleSheetInstance = new _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const MatchEmail = users.find((user)=>user[_constants_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === profile.email
        );
        if (!MatchEmail) {
            res.redirect("/#unauthorized");
        } else {
            req.session.user = {
                id_google_sheet: profile.id,
                id: MatchEmail[_constants_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].GOOGLE_SHEET_ROWS.USERS.ID_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.ID_COLUMN],
                name: profile.name,
                email: profile.email,
                profile_picture: profile.picture,
                logged: true,
                isAdmin: MatchEmail[_constants_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].GOOGLE_SHEET_ROWS.USERS.IS_ADMIN_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.IS_ADMIN_COLUMN] === "1"
            };
            await req.session.save();
            if (MatchEmail[_constants_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].GOOGLE_SHEET_ROWS.USERS.IS_ADMIN_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.IS_ADMIN_COLUMN] === "1") {
                return res.redirect("/admin#logged");
            }
            res.redirect("/#logged");
        }
    } catch (e) {
        res.json(e);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__/* .withSessionRoute */ .j)(oauthCallback));

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
var __webpack_exports__ = __webpack_require__.X(0, [534,684,96,74,419], () => (__webpack_exec__(9944)));
module.exports = __webpack_exports__;

})();