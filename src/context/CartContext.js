import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);

	console.log(cart);

	useEffect(() => {
		const totalQty = getQuantity();
		setTotalQuantity(totalQty);
	}, [cart]);

	const addItem = (productToAdd) => {
		if (!isInCart(productToAdd.id)) {
			setCart([...cart, productToAdd]);
		} else {
			console.log('Ya está agregado en el carrito.');
		}
	};

	const isInCart = (id) => {
		return cart.some((product) => product.id === id);
	};

	const removeItem = (id) => {
		const cartWithoutProduct = cart.filter((product) => product.id !== id);
		setCart(cartWithoutProduct);
	};

	const getQuantity = () => {
		let productCounter = 0;

		cart.forEach((product) => {
			productCounter += product.quantity;
		});

		return productCounter;
	};

	return <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>{children}</CartContext.Provider>;
};
