import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ name }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts()
			.then((response) => {
				// console.log(response);
				setProducts(response);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		// to do spinner
		return <h1>Loading ...</h1>;
	}

	return (
		<div className="div-list-container">
			<ItemCount />
			<h1>
				Bienvenidos a <span className="titulo">{name}</span>
			</h1>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
