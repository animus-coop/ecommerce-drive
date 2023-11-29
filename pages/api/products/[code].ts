import { container } from 'tsyringe';
import ProductService from '../../../src/services/ProductService';
import {NextApiRequest, NextApiResponse} from "next";

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
    const productService = container.resolve(ProductService);
    try {
        const code = Number(req.query.code);
        if (isNaN(code)) {
            return res.status(400).json({error: true, message: "INVALID_CODE"});
        }
        const product = await productService.getOne(code);
        return res.status(200).json({product});
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
}
