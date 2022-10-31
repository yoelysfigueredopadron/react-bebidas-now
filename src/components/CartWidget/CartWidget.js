import './CartWidget.css';
import Cart from '../../assets/cart.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
	const { totalQuantity } = useContext(CartContext);

	return (
		<div className="button-cart-widget">
			<img id="cart" src={Cart} alt="Carrito de comprás" />
			<span id="contador">{totalQuantity}</span>
		</div>
	);
};

export default CartWidget;
