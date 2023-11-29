import { container } from 'tsyringe';
import ProductService from '../../../src/services/ProductService';
import {NextApiRequest, NextApiResponse} from "next";

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
	const productService = container.resolve(ProductService);
	try {
		if (req.query.codes) {
			// @ts-ignore
			let codes = req.query.codes.split(',');
			if (codes.length === 0 || !Array.isArray(codes)) {
				return res.status(400).json({error: true, message: "INVALID_CODES"});
			}
			codes = codes.map(code => Number(code));
			const products = await productService.getProductsByCode(codes);
			return res.status(200).json({products});
		}
		const { search, category, page } = req.query;
		if (search) {
			const products = await productService.searchProduct(search, category);
			return res.status(200).json({products});
		}
		const pageNumber = Number(page);
		if (isNaN(pageNumber) || pageNumber <= 0) {
			return res.status(400).json({error: true, message: "INVALID_PAGE"});
		}
		const result = await productService.get(category, pageNumber);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
}
