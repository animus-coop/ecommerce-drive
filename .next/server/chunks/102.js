"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 5433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ slugify)
/* harmony export */ });
const slugify = function(str) {
    var from = "\xc3\xc0\xc1\xc4\xc2\xc8\xc9\xcb\xca\xcc\xcd\xcf\xce\xd2\xd3\xd6\xd4\xd9\xda\xdc\xdb\xe3\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xd1\xf1\xc7\xe7", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", mapping = {};
    for(let i = 0, j = from.length; i < j; i++)mapping[from.charAt(i)] = to.charAt(i);
    const result = [];
    for(let i1 = 0, j1 = str.length; i1 < j1; i1++){
        const c = str.charAt(i1);
        if (mapping.hasOwnProperty(str.charAt(i1))) result.push(mapping[c]);
        else result.push(c);
    }
    return result.join("").replace(/[^-A-Za-z0-9]+/g, "-").toLowerCase();
};


/***/ }),

/***/ 2102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_CategoryService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Category.ts

const Category = new external_mongoose_.Schema({
    name: {
        type: "string"
    },
    slug: {
        type: "string"
    }
});
if (!(external_mongoose_default()).models.Category) {
    (0,external_mongoose_.model)("Category", Category);
}
/* harmony default export */ const models_Category = ((external_mongoose_default()).models.Category);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9096);
// EXTERNAL MODULE: ./helpers/slug.ts
var helpers_slug = __webpack_require__(5433);
;// CONCATENATED MODULE: ./src/services/CategoryService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let CategoryService = _class = _dec2(_class = _dec1(_class = _dec((_class = class CategoryService extends BaseService/* default */.Z {
    constructor(){
        super();
    }
    save(name) {
        const slug = (0,helpers_slug/* slugify */.l)(name);
        const newCategory = {
            name,
            slug
        };
        return models_Category.create(newCategory);
    }
    getAll() {
        return models_Category.find({}).select({
            _id: 0,
            __v: 0
        });
    }
    deleteAll() {
        return models_Category.deleteMany({});
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_CategoryService = (CategoryService);


/***/ })

};
;