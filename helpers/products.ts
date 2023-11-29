import {CartProduct, productType} from "../src/global/types";

export function productHasEnoughStock(product: productType, quantity: number): boolean {
  return product.stock === null || product.stock >= quantity;
}

export function hasUnsavedChanges(cartProducts: Array<CartProduct>): boolean {
  return cartProducts.some(product => Boolean(product.unsavedQty));
}
