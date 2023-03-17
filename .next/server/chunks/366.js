"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/navigation/Footer.tsx



const Footer = ()=>{
    const today = new Date();
    const year = today.getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                className: "footer-container",
                gap: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        xs: 12,
                        sm: 12,
                        md: 3,
                        lg: 4,
                        xl: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            width: 200,
                            src: "/../../img/almargen.png"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        xs: 12,
                        sm: 12,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                            className: "footer-text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    className: "footer-title",
                                    children: "\xbfC\xf3mo funciona?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "El lunes a las 20 hs cierra el carrito y enviamos el pedido a los distintos proveedores."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "El pr\xf3ximo viernes pod\xe9s retirar tu pedido en el local de Ruiz Moreno 960 en los horarios informados en el mail y en el grupo de WhatsApp."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        xs: 12,
                        sm: 12,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                            css: {
                                display: "block"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    className: "footer-title",
                                    children: "Contactanos"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "Por dudas o consultas de tus pedidos pod\xe9s escribirnos a comprascomunitariasalmargen@gmail.com o contactarte con cualquiera de los referentes del grupo."
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-last-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                    className: "footer-text-copy",
                    children: [
                        "\xa9 Copyright - ",
                        year,
                        " Al Margen compras comunitarias"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const navigation_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/layout.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "AlMargen | Del otro lado de tu mesa"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(navigation_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;