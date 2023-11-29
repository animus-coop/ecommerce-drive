import { getIronSession, IronSessionData } from 'iron-session';
import { sessionOptions } from '../utils/withIronSession';
import { container } from 'tsyringe';
import OrderService from '../services/OrderService';
import GoogleSheetService from '../services/GoogleSheetService';
import { UserLogged } from '../global/types';
import config from '../../constants/config';

export async function getServerSideProps(context) {
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);
	const user: UserLogged = ironSession.user ?? { logged: false };
	const cart = { products: [], productsToDelete: [], balance: 0 ,total: 0 };
	let orderId = null;

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
		const ModelResponse = await orderService.getUserOrder(user.email);
		const googleSheetInstance = new GoogleSheetService('users');
		const users: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();
		const loggedUser = users.find(matchingUser => matchingUser[config.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email);
		cart.balance = parseFloat(loggedUser[config.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
		if (ModelResponse) {
			orderId = ModelResponse._id.toString();
			cart.products = ModelResponse.products.map(({ code, name, price, minimum, qty, total, picture }) => ({
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
			cart.balance = parseFloat(loggedUser[config.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
		}
	} else {
		return {
			redirect: {
				permanent: false,
				destination: '/login'
			},
			props: { cart }
		};
	}

	return {
		props: { user, cart, orderId }
	};
}
