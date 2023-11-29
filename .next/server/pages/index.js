"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,777];
exports.modules = {

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cards_LoginCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/svg/GoogleIcon.tsx


const GoogleIcon = ({ height =48 , width =48  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            cursor: "pointer",
            display: "flex",
            alignSelf: "center",
            justifyItems: "center",
            alignContent: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            width: `${width}px`,
            height: `${height}px`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FFC107",
                    d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FF3D00",
                    d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#4CAF50",
                    d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#1976D2",
                    d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/cards/LoginCard.tsx




const LoginCard = ()=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        className: "login",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
            justify: "center",
            alignContent: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 12,
                    xl: 12,
                    css: {
                        zIndex: 9000
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: "/img/logoCoop.png",
                        alt: "Default Image"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 12,
                    xl: 3,
                    sm: 6,
                    md: 3,
                    lg: 3,
                    justify: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        className: "google-button",
                        onClick: ()=>{
                            setLoading(true);
                            location.href = "/api/login";
                        },
                        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Loading, {
                            color: "warning",
                            size: "sm"
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "button-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GoogleIcon, {
                                    width: 30,
                                    height: 30
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    style: {
                                        marginLeft: 5
                                    },
                                    children: "Ingres\xe1 con Google"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const cards_LoginCard = (LoginCard);


/***/ }),

/***/ 8701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2235);



const MessageCard = ({ status  })=>{
    const FechaHora = `${(0,_helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__/* .getDayFromDate */ .f)(status.openDate)} a las ${(0,_helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__/* .getTimeFromDate */ .D)(status.openDate)}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "message-card-container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            fluid: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
                    css: {
                        height: "40vh",
                        background: "none"
                    },
                    children: " "
                }),
                status.status === "open" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        h1: true,
                        css: {
                            color: "white"
                        },
                        children: [
                            "\xbfYa hiciste tu pedido de este mes?",
                            " "
                        ]
                    })
                }) : status.status === "toOpen" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        h1: true,
                        css: {
                            color: "white"
                        },
                        children: [
                            "El carrito abre el ",
                            FechaHora
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            h1: true,
                            css: {
                                color: "white"
                            },
                            children: [
                                "El carrito ya est\xe1 cerrado.",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            h4: true,
                            css: {
                                color: "white"
                            },
                            children: [
                                "Nos vemos la pr\xf3xima semana.",
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageCard);


/***/ }),

/***/ 2235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getTimeFromDate),
/* harmony export */   "f": () => (/* binding */ getDayFromDate)
/* harmony export */ });
function getDayFromDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    let formattedDay = day.toString();
    const month = date.getUTCMonth() + 1;
    let formattedMonth = month.toString();
    if (formattedDay.length === 1) {
        formattedDay = "0" + formattedDay;
    }
    if (formattedMonth.length === 1) {
        formattedMonth = "0" + formattedMonth;
    }
    return `${formattedDay}/${formattedMonth}`;
}
function getTimeFromDate(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours().toString();
    if (hours.length === 1) {
        hours = "0" + hours;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
}


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _src_ssp_index__WEBPACK_IMPORTED_MODULE_7__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8366);
/* harmony import */ var _components_cards_LoginCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(261);
/* harmony import */ var _components_cards_MessageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8701);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8662);
/* harmony import */ var _src_ssp_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4166);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_notify__WEBPACK_IMPORTED_MODULE_6__, _src_ssp_index__WEBPACK_IMPORTED_MODULE_7__]);
([_helpers_notify__WEBPACK_IMPORTED_MODULE_6__, _src_ssp_index__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Home(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        (0,_helpers_notify__WEBPACK_IMPORTED_MODULE_6__/* .infoMessages */ .o)();
        if (props.user.logged && props.cartStatus.status === "open") {
            router.push("/products");
        }
    }, []);
    const RenderComponent = ()=>{
        if (!props.user.logged) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_LoginCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_MessageCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            status: props.cartStatus
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props,
        children: RenderComponent()
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3507);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4014);
/* harmony import */ var _utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5869);
/* harmony import */ var _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3506);
/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8057);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_2__, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__]);
([iron_session__WEBPACK_IMPORTED_MODULE_2__, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getServerSideProps(context) {
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_services_ConfigService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    const getIsOpen = await configService.getCartStatus();
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_2__.getIronSession)(context.req, context.res, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_3__/* .sessionOptions */ .d);
    const cart = {
        products: [],
        productsToDelete: [],
        balance: 0,
        total: 0
    };
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
    if (ironSession.user && getIsOpen.status === "open") {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_services_OrderService__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
        const ModelResponse = await orderService.getUserOrder(ironSession.user.email);
        const googleSheetInstance = new _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const loggedUser = users.find((matchingUser)=>matchingUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === ironSession.user.email
        );
        cart.balance = parseFloat(loggedUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
        if (ModelResponse) {
            cart.products = ModelResponse.products.map(({ code , name , price , minimum , qty , total , picture  })=>({
                    code,
                    name,
                    price,
                    minimum,
                    qty,
                    unsavedQty: 0,
                    total,
                    picture
                })
            );
            cart.total = cart.products.reduce((total, product)=>total + product.total
            , 0);
        }
        return {
            redirect: {
                permanent: false,
                destination: "/products"
            },
            props: {
                cart,
                user: {
                    logged: false
                }
            }
        };
    }
    const user = ironSession.user ?? {
        logged: false
    };
    return {
        props: {
            cartStatus: getIsOpen,
            user,
            cart
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [531,366,433,507], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();