import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		setLoading(true);

		const asyncFuntionSwitch = categoryId ? getProductByCategory : getProducts;

		asyncFuntionSwitch(categoryId)
			.then((response) => {
				setProducts(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	if (loading) {
		// to do spinner soon
		return <h1>Loading ...</h1>;
	}

	return (
		<div className="div-list-container">
			<h1>
				Bienvenidos a <span className="titulo">BebidasNow</span>
			</h1>
			<h2>Sección de productos</h2>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
