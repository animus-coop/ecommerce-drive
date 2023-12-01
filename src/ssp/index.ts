import { container } from 'tsyringe';
import ConfigService from '../services/ConfigService';
import { getIronSession, IronSessionData } from 'iron-session';
import { sessionOptions } from '../utils/withIronSession';
import { UserLogged } from '../global/types';
import GoogleSheetService from '../services/GoogleSheetService';
import OrderService from '../services/OrderService';
import config from '../../constants/config';

export async function getServerSideProps(context) {
	const configService = container.resolve(ConfigService);
	const getIsOpen = await configService.getCartStatus();
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);

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


	if (ironSession.user && getIsOpen.status === 'open') {
		const orderService = container.resolve(OrderService);
		const userOrder = await orderService.getUserOrder(ironSession.user.email);
		const googleSheetInstance = new GoogleSheetService('users');
		const users: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();
		const loggedUser = users.find(matchingUser => matchingUser[config.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === ironSession.user.email);
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
		return {
			redirect: {
				permanent: false,
				destination: '/products'
			},
			props: { cart, user: { logged: false } }
		};
	}

	const user: UserLogged = ironSession.user ?? { logged: false };
	return { props: { cartStatus: getIsOpen, user, cart } };
}
