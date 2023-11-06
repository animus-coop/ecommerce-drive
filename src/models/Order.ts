import mongoose, { Schema, model, Document } from 'mongoose';

interface Product {
	code: number;
	name: string;
	price: number;
	minimum: string;
	qty: number;
	total: number;
	picture: string;
}

export interface OrderI {
	userId: string;
	email: string;
	name: string;
	products: Product[];
	total: number;
}

interface BaseOrderDocument extends OrderI, Document {}

const Order = new Schema<BaseOrderDocument>({
	userId: { type: 'string', unique: true },
	email: { type: 'string', unique: true },
	name: {type:'string', unique: false},
	products: [
		{
			code: 'number',
			name: 'string',
			price: 'number',
			minimum: 'string',
			qty: 'number',
			total: 'number',
			picture: 'string'
		}
	],
	total: 'number'
}, {
	timestamps: true,
	versionKey: false
});

if (!mongoose.models.Order) {
	model<BaseOrderDocument>('Order', Order);
}

export default mongoose.models.Order;
