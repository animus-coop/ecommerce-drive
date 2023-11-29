import React, { createContext, useContext } from 'react';
import { Cart } from './global/types';
import { useCart } from './hooks/CartHook';

export const AppCtx = createContext<ReturnType<typeof useCart>>({
	total: 0,
	balance: 0,
	products: [],
	productsToDelete: [],
	hasUnsavedChanges: false,
	updateProduct: () => {},
	addProduct: () => {},
	deleteProduct: () => {},
	clearProducts: () => {},
	updateAllProducts: () => {},
	syncProductsStock: () => {},
	resetUnsavedQtyForProduct: () => {},
	resetChangesAfterSave: () => {},
	getUnsavedQtyForProduct: () => 0,

});

export const AppCtxProvider = ({ cart, children }: { cart: Cart; children: React.ReactNode }) => {
	return <AppCtx.Provider value={useCart(cart)}>{children}</AppCtx.Provider>;
};

export const useAppCtx = () => useContext(AppCtx);
