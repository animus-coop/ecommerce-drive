import {Card, Grid, Text, Row, Button, Image, Loading} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { CartIcon } from '../svg/CartIcon';
import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import { productType } from '../../src/global/types';
import QuantityControls from '../QuantityControls';
import StockBadge from "../StockBadge";

type props = {
	item: productType;
	addProduct(product: productType, qty: number, setLoading: Dispatch<SetStateAction<boolean>> ): void;
};

const ProductCard: FC<props> = ({ item, addProduct }) => {
	const [loading, setLoading] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [moreAvailable, setMoreAvailable] = useState(item.stock !== 0);

	useEffect(() => {
		if (item.stock !== null && quantity >= item.stock) setMoreAvailable(false);
		else setMoreAvailable(true);
	}, [quantity]);

	return (
		<Grid xs={12} sm={12} md={12} lg={12} xl={12}>
			<Card css={{ margin: 0, letterSpacing: 0 }}>
				<Card.Body className={`product-container ${item.stock === 0 && "unavailable"}`}>
					<Grid.Container gap={1} justify="space-around">
						<Grid xs={4}>
							<Image objectFit="contain" src={item.picture} />
						</Grid>
						<Grid xs={8} className="details-container" lg={6} md={6} xl={6}>
							<Text className="product-name">{item.name}</Text>
							<Text className="product-reference">{item.minimum}</Text>
							<Text className="product-supplier">
								<FontAwesomeIcon icon={faFaceLaughBeam} />
								{item.seller}
							</Text>
							<Text className="product-price">${item.price}</Text>
						</Grid>
					</Grid.Container>
					<Row align="center">
						<Grid sm={7} xs={7} lg={6} md={6} xl={6} direction="column" justify="center" alignItems="center">
							<>
								<StockBadge stock={item.stock} />
								<QuantityControls
									qty={quantity}
									moreAvailable={moreAvailable}
									increaseQty={() => {
										if (!moreAvailable) return;
										setQuantity(prev => prev + 1);
									}}
									decreaseQty={() => {
										if (quantity > 1) setQuantity(prev => prev - 1);
									}}
								/>
							</>
						</Grid>
						<Grid sm={3} xs={3} lg={6} md={6} xl={6}>
							<Button
								disabled={item.stock === 0|| loading}
								onClick={() => {
									addProduct(item, quantity, setLoading);
									setQuantity(1);
									toast.warn('Agregado exitosamente', {
										autoClose: 1500,
										icon: <CartIcon fill="#EA903C" size={24} width={16} height={16} />
									});
								}}
								className="button-text"
								css={{ backgroundColor: '#F29400', color: 'black', fontWeight: 400 }}
								auto
								flat
							>
								{loading ? (<Loading />) : 'Agregar'}
							</Button>
						</Grid>
					</Row>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default ProductCard;
