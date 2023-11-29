"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 9554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_OrderService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Order.ts

const Order = new external_mongoose_.Schema({
    userId: {
        type: "string",
        unique: true
    },
    email: {
        type: "string",
        unique: true
    },
    name: {
        type: "string",
        unique: false
    },
    products: [
        {
            code: "number",
            name: "string",
            price: "number",
            minimum: "string",
            qty: "number",
            total: "number",
            picture: "string"
        }
    ],
    total: "number"
}, {
    timestamps: true,
    versionKey: false
});
if (!(external_mongoose_default()).models.Order) {
    (0,external_mongoose_.model)("Order", Order);
}
/* harmony default export */ const models_Order = ((external_mongoose_default()).models.Order);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9096);
// EXTERNAL MODULE: ./src/services/ProductService.ts + 1 modules
var ProductService = __webpack_require__(2005);
;// CONCATENATED MODULE: ./src/services/OrderService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let OrderService = _class = _dec2(_class = _dec1(_class = _dec((_class = class OrderService extends BaseService/* default */.Z {
    constructor(){
        super();
        this.productService = external_tsyringe_.container.resolve(ProductService/* default */.Z);
    }
    async save(order) {
        const { products  } = order;
        const allProductsHaveEnoughStock = await Promise.all(products.map(async (product)=>{
            return this.productService.productHasEnoughStock(product.code, product.qty);
        }));
        if (!allProductsHaveEnoughStock.every((hasEnoughStock)=>hasEnoughStock
        )) {
            throw new Error("PRODUCT_STOCK_NOT_ENOUGH");
        }
        await Promise.all(products.map(async (product)=>{
            return this.productService.updateProductStock(product.code, product.qty * -1);
        }));
        return models_Order.create(order);
    }
    getAll() {
        return models_Order.find({}).exec();
    }
    getUserOrder(email) {
        return models_Order.findOne({
            email
        }).exec();
    }
    async getOrdersToPost() {
        const allOrders = await models_Order.find({});
        const formattedOrders = [];
        allOrders.map((order)=>{
            order.products.map((product)=>{
                const newOrder = {
                    userId: order.userId,
                    email: order.email,
                    name: order.name,
                    product: product.name,
                    code: product.code,
                    cantidad: product.qty
                };
                formattedOrders.push(newOrder);
            });
        });
        return formattedOrders;
    }
    async updateOrder(orderId, newOrder) {
        const existingOrder = await models_Order.findById(orderId).exec();
        if (!existingOrder) {
            throw new Error("ORDER_NOT_FOUND");
        }
        const { products: incomingProducts , total  } = newOrder;
        const productsInNeedToUpdateStock = this.getProductsThatNeedStockUpdate(incomingProducts, existingOrder.products);
        const allProductsHaveEnoughStock = await Promise.all(productsInNeedToUpdateStock.map(async (product)=>{
            if (product.qtyChangedBy < 0) {
                return true;
            }
            return this.productService.productHasEnoughStock(product.code, product.qtyChangedBy);
        }));
        if (!allProductsHaveEnoughStock.every((hasEnoughStock)=>hasEnoughStock
        )) {
            throw new Error("PRODUCT_STOCK_NOT_ENOUGH");
        }
        await Promise.all(productsInNeedToUpdateStock.map(async (product)=>{
            return this.productService.updateProductStock(product.code, product.qtyChangedBy * -1);
        }));
        existingOrder.products = incomingProducts;
        existingOrder.total = total;
        return existingOrder.save();
    }
    deleteOrder(orderId) {
        return models_Order.findByIdAndRemove(orderId).exec();
    }
    clearLocalOrders() {
        return models_Order.deleteMany({}).exec();
    }
    getProductsThatNeedStockUpdate(incomingProducts, existingProducts) {
        const removedProducts = existingProducts.filter((existingProduct)=>{
            return !incomingProducts.find((product)=>{
                return product.code === existingProduct.code;
            });
        }).map((existingProduct)=>{
            return {
                code: existingProduct.code,
                qtyChangedBy: existingProduct.qty * -1
            };
        });
        return incomingProducts.map((product)=>{
            const productInExistingOrder = existingProducts.find((existingProduct)=>{
                return existingProduct.code === product.code;
            });
            if (productInExistingOrder) {
                return {
                    code: product.code,
                    qtyChangedBy: product.qty - productInExistingOrder.qty
                };
            }
            return {
                code: product.code,
                qtyChangedBy: product.qty
            };
        }).filter((product)=>product.qtyChangedBy !== 0
        ).concat(removedProducts);
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_OrderService = (OrderService);


/***/ })

};
;