import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {
	const { cart, removeItem, total, clearCart } = useContext(CartContext);

	return (
		<div>
			<h1>Cart</h1>
			{cart.map((product) => (
				<div key={product.id}>
					Producto: {product.name} - Cantidad: {product.quantity} - Precio: $ {product.price} - subtotal: ${' '}
					{product.quantity * product.price}
					<button
						onClick={() => removeItem(product.id)}
						style={{ backgroundColor: 'red', color: 'white', marginLeft: 10 }}
					>
						X
					</button>
				</div>
			))}

			<div>Total a pagar: $ {total}</div>
			<button onClick={() => clearCart()} className="button">
				Vaciar carrito
			</button>
		</div>
	);
}

export default Cart;
