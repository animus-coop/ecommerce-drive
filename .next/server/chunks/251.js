"use strict";
exports.id = 251;
exports.ids = [251];
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
            SELLER_COLUMN: 6
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

/***/ 1751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_OrderService)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/exceptions/ApiExeption.ts
var ApiExeption = __webpack_require__(7393);
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
    timestamps: true
});
Order.statics.createOrder = async function(order) {
    await this.create(order);
};
Order.statics.getCurrentOrders = async function() {
    const orders = await this.find({}).select({
        _id: 0,
        __v: 0,
        products: 0
    });
    const count = orders.length;
    return {
        orders,
        count
    };
};
Order.statics.getUserOrder = async function(email) {
    const order = await this.findOne({
        email
    });
    return order;
};
Order.statics.getOrdersToPost = async function() {
    const allOrders = await this.find({});
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
};
Order.statics.updateOrder = async function(orderId, order) {
    const { products , total  } = order;
    const updatedOrder = await this.findByIdAndUpdate(orderId, {
        products,
        total
    }, {
        new: true
    });
    return updatedOrder;
};
Order.statics.deleteAllOrders = async function() {
    await this.deleteMany({});
};
if (!(external_mongoose_default()).models.Order) {
    (0,external_mongoose_.model)("Order", Order);
}
/* harmony default export */ const models_Order = ((external_mongoose_default()).models.Order);

// EXTERNAL MODULE: ./src/services/BaseService.ts
var BaseService = __webpack_require__(9453);
;// CONCATENATED MODULE: ./src/services/OrderService.ts
var _class;




var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_.singleton)();
let OrderService = _class = _dec2(_class = _dec1(_class = _dec((_class = class OrderService extends BaseService/* default */.Z {
    constructor(){
        super();
    }
    async saveOrder(order) {
        try {
            await models_Order.createOrder(order);
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getCurrentOrders() {
        try {
            const currentOrders = await models_Order.getCurrentOrders();
            return JSON.parse(JSON.stringify(currentOrders));
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getUserOrder(email) {
        try {
            const userOrder = await models_Order.getUserOrder(email);
            return userOrder;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async getOrdersToPost() {
        try {
            const orders = await models_Order.getOrdersToPost();
            return orders;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async updateOrder(orderId, order) {
        try {
            const updatedOrder = await models_Order.updateOrder(orderId, order);
            return updatedOrder;
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
    async clearLocalOrders() {
        try {
            await models_Order.deleteAllOrders();
        } catch (e) {
            throw new ApiExeption/* default */.Z(e);
        }
    }
}) || _class) || _class) || _class) || _class;
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