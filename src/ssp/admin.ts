import { container } from 'tsyringe';
import { getIronSession, IronSessionData } from 'iron-session';
import { UserLogged } from '../global/types';
import { sessionOptions } from '../utils/withIronSession';
import GoogleSheetService from '../services/GoogleSheetService';
import OrderService from '../services/OrderService';
import ConfigService from '../services/ConfigService';
import config from '../../constants/config';
import parse from "../utils/parse";

export async function getServerSideProps(context) {
	const orderService = container.resolve(OrderService);
	const configService = container.resolve(ConfigService);

	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);
	const user: UserLogged = ironSession.user ?? { logged: false };

	const cart = { products: [], productsToDelete: [], balance: 0, total: 0 };

	if(ironSession.user && !ironSession.user.id){
		context.req.session.destroy();
		return {
			redirect: {
				permanent: false,
				destination: '/'
			},
			props: {}
		};
	}

	if (user.logged) {
		const orderService = container.resolve(OrderService);
		const userOrder = await orderService.getUserOrder(user.email);
		const googleSheetInstance = new GoogleSheetService('users');
		const users: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();
		const loggedUser = users.find(matchingUser => matchingUser[config.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email);
		cart.balance = parseFloat(loggedUser[config.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
		if (userOrder) {
			cart.products = userOrder.products.map(({ code, name, price, minimum, qty, total, picture }) => ({
				code,
				name,
				price,
				minimum,
				qty,
				unsavedQty: 0,
				total,
				picture
			}));
			cart.total = cart.products.reduce((total, product) => total + product.total, 0);
		}

		console.log("Inicio de sesion", {user, cart})
	}

	const status = await configService.getCartStatus();

	const orders = await orderService.getAll();

	return {
		props: {
			user,
			status: status,
			orders: parse(orders),
			count: orders ? orders.length : 0,
			cart
		}
	};
}
