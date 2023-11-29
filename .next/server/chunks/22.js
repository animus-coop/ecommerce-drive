"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 6457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ hasUnsavedChanges),
/* harmony export */   "t": () => (/* binding */ productHasEnoughStock)
/* harmony export */ });
function productHasEnoughStock(product, quantity) {
    return product.stock === null || product.stock >= quantity;
}
function hasUnsavedChanges(cartProducts) {
    return cartProducts.some((product)=>Boolean(product.unsavedQty)
    );
}


/***/ }),

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
// EXTERNAL MODULE: ./src/hooks/fetchHook.ts
var fetchHook = __webpack_require__(3382);
// EXTERNAL MODULE: ./helpers/products.ts
var helpers_products = __webpack_require__(6457);
;// CONCATENATED MODULE: ./src/hooks/CartHook.ts



function useCart(cartSSR) {
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)(cartSSR);
    const { 0: fetching , 1: setFetching  } = (0,external_react_.useState)(false);
    function sumTotals(products) {
        return products.reduce((total, product)=>{
            return product.total + total;
        }, 0);
    }
    const updateProduct = (productToUpdate)=>{
        if (!productExists(productToUpdate.code)) {
            return;
        }
        let unsavedQty = productToUpdate.unsavedQty || 0;
        const products = cart.products.map((product)=>{
            if (product.code === productToUpdate.code) {
                unsavedQty += productToUpdate.qty - product.qty;
                return {
                    ...productToUpdate,
                    unsavedQty,
                    total: productToUpdate.price * productToUpdate.qty
                };
            }
            return product;
        });
        setCart({
            balance: cart.balance,
            hasUnsavedChanges: (0,helpers_products/* hasUnsavedChanges */.o)(products),
            products,
            productsToDelete: cart.productsToDelete,
            total: sumTotals(products)
        });
    };
    const addProduct = (productToAdd)=>{
        let products = cart.products;
        let unsavedQty = productToAdd.qty;
        if (productExists(productToAdd.code)) {
            products = products.map((product)=>{
                if (product.code === productToAdd.code) {
                    unsavedQty += product.unsavedQty;
                    const newQuantity = product.qty + productToAdd.qty;
                    return {
                        ...productToAdd,
                        unsavedQty,
                        qty: newQuantity,
                        total: productToAdd.price * newQuantity
                    };
                }
                return product;
            });
        } else {
            unsavedQty = productToAdd.qty;
            products.push({
                ...productToAdd,
                unsavedQty,
                total: productToAdd.price * productToAdd.qty
            });
        }
        setCart({
            balance: cart.balance,
            hasUnsavedChanges: (0,helpers_products/* hasUnsavedChanges */.o)(products),
            products,
            productsToDelete: cart.productsToDelete.filter((product)=>product.code !== productToAdd.code
            ),
            total: sumTotals(products)
        });
    };
    const deleteProduct = (productToDelete)=>{
        const product1 = cart.products.find((product)=>product.code === productToDelete.code
        );
        const products = cart.products.filter((product)=>product.code !== productToDelete.code
        );
        setCart({
            balance: cart.balance,
            hasUnsavedChanges: true,
            products,
            productsToDelete: [
                ...cart.productsToDelete,
                product1
            ],
            total: sumTotals(products)
        });
    };
    const restoreDeletedProduct = (productToRestore)=>{
        const product2 = cart.productsToDelete.find((product)=>product.code === productToRestore.code
        );
        if (!product2) {
            return;
        }
        const productsToDelete = cart.productsToDelete.filter((product)=>product.code !== productToRestore.code
        );
        setCart({
            balance: cart.balance,
            hasUnsavedChanges: true,
            products: [
                ...cart.products,
                product2
            ],
            productsToDelete,
            total: sumTotals([
                ...cart.products,
                product2
            ])
        });
    };
    const clearProducts = ()=>{
        setCart({
            products: [],
            productsToDelete: [],
            balance: cart.balance,
            hasUnsavedChanges: false,
            total: 0
        });
    };
    const updateAllProducts = (products)=>{
        setCart({
            balance: cart.balance,
            hasUnsavedChanges: cart.hasUnsavedChanges,
            products,
            productsToDelete: cart.productsToDelete,
            total: sumTotals(products)
        });
    };
    const productExists = (code)=>Boolean(cart.products.find((product)=>product.code === code
        ))
    ;
    const resetUnsavedQtyForProduct = (code, productsToUse)=>{
        if (!productExists(code)) {
            return;
        }
        const products = (productsToUse && productsToUse.length ? productsToUse : cart.products).map((product)=>{
            if (product.code === code) {
                return {
                    ...product,
                    qty: product.qty - product.unsavedQty,
                    unsavedQty: 0,
                    total: product.price * (product.qty - product.unsavedQty)
                };
            }
            return product;
        });
        setCart({
            balance: cart.balance,
            hasUnsavedChanges: (0,helpers_products/* hasUnsavedChanges */.o)(products),
            products,
            productsToDelete: cart.productsToDelete,
            total: sumTotals(products)
        });
    };
    const syncProductsStock = async ({ onStockConflict , onStockIsEnough  })=>{
        const codesQuery = cart.products.map((product)=>product.code
        ).join(",");
        setFetching(true);
        await (0,fetchHook/* Fetch */.U)({
            url: "/api/products",
            query: {
                codes: codesQuery
            },
            onSuccess (response) {
                const productsWithUpdatedStock = cart.products.map((product)=>{
                    const fetchedProduct = response.products.find((p)=>p.code === product.code
                    );
                    if (fetchedProduct) {
                        return {
                            ...product,
                            stock: fetchedProduct.stock
                        };
                    }
                    return product;
                });
                const conflictingStockProducts = productsWithUpdatedStock.filter((product)=>product.stock !== null && product.stock < product.unsavedQty
                );
                if (conflictingStockProducts.length) {
                    onStockConflict && onStockConflict(conflictingStockProducts);
                } else {
                    onStockIsEnough && onStockIsEnough();
                }
                updateAllProducts(productsWithUpdatedStock);
            },
            onError (e) {
                console.log(e);
            },
            onFinally () {
                setFetching(false);
            }
        });
    };
    const resetChangesAfterSave = ()=>{
        return setCart({
            products: cart.products.map((product)=>({
                    ...product,
                    unsavedQty: 0
                })
            ),
            productsToDelete: [],
            balance: cart.balance,
            hasUnsavedChanges: false,
            total: cart.total
        });
    };
    const getUnsavedQtyForProduct = (code)=>{
        const product3 = cart.products.find((product)=>product.code === code
        );
        return product3?.unsavedQty || 0;
    };
    return {
        ...cart,
        updateProduct,
        addProduct,
        deleteProduct,
        clearProducts,
        updateAllProducts,
        syncProductsStock,
        resetUnsavedQtyForProduct,
        resetChangesAfterSave,
        getUnsavedQtyForProduct
    };
}

;// CONCATENATED MODULE: ./src/context.tsx



const AppCtx = /*#__PURE__*/ (0,external_react_.createContext)({
    total: 0,
    balance: 0,
    products: [],
    productsToDelete: [],
    hasUnsavedChanges: false,
    updateProduct: ()=>{},
    addProduct: ()=>{},
    deleteProduct: ()=>{},
    clearProducts: ()=>{},
    updateAllProducts: ()=>{},
    syncProductsStock: ()=>{
        return new Promise((resolve, reject)=>{
            resolve();
        });
    },
    resetUnsavedQtyForProduct: ()=>{},
    resetChangesAfterSave: ()=>{},
    getUnsavedQtyForProduct: ()=>0
});
const AppCtxProvider = ({ cart , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(AppCtx.Provider, {
        value: useCart(cart),
        children: children
    });
};
const useAppCtx = ()=>(0,external_react_.useContext)(AppCtx)
;


/***/ })

};
;