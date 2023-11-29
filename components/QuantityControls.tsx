import { Text } from '@nextui-org/react';
import React, { FC } from 'react';

type props = {
	increaseQty(): void;
	decreaseQty(): void;
	qty: number;
	moreAvailable: boolean;
};

const QuantityControls: FC<props> = ({ increaseQty, decreaseQty, qty, moreAvailable }) => {
	return (
		<div className="product-quantity">
			<button className="quantity-button" onClick={decreaseQty}>
				-
			</button>
			<Text className="quantity">{qty}</Text>
			<button
				disabled={!moreAvailable}
				className={`quantity-button ${!moreAvailable && "unavailable"}`}
				onClick={increaseQty}>
				+
			</button>
		</div>
	);
};

export default QuantityControls;
