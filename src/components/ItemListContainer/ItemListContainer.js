import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { NotificationContext } from '../../notification/NotificationService';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();
	const { setNotification } = useContext(NotificationContext);

	useEffect(() => {
		document.title = 'Listado de productos';
	}, []);

	useEffect(() => {
		setLoading(true);

		const collectionRef = categoryId
			? query(collection(db, 'products'), where('category', '==', categoryId))
			: collection(db, 'products');

		getDocs(collectionRef)
			.then((response) => {
				const productsAdapted = response.docs.map((document) => {
					const data = document.data();

					return { id: document.id, ...data };
				});

				setProducts(productsAdapted);
			})
			.catch((error) => {
				setNotification('error', `Ha ocurrido un error. ${error}`);
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
