"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190,777];
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



const QuantityControls = ({ addProduct , deleteProduct , qty  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity-border",
                onClick: deleteProduct,
                children: "-"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity",
                children: qty
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity-border",
                onClick: addProduct,
                children: "+"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantityControls);


/***/ }),

/***/ 1683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _QuantityControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5634);






const ProductDetailCard = ({ product , deleteProduct , updateProduct  })=>{
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product.qty);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Container, {
        className: "product-cart",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                xs: 4,
                className: "product-image-container",
                justify: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                    src: product.picture,
                    css: {
                        size: "$20"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                xs: 8,
                className: "product-info",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "title-buttons",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        className: "product-name",
                                        children: product.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        className: "product-description",
                                        children: product.minimum
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-buttons",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuantityControls__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    qty: quantity,
                                    addProduct: ()=>{
                                        setQuantity((prev)=>prev + 1
                                        );
                                        updateProduct(product, quantity + 1);
                                    },
                                    deleteProduct: ()=>{
                                        if (quantity > 1) {
                                            setQuantity((prev)=>prev - 1
                                            );
                                            updateProduct(product, quantity - 1);
                                        }
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "button-price",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                style: {
                                    cursor: "pointer"
                                },
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrash,
                                onClick: ()=>deleteProduct(product)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                className: "product-price",
                                children: [
                                    "$",
                                    product.total.toFixed(2)
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailCard);


/***/ }),

/***/ 3804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);



const TotalCart = ({ total , balance =0  })=>{
    const contableTotal = total + balance;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "total-cart",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "total-items",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        className: "items-text",
                        children: "Subtotal"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        className: "items-text",
                        children: [
                            "$",
                            total.toFixed(2)
                        ]
                    })
                ]
            }),
            balance != 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "total-items",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        className: "items-text",
                        children: "Saldo"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        className: "items-text",
                        children: [
                            "$",
                            balance.toFixed(2)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "total-items",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        className: "total-text",
                        children: "Total"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        className: "total-text",
                        children: [
                            "$",
                            contableTotal.toFixed(2)
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalCart);


/***/ }),

/***/ 1404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _src_ssp_cart__WEBPACK_IMPORTED_MODULE_14__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8366);
/* harmony import */ var _components_navigation_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3883);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cards_ProductDetailCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1683);
/* harmony import */ var _components_cards_TotalCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3804);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8662);
/* harmony import */ var _src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3382);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9684);
/* harmony import */ var _src_ssp_cart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_notify__WEBPACK_IMPORTED_MODULE_8__, react_toastify__WEBPACK_IMPORTED_MODULE_10__, _src_ssp_cart__WEBPACK_IMPORTED_MODULE_14__]);
([_helpers_notify__WEBPACK_IMPORTED_MODULE_8__, react_toastify__WEBPACK_IMPORTED_MODULE_10__, _src_ssp_cart__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Cart(props) {
    const isEditingOrder = props.orderId !== null;
    const cart = (0,_src_context__WEBPACK_IMPORTED_MODULE_13__/* .useAppCtx */ .rq)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        (0,_helpers_notify__WEBPACK_IMPORTED_MODULE_8__/* .infoMessages */ .o)();
    }, []);
    const sendOrder = async ()=>{
        if (!cart.products.length) {
            console.warn(`No puedes actualizar tu orden sin productos`);
            return;
        }
        (0,_src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_9__/* .Fetch */ .U)({
            url: `/api/orders${isEditingOrder ? `/${props.orderId}` : ""}`,
            method: `${isEditingOrder ? "PUT" : "POST"}`,
            data: {
                products: cart.products,
                balance: cart.balance,
                total: cart.total
            },
            onSuccess: ()=>{
                router.push("/#orderstored");
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.warn(`Su pedido se ha ${isEditingOrder ? "modificado" : "realizado"} con éxito`, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCheckCircle,
                        color: "#EA903C"
                    })
                });
            },
            onError: (e)=>{
                console.warn(`error on saving order`, e);
            }
        });
    };
    const cancelOrder = async ()=>{
        if (!isEditingOrder) {
            console.warn(`No puedes cancelar una orden si no existe`);
            return;
        }
        (0,_src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_9__/* .Fetch */ .U)({
            url: `/api/orders/cancel`,
            method: "DELETE",
            data: {
                orderId: props.orderId
            },
            onSuccess: ()=>{
                router.push("/");
                cart.clearProducts();
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.warn(`Su pedido se ha cancelado con éxito`, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCheckCircle,
                        color: "#EA903C"
                    })
                });
            },
            onError: (e)=>{
                console.warn(`error on deleting order`, e);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props,
        children: props.user.logged && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    user: props.user,
                    title: isEditingOrder ? "Edita tu pedido" : "Tu carrito",
                    cart: cart
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    className: "cart-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Container, {
                        justify: "center",
                        gap: 2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            direction: "column",
                            xs: 12,
                            sm: 10,
                            md: 7,
                            lg: 6,
                            xl: 4,
                            children: [
                                cart.products.map((product1)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_ProductDetailCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        deleteProduct: (product)=>cart.deleteProduct(product)
                                        ,
                                        updateProduct: (product, qty)=>cart.updateProduct({
                                                ...product,
                                                qty
                                            })
                                        ,
                                        product: product1
                                    }, product1.code)
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_TotalCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    total: cart.total,
                                    balance: cart.balance
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    disabled: cart.products.length < 0,
                                    className: `${cart.products.length > 0 ? "button-total" : "button-total-disabled"}`,
                                    onClick: sendOrder,
                                    children: isEditingOrder ? "Modificar pedido" : "Realizar pedido"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    className: "button-continue",
                                    onClick: ()=>{
                                        router.push("/");
                                    },
                                    children: "Seguir comprando"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    disabled: !isEditingOrder,
                                    className: `${isEditingOrder ? "button-cancel" : "button-cancel-disabled"}`,
                                    onClick: cancelOrder,
                                    children: "Cancelar pedido"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4014);
/* harmony import */ var _utils_withIronSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5869);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1751);
/* harmony import */ var _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3506);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_1__]);
([iron_session__WEBPACK_IMPORTED_MODULE_0__, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function getServerSideProps(context) {
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(context.req, context.res, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d);
    const user = ironSession.user ?? {
        logged: false
    };
    const cart = {
        products: [],
        balance: 0,
        total: 0
    };
    let orderId = null;
    if (ironSession.user && !ironSession.user.id) {
        context.req.session.destroy();
        return {
            redirect: {
                permanent: false,
                destination: "/"
            },
            props: {}
        };
    }
    if (user.logged) {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_2__.container.resolve(_services_OrderService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
        const ModelResponse = await orderService.getUserOrder(user.email);
        const googleSheetInstance = new _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const loggedUser = users.find((matchingUser)=>matchingUser[_constants_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email
        );
        cart.balance = parseFloat(loggedUser[_constants_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
        if (ModelResponse) {
            orderId = ModelResponse._id.toString();
            cart.products = ModelResponse.products.map(({ code , name , price , minimum , qty , total , picture  })=>({
                    code,
                    name,
                    price,
                    minimum,
                    qty,
                    total,
                    picture
                })
            );
            cart.total = cart.products.reduce((total, product)=>total + product.total
            , 0);
            cart.balance = parseFloat(loggedUser[_constants_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/login"
            },
            props: {
                cart
            }
        };
    }
    return {
        props: {
            user,
            cart,
            orderId
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531,366,251,386,22], () => (__webpack_exec__(1404)));
module.exports = __webpack_exports__;

})();