import { singleton } from 'tsyringe';
import { orderData } from '../global/types';
import Order, { OrderI } from '../models/Order';
import BaseService from './BaseService';

@singleton()
class OrderService extends BaseService {
	constructor() {
		super();
	}

	save(order: OrderI) {
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

	updateOrder(orderId: string, order: orderData) {
		const { products, total } = order;
		return Order.findByIdAndUpdate(orderId, { products, total }, { new: true }).exec();
	}

	deleteOrder(orderId: string) {
	    return Order.findByIdAndRemove(orderId).exec();
	}

	clearLocalOrders() {
		return Order.deleteMany({}).exec();
	}
}

export default OrderService;
