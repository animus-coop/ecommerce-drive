"use strict";
(() => {
var exports = {};
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateOrder)
/* harmony export */ });
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4014);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_sendEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8493);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9554);
/* harmony import */ var _src_utils_Mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6841);
/* harmony import */ var _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7111);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__]);
([iron_session__WEBPACK_IMPORTED_MODULE_0__, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function updateOrder(req, res) {
    if (req.method !== "PUT") {
        return res.status(405).send({
            message: "Invalid method. Only PUT requests allowed"
        });
    }
    try {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
        const { orderId  } = req.query;
        const body = JSON.parse(req.body);
        const { products , balance , total  } = body;
        const subtotal = total + balance;
        await orderService.updateOrder(orderId, {
            products,
            total
        });
        const currentSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, _src_utils_withIronSession__WEBPACK_IMPORTED_MODULE_4__/* .sessionOptions */ .d);
        const { email , name  } = currentSession.user;
        const mailData = {
            from: "Compras Almargen",
            to: email,
            subject: `Tu pedido fue guardado`,
            html: (0,_src_utils_Mail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
                products,
                balance,
                subtotal,
                total,
                name
            }),
            text: ""
        };
        (0,_helpers_sendEmail__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(mailData);
        res.status(200).json({
            error: false,
            message: "Order updated successfully"
        });
    } catch (error) {
        console.log(error, "error on update order");
        res.status(500).json({
            error: {
                message: error.message
            }
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,684,96,5,554,657], () => (__webpack_exec__(9367)));
module.exports = __webpack_exports__;

})();