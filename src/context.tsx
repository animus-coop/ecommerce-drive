import { createContext, useContext } from 'react';
import { Cart } from './global/types';
import { useCart } from './hooks/CartHook';

export const AppCtx = createContext<ReturnType<typeof useCart>>({
	balance: 0,
	hasUnsavedChanges: false,
	products: [],
	total: 0,
	addProduct: () => {},
	clearProducts: () => {},
	deleteProduct: () => {},
	updateProduct: () => {},
	setHasUnsavedChanges: () => {},
});

export const AppCtxProvider = ({ cart, children }: { cart: Cart; children: React.ReactNode }) => {
	return <AppCtx.Provider value={useCart(cart)}>{children}</AppCtx.Provider>;
};

export const useAppCtx = () => useContext(AppCtx);
