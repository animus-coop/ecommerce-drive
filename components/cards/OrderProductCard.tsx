import React, {FC, useEffect, useState} from 'react';
import {Avatar, Grid, Text} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartProduct } from '../../src/global/types';
import QuantityControls from '../QuantityControls';
import QuantityInfo from "../QuantityInfo";

type ProductCartProps = {
	product: CartProduct;
	deleteProduct(product: CartProduct): void;
	updateProduct(product: CartProduct, qty: number): void;
};

const OrderProductCard: FC<ProductCartProps> = ({ product, deleteProduct, updateProduct }) => {
	const [quantity, setQuantity] = useState(product.qty);
	const [remainingStock, setRemainingStock] = useState(getRemainingStock(product));
	const [stockExceededBy, setStockExceededBy] = useState(getStockExceededBy(product));

	function getStockExceededBy({stock, unsavedQty}: CartProduct) {
		if (stock === null) return 0;
		if (unsavedQty > stock) return unsavedQty - stock;
		return 0;
	}

	function getRemainingStock({stock, unsavedQty}: CartProduct) {
		if (stock === null) return null;
		return stock - unsavedQty;
	}

	useEffect(() => {
		setStockExceededBy(getStockExceededBy(product));
		setRemainingStock(getRemainingStock(product));
	}, [product.stock, product.unsavedQty]);

	return (
		<Grid.Container className={`product-cart ${stockExceededBy && "stock-conflict"}`}>
			<Grid xs={4} className="product-image-container" justify="center">
				<Avatar src={product.picture} css={{ size: '$20' }} />
			</Grid>
			<Grid xs={8} className="product-info">
				<div className="title-buttons">
					<div>
						<Text className="product-name">{product.name}</Text>
						<small className="product-description">{product.minimum}</small>
					</div>
					<div className="order-product-controls-container">
						<QuantityInfo unsavedQty={product.unsavedQty} remainingStock={remainingStock} stockExceededBy={stockExceededBy} />
						<div className="product-buttons">
							<QuantityControls
								qty={quantity}
								moreAvailable={remainingStock !== null && remainingStock > 0}
								increaseQty={() => {
									if (remainingStock !== null && remainingStock <= 0) return;
									setQuantity(prev => prev + 1);
									(remainingStock !== null) && setRemainingStock(prev => prev - 1);
									updateProduct(product, quantity + 1);
								}}
								decreaseQty={() => {
									if (quantity > 1) {
										setQuantity(prev => prev - 1);
										(remainingStock !== null) && setRemainingStock(prev => prev + 1);
										updateProduct(product, quantity - 1);
									}
								}}
							/>
						</div>
					</div>
				</div>
				<div className="button-price">
					<FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTrash} onClick={() => deleteProduct(product)} />
					<Text className="product-price">${product.total.toFixed(2)}</Text>
				</div>
			</Grid>
		</Grid.Container>
	);
};

export default OrderProductCard;
