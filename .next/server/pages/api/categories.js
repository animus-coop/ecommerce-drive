"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2102);


async function getCategories(req, res) {
    const categoryService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_CategoryService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    try {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            error: error.jsonOutPut()
        });
    }
};


/***/ }),

/***/ 8646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiException extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ApiException.prototype);
    }
    jsonOutPut() {
        return {
            error: true,
            message: this.message
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiException);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [684,96,102], () => (__webpack_exec__(5542)));
module.exports = __webpack_exports__;

})();