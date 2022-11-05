import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext({
	cart: [],
	totalQuantity: 0
});

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const totalQty = getQuantity();
		setTotalQuantity(totalQty);
	}, [cart]);

	useEffect(() => {
		const total = getTotal();
		setTotal(total);
	}, [cart]);

	const addItem = (productToAdd) => {
		if (!isInCart(productToAdd.id)) {
			setCart([...cart, productToAdd]);
		} else {
			const cartUpdated = cart.map((product) => {
				if (product.id === productToAdd.id) {
					const productUpdated = {
						...product,
						quantity: productToAdd.quantity
					};

					return productUpdated;
				} else {
					return product;
				}
			});

			setCart(cartUpdated);
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

	const getTotal = () => {
		let accu = 0;

		cart.forEach((product) => {
			accu += product.quantity * product.price;
		});

		return accu;
	};

	const clearCart = () => {
		setCart([]);
	};

	const getProductQuantity = (id) => {
		const product = cart.find((prod) => prod.id === id);

		return product?.quantity;
	};

	return <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, totalQuantity, total, clearCart, getProductQuantity }}>{children}</CartContext.Provider>;
};
