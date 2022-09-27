import React, { FC, useState } from 'react';
import { Avatar, Grid, Text } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductCart } from '../src/global/types';

type ProductCartProps = {
	product: ProductCart;
	deleteProduct(product: ProductCart): void;
	addProduct(product: ProductCart, qty: number);
};

const ProductCart: FC<ProductCartProps> = ({ product, deleteProduct, addProduct }) => {
	const [quantity, setQuantity] = useState(product.qty);

	return (
		<Grid.Container className="product-cart">
			<Grid xs={4} className="product-image-container" justify='center'>
				<Avatar src={product.picture} size={'xl'} />
			</Grid>
			<Grid xs={8} className="product-info">
				<div className="title-buttons">
					<div>
						<Text className="product-name">{product.name}</Text>
						<small className="product-description">{product.minimum}</small>
					</div>
					<div className="product-buttons">
						<Text
							className="quantity-border"
							onClick={() => {
								if (quantity > 1) {
									setQuantity(prev => prev - 1);
									addProduct(product, quantity - 1);
								}
							}}
						>
							-
						</Text>
						<Text className="quantity">{quantity}</Text>
						<Text
							className="quantity-border"
							onClick={() => {
								setQuantity(prev => prev + 1);
								addProduct(product, quantity + 1);
							}}
						>
							+
						</Text>
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

export default ProductCart;
