import { container } from 'tsyringe';
import CategoryService from '../../src/services/CategoryService';
import {NextApiRequest, NextApiResponse} from "next";

export default async function getCategories(_req: NextApiRequest, res: NextApiResponse) {
	const categoryService = container.resolve(CategoryService);
	try {
		const categories = await categoryService.getAll();
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
}
