import { Text } from '@nextui-org/react';
import React, { FC } from 'react';

type props = {
	increaseQty(): void;
	decreaseQty(): void;
	qty: number;
};

const QuantityControls: FC<props> = ({ increaseQty, decreaseQty, qty }) => {
	return (
		<>
			<Text className="quantity-border" onClick={decreaseQty}>
				-
			</Text>
			<Text className="quantity">{qty}</Text>
			<Text className="quantity-border" onClick={increaseQty}>
				+
			</Text>
		</>
	);
};

export default QuantityControls;
