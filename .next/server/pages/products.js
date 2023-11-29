"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345,777];
exports.modules = {

/***/ 3142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_CartIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(428);





const ButtonCart = ({ cart  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-floating",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: ()=>router.push("cart")
            ,
            size: "xs",
            className: "button-floating",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "button-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cart-total",
                        children: [
                            "$ ",
                            cart.total,
                            "  No olvides confirmar tu compra entrando aqu\xed!"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                        color: "warning",
                        size: "sm",
                        content: cart.products.length,
                        shape: "circle",
                        onClick: ()=>router.push("/cart")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CartIcon__WEBPACK_IMPORTED_MODULE_4__/* .CartIcon */ .w, {
                            fill: "white",
                            size: 24,
                            width: 24,
                            height: 24,
                            onClick: ()=>router.push("/cart")
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonCart);


/***/ }),

/***/ 1850:
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



const CategorySelector = ({ categories , category , setCategory  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "selector-container",
        children: categories.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
            triggerType: "listbox",
            disableTriggerPressedAnimation: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Button, {
                    className: "selector",
                    children: category.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                    "aria-label": "Dynamic Actions",
                    items: categories,
                    css: {
                        width: 1500
                    },
                    selectedKeys: category.key,
                    onAction: (val)=>{
                        setCategory(categories.find((option)=>option.key === val
                        ));
                    },
                    children: categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                            color: item.key === "delete" ? "error" : "default",
                            children: item.name
                        }, item.key)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySelector);


/***/ }),

/***/ 9989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cards_ProductCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/QuantityControls.tsx
var QuantityControls = __webpack_require__(5634);
;// CONCATENATED MODULE: ./components/StockBadge.tsx


const StockBadge = ({ stock: stock1 , getStockBadgeText  })=>{
    const getDefaultStockBadgeText = (stock)=>{
        if (stock === 0) return "Sin stock";
        if (stock === null || stock > 10) return "Stock disponible";
        return `Última${stock === 1 ? " unidad" : `s ${stock} unidades`}!`;
    };
    const getStockBadgeColor = (stock)=>{
        if (stock === 0) return "error";
        if (stock === null || stock > 10) return "success";
        return "warning";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Badge, {
        color: getStockBadgeColor(stock1),
        className: "info-badge",
        children: getStockBadgeText ? getStockBadgeText(stock1) : getDefaultStockBadgeText(stock1)
    });
};
/* harmony default export */ const components_StockBadge = (StockBadge);

;// CONCATENATED MODULE: ./components/cards/ProductCard.tsx







const ProductCard = ({ item , addProduct  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    const { 0: moreAvailable , 1: setMoreAvailable  } = (0,external_react_.useState)(item.stock !== 0);
    (0,external_react_.useEffect)(()=>{
        if (item.stock !== null && quantity >= item.stock) setMoreAvailable(false);
        else setMoreAvailable(true);
    }, [
        quantity
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card, {
            css: {
                margin: 0,
                letterSpacing: 0
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card.Body, {
                className: `product-container ${item.stock === 0 && "unavailable"}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                        gap: 1,
                        justify: "space-around",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                xs: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                    objectFit: "contain",
                                    src: item.picture
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                xs: 8,
                                className: "details-container",
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "product-name",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "product-reference",
                                        children: item.minimum
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        className: "product-supplier",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                icon: free_solid_svg_icons_.faFaceLaughBeam
                                            }),
                                            item.seller
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        className: "product-price",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                        align: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                sm: 7,
                                xs: 7,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                direction: "column",
                                justify: "center",
                                alignItems: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_StockBadge, {
                                            stock: item.stock
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(QuantityControls/* default */.Z, {
                                            qty: quantity,
                                            moreAvailable: moreAvailable,
                                            increaseQty: ()=>{
                                                if (!moreAvailable) return;
                                                setQuantity((prev)=>prev + 1
                                                );
                                            },
                                            decreaseQty: ()=>{
                                                if (quantity > 1) setQuantity((prev)=>prev - 1
                                                );
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                sm: 3,
                                xs: 3,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    disabled: item.stock === 0 || loading,
                                    onClick: ()=>{
                                        addProduct(item, quantity, setLoading);
                                        setQuantity(1);
                                    },
                                    className: "button-text",
                                    css: {
                                        backgroundColor: "#F29400",
                                        color: "black",
                                        fontWeight: 400
                                    },
                                    auto: true,
                                    flat: true,
                                    children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Loading, {}) : "Agregar"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const cards_ProductCard = (ProductCard);


/***/ }),

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "Xp": () => (/* binding */ getProducts)
/* harmony export */ });
/* unused harmony exports getCartStatus, getOrdersToPost */
/* harmony import */ var _src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3382);

const getProducts = async (page = 1, category = "", search = "")=>{
    return await (0,_src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_0__/* .Fetch */ .U)({
        url: `/api/products`,
        query: {
            category,
            search,
            page
        }
    });
};
const getCategories = async ()=>{
    return await (0,_src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_0__/* .Fetch */ .U)({
        url: "/api/categories"
    });
};
const getCartStatus = async ()=>{
    return await Fetch({
        url: "/api/cart/status"
    });
};
const getOrdersToPost = async ()=>{
    return await Fetch({
        url: "/api/admin/orders/to-post"
    });
};


/***/ }),

/***/ 3351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _src_ssp_products__WEBPACK_IMPORTED_MODULE_18__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9989);
/* harmony import */ var _helpers_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(724);
/* harmony import */ var _components_navigation_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3883);
/* harmony import */ var _components_CategorySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1850);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8662);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8366);
/* harmony import */ var _components_ButtonCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3142);
/* harmony import */ var _src_hooks_debounceHook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(433);
/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9684);
/* harmony import */ var _src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3382);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3590);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _helpers_products__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6457);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2122);
/* harmony import */ var _components_svg_CartIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(428);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_ssp_products__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_notify__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_13__, _src_ssp_products__WEBPACK_IMPORTED_MODULE_18__]);
([_helpers_notify__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_13__, _src_ssp_products__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















function mapErrors(error) {
    if (error.message === "PRODUCT_STOCK_NOT_ENOUGH") {
        return "No hay suficiente products.ts para este producto";
    }
    return "Algo sali\xf3 mal, por favor intente nuevamente";
}
function Products(props) {
    const cart = (0,_src_context__WEBPACK_IMPORTED_MODULE_11__/* .useAppCtx */ .rq)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    const redirectToCart = ()=>{
        router.push("/cart");
    };
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            key: "",
            name: "Todas las categor\xedas"
        }
    ]);
    const { 0: category1 , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        key: "",
        name: "Todas las categor\xedas"
    });
    const { 0: totalPages , 1: setTotalPages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: loading , 1: setLoading1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const debouncedSearch1 = (0,_src_hooks_debounceHook__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(search, 750);
    const addProduct = async (productToAdd, setLoading)=>{
        setLoading(true);
        (0,_src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_12__/* .Fetch */ .U)({
            url: `/api/products/${productToAdd.code}`,
            onSuccess: ({ product  })=>{
                const unsavedQty = cart.getUnsavedQtyForProduct(productToAdd.code);
                if (!(0,_helpers_products__WEBPACK_IMPORTED_MODULE_19__/* .productHasEnoughStock */ .t)(product, productToAdd.qty + unsavedQty)) {
                    fetchData(currentPage, category1, debouncedSearch1);
                    (0,_helpers_alerts__WEBPACK_IMPORTED_MODULE_15__/* .noStockAlert */ .n)(product.stock, unsavedQty, redirectToCart);
                    return;
                }
                cart.addProduct(productToAdd);
                react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.warn(`El producto se agregó al carrito`, {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_svg_CartIcon__WEBPACK_IMPORTED_MODULE_16__/* .CartIcon */ .w, {
                        fill: "#EA903C",
                        size: 24,
                        width: 16,
                        height: 16
                    })
                });
            },
            onError: (e)=>{
                console.log("ERROR", e);
                sweetalert2__WEBPACK_IMPORTED_MODULE_14___default().fire({
                    icon: "error",
                    title: "Algo sali\xf3 mal",
                    text: mapErrors(e)
                });
                fetchData(currentPage, category1, debouncedSearch1);
            },
            onFinally: ()=>setLoading(false)
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_helpers_notify__WEBPACK_IMPORTED_MODULE_7__/* .infoMessages */ .o)();
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)().then((res)=>{
            setProducts(res.products);
            setTotalPages(res.totalPages);
            setLoading1(false);
        });
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getCategories */ .CP)().then((res)=>{
            let categoriesParsed = [];
            res.map((category)=>categoriesParsed.push({
                    key: category.slug,
                    name: category.name
                })
            );
            setCategories([
                {
                    key: "",
                    name: "Todas las categor\xedas"
                },
                ...categoriesParsed
            ]);
        });
    }, []);
    const fetchData = (page, category, debouncedSearch)=>{
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)(page, category.key, debouncedSearch).then((res)=>{
            setCurrentPage(page);
            setTotalPages(res.totalPages);
            setProducts(res.products);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCurrentPage(1);
        fetchData(1, category1, debouncedSearch1);
    }, [
        category1,
        debouncedSearch1
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Eleg\xed el rubro y encontr\xe1 tus productos",
                user: props.user,
                cart: cart
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                css: {
                    backgroundColor: "#fff",
                    maxWidth: "1260px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        css: {
                            backgroundColor: "transparent",
                            marginTop: "-1.4rem"
                        },
                        className: "search-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                placeholder: "Busc\xe1 un producto...",
                                clearable: true,
                                fullWidth: true,
                                className: "input-search",
                                onChange: (e)=>setSearch(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CategorySelector__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                categories: categories,
                                setCategory: (val)=>setCategory(val)
                                ,
                                category: category1
                            })
                        ]
                    }),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Loading, {
                        className: "loading-text-container",
                        color: "warning",
                        children: "Cargando..."
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                                gap: 1,
                                css: {
                                    padding: 0,
                                    backgroundColor: "#fff"
                                },
                                children: products && products.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 4,
                                        xl: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            addProduct: (product, qty, setLoading)=>addProduct({
                                                    ...product,
                                                    qty
                                                }, setLoading)
                                            ,
                                            item: item
                                        }, item.code)
                                    }, item.code)
                                )
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                                gap: 2,
                                css: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    justify: "center",
                                    md: 12,
                                    lg: 12,
                                    xl: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                                        className: "paginator",
                                        initialPage: 1,
                                        total: totalPages,
                                        onChange: (page)=>fetchData(page, category1, debouncedSearch1)
                                        ,
                                        color: "warning",
                                        page: currentPage
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            cart.products.length > 0 && cart.hasUnsavedChanges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonCart__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                cart: cart
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
    const { 0: debouncedValue , 1: setDebouncedValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
};


/***/ }),

/***/ 4451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5869);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3507);
/* harmony import */ var _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3506);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4014);
/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8057);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__, iron_session__WEBPACK_IMPORTED_MODULE_4__]);
([_utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__, iron_session__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getServerSideProps(context) {
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_services_ConfigService__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const getIsOpen = await configService.getCartStatus();
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_4__.getIronSession)(context.req, context.res, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_0__/* .sessionOptions */ .d);
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
    if (getIsOpen.status !== "open" || !ironSession.user) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            },
            props: {}
        };
    }
    const user = ironSession.user ?? {
        logged: false
    };
    const cart = {
        balance: 0,
        products: [],
        productsToDelete: [],
        total: 0
    };
    let orderId = null;
    if (user.logged) {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_services_OrderService__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
        const ModelResponse = await orderService.getUserOrder(user.email);
        const googleSheetInstance = new _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const loggedUser = users.find((matchingUser)=>matchingUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email
        );
        cart.balance = parseFloat(loggedUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
        if (ModelResponse) {
            orderId = ModelResponse._id.toString();
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
    }
    return {
        props: {
            cartStatus: getIsOpen,
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

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

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
var __webpack_exports__ = __webpack_require__.X(0, [531,366,433,382,22,883,507,441], () => (__webpack_exec__(3351)));
module.exports = __webpack_exports__;

})();