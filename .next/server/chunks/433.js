"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 3075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    gapi: {
        SPREADSHEET_ID: process.env.SPREADSHEET_ID,
        SCOPES: [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/drive"
        ],
        PRODUCT_SHEET_NAME: process.env.PRODUCT_SHEET_NAME,
        USERS_SHEET_NAME: process.env.USERS_SHEET_NAME,
        ORDERS_SHEET_NAME: process.env.ORDERS_SHEET_NAME,
        OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
        OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
        OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
        OAUTH_SCOPES: [
            process.env.OAUTH_SCOPES
        ],
        PICTURES_FOLDERS_ID: process.env.PICTURES_FOLDERS_ID
    },
    MONGODB_CONNECTION: process.env.MONGODB_CONNECTION,
    IRON_SESSIONS_PASSWORD: process.env.IRON_SESSIONS_PASSWORD,
    GOOGLE_SHEET_ROWS: {
        PRODUCTS: {
            STOCK_COLUMN: 0,
            CODE_COLUMN: 1,
            NAME_COLUMN: 2,
            MINIUM_COLUMN: 3,
            PRICE_COLUMN: 4,
            CATEGORY_COLUMN: 5,
            SELLER_COLUMN: 6,
            SORT_COLUMN: 7
        },
        USERS: {
            ID_COLUMN: 0,
            EMAIL_COLUMN: 2,
            IS_ADMIN_COLUMN: 3,
            BALANCE_COLUMN: 4
        }
    }
});


/***/ }),

/***/ 8662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ infoMessages)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const infoMessages = ()=>{
    const action = location.href.split("#");
    switch(action[1]){
        case "logout":
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.warn("Se ha deslogeado");
            break;
        case "logged":
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success("Inicio de sesion exitoso!");
            break;
        case "unauthorized":
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("No se encuentra autorizado");
            break;
        default:
            break;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiException extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ApiException.prototype);
    }
    jsonOutPut() {
        return {
            error: true,
            message: this.message
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiException);


/***/ }),

/***/ 9453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3075);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _class;



var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,tsyringe__WEBPACK_IMPORTED_MODULE_1__.singleton)();
let BaseService = _class = _dec2(_class = _dec1(_class = _dec((_class = class BaseService {
    constructor(){
        this.mongoInit().catch((e)=>console.log(e, "error on mongo connection")
        );
    }
    async mongoInit() {
        return new Promise(async (resolve, reject)=>{
            try {
                if (this.isDbConnected) return;
                const db = await (0,mongoose__WEBPACK_IMPORTED_MODULE_2__.connect)(_constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MONGODB_CONNECTION */ .Z.MONGODB_CONNECTION);
                this.isDbConnected = db.connections[0].readyState;
                resolve(db.connections[0].readyState);
            } catch (e) {
                reject(e);
            }
        });
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseService);


/***/ }),

/***/ 3506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_GoogleSheetService)
});

// EXTERNAL MODULE: ./constants/config.ts
var config = __webpack_require__(3075);
// EXTERNAL MODULE: external "google-auth-library"
var external_google_auth_library_ = __webpack_require__(6781);
// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: external "googleapis"
var external_googleapis_ = __webpack_require__(9993);
// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9453);
;// CONCATENATED MODULE: ./src/services/GoogleAuthService.ts
var _class;





var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let GoogleAuthService = _class = _dec2(_class = _dec1(_class = _dec((_class = class GoogleAuthService extends BaseService/* default */.Z {
    constructor(){
        super();
        this.oAuth2Client = new external_google_auth_library_.OAuth2Client(config/* default.gapi.OAUTH_CLIENT_ID */.Z.gapi.OAUTH_CLIENT_ID, config/* default.gapi.OAUTH_CLIENT_KEY */.Z.gapi.OAUTH_CLIENT_KEY, config/* default.gapi.OAUTH_REDIRECT_URL */.Z.gapi.OAUTH_REDIRECT_URL);
    }
    async startGoogleAuthentification() {
        try {
            const connection = await this.initConnection();
            this.GoogleClient = connection.googleClient;
            this.GoogleAuth = connection.googleAuth;
        } catch (e) {
            throw new Error(`Client Google error ${e}`);
        }
    }
    async initConnection() {
        return new Promise(async (resolve, reject)=>{
            try {
                const googleAuth = new external_google_auth_library_.GoogleAuth({
                    keyFile: "./google-credentials.json",
                    scopes: config/* default.gapi.SCOPES */.Z.gapi.SCOPES
                });
                const googleClient = await googleAuth.getClient();
                resolve({
                    googleClient,
                    googleAuth
                });
            } catch (e) {
                reject(e);
            }
        });
    }
    getAuthUrl() {
        return new Promise(async (resolve, reject)=>{
            try {
                // Generate the url that will be used for the consent dialog.
                const authorizeUrl = this.oAuth2Client.generateAuthUrl({
                    access_type: "offline",
                    scope: [
                        "https://www.googleapis.com/auth/userinfo.profile",
                        "https://www.googleapis.com/auth/userinfo.email"
                    ]
                });
                resolve(authorizeUrl);
            } catch (e) {
                reject({
                    error: "error on url"
                });
            }
        });
    }
    getUserTokens(code) {
        return new Promise(async (resolve, reject)=>{
            try {
                const r = await this.oAuth2Client.getToken(code);
                this.oAuth2Client.setCredentials(r.tokens);
                const tokens = r.tokens;
                resolve(tokens);
            } catch (e) {
                reject({
                    error: e
                });
            }
        });
    }
    getProfileInfo(credentials) {
        return new Promise((resolve, reject)=>{
            this.oAuth2Client.setCredentials(credentials);
            const oauth2 = external_googleapis_.google.oauth2({
                auth: this.oAuth2Client,
                version: "v2"
            });
            oauth2.userinfo.get((err, res)=>{
                if (!err) {
                    const profileData = res.data;
                    resolve(profileData);
                } else {
                    reject(err);
                }
            });
        });
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_GoogleAuthService = (GoogleAuthService);

;// CONCATENATED MODULE: ./src/services/GoogleSheetService.ts



class GoogleSheetService extends services_GoogleAuthService {
    constructor(module){
        super();
        this.module = module;
        this.googleSheetService = external_googleapis_.google.sheets({
            version: "v4",
            auth: this.GoogleClient
        });
    }
    async getGoogleSheetData() {
        try {
            await this.startGoogleAuthentification();
            const sheetName = this.getSheetName();
            const rows = await this.googleSheetService.spreadsheets.values.get({
                auth: this.GoogleAuth,
                spreadsheetId: config/* default.gapi.SPREADSHEET_ID */.Z.gapi.SPREADSHEET_ID,
                range: sheetName
            });
            return rows.data.values;
        } catch (error) {
            throw new Error(`Error on get Google Sheet Instance ${error}`);
        }
    }
    async insertOnGoogleSheet(data) {
        return new Promise(async (resolve, reject)=>{
            try {
                await this.startGoogleAuthentification();
                const sheetName = this.getSheetName();
                const response = this.googleSheetService.spreadsheets.values.append({
                    spreadsheetId: config/* default.gapi.SPREADSHEET_ID */.Z.gapi.SPREADSHEET_ID,
                    auth: this.GoogleAuth,
                    range: sheetName,
                    valueInputOption: "RAW",
                    requestBody: {
                        range: sheetName,
                        values: this.serializeGoogleRows(data)
                    }
                });
                resolve({
                    status: "success",
                    message: response
                });
            } catch (e) {
                reject({
                    status: "Error",
                    message: e.message
                });
            }
        });
    }
    getSheetName() {
        let sheetName;
        switch(this.module){
            case "products":
                sheetName = config/* default.gapi.PRODUCT_SHEET_NAME */.Z.gapi.PRODUCT_SHEET_NAME;
                break;
            case "users":
                sheetName = config/* default.gapi.USERS_SHEET_NAME */.Z.gapi.USERS_SHEET_NAME;
                break;
            case "orders":
                sheetName = config/* default.gapi.ORDERS_SHEET_NAME */.Z.gapi.ORDERS_SHEET_NAME;
                break;
            default:
                break;
        }
        if (!sheetName) throw new Error("Module Name incorrect!");
        return sheetName;
    }
    serializeGoogleRows(data) {
        return data.map((person)=>Object.values(person).map((value)=>value
            )
        );
    }
}
/* harmony default export */ const services_GoogleSheetService = (GoogleSheetService);


/***/ }),

/***/ 8057:
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
var BaseService = __webpack_require__(9453);
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

;// CONCATENATED MODULE: ./src/services/OrderService.ts
var OrderService_class;




var OrderService_dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), OrderService_dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), OrderService_dec2 = (0,external_tsyringe_.singleton)();
let OrderService = OrderService_class = OrderService_dec2(OrderService_class = OrderService_dec1(OrderService_class = OrderService_dec((OrderService_class = class OrderService extends BaseService/* default */.Z {
    constructor(){
        super();
        this.productService = external_tsyringe_.container.resolve(services_ProductService);
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
    async deleteOrder(orderId) {
        const order = await models_Order.findById(orderId).exec();
        if (!order) {
            throw new Error("ORDER_NOT_FOUND");
        }
        await this.restoreProductsStock(order.products);
        return models_Order.findByIdAndRemove(orderId).exec();
    }
    clearLocalOrders() {
        return models_Order.deleteMany({}).exec();
    }
    async getAllOrderedProductsQuantitiesByCode() {
        const allOrders = await models_Order.find({});
        const productsQuantityByCode = {};
        allOrders.map((order)=>{
            order.products.map((product)=>{
                if (productsQuantityByCode[product.code]) {
                    productsQuantityByCode[product.code] += product.qty;
                } else {
                    productsQuantityByCode[product.code] = product.qty;
                }
            });
        });
        return productsQuantityByCode;
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
    restoreProductsStock(products) {
        return Promise.all(products.map(async (product)=>{
            return this.productService.updateProductStock(product.code, product.qty);
        }));
    }
}) || OrderService_class) || OrderService_class) || OrderService_class) || OrderService_class;
/* harmony default export */ const services_OrderService = (OrderService);


/***/ }),

/***/ 5869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
/* unused harmony export withSessionRoute */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const sessionOptions = {
    password: _constants_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].IRON_SESSIONS_PASSWORD */ .Z.IRON_SESSIONS_PASSWORD,
    cookieName: "almargen_app",
    cookieOptions: {
        secure: false
    }
};
function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;