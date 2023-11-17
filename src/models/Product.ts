import mongoose, { Schema, model, Document } from 'mongoose';
import { ProductModel } from '../global/types';

interface BaseProductDocument extends ProductModel, Document {}

const Product = new Schema<BaseProductDocument>({
	stock: { type: 'number' },
	code: { type: 'number', index: true },
	name: { type: 'string', index: true },
	minimum: { type: 'string' },
	price: { type: 'number' },
	category: { type: 'string' },
	seller: { type: 'string' },
	order: { type: 'number' },
	picture: { type: 'string' }
}, {
	versionKey: false
});

Product.index({ name: 'text' });

Product.statics.getDocumentsCount = async function (category?: string) {
	return category ? await this.countDocuments({ category }) : await this.countDocuments();
}

Product.statics.search = async function (search, category) {
	const query = category ? { category, $text: { $search: search } } : { $text: { $search: search } };
	const products = await this.find(query, { score: { $meta: 'textScore' } }).sort({
		score: { $meta: 'textScore' }
	});
	return { products };
};

if (!mongoose.models.Product) {
	const productModel = model<BaseProductDocument>('Product', Product);
	productModel.createIndexes();
}

export default mongoose.models.Product;
