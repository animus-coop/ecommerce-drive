"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 2005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_ProductService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Product.ts

const Product = new external_mongoose_.Schema({
    stock: {
        type: "number"
    },
    code: {
        type: "number",
        index: true
    },
    name: {
        type: "string",
        index: true
    },
    minimum: {
        type: "string"
    },
    price: {
        type: "number"
    },
    category: {
        type: "string"
    },
    seller: {
        type: "string"
    },
    order: {
        type: "number"
    },
    picture: {
        type: "string"
    }
}, {
    versionKey: false
});
Product.index({
    name: "text"
});
Product.statics.getDocumentsCount = async function(category) {
    return category ? await this.countDocuments({
        category
    }) : await this.countDocuments();
};
Product.statics.search = async function(search, category) {
    const query = category ? {
        category,
        $text: {
            $search: search
        }
    } : {
        $text: {
            $search: search
        }
    };
    const products = await this.find(query, {
        score: {
            $meta: "textScore"
        }
    }).sort({
        score: {
            $meta: "textScore"
        }
    });
    return {
        products
    };
};
if (!(external_mongoose_default()).models.Product) {
    const productModel = (0,external_mongoose_.model)("Product", Product);
    productModel.createIndexes();
}
/* harmony default export */ const models_Product = ((external_mongoose_default()).models.Product);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9096);
;// CONCATENATED MODULE: ./src/services/ProductService.ts
var _class;



var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let ProductService = _class = _dec2(_class = _dec1(_class = _dec((_class = class ProductService extends BaseService/* default */.Z {
    constructor(){
        super();
    }
    save(product) {
        return models_Product.create(product);
    }
    async get(category, page = 1) {
        const limit = 60;
        const productsCount = await models_Product.getDocumentsCount(category);
        const query = category ? {
            category
        } : {};
        const products = await models_Product.find(query).select({
            _id: 0
        }).limit(limit).skip(limit * (page - 1)).sort({
            order: 1
        });
        const totalPages = Math.ceil(productsCount / limit);
        return {
            products,
            totalPages
        };
    }
    getOne(code) {
        return models_Product.findOne({
            code
        }).exec();
    }
    getProductsByCode(productCodes) {
        return models_Product.find({
            code: {
                $in: productCodes
            }
        }).exec();
    }
    async searchProduct(query, category) {
        return models_Product.search(query, category);
    }
    deleteAll() {
        return models_Product.deleteMany({});
    }
    async productHasEnoughStock(code, qty) {
        const product = await models_Product.findOne({
            code
        }).exec();
        if (!product) {
            throw new Error("PRODUCT_NOT_FOUND");
        }
        return product.stock === null || product.stock >= qty;
    }
    async updateProductStock(code, amount) {
        const product = await models_Product.findOne({
            code
        }).exec();
        if (!product) {
            throw new Error("PRODUCT_NOT_FOUND");
        }
        if (product.stock === null) {
            return product;
        }
        const newStock = product.stock + amount;
        if (newStock < 0) {
            throw new Error("PRODUCT_STOCK_NOT_ENOUGH");
        }
        product.stock = newStock;
        return product.save();
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_ProductService = (ProductService);


/***/ })

};
;