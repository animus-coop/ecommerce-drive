"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964,777];
exports.modules = {

/***/ 3735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_CartDatesForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/fetchHook.ts
var fetchHook = __webpack_require__(3382);
;// CONCATENATED MODULE: ./src/hooks/formHook.ts

function useFormValidation(form) {
    const { 0: fields , 1: setFields  } = (0,external_react_.useState)(form);
    const setValue = (property, value)=>{
        setFields({
            ...fields,
            [property]: value
        });
    };
    const validateFields = (messages)=>{
        let errors = {};
        Object.keys(fields).forEach((field)=>{
            if (!fields[field]) {
                errors = {
                    ...errors,
                    [field]: `${messages[field]}`
                };
            }
        });
        return Object.keys(errors).length > 0 ? errors : false;
    };
    return {
        ...fields,
        setValue,
        validateFields,
        fields
    };
}

;// CONCATENATED MODULE: ./helpers/date.ts
/* Formating Date*/ const formatDate = (date)=>{
    date.setSeconds(0, 0);
    return date.toISOString().replace(/:00.\d+Z$/g, "");
};
/* Function to get Close Date*/ const getMinCloseDate = (date)=>{
    if (!date) {
        return "";
    }
    let minDate = new Date(date);
    minDate.setDate(minDate.getDate() + 1);
    return formatDate(minDate);
};

;// CONCATENATED MODULE: ./components/admin/CartDatesForm.tsx






const initialFormFields = {
    openDate: "",
    closeDate: ""
};
const initialFormErrors = {};
const CartDatesForm = ({ setEditing , setCurrentStatus  })=>{
    const form = useFormValidation(initialFormFields);
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)(initialFormErrors);
    const { 0: fetching , 1: setFetching  } = (0,external_react_.useState)({
        error: null,
        loading: false,
        done: false
    });
    const today = formatDate(new Date());
    const handleChangeField = (e, property)=>{
        const value = e.target.value;
        form.setValue(property, value);
    };
    const submitDates = ()=>{
        setFetching({
            error: null,
            done: false,
            loading: true
        });
        (0,fetchHook/* Fetch */.U)({
            url: "/api/admin/cart/dates",
            method: "POST",
            data: {
                ...form.fields,
                openDate: form.fields.openDate.replace(".000Z", ""),
                closeDate: form.fields.closeDate.replace(".000Z", "")
            },
            onSuccess: (response)=>{
                setCurrentStatus(response);
                setFetching({
                    error: null,
                    loading: false,
                    done: true
                });
            },
            onError: (e)=>setFetching({
                    error: "Ocurri\xf3 un error enviando las fechas",
                    loading: false,
                    done: true
                })
        });
        setEditing(false);
    };
    const validate = ()=>{
        let localErrors = form.validateFields({
            openDate: "Debe ingresar una fecha de apertura",
            closeDate: "Debe ingresar una fecha de cierre"
        });
        const validateIntervalDates = new Date(form.closeDate) <= new Date(form.openDate);
        if (localErrors || validateIntervalDates) {
            setErrors(localErrors ?? {
                openDate: "La fecha de cierre debe ser mayor que la de apertura"
            });
        }
        return !localErrors;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                gap: 3,
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                type: "datetime-local",
                                label: "Fecha y hora de apertura",
                                min: today,
                                value: form.openDate,
                                onChange: (e)=>handleChangeField(e, "openDate")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                color: "error",
                                children: errors.openDate ?? ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                type: "datetime-local",
                                label: "Fecha y hora de cierre",
                                disabled: form.openDate === "",
                                min: getMinCloseDate(form.openDate),
                                value: form.closeDate,
                                onChange: (e)=>handleChangeField(e, "closeDate")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                color: "error",
                                children: errors.closeDate ?? ""
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                onClick: ()=>setEditing(false)
                ,
                className: fetching.loading ? "button-total-disabled" : "button-cancel",
                children: "Cancelar"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                onClick: ()=>validate() && submitDates()
                ,
                className: fetching.loading ? "button-total-disabled" : "button-total",
                children: "Confirmar"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                gap: 2,
                direction: "column",
                justify: "center",
                children: [
                    fetching.loading && /*#__PURE__*/ jsx_runtime_.jsx(react_.Loading, {
                        color: "warning"
                    }),
                    fetching.done && fetching.error && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: fetching.error
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const admin_CartDatesForm = (CartDatesForm);


/***/ }),

/***/ 7866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2235);



const CurrentStatus = ({ status , setEditing  })=>{
    const statusToText = {
        open: "Abierto",
        toOpen: "Abre pronto",
        closed: "Cerrado"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Container, {
            justify: "center",
            direction: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h3: true,
                    children: "Estado actual del carrito"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    h4: true,
                    children: statusToText[status.status]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: [
                            "Abre: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: (0,_helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__/* .getDayFromDate */ .f)(status.openDate)
                            }),
                            " a las",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: (0,_helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__/* .getTimeFromDate */ .D)(status.openDate)
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: [
                            "Cierra: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: (0,_helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__/* .getDayFromDate */ .f)(status.closeDate)
                            }),
                            " a las",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: (0,_helpers_formatDate__WEBPACK_IMPORTED_MODULE_2__/* .getTimeFromDate */ .D)(status.closeDate)
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: ()=>setEditing(true)
                    ,
                    className: "button-total",
                    children: "Editar fechas"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentStatus);


/***/ }),

/***/ 8728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_OrdersCount)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/fetchHook.ts
var fetchHook = __webpack_require__(3382);
;// CONCATENATED MODULE: ./components/admin/CustomModal.tsx



const CustomModal = ({ visible , close , onConfirm  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
        closeButton: true,
        "aria-labelledby": "modal-title",
        open: visible,
        onClose: close,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Modal.Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    id: "modal-title",
                    size: 18,
                    children: "\xbfDesea enviar todos los pedidos al Excel?"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                css: {
                    padding: 10
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    size: 16,
                    children: "Los pedidos enviados ya no ser\xe1n accesibles para los usuarios."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal.Footer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        flat: true,
                        color: "error",
                        onClick: close,
                        children: "Cancelar"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        onClick: ()=>{
                            close();
                            onConfirm();
                        },
                        children: "Enviar Pedidos"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const admin_CustomModal = (CustomModal);

;// CONCATENATED MODULE: ./components/admin/OrdersCount.tsx





const OrdersCount = ({ ordersCount , setOrdersCount , status  })=>{
    const { 0: fetching , 1: setFetching  } = (0,external_react_.useState)({
        error: null,
        loading: false,
        done: false
    });
    const { 0: visibleModal , 1: setVisibleModal  } = (0,external_react_.useState)(false);
    const postOrdersOnSheets = async ()=>{
        (0,fetchHook/* Fetch */.U)({
            url: "/api/admin/orders",
            method: "POST",
            onSuccess: ()=>{
                setOrdersCount(0);
                setFetching({
                    error: null,
                    loading: false,
                    done: true
                });
            },
            onError: ()=>{
                setFetching({
                    error: "Ocurri\xf3 un error enviando los pedidos",
                    loading: false,
                    done: true
                });
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                justify: "center",
                direction: "column",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        h3: true,
                        children: "Pedidos guardados hasta ahora (sin enviar)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        h2: true,
                        children: ordersCount
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        disabled: status === "open",
                        onClick: ()=>setVisibleModal(true)
                        ,
                        className: fetching.loading || status === "open" ? "button-total-disabled" : "button-total",
                        children: "Enviar pedidos"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(admin_CustomModal, {
                        visible: visibleModal,
                        close: ()=>setVisibleModal(false)
                        ,
                        onConfirm: postOrdersOnSheets
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                gap: 2,
                direction: "column",
                justify: "center",
                children: [
                    fetching.loading && /*#__PURE__*/ jsx_runtime_.jsx(react_.Loading, {
                        color: "warning"
                    }),
                    fetching.done && (fetching.error ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: "error",
                        children: fetching.error
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Pedidos enviados con \xe9xito"
                    }))
                ]
            })
        ]
    });
};
/* harmony default export */ const admin_OrdersCount = (OrdersCount);


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);


const OrderList = ({ orders  })=>{
    const total = orders.reduce((count, order)=>{
        count += order.total;
        return count;
    }, 0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table, {
            className: "orders-table",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Header, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Column, {
                            children: "Usuario"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Column, {
                            children: [
                                "Total de ordenes  $ ",
                                total
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Body, {
                    children: orders.map((order)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
                                    children: order.email
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {
                                    children: [
                                        "$ ",
                                        order.total
                                    ]
                                })
                            ]
                        }, order.email);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderList);


/***/ }),

/***/ 4368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const UpdateProductsBtn = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const updateProducts = ()=>{
        setLoading(true);
        (0,_src_hooks_fetchHook__WEBPACK_IMPORTED_MODULE_6__/* .Fetch */ .U)({
            url: "/api/admin/update-products",
            onSuccess: (response)=>{
                setLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn("Productos actualizados exitosamente", {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCheckCircle,
                        color: "#EA903C"
                    })
                });
            },
            onError: (e)=>{
                setLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Ocurri\xf3 un error actualizando los productos", {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCheckCircle,
                        color: "#EA903C"
                    })
                });
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: loading ? "button-total-disabled" : "button-total",
        onClick: updateProducts,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) : "Actualizar productos"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateProductsBtn);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _src_ssp_admin__WEBPACK_IMPORTED_MODULE_11__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8366);
/* harmony import */ var _components_navigation_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3883);
/* harmony import */ var _components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3735);
/* harmony import */ var _components_admin_OrdersCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8728);
/* harmony import */ var _components_admin_CurrentStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7866);
/* harmony import */ var _helpers_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8662);
/* harmony import */ var _components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(477);
/* harmony import */ var _components_admin_UpdateProductsBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4368);
/* harmony import */ var _src_ssp_admin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_notify__WEBPACK_IMPORTED_MODULE_8__, _components_admin_UpdateProductsBtn__WEBPACK_IMPORTED_MODULE_10__, _src_ssp_admin__WEBPACK_IMPORTED_MODULE_11__]);
([_helpers_notify__WEBPACK_IMPORTED_MODULE_8__, _components_admin_UpdateProductsBtn__WEBPACK_IMPORTED_MODULE_10__, _src_ssp_admin__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Admin({ orders , count , status , user  }) {
    const { 0: editingDates , 1: setEditingDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: ordersCount , 1: setOrdersCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(count);
    const { 0: currentStatus , 1: setCurrentStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(status);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(0,_helpers_notify__WEBPACK_IMPORTED_MODULE_8__/* .infoMessages */ .o)()
    , []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                user: user,
                title: "Panel de administrador"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Container, {
                        justify: "center",
                        alignItems: "center",
                        gap: 3,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_UpdateProductsBtn__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                xs: 12,
                                sm: 10,
                                md: 8,
                                lg: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_OrdersCount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ordersCount: ordersCount,
                                    setOrdersCount: setOrdersCount,
                                    status: status.status
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                xs: 12,
                                sm: 10,
                                md: 8,
                                lg: 6,
                                children: editingDates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CartDatesForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    setEditing: setEditingDates,
                                    setCurrentStatus: setCurrentStatus,
                                    initialStatus: currentStatus
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_CurrentStatus__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    status: currentStatus,
                                    setEditing: setEditingDates
                                })
                            })
                        ]
                    }),
                    ordersCount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_OrdersList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        orders: orders
                    }) : ""
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4014);
/* harmony import */ var _utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5869);
/* harmony import */ var _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3506);
/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8057);
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3507);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3075);
/* harmony import */ var _utils_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2287);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_1__, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__]);
([iron_session__WEBPACK_IMPORTED_MODULE_1__, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getServerSideProps(context) {
    const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_services_OrderService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const configService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_services_ConfigService__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const ironSession = await (0,iron_session__WEBPACK_IMPORTED_MODULE_1__.getIronSession)(context.req, context.res, _utils_withIronSession__WEBPACK_IMPORTED_MODULE_2__/* .sessionOptions */ .d);
    const user = ironSession.user ?? {
        logged: false
    };
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
    if (user.logged) {
        const orderService = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_services_OrderService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
        const userOrder = await orderService.getUserOrder(user.email);
        const googleSheetInstance = new _services_GoogleSheetService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("users");
        const users = await googleSheetInstance.getGoogleSheetData();
        const loggedUser = users.find((matchingUser)=>matchingUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email
        );
        cart.balance = parseFloat(loggedUser[_constants_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN */ .Z.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
        if (userOrder) {
            cart.products = userOrder.products.map(({ code , name , price , minimum , qty , total , picture  })=>({
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
        console.log("Inicio de sesion", {
            user,
            cart
        });
    }
    const status = await configService.getCartStatus();
    const orders = await orderService.getAll();
    return {
        props: {
            user,
            status: status,
            orders: (0,_utils_parse__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(orders),
            count: orders ? orders.length : 0,
            cart
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
    return JSON.parse(JSON.stringify(data));
};


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
var __webpack_exports__ = __webpack_require__.X(0, [531,366,433,382,883,507], () => (__webpack_exec__(2285)));
module.exports = __webpack_exports__;

})();