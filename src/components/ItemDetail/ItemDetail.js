import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NotificationContext } from '../../notification/NotificationService';
import { useNavigate } from 'react-router-dom';

function ItemDetail({ id, name, img, category, description, price, stock }) {
	const { addItem, isInCart, getProductQuantity } = useContext(CartContext);
	const { setNotification } = useContext(NotificationContext);
	const navigate = useNavigate();

	const handleOnAdd = (quantity) => {
		const productToAdd = {
			id,
			name,
			price,
			quantity
		};

		let message;

		quantity === 1 ? (message = `Se agrego ${quantity} producto ${name} al carrito.`) : (message = `Se agrego ${quantity} productos ${name} al carrito.`);

		addItem(productToAdd);
		setNotification('success', message);
	};

	const quantityAdded = getProductQuantity(id);

	const switchRoute = (route, title) => {
		document.title = title;
		navigate(route);
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
				<p className="Info">Precio: $ {price}</p>
			</section>
			<footer className="ItemFooter">
				{stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} /> : <p>Sin stock</p>}
				{isInCart(id) && (
					<button className="button" onClick={() => switchRoute('/cart', 'Cart')}>
						Finalizar compra
					</button>
				)}
			</footer>
		</article>
	);
}

export default ItemDetail;
