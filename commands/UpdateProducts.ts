import { container } from 'tsyringe';
import ProductService from '../src/services/ProductService';
import CategoryService from '../src/services/CategoryService';
import GoogleSheetService from '../src/services/GoogleSheetService';
import { slugify } from '../helpers/slug';
import GoogleDriveFilesService from '../src/services/GoogleDriveFilesService';
import { FileInfoType, productType } from '../src/global/types';
import config from '../constants/config';

function serializeProducts(products: Array<Array<string>>, files: FileInfoType): Array<productType> {
	const serializeProducts = [];

	products.map((product, i) => {
		if (i !== 0) {
			const fileInfo = files.find(
				file => file.code === parseInt(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN])
			);
			serializeProducts.push({
				stock: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.STOCK_COLUMN],
				code: parseInt(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN]),
				name: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.NAME_COLUMN],
				minimum: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.MINIUM_COLUMN],
				price: parseFloat(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.PRICE_COLUMN]),
				category: slugify(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN]),
				categoryName: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN],
				seller: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.SELLER_COLUMN],
				order: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.SORT_COLUMN],
				picture: fileInfo ? fileInfo.webViewLink : ''
			});
		}
	});
	return serializeProducts;
}

async function saveProductsOnMongo(products: Array<productType>): Promise<object> {
	try {
		const productService = container.resolve(ProductService);

		await productService.deleteAll();

		await Promise.all(
			products.map(async product => {
				if (product.stock) {
					await productService.save(product);
				}
			})
		);

		console.log('Products saved succesfully');
		return { success: true };
	} catch (e) {
		console.log('error saving products', e);
		return { error: e };
	}
}

async function saveCategories(products: Array<productType>): Promise<object> {
	try {
		const categoryService = container.resolve(CategoryService);

		const categories = [];

		await categoryService.deleteAll();

		products.map(product => {
			if (!categories.includes(product.categoryName)) {
				categories.push(product.categoryName);
			}
		});

		Promise.all(
			categories.map(async category => {
				await categoryService.save(category);
			})
		);

		console.log('Categories saved succesfully');
		return { success: true };
	} catch (e) {
		console.log('error saving categories', e);
		return { error: e };
	}
}

export async function updateProducts(): Promise<object> {
	try {
		const googleSheetInstance = new GoogleSheetService('products');
		const products: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();

		const GDservice = new GoogleDriveFilesService();
		const filesInfo = await GDservice.retrieveFilesFromPicturesFolder();

		const formattedProducts: Array<productType> = serializeProducts(products, filesInfo);
		await saveProductsOnMongo(formattedProducts);
		await saveCategories(formattedProducts);

		return { success: true };
	} catch (e) {
		console.log(e, 'Error updating products');
		return { error: e };
	}
}
