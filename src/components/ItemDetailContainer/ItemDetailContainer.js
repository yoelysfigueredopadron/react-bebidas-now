import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
// import { DotSpinner } from '@uiball/loaders' //agregando spinner

function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();

	useEffect(() => {
		getProductById(productId)
			.then((response) => {
				setProduct(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [productId]);

	if (loading) {
		// to do spinner
		return <h1>Loading ...</h1>;
	}

	return (
		<div className="div-list-container">
			<h1>Detalles de Productos</h1>
			<ItemDetail {...product} />
		</div>
	);
}

export default ItemDetailContainer;
