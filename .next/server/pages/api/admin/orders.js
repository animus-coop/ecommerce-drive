"use strict";
(() => {
var exports = {};
exports.id = 215;
exports.ids = [215];
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

/***/ 1858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postOrders)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7419);
/* harmony import */ var _src_services_OrderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9554);



async function postOrders(req, res) {
    const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_OrderService__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    if (req.method === "POST") {
        try {
            const ordersToPost = await orderService.getOrdersToPost();
            const googleService = new _src_services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("orders");
            await googleService.insertOnGoogleSheet(ordersToPost);
            await orderService.clearLocalOrders();
            res.status(200).json({
                success: true,
                error: false
            });
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        try {
            const currentOrders = await orderService.getCurrentOrders();
            res.status(200).json(currentOrders);
        } catch (error) {
            console.log(error, "Error saving order");
            res.status(500).json(error);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [684,96,74,554,419], () => (__webpack_exec__(1858)));
module.exports = __webpack_exports__;

})();