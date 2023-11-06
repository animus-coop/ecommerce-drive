import { container } from 'tsyringe';
import GoogleSheetService from '../../../../src/services/GoogleSheetService';
import OrderService from '../../../../src/services/OrderService';

export default async function ordersHandler(req, res) {
	const orderService = container.resolve(OrderService);
	if (req.method === 'POST') {
		try {
			const ordersToPost = await orderService.getOrdersToPost()
			const googleService = new GoogleSheetService('orders');
			await googleService.insertOnGoogleSheet(ordersToPost);
			await orderService.clearLocalOrders();
			res.status(200).json({ success: true, error: false });
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		try {
			const currentOrders = await orderService.getAll();
			res.status(200).json(currentOrders);
		} catch (error) {
			console.log(error, "Error saving order");
			res.status(500).json(error);
		}
	}
}
