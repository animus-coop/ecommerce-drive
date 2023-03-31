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

/***/ 9231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _svg_CartIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(428);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _QuantityControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ProductCard = ({ item , addProduct  })=>{
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
            css: {
                margin: 0,
                letterSpacing: 0
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
                className: "product-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
                        gap: 1,
                        justify: "space-around",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    objectFit: "contain",
                                    src: item.picture
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                xs: 8,
                                className: "details-container",
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-name",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-reference",
                                        children: item.minimum
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        className: "product-supplier",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFaceLaughBeam
                                            }),
                                            item.seller
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                sm: 7,
                                xs: 7,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                className: "product-quantity",
                                justify: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuantityControls__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    qty: quantity,
                                    addProduct: ()=>{
                                        setQuantity((prev)=>prev + 1
                                        );
                                    },
                                    deleteProduct: ()=>{
                                        if (quantity > 1) setQuantity((prev)=>prev - 1
                                        );
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                sm: 3,
                                xs: 3,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    onClick: ()=>{
                                        addProduct(item, quantity);
                                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warn("Agregado exitosamente", {
                                            autoClose: 1500,
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_CartIcon__WEBPACK_IMPORTED_MODULE_5__/* .CartIcon */ .w, {
                                                fill: "#EA903C",
                                                size: 24,
                                                width: 16,
                                                height: 16
                                            })
                                        });
                                    },
                                    className: "button-text",
                                    css: {
                                        backgroundColor: "#F29400",
                                        color: "black",
                                        fontWeight: 400
                                    },
                                    auto: true,
                                    flat: true,
                                    children: "Agregar"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _src_ssp_products__WEBPACK_IMPORTED_MODULE_12__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9231);
/* harmony import */ var _helpers_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(724);
/* harmony import */ var _components_navigation_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3883);
/* harmony import */ var _components_CategorySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1850);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8662);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8366);
/* harmony import */ var _components_ButtonCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3142);
/* harmony import */ var _src_hooks_debounceHook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(433);
/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9684);
/* harmony import */ var _src_ssp_products__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__, _helpers_notify__WEBPACK_IMPORTED_MODULE_7__, _src_ssp_products__WEBPACK_IMPORTED_MODULE_12__]);
([_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__, _helpers_notify__WEBPACK_IMPORTED_MODULE_7__, _src_ssp_products__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Products(props) {
    const cart = (0,_src_context__WEBPACK_IMPORTED_MODULE_11__/* .useAppCtx */ .rq)();
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
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const debouncedSearch1 = (0,_src_hooks_debounceHook__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(search, 750);
    const addProductToCart = (product, qty)=>{
        cart.addProduct({
            ...product,
            qty
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_helpers_notify__WEBPACK_IMPORTED_MODULE_7__/* .infoMessages */ .o)();
        (0,_helpers_content__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)().then((res)=>{
            setProducts(res.products);
            setTotalPages(res.totalPages);
            setLoading(false);
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
                                            addProduct: (product, qty)=>addProductToCart(product, qty)
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
            cart.products.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonCart__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1751);
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
        products: [],
        balance: 0,
        total: 0
    };
    if (user.logged) {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_services_OrderService__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
        const ModelResponse = await orderService.getUserOrder(user.email);
        const googleSheetInstance = new _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const loggedUser = users.find((matchingUser)=>matchingUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email
        );
        cart.balance = parseFloat(loggedUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
        if (ModelResponse) {
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
        }
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [531,366,251,386,22,507], () => (__webpack_exec__(3351)));
module.exports = __webpack_exports__;

})();