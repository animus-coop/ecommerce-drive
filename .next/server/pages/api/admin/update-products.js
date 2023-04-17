"use strict";
(() => {
var exports = {};
exports.id = 543;
exports.ids = [543];
exports.modules = {

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

/***/ 6896:
/***/ ((module) => {

module.exports = require("tsyringe");

/***/ }),

/***/ 8592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ updateProductsOnDb)
});

// EXTERNAL MODULE: external "tsyringe"
var external_tsyringe_ = __webpack_require__(6896);
// EXTERNAL MODULE: ./src/services/ProductService.ts + 1 modules
var ProductService = __webpack_require__(2005);
// EXTERNAL MODULE: ./src/services/CategoryService.ts + 1 modules
var CategoryService = __webpack_require__(2102);
// EXTERNAL MODULE: ./src/services/GoogleSheetService.ts
var GoogleSheetService = __webpack_require__(7419);
// EXTERNAL MODULE: ./helpers/slug.ts
var slug = __webpack_require__(5433);
// EXTERNAL MODULE: external "googleapis"
var external_googleapis_ = __webpack_require__(9993);
// EXTERNAL MODULE: ./constants/config.ts
var config = __webpack_require__(5684);
// EXTERNAL MODULE: ./src/services/GoogleAuthService.ts
var GoogleAuthService = __webpack_require__(5074);
;// CONCATENATED MODULE: ./src/services/GoogleDriveFilesService.ts



class GoogleDriveFilesService extends GoogleAuthService/* default */.Z {
    constructor(){
        super();
    }
    async retrieveFilesFromPicturesFolder() {
        try {
            await this.startGoogleAuthentification();
            this.googleFileService = external_googleapis_.google.drive({
                version: "v3",
                auth: this.GoogleAuth
            });
            let NextPageToken = "";
            const responseFileList = await this.googleFileService.files.list({
                corpora: "allDrives",
                pageSize: 1000,
                pageToken: NextPageToken || "",
                includeItemsFromAllDrives: true,
                supportsAllDrives: true,
                q: `'${config/* default.gapi.PICTURES_FOLDERS_ID */.Z.gapi.PICTURES_FOLDERS_ID}' in parents`,
                fields: "nextPageToken, files(id, name, webContentLink)"
            });
            NextPageToken = responseFileList.data.nextPageToken;
            const filesFields = responseFileList.data.files.map((file)=>{
                const newName = file.name.replace(" ", "");
                return {
                    webViewLink: file.webContentLink,
                    code: parseInt(newName.split(".")[0])
                };
            });
            return filesFields;
        } catch (e) {
            throw new Error(e);
        }
    }
}
/* harmony default export */ const services_GoogleDriveFilesService = (GoogleDriveFilesService);

;// CONCATENATED MODULE: ./commands/UpdateProducts.ts







function serializingProducts(products, files) {
    const serializeProducts = [];
    products.map((product, i)=>{
        if (i !== 0) {
            const fileInfo = files.find((file)=>file.code === parseInt(product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN])
            );
            serializeProducts.push({
                stock: product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.STOCK_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.STOCK_COLUMN] == "1",
                code: parseInt(product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN]),
                name: product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.NAME_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.NAME_COLUMN],
                minimum: product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.MINIUM_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.MINIUM_COLUMN],
                price: parseFloat(product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.PRICE_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.PRICE_COLUMN]),
                category: (0,slug/* slugify */.l)(product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN]),
                categoryName: product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN],
                seller: product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.SELLER_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.SELLER_COLUMN],
                order: product[config/* default.GOOGLE_SHEET_ROWS.PRODUCTS.SORT_COLUMN */.Z.GOOGLE_SHEET_ROWS.PRODUCTS.SORT_COLUMN],
                picture: fileInfo ? fileInfo.webViewLink : ""
            });
        }
    });
    return serializeProducts;
}
async function saveProductsOnMongo(products) {
    try {
        const productService = external_tsyringe_.container.resolve(ProductService/* default */.Z);
        await productService.clearAll();
        await Promise.all(products.map(async (product)=>{
            if (product.stock) {
                await productService.saveProduct(product);
            }
        }));
        console.log("Products saved succesfully");
        return {
            success: true
        };
    } catch (e) {
        console.log("error saving products", e);
        return {
            error: e
        };
    }
}
async function saveCategories(products) {
    try {
        const categoryService = external_tsyringe_.container.resolve(CategoryService/* default */.Z);
        const categories = [];
        await categoryService.clearAll();
        products.map((product)=>{
            if (!categories.includes(product.categoryName)) {
                categories.push(product.categoryName);
            }
        });
        Promise.all(categories.map(async (category)=>{
            await categoryService.saveCategory(category);
        }));
        console.log("Categories saved succesfully");
        return {
            success: true
        };
    } catch (e) {
        console.log("error saving categories", e);
        return {
            error: e
        };
    }
}
async function updateProducts() {
    try {
        const googleSheetInstance = new GoogleSheetService/* default */.Z("products");
        const products = await googleSheetInstance.getGoogleSheetData();
        const GDservice = new services_GoogleDriveFilesService();
        const filesInfo = await GDservice.retrieveFilesFromPicturesFolder();
        const productsFormated = serializingProducts(products, filesInfo);
        await saveProductsOnMongo(productsFormated);
        await saveCategories(productsFormated);
        return {
            success: true
        };
    } catch (e) {
        console.log(e, "Error updating products");
        return {
            error: e
        };
    }
}

;// CONCATENATED MODULE: ./pages/api/admin/update-products.ts

async function updateProductsOnDb(req, res) {
    try {
        await updateProducts();
        res.status(200).json({
            error: false
        });
    } catch (error) {
        res.status(500).json(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [684,96,74,419,5,102], () => (__webpack_exec__(8592)));
module.exports = __webpack_exports__;

})();