import mongoose, { Schema, model, Document } from 'mongoose';

export interface CategoryI {
	name: string;
	slug: string;
}

interface BaseCategoryDocument extends CategoryI, Document {}

const Category = new Schema<BaseCategoryDocument>({
	name: { type: 'string' },
	slug: { type: 'string' }
});

if (!mongoose.models.Category) {
	model<BaseCategoryDocument>('Category', Category);
}

export default mongoose.models.Category;
