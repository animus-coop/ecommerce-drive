import { singleton } from 'tsyringe';
import { ProductModel } from '../global/types';
import Product from '../models/Product';
import BaseService from './BaseService';

@singleton()
class ProductService extends BaseService {
	constructor() {
		super();
	}

	save(product: ProductModel) {
		return Product.create(product);
	}

	async get(category, page = 1) {
		const limit = 60;
		const productsCount = await Product.getDocumentsCount(category);
		const query = category ? { category } : {};
		const products = await Product.find(query)
			.select({_id: 0})
			.limit(limit)
			.skip(limit * (page - 1))
			.sort({ order: 1 });

		const totalPages = Math.ceil(productsCount / limit);
		return { products, totalPages };
	}

	getOne(code: number) {
		return Product.findOne({ code }).exec();
	}

	getProductsByCode(productCodes: Array<number>) {
		return Product.find({ code: { $in: productCodes } }).exec();
	}

	async searchProduct(query, category) {
		return Product.search(query, category);
	}

	deleteAll() {
		return Product.deleteMany({});
	}

	async productHasEnoughStock(code: number, qty: number) {
		const product = await Product.findOne({ code }).exec();
		if (!product) {
			throw new Error('PRODUCT_NOT_FOUND');
		}
		return product.stock === null || product.stock >= qty;
	}

	async updateProductStock(code: number, amount: number) {
		const product = await Product.findOne({ code }).exec();
		if (!product) {
			throw new Error('PRODUCT_NOT_FOUND');
		}
		if (product.stock === null) {
			return product;
		}
		const newStock = product.stock + amount;
		if (newStock < 0) {
			throw new Error('PRODUCT_STOCK_NOT_ENOUGH');
		}
		product.stock = newStock;
		return product.save();
	}


}

export default ProductService;
