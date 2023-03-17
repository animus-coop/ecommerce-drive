"use strict";
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 8493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ sendEmail)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
    port: 465,
    host: process.env.NODEMAILER_HOST,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    secure: true
});
function sendEmail(mailData) {
    return transporter.sendMail(mailData, function(err) {
        if (err) console.log(err, "error sending mail");
        else console.log("Order email sent succesfully");
    });
};


/***/ }),

/***/ 6841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const RenderMail = (order)=>{
    return `<div style="
   padding: 15px;
   border-radius: 15px;
   border: 1px solid #222;
   ">
   <div>
      <img src="https://comprasalmargen.com.ar/img/almargen.png" width="150"/>
   </div>
   <div style="align-self:center">
      <h4 style="text-align:center;font-weight:400;">Tu Pedido Al Margen</h4>
      <small>${order.name} recibimos tu pedido desde nuestra web.</small>
      <table style="width:80%;margin-top:20px;margin-left:10%" cellpadding="3" cellspacing="0">
         <thead style="background-color:#f1f3f5;border-radius:15px;color:#7e868c;font-size:15px;">
            <tr>
               <th>Codigo</th>
               <th>Producto</th>
               <th>Cantidad</th>
               <th>Total</th>
            </tr>
         <thead>
         <tbody style="font-size:13px;color:#11181C;font-weigh:200;">
         ${order.products.map((product)=>`<tr>
            <th>
               ${product.code}
            </th>
            <th>
               ${product.name}
            </th>
            <th>
               ${product.qty}
            </th>
            <th>
              $${product.total} 
            </th>
         </tr>`
    )}
         </tbody>
         <tfoot style="background-color:#f1f3f5;border-radius:15px;color:#7e868c;font-size:15px;">
            <tr>
               <th>Total</th>
               <th>
               <th>
               <th>$${order.total}</th>
            </tr>
            <tr>
            <th>Saldo</th>
               <th>
               <th>
               <th>$${order.balance}</th>
            </tr>
            <tr>
            <th>Total a pagar</th>
               <th>
               <th>
               <th>$${order.subtotal}</th>
            </tr>
         </tfoot>
      </table>
   </div>
   <div style="
   margin-top:15px;
   width:100%;
   ">
   <a href="https://comprasalmargen.com.ar" style="
   text-align:center;
   background-color: #ea903c;
   padding:15px;
   border:none;
   border-radius:15px;
   text-decoration:
   none;color:black;
   font-weight:600;
   display:block;
   ">Seguir Comprando</a><br>
   <p style="text-align:center;font-size:15px">Derechos reservados Al margen 2022 &copy;</p>
   </div>
   </div>`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderMail);


/***/ }),

/***/ 7111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions),
/* harmony export */   "j": () => (/* binding */ withSessionRoute)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5684);
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
    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;