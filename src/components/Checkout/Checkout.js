import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase/index';
import { NotificationContext } from '../../notification/NotificationService';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Checkout() {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const { cart, total, clearCart } = useContext(CartContext);
	const { setNotification } = useContext(NotificationContext);
	const navigate = useNavigate();

	const createOrder = async () => {
		setLoading(true);

		try {
			const objOrder = {
				buyer: {
					name,
					phone,
					email
				},
				items: cart,
				total
			};

			const batch = writeBatch(db);
			const outOfStock = [];
			const ids = cart.map((product) => product.id);
			const productsRef = collection(db, 'products');
			const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
			const { docs } = productsAddedFromFirestore;

			docs.forEach((document) => {
				const dataDoc = document.data();
				const stockDb = dataDoc.stock;

				const productAddedToCart = cart.find((product) => product.id === document.id);
				const productQuantity = productAddedToCart?.quantity;

				if (stockDb >= productQuantity) {
					batch.update(document.ref, { stock: stockDb - productQuantity });
				} else {
					outOfStock.push({ id: document.id, ...dataDoc });
				}
			});

			if (outOfStock.length === 0) {
				await batch.commit();
				const orderRef = collection(db, 'orders');
				const orderAdded = await addDoc(orderRef, objOrder);

				clearCart();

				setTimeout(() => {
					navigate('/');
				}, 3000);
				setNotification('success', `El id de su orden es: ${orderAdded.id}`);
			} else {
				setNotification('error', 'Hay productos fuera de stock');
			}
		} catch (error) {
			setNotification('error', `Ha ocurrido un error ${error}`);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <h1>Se está generando su orden de compra ...</h1>;
	}

	return (
		<div className="container mt-3">
			<h1>Formulario Checkout</h1>
			<form onSubmit={createOrder}>
				<div className="mb-3 mt-3">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						className="form-control"
						onChange={(e) => {
							setName(e.target.value);
						}}
						placeholder="Enter name"
						name="name"
						id="name"
					/>
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="phone">Phone:</label>
					<input
						type="tel"
						className="form-control"
						onChange={(e) => {
							setPhone(e.target.value);
						}}
						placeholder="Enter phone"
						name="phone"
						id="phone"
					/>
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						className="form-control"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder="Enter email"
						name="email"
						id="email"
					/>
				</div>
				<button className="button">Generar Orden</button>
			</form>
		</div>
	);
}

export default Checkout;
