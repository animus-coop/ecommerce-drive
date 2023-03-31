"use strict";
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 5074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5684);
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6781);
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6896);
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9993);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9096);
var _class;





var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,tsyringe__WEBPACK_IMPORTED_MODULE_2__.singleton)();
let GoogleAuthService = _class = _dec2(_class = _dec1(_class = _dec((_class = class GoogleAuthService extends _BaseService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z {
    constructor(){
        super();
        this.oAuth2Client = new google_auth_library__WEBPACK_IMPORTED_MODULE_1__.OAuth2Client(_constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.OAUTH_CLIENT_ID */ .Z.gapi.OAUTH_CLIENT_ID, _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.OAUTH_CLIENT_KEY */ .Z.gapi.OAUTH_CLIENT_KEY, _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.OAUTH_REDIRECT_URL */ .Z.gapi.OAUTH_REDIRECT_URL);
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
                const googleAuth = new google_auth_library__WEBPACK_IMPORTED_MODULE_1__.GoogleAuth({
                    keyFile: "./google-credentials.json",
                    scopes: _constants_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].gapi.SCOPES */ .Z.gapi.SCOPES
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
            const oauth2 = googleapis__WEBPACK_IMPORTED_MODULE_3__.google.oauth2({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleAuthService);


/***/ })

};
;