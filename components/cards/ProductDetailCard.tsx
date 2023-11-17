import React, { FC, useState } from 'react';
import { Avatar, Grid, Text } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartProduct } from '../../src/global/types';
import QuantityControls from '../QuantityControls';

type ProductCartProps = {
	product: CartProduct;
	deleteProduct(product: CartProduct): void;
	updateProduct(product: CartProduct, qty: number);
};

const ProductDetailCard: FC<ProductCartProps> = ({ product, deleteProduct, updateProduct }) => {
	const [quantity, setQuantity] = useState(product.qty);

	return (
		<Grid.Container className="product-cart">
			<Grid xs={4} className="product-image-container" justify="center">
				<Avatar src={product.picture} css={{ size: '$20' }} />
			</Grid>
			<Grid xs={8} className="product-info">
				<div className="title-buttons">
					<div>
						<Text className="product-name">{product.name}</Text>
						<small className="product-description">{product.minimum}</small>
					</div>
					<div className="product-buttons">
						<QuantityControls
							qty={quantity}
							increaseQty={() => {
								setQuantity(prev => prev + 1);
								updateProduct(product, quantity + 1);
							}}
							decreaseQty={() => {
								if (quantity > 1) {
									setQuantity(prev => prev - 1);
									updateProduct(product, quantity - 1);
								}
							}}
						/>
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

export default ProductDetailCard;
