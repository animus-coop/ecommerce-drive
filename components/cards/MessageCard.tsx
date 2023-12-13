import { Card, Container, Text } from '@nextui-org/react';
import { getDayFromDate, getTimeFromDate } from '../../helpers/formatDate';
import { FC } from 'react';
import { statusCart } from '../../src/global/types';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type props = {
	status: statusCart;
};

const MessageCard: FC<props> = ({ status }) => {
	const FechaHora = `${getDayFromDate(status.openDate)} a las ${getTimeFromDate(status.openDate)}`;
	return (
		<div className={'message-card-wrap'}>
			<Container fluid className="message-card-container">
				<Card css={{ height: '40vh', background: 'none' }}> </Card>
				{status.status === 'open' ? (
					<div>
						<Text h1 css={{ color: 'white' }}>
							¿Ya hiciste tu pedido de este mes?{' '}
						</Text>
					</div>
				) : status.status === 'toOpen' ? (
					<div>
						<Text h1 css={{ color: 'white' }}>
							El carrito abre el {FechaHora}
						</Text>
					</div>
				) : (
					<div className="closed-cart-text">
						<Text h1>
							El carrito ya está cerrado.{' '}
						</Text>
						<Text size="$2xl">
							<FontAwesomeIcon icon={faArrowRight} color="#EA903C" /> Podés chequear el detalle de lo pedido, lo entregado y tu saldos con el grupo de compras en	<a target="_blank" href="https://docs.google.com/spreadsheets/d/16J909PqhPXD48peYWb86Fud3jfY47AzhbbM_YaJFfz4/edit#gid=0">
								<b> este link</b>
							</a>
						</Text>
						<Text>
							¡La planilla no es editable! Si ves algo que está mal escribinos a comprascomunitariasalmargen@gmail.com y nosotros lo modificamos. Lo vas a ver reflejado en la planilla.
							<br/>
							La planilla tiene tres viñetas.
							<br/>
							1- Lista de precios definitiva. En la última columna les indica si hubo cambio en el precio con respecto a lo que vieron en el carrito. En la mayoría de los casos las variaciones se deben a la inflación, y debes en cuando a algún error humano en la carga de los precios.
							<br/>
							2- Detalle de lo que habían pedido y lo que se les entregó (columna H y J). Ahora sumamos una columna intermedia que marca automáticamente cuando hubo diferencias entre lo pedido y lo entregado.
							<br/>
							3- Finalmente una con el valor total de la compra, lo que adelantaron y lo que quedó pendiente a favor o en contra.
							<br/>
							Cualquier duda o diferencia, por favor avisen a comprascomunitariasalmargen@gmail.com así lo chequeamos.
						</Text>
					</div>
				)}
			</Container>
		</div>
	);
};

export default MessageCard;
