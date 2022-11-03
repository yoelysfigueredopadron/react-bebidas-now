import './ItemDetailContainer.css';
import { useState, useEffect, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { NotificationContext } from '../../notification/NotificationService';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
// import { DotSpinner } from '@uiball/loaders' //agregando spinner

function ItemDetailContainer(setCart) {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();
	const { setNotification } = useContext(NotificationContext);

	useEffect(() => {
		document.title = loading ? 'Cargando ...' : `Detalle ${product.name}`;
	});

	useEffect(() => {
		const documentRef = doc(db, 'products', productId);

		getDoc(documentRef)
			.then((response) => {
				const data = response.data();
				const productAdapted = { id: response.id, ...data };
				setProduct(productAdapted);
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
