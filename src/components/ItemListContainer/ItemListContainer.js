import './ItemListContainer.css';
import { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { NotificationContext } from '../../notification/NotificationService';
import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../hooks/useAsync';

const ItemListContainer = () => {
	const { categoryId } = useParams();
	const { setNotification } = useContext(NotificationContext);

	const getProductsWithCategory = () => getProducts(categoryId);
	const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId]);

	useEffect(() => {
		document.title = 'Listado de productos';
	}, []);

	if (loading) {
		// to do spinner soon
		return <h1>Loading ...</h1>;
	}

	if (error) {
		return setNotification('error', `Ha ocurrido un error. ${error}`);
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
