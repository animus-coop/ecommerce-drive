export type CartProduct = {
	code: number;
	name: string;
	minimum: string;
	picture?: string;
	price?: number;
	qty: number;
	stock: number;
	total: number;
};

export type UserLogged = {
	id_google_sheet?: string;
	id?: string;
	name?: string;
	email?: string;
	profile_picture?: string;
	logged?: boolean;
};

export type Cart = {
	balance?: number;
	hasUnsavedChanges?: boolean;
	products: Array<CartProduct>;
	total: number;
};

export type GoogleSheetDataType = Array<Array<string>>;

export type OrderType = Array<{userId:string, email: string; product: string; cantidad: string; code: number }>;

export type FileInfoType = Array<{ webViewLink: string; code: number }>;

export type ProductModel = {
	stock: number;
	code: number;
	name: string;
	minimum: string;
	price: number;
	category: string;
	seller: string;
	order: number;
	google_sheet_id?: string;
	picture?: string;
};

export type statusCart = {
	status: string;
	openDate: string;
	closeDate: string;
};

export type datesFormType = {
	openDate: string;
	closeDate: string;
};

export type errorsFormType = {
	openDate?: string;
	closeDate?: string;
};

export type fetchData<T> = {
	url: string;
	method?: string;
	data?: T;
	query?: T;
	onSuccess?(response: any): void;
	onError?(error: any): void;
	onFinally?(): void;
};

export type sheetOrder = Array<{
	email: string;
	product: string;
	code: number;
	cantidad: number;
}>;

export type productType = {
	stock: number;
	code: number;
	name: string;
	minimum: string;
	price: number;
	category: string;
	categoryName: string;
	seller: string;
	order: number
	picture: string;
};

export type orderData = {
	products: CartProduct[];
	total: number;
}
