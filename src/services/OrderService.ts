import {container, singleton} from 'tsyringe';
import {CartProduct, orderData} from '../global/types';
import Order, { OrderI } from '../models/Order';
import BaseService from './BaseService';
import ProductService from "./ProductService";

@singleton()
class OrderService extends BaseService {
	constructor() {
		super();
		this.productService = container.resolve(ProductService);
	}

	productService: ProductService;

	async save(order: OrderI) {
		const { products } = order;
		const allProductsHaveEnoughStock = await Promise.all(products.map(async (product) => {
			return this.productService.productHasEnoughStock(product.code, product.qty);
		}));
		if (!allProductsHaveEnoughStock.every((hasEnoughStock) => hasEnoughStock)) {
			throw new Error('PRODUCT_STOCK_NOT_ENOUGH');
		}
		await Promise.all(products.map(async (product) => {
			return this.productService.updateProductStock(product.code, product.qty * -1);
		}));
		return Order.create(order);
	}

	getAll() {
		return Order.find({}).exec();
	}

	getUserOrder(email: string) {
		return Order.findOne({ email }).exec();
	}

	async getOrdersToPost() {
		const allOrders = await Order.find({});
		const formattedOrders = [];
		allOrders.map(order => {
			order.products.map(product => {
				const newOrder = {
					userId: order.userId,
					email: order.email,
					name: order.name,
					product: product.name,
					code: product.code,
					cantidad: product.qty
				};
				formattedOrders.push(newOrder);
			});
		});
		return formattedOrders;
	}

	async updateOrder(orderId: string, newOrder: orderData) {
		const existingOrder = await Order.findById(orderId).exec();
		if (!existingOrder) {
			throw new Error('ORDER_NOT_FOUND');
		}
		const { products: incomingProducts, total } = newOrder;

		const productsInNeedToUpdateStock = this.getProductsThatNeedStockUpdate(incomingProducts, existingOrder.products);
		const allProductsHaveEnoughStock = await Promise.all(productsInNeedToUpdateStock.map(async (product) => {
			if (product.qtyChangedBy < 0) {
				return true;
			}
			return this.productService.productHasEnoughStock(product.code, product.qtyChangedBy);
		}));

		if (!allProductsHaveEnoughStock.every((hasEnoughStock) => hasEnoughStock)) {
			throw new Error('PRODUCT_STOCK_NOT_ENOUGH');
		}

		await Promise.all(productsInNeedToUpdateStock.map(async (product) => {
			return this.productService.updateProductStock(product.code, product.qtyChangedBy * -1);
		}));

		existingOrder.products = incomingProducts;
		existingOrder.total = total;
		return existingOrder.save();
	}

	deleteOrder(orderId: string) {
	    return Order.findByIdAndRemove(orderId).exec();
	}

	clearLocalOrders() {
		return Order.deleteMany({}).exec();
	}

	private getProductsThatNeedStockUpdate(incomingProducts: Array<CartProduct>, existingProducts: Array<CartProduct>) {
		const removedProducts = existingProducts
			.filter((existingProduct: CartProduct) => {
				return !incomingProducts.find((product: CartProduct) => {
					return product.code === existingProduct.code;
				});
			}).map((existingProduct: CartProduct) => {
				return {
					code: existingProduct.code,
					qtyChangedBy: existingProduct.qty * -1
				};
			});
		return incomingProducts
			.map((product) => {
				const productInExistingOrder = existingProducts.find((existingProduct: CartProduct) => {
					return existingProduct.code === product.code;
				});
				if (productInExistingOrder) {
					return {
						code: product.code,
						qtyChangedBy: product.qty - productInExistingOrder.qty
					};
				}
				return {
					code: product.code,
					qtyChangedBy: product.qty
				};
			}).filter((product) => product.qtyChangedBy !== 0).concat(removedProducts);
	}
}

export default OrderService;
