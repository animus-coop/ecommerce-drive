import ApiException from '../exceptions/ApiExeption';
import { fetchData } from '../global/types';

export async function Fetch<T>({ url, method = 'GET', data, query, onSuccess, onError, onFinally }: fetchData<T>) {
	const serializeToString = (q: typeof query): string => {
		let qs: string = '?';
		Object.keys(q).map(field => (qs += `${encodeURIComponent(field)}=${encodeURIComponent(q[field])}&`));

		return `${qs.slice(0, -1)}`;
	};
	const buildedUrl = `${url}${query && Object.keys(query).length > 0 ? serializeToString(query) : ''}`;
	return await fetch(buildedUrl, {
		method,
		...(data && { body: JSON.stringify(data) })
	})
		.then(async res => {
			const response = await res.json();
			if (!res.ok) {
				console.log("response.error.message", res)
				throw new Error(response.error.message);
			}
			if (onSuccess) {
				onSuccess(response);
			}
			return response;
		})
		.catch(e => {
			if (onError) {
				onError(e);
			} else {
				throw new ApiException(e);
			}
		})
		.finally(() => {
			if (onFinally) {
				onFinally();
			}
		});
}
