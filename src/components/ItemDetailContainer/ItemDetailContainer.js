import './ItemDetailContainer.css';
import { useState, useEffect, useContext } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { NotificationContext } from '../../notification/NotificationService';
// import { DotSpinner } from '@uiball/loaders' //agregando spinner

function ItemDetailContainer(setCart) {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();
	const { setNotification } = useContext(NotificationContext);

	useEffect(() => {
		getProductById(productId)
			.then((response) => {
				setProduct(response);
			})
			.catch((error) => {
				setNotification('error', `Ha ocurrido un error. ${error}`);
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
