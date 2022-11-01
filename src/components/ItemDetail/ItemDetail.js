import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NotificationContext } from '../../notification/NotificationService';

function ItemDetail({ id, name, img, category, description, price, stock }) {
	const { addItem } = useContext(CartContext);
	const { setNotification } = useContext(NotificationContext);

	const handleOnAdd = (quantity) => {
		const productToAdd = {
			id,
			name,
			price,
			quantity
		};

		let message;

		quantity === 1
			? (message = `Se agrego ${quantity} producto ${name} al carrito.`)
			: (message = `Se agrego ${quantity} productos ${name} al carrito.`);

		addItem(productToAdd);
		setNotification('success', message);
	};

	return (
		<article className="CardItem">
			<header className="Header">
				<h2 className="ItemHeader">{name}</h2>
			</header>
			<picture>
				<img src={img} alt={name} className="ItemImg" />
			</picture>
			<section>
				<p className="Info">Categoria: {category}</p>
				<p className="Info">Descripción: {description}</p>
				<p className="Info">Precio: {price}</p>
			</section>
			<footer className="ItemFooter">
				<ItemCount onAdd={handleOnAdd} stock={stock} />
			</footer>
		</article>
	);
}

export default ItemDetail;
