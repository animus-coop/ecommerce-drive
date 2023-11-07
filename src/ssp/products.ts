import { sessionOptions } from '../utils/withIronSession';
import { container } from 'tsyringe';
import ConfigService from '../services/ConfigService';
import GoogleSheetService from '../services/GoogleSheetService';
import { getIronSession, IronSessionData } from 'iron-session';
import { UserLogged } from '../global/types';
import OrderService from '../services/OrderService';
import config from '../../constants/config';

export async function getServerSideProps(context) {
	const configService = container.resolve(ConfigService);
	const getIsOpen = await configService.getCartStatus();
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);

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

	if (getIsOpen.status !== 'open' || !ironSession.user) {
		return {
			redirect: {
				permanent: false,
				destination: '/'
			},
			props: {}
		};
	}

	const user: UserLogged = ironSession.user ?? { logged: false };

	const cart = {
		balance: 0,
		hasUnsavedChanges: false,
		products: [],
		total: 0
	};

	if (user.logged) {
		const orderService = container.resolve(OrderService);
		const ModelResponse = await orderService.getUserOrder(user.email);
		const googleSheetInstance = new GoogleSheetService('users');
		const users: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();
		const loggedUser = users.find(matchingUser => matchingUser[config.GOOGLE_SHEET_ROWS.USERS.EMAIL_COLUMN] === user.email);
		cart.balance = parseFloat(loggedUser[config.GOOGLE_SHEET_ROWS.USERS.BALANCE_COLUMN]);
		if (ModelResponse) {
			cart.products = ModelResponse.products.map(({ code, name, price, minimum, qty, total, picture }) => ({
				code,
				name,
				price,
				minimum,
				qty,
				total,
				picture
			}));
			cart.total = cart.products.reduce((total, product) => total + product.total, 0);
		}
	}

	return { props: { cartStatus: getIsOpen, user, cart } };
}
