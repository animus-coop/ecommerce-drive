"use strict";
exports.id = 946;
exports.ids = [946];
exports.modules = {

/***/ 5634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const QuantityControls = ({ increaseQty , decreaseQty , qty , moreAvailable  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product-quantity",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "quantity-button",
                onClick: decreaseQty,
                children: "-"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity",
                children: qty
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: !moreAvailable,
                className: `quantity-button ${!moreAvailable && "unavailable"}`,
                onClick: increaseQty,
                children: "+"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantityControls);


/***/ }),

/***/ 5604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fc": () => (/* binding */ confirmProductDeletionAlert),
/* harmony export */   "n2": () => (/* binding */ noStockAlert),
/* harmony export */   "pk": () => (/* binding */ multipleProductsNoStockAlert),
/* harmony export */   "ub": () => (/* binding */ confirmOrderDeletionAlert)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

function noStockAlert(currentStock, unsavedQty, redirectToCart) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        showCancelButton: unsavedQty > 0,
        confirmButtonText: "Ok",
        confirmButtonColor: "#db8704",
        cancelButtonText: "Ver mi pedido",
        icon: "warning",
        title: "No hay suficiente stock para agregar esa cantidad a tu carrito",
        html: `
        ${unsavedQty > 0 && unsavedQty <= currentStock ? `<b>Recordá que tenes ${unsavedQty} unidad${unsavedQty > 1 ? "es" : ""} de este producto en tu carrito sin guardar</b>` : ""}
        ${unsavedQty > 0 && unsavedQty > currentStock ? `
            Tenés ${unsavedQty} unidad${unsavedQty > 1 ? "es" : ""} de este producto sin guardar en tu carrito, que por falta de stock ya no están disponibles.
            Recordá guardar tu orden después de agregar los productos que necesites
            ` : ""}`,
        footer: `${unsavedQty > currentStock ? "Esto puede deberse a que otro usuario guard\xf3 el producto en su carrito que vos. Sentimos las molestias" : ""}`
    }).then((result)=>{
        if (result.isDismissed) {
            redirectToCart();
        }
    });
}
function multipleProductsNoStockAlert(products) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        confirmButtonText: "Ok",
        confirmButtonColor: "#db8704",
        icon: "warning",
        title: "Algunos de los productos que hab\xedas agregado a tu carrito ya no tienen stock. Revis\xe1 su cantidad",
        html: `
        <ul>
            ${products.map((product)=>{
            return `<li>${product.name}: Quedan ${product.stock} disponibles y tenés ${product.unsavedQty} sin guardar</li>`;
        }).join("")}
        `
    });
}
function confirmProductDeletionAlert(product, onConfirm) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        html: `¿Estás seguro que querés eliminar todas las unidades de "${product.name}" de tu carrito?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#db8704",
        cancelButtonColor: "#d33",
        confirmButtonText: "S\xed, eliminar",
        cancelButtonText: "Cancelar",
        footer: "Record\xe1 que para hacer efectivos los cambios ten\xe9s que guardar tu pedido nuevamente"
    }).then((result)=>{
        if (result.isConfirmed) {
            onConfirm();
        }
    });
}
function confirmOrderDeletionAlert(onConfirm) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: `¿Estás seguro que querés cancelar tu pedido?`,
        html: `Si lo hacés, vas a perder todos los productos que agregaste a tu carrito`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#db8704",
        cancelButtonColor: "#d33",
        confirmButtonText: "S\xed, cancelar",
        cancelButtonText: "No, volver"
    }).then((result)=>{
        if (result.isConfirmed) {
            onConfirm();
        }
    });
}


/***/ })

};
;