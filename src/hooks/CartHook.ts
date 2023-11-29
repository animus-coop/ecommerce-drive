import { useState} from 'react';
import { Cart, CartProduct } from '../global/types';
import {Fetch} from "./fetchHook";
import {hasUnsavedChanges} from "../../helpers/products";

export function useCart(cartSSR: Cart) {
	const [cart, setCart] = useState(cartSSR);
	const [fetching, setFetching] = useState(false);

	function sumTotals(products: Array<CartProduct>) {
		return products.reduce((total: number, product: CartProduct) => {
		return product.total + total
	}, 0)
	}

	const updateProduct = (productToUpdate: CartProduct) => {
		if (!productExists(productToUpdate.code)) {
			return;
		}
		let unsavedQty = productToUpdate.unsavedQty || 0;
		const products = cart.products.map(product => {
			if (product.code === productToUpdate.code) {
				unsavedQty += productToUpdate.qty - product.qty;
				return { ...productToUpdate, unsavedQty, total: productToUpdate.price * productToUpdate.qty };
			}
			return product;
		});
		setCart({
			balance: cart.balance,
			hasUnsavedChanges: hasUnsavedChanges(products),
			products,
			productsToDelete: cart.productsToDelete,
			total: sumTotals(products)
		});
	};

	const addProduct = (productToAdd: CartProduct) => {
		let products = cart.products;
		let unsavedQty = productToAdd.qty;
		if (productExists(productToAdd.code)) {
			products = products.map(product => {
				if (product.code === productToAdd.code) {
					unsavedQty += product.unsavedQty;
					const newQuantity = product.qty + productToAdd.qty;
					return { ...productToAdd, unsavedQty, qty: newQuantity, total: productToAdd.price * newQuantity };
				}
				return product;
			});
		} else {
			unsavedQty = productToAdd.qty;
			products.push({ ...productToAdd, unsavedQty, total: productToAdd.price * productToAdd.qty });
		}

		setCart({
			balance: cart.balance,
			hasUnsavedChanges: hasUnsavedChanges(products),
			products,
			productsToDelete: cart.productsToDelete.filter(product => product.code !== productToAdd.code),
			total: sumTotals(products)
		});
	};

	const deleteProduct = (productToDelete: CartProduct) => {
		const product = cart.products.find(product => product.code === productToDelete.code);
		const products = cart.products.filter(product => product.code !== productToDelete.code);
		setCart({
			balance: cart.balance,
			hasUnsavedChanges: true,
			products,
			productsToDelete: [...cart.productsToDelete, product],
			total: sumTotals(products)
		});
	};

	const restoreDeletedProduct = (productToRestore: CartProduct) => {
		const product = cart.productsToDelete.find(product => product.code === productToRestore.code);
		if (!product) {
			return;
		}
		const productsToDelete = cart.productsToDelete.filter(product => product.code !== productToRestore.code);
		setCart({
			balance: cart.balance,
			hasUnsavedChanges: true,
			products: [...cart.products, product],
			productsToDelete,
			total: sumTotals([...cart.products, product])
		});
	}

	const clearProducts = () =>{
		setCart({
			products: [],
			productsToDelete: [],
			balance: cart.balance,
			hasUnsavedChanges: false,
			total: 0
		});
	}

	const updateAllProducts = (products: Array<CartProduct>) => {
		setCart({
			balance: cart.balance,
			hasUnsavedChanges: cart.hasUnsavedChanges,
			products,
			productsToDelete: cart.productsToDelete,
			total: sumTotals(products)
		});
	}

	const productExists = (code: number) => Boolean(cart.products.find(product => product.code === code));


	const resetUnsavedQtyForProduct = (code: number, productsToUse?: Array<CartProduct>) => {
		if (!productExists(code)) {
			return;
		}
		const products = (productsToUse && productsToUse.length ? productsToUse : cart.products).map(product => {
			if (product.code === code) {
				return { ...product, qty: product.qty - product.unsavedQty, unsavedQty: 0, total: product.price * (product.qty - product.unsavedQty) };
			}
			return product;
		});

		setCart({
			balance: cart.balance,
			hasUnsavedChanges: hasUnsavedChanges(products),
			products,
			productsToDelete: cart.productsToDelete,
			total: sumTotals(products)
		});
	}
	const syncProductsStock = async ({onStockConflict, onStockIsEnough}: {
		onStockConflict?: (products: Array<CartProduct>) => any,
		onStockIsEnough?: () => any
	}) => {
		const codesQuery = cart.products.map(product => product.code).join(',');
		setFetching(true);
		await Fetch({
			url: '/api/products',
			query: { codes: codesQuery },
			onSuccess(response: any) {
				const productsWithUpdatedStock = cart.products.map(product => {
					const fetchedProduct = response.products.find(p => p.code === product.code);
					if (fetchedProduct) {
						return { ...product, stock: fetchedProduct.stock };
					}
					return product;
				});
				const conflictingStockProducts = productsWithUpdatedStock.filter(product => product.stock !== null && product.stock < product.unsavedQty);
				if (conflictingStockProducts.length) {
					onStockConflict && onStockConflict(conflictingStockProducts);
				} else {
					onStockIsEnough && onStockIsEnough();
				}
				updateAllProducts(productsWithUpdatedStock);
			},
			onError(e: any) {
				console.log(e);
			},
			onFinally() {
				setFetching(false);
			}
		})
	}

	const resetChangesAfterSave: () => any = () => {
		return setCart({
			products: cart.products.map(product => ({ ...product, unsavedQty: 0 })),
			productsToDelete: [],
			balance: cart.balance,
			hasUnsavedChanges: false,
			total: cart.total
		});
	}

	const getUnsavedQtyForProduct = (code: number): number => {
		const product = cart.products.find(product => product.code === code);
		return product?.unsavedQty || 0;
	}

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
