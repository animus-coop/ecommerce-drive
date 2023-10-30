import { singleton } from 'tsyringe';
import Category from '../models/Category';
import BaseService from './BaseService';
import {slugify} from "../../helpers/slug";

@singleton()
class CategoryService extends BaseService {
	constructor() {
		super();
	}

	save(name: string) {
		const slug = slugify(name);
		const newCategory = { name, slug };
		return Category.create(newCategory);
	}

	getAll() {
		return Category.find({}).select({ _id: 0, __v: 0 });
	}

	deleteAll() {
		return Category.deleteMany({});
	}
}

export default CategoryService;
