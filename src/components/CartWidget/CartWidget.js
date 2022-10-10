import './CartWidget.css';
import Cart from '../Assets/cart.png';

const CartWidget = () => {
	return (
		<div className="button-cart-widget">
			<img id="cart" src={Cart} alt="Carrito de comprás" />
			<span id="contador">0</span>
		</div>
	);
};

export default CartWidget;
