import { useState } from 'react';
import { Cart, CartProduct } from '../global/types';

export function useCart(cartSSR: Cart) {
	const [cart, setCart] = useState(cartSSR);

	const sumTotals = (products: Array<CartProduct>) => products.reduce((total: number, product: CartProduct) => {
		return product.total + total
	}, 0);

	const updateProduct = (productToUpdate: CartProduct) => {
		const products = cart.products.map(product => {
			if (product.code === productToUpdate.code) {
				return { ...productToUpdate, total: productToUpdate.price * productToUpdate.qty };
			}
			return product;
		});
		setCart({
			balance: cart.balance,
			hasUnsavedChanges: true,
			products,
			total: sumTotals(products)
		});
	};

	const addProduct = (productToAdd: CartProduct) => {
		let products = cart.products;

		if (productExists(productToAdd.code)) {
			products = products.map(product => {
				if (product.code === productToAdd.code) {
					const newQuantity = product.qty + productToAdd.qty;
					return { ...productToAdd, qty: newQuantity, total: productToAdd.price * newQuantity };
				}
				return product;
			});
		} else {
			products.push({ ...productToAdd, total: productToAdd.price * productToAdd.qty });
		}

		setCart({
			balance: cart.balance,
			hasUnsavedChanges: true,
			products,
			total: sumTotals(products)
		});
	};

	const deleteProduct = (productToDelete: CartProduct) => {
		const products = cart.products.filter(product => product.code !== productToDelete.code);
		setCart({
			balance: cart.balance,
			hasUnsavedChanges: true,
			products,
			total: sumTotals(products)
		});
	};

	const clearProducts = () =>{
		setCart({
			products: [],
			balance: cart.balance,
			hasUnsavedChanges: false,
			total: 0
		});
	}

	const productExists = (code: number) => cart.products.find(product => product.code === code);

	return { ...cart, updateProduct, addProduct, deleteProduct, clearProducts };
}
