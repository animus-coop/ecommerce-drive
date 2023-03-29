import { getIronSession, IronSessionData } from 'iron-session';
import { container } from 'tsyringe';
import OrderService from '../../../src/services/OrderService';
import { sessionOptions } from '../../../src/utils/withIronSession';

export default async function cancelOrder(req, res) {
	if (req.method !== 'DELETE') {
		return res.status(405).send({ message: 'Invalid method. Only DELETE requests allowed' });
	}
   
	try {
		const orderService = container.resolve(OrderService);
		const body = JSON.parse(req.body);

        const { orderId } = body;

		if (!orderId) {
			return res.status(400).json({ error: true, message: 'Missing order' });
		}

		await orderService.deleteOrder(orderId);

		const currentSession: IronSessionData = await getIronSession(req, res, sessionOptions);

		const { email, name } = currentSession.user;

		console.log("Pedido cancelado correctamente", {name , email});
		res.status(200).json({ error: false, message: 'Order canceled successfully' });
	} catch (error) {
		console.log(error, 'error on deleting order');
		res.status(500).json(error);
	}
}
