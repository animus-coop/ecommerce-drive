import Layout from './layout';
import Header from '../components/navigation/Header';
import { Button, Container, Grid } from '@nextui-org/react';
import ProductDetailCard from '../components/cards/ProductDetailCard';
import TotalCard from '../components/cards/TotalCard';
import { ProductCart as productType } from '../src/global/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { infoMessages } from '../helpers/notify';
import { Fetch } from '../src/hooks/fetchHook';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useAppCtx } from '../src/context';
export { getServerSideProps } from '../src/ssp/cart';

export default function Cart(props) {
	const isEditingOrder = props.orderId !== null;
	const cart = useAppCtx();
	const router = useRouter();

	useEffect(() => {
		infoMessages();
	}, []);

	const sendOrder = async () => {
		if (!cart.products.length) {
			console.warn(`No puedes actualizar tu orden sin productos`);
			return;
		}
		Fetch<{ products: Array<productType>; balance?:number; total: number }>({
			url: `/api/orders${isEditingOrder ? `/${props.orderId}` : ''}`,
			method: `${isEditingOrder ? 'PUT' : 'POST'}`,
			data: { products: cart.products, balance: cart.balance , total: cart.total },
			onSuccess: () => {
				router.push('/#orderstored');
				toast.warn(`Su pedido se ha ${isEditingOrder ? 'modificado' : 'realizado'} con éxito`, {
					icon: <FontAwesomeIcon icon={faCheckCircle} color="#EA903C" />
				});
			},
			onError: e => {
				console.warn(`error on saving order`, e);
			}
		});
	};

	const cancelOrder = async () => {
		if (!isEditingOrder) {
			console.warn(`No puedes cancelar una orden si no existe`);
			return;
		}
		Fetch<{ orderId: string;}>({
			url: `/api/orders/cancel`,
			method: "DELETE",
			data: { orderId: props.orderId},
			onSuccess: () => {
				router.push('/');
				cart.clearProducts()
				toast.warn(`Su pedido se ha cancelado con éxito`, {
					icon: <FontAwesomeIcon icon={faCheckCircle} color="#EA903C" />
				});
			},
			onError: e => {
				console.warn(`error on deleting order`, e);
			}
		});
	};

	return (
		<Layout {...props}>
			{props.user.logged && (
				<>
					<Header user={props.user} title={isEditingOrder ? 'Edita tu pedido' : 'Tu carrito'} cart={cart} />
					<Container className="cart-container">
						<Grid.Container justify="center" gap={2}>
							<Grid direction="column" xs={12} sm={10} md={7} lg={6} xl={4}>
								{cart.products.map((product: productType) => (
									<ProductDetailCard
										key={product.code}
										deleteProduct={(product: productType) => cart.deleteProduct(product)}
										updateProduct={(product: productType, qty) => cart.updateProduct({ ...product, qty })}
										product={product}
									/>
								))}
								<TotalCard total={cart.total} balance={cart.balance}/>
								<Button
									disabled={cart.products.length < 0}
									className={`${cart.products.length > 0 ? 'button-total' : 'button-total-disabled'}`}
									onClick={sendOrder}
								>
									{isEditingOrder ? 'Modificar pedido' : 'Realizar pedido'}
								</Button>
								<Button
									className="button-continue"
									onClick={() => {
										router.push('/');
									}}
								>
									Seguir comprando
								</Button>
								<Button
									disabled={!isEditingOrder}
									className={`${isEditingOrder ? 'button-cancel' : 'button-cancel-disabled'}`}
									onClick={cancelOrder}
								>
									Cancelar pedido
								</Button>
							</Grid>
						</Grid.Container>
					</Container>
				</>
			)}
		</Layout>
	);
}
