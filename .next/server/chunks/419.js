"use strict";
exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 7419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var _GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_2__);



class GoogleSheetService extends _GoogleAuthService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
    constructor(module){
        super();
        this.module = module;
        this.googleSheetService = googleapis__WEBPACK_IMPORTED_MODULE_2__.google.sheets({
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
                spreadsheetId: _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.SPREADSHEET_ID */ .Z.gapi.SPREADSHEET_ID,
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
                    spreadsheetId: _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.SPREADSHEET_ID */ .Z.gapi.SPREADSHEET_ID,
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
                sheetName = _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.PRODUCT_SHEET_NAME */ .Z.gapi.PRODUCT_SHEET_NAME;
                break;
            case "users":
                sheetName = _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.USERS_SHEET_NAME */ .Z.gapi.USERS_SHEET_NAME;
                break;
            case "orders":
                sheetName = _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.ORDERS_SHEET_NAME */ .Z.gapi.ORDERS_SHEET_NAME;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleSheetService);


/***/ })

};
;