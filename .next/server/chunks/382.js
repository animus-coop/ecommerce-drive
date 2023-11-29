"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 3382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Fetch)
/* harmony export */ });
/* harmony import */ var _exceptions_ApiExeption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7393);

async function Fetch({ url , method ="GET" , data , query , onSuccess , onError , onFinally  }) {
    const serializeToString = (q)=>{
        let qs = "?";
        Object.keys(q).map((field)=>qs += `${encodeURIComponent(field)}=${encodeURIComponent(q[field])}&`
        );
        return `${qs.slice(0, -1)}`;
    };
    const builtUrl = `${url}${query && Object.keys(query).length > 0 ? serializeToString(query) : ""}`;
    return await fetch(builtUrl, {
        method,
        ...data && {
            body: JSON.stringify(data)
        }
    }).then(async (res)=>{
        const response = await res.json();
        if (!res.ok) {
            const message = response.error.message || "GENERIC_ERROR";
            throw new Error(message);
        }
        if (onSuccess) {
            onSuccess(response);
        }
        return response;
    }).catch((e)=>{
        if (onError) {
            onError(e);
        } else {
            throw new _exceptions_ApiExeption__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(e);
        }
    }).finally(()=>{
        if (onFinally) {
            onFinally();
        }
    });
}


/***/ })

};
;