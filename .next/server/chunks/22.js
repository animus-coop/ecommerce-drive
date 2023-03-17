"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 9684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hs": () => (/* binding */ AppCtxProvider),
  "rq": () => (/* binding */ useAppCtx)
});

// UNUSED EXPORTS: AppCtx

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/CartHook.ts

function useCart(cartSSR) {
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)(cartSSR);
    const sumTotals = (products)=>products.reduce((total, product)=>product.total + total
        , 0)
    ;
    const updateProduct = (productToUpdate)=>{
        const products = cart.products.map((product)=>{
            if (product.code === productToUpdate.code) {
                return {
                    ...productToUpdate,
                    total: productToUpdate.price * productToUpdate.qty
                };
            }
            return product;
        });
        const newCart = {
            products,
            balance: cart.balance,
            total: sumTotals(products)
        };
        setCart(newCart);
    };
    const addProduct = (productToAdd)=>{
        let products = cart.products;
        if (productExists(productToAdd.code)) {
            products = products.map((product)=>{
                if (product.code === productToAdd.code) {
                    const newQuantity = product.qty + productToAdd.qty;
                    return {
                        ...productToAdd,
                        qty: newQuantity,
                        total: productToAdd.price * newQuantity
                    };
                }
                return product;
            });
        } else {
            products.push({
                ...productToAdd,
                total: productToAdd.price * productToAdd.qty
            });
        }
        const newCart = {
            products,
            balance: cart.balance,
            total: sumTotals(products)
        };
        setCart(newCart);
    };
    const deleteProduct = (productToDelete)=>{
        const products = cart.products.filter((product)=>product.code !== productToDelete.code
        );
        const newCart = {
            products,
            balance: cart.balance,
            total: sumTotals(products)
        };
        setCart(newCart);
    };
    const productExists = (code)=>cart.products.find((product)=>product.code === code
        )
    ;
    return {
        ...cart,
        updateProduct,
        addProduct,
        deleteProduct
    };
}

;// CONCATENATED MODULE: ./src/context.tsx



const useCartController = (cart)=>{
    const { total , balance , products , updateProduct , addProduct , deleteProduct  } = useCart(cart);
    return {
        total,
        balance,
        products,
        updateProduct,
        addProduct,
        deleteProduct
    };
};
const AppCtx = /*#__PURE__*/ (0,external_react_.createContext)({
    total: 0,
    balance: 0,
    products: [],
    updateProduct: ()=>{},
    addProduct: ()=>{},
    deleteProduct: ()=>{}
});
const AppCtxProvider = ({ cart , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(AppCtx.Provider, {
        value: useCartController(cart),
        children: children
    });
};
const useAppCtx = ()=>(0,external_react_.useContext)(AppCtx)
;


/***/ })

};
;