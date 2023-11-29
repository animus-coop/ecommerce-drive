"use strict";
(() => {
var exports = {};
exports.id = 726;
exports.ids = [726];
exports.modules = {

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

/***/ 9837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cancelOrder)
/* harmony export */ });
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4014);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9554);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7111);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__]);
([iron_session__WEBPACK_IMPORTED_MODULE_0__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function cancelOrder(req, res) {
    if (req.method !== "DELETE") {
        return res.status(405).send({
            message: "Invalid method. Only DELETE requests allowed"
        });
    }
    try {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
        const body = JSON.parse(req.body);
        const { orderId  } = body;
        if (!orderId) {
            return res.status(400).json({
                error: true,
                message: "Missing order"
            });
        }
        await orderService.deleteOrder(orderId);
        const currentSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__/* .sessionOptions */ .d);
        const { email , name  } = currentSession.user;
        console.log("Pedido cancelado correctamente", {
            name,
            email
        });
        res.status(200).json({
            error: false,
            message: "Order canceled successfully"
        });
    } catch (error) {
        console.log(error, "error on deleting order");
        res.status(500).json(error);
    }
};

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,684,96,5,554], () => (__webpack_exec__(9837)));
module.exports = __webpack_exports__;

})();