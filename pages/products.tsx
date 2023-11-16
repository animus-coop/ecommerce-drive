import { Grid, Container, Row, Pagination, Loading, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/cards/ProductCard';
import { getCategories, getProducts } from '../helpers/content';
import Header from '../components/navigation/Header';
import CategorySelector from '../components/CategorySelector';
import { infoMessages } from '../helpers/notify';
import Layout from './layout';
import ButtonCart from '../components/ButtonCart';
import useDebounce from '../src/hooks/debounceHook';
import { useAppCtx } from '../src/context';
export { getServerSideProps } from '../src/ssp/products';

export default function Products(props) {
	const cart = useAppCtx();

	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [categories, setCategories] = useState([{ key: '', name: 'Todas las categorías' }]);
	const [category, setCategory] = useState({ key: '', name: 'Todas las categorías' });
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const debouncedSearch = useDebounce(search, 750);
	const addProductToCart = (product, qty) => {
		cart.addProduct({ ...product, qty });
	};

	useEffect(() => {
		infoMessages();
		getProducts().then(res => {
			setProducts(res.products);
			setTotalPages(res.totalPages);
			setLoading(false);
		});
		getCategories().then(res => {
			let categoriesParsed = [];
			res.map(category => categoriesParsed.push({ key: category.slug, name: category.name }));
			setCategories([{ key: '', name: 'Todas las categorías' }, ...categoriesParsed]);
		});
	}, []);
	const fetchData = (page, category, debouncedSearch) => {
		getProducts(page, category.key, debouncedSearch).then(res => {
			setCurrentPage(page);
			setTotalPages(res.totalPages);
			setProducts(res.products);
		});
	};
	useEffect(() => {
		setCurrentPage(1);
		fetchData(1, category, debouncedSearch);
	}, [category, debouncedSearch]);
	return (
		<Layout>
			<Header title="Elegí el rubro y encontrá tus productos" user={props.user} cart={cart} />
			<Container css={{ backgroundColor: '#fff', maxWidth: '1260px' }}>
				<Row css={{ backgroundColor: 'transparent', marginTop: '-1.4rem' }} className="search-row">
					<Input
						placeholder="Buscá un producto..."
						clearable
						fullWidth
						className="input-search"
						onChange={e => setSearch(e.target.value)}
					></Input>
					<CategorySelector categories={categories} setCategory={val => setCategory(val)} category={category} />
				</Row>
				{loading ? (
					<Loading className={'loading-text-container'} color="warning">
						Cargando...
					</Loading>
				) : (
					<>
						<Grid.Container gap={1} css={{ padding: 0, backgroundColor: '#fff' }}>
							{products &&
								products.map(item => (
									<Grid xs={12} sm={12} md={6} lg={4} xl={4} key={item.code}>
										<ProductCard
											addProduct={(product, qty) => addProductToCart(product, qty)}
											item={item}
											key={item.code}
										/>
									</Grid>
								))}
						</Grid.Container>
						<Grid.Container gap={2} css={{ padding: 0 }}>
							<Grid justify="center" md={12} lg={12} xl={12} xs={12} sm={12}>
								<Pagination
									className={'paginator'}
									initialPage={1}
									total={totalPages}
									onChange={page => fetchData(page, category, debouncedSearch)}
									color="warning"
									page={currentPage}
								/>
							</Grid>
						</Grid.Container>
					</>
				)}
			</Container>
			{cart.products.length > 0 && cart.hasUnsavedChanges && <ButtonCart cart={cart} />}
		</Layout>
	);
}
