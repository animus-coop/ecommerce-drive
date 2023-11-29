"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_ProductService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2005);


async function getProducts(req, res) {
    const productService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_src_services_ProductService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    try {
        if (req.query.codes) {
            // @ts-ignore
            let codes = req.query.codes.split(",");
            if (codes.length === 0 || !Array.isArray(codes)) {
                return res.status(400).json({
                    error: true,
                    message: "INVALID_CODES"
                });
            }
            codes = codes.map((code)=>Number(code)
            );
            const products = await productService.getProductsByCode(codes);
            return res.status(200).json({
                products
            });
        }
        const { search , category , page  } = req.query;
        if (search) {
            const products = await productService.searchProduct(search, category);
            return res.status(200).json({
                products
            });
        }
        const pageNumber = Number(page);
        if (isNaN(pageNumber) || pageNumber <= 0) {
            return res.status(400).json({
                error: true,
                message: "INVALID_PAGE"
            });
        }
        const result = await productService.get(category, pageNumber);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [684,96,5], () => (__webpack_exec__(553)));
module.exports = __webpack_exports__;

})();