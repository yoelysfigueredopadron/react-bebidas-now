import { useState, useEffect } from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { switchTitle } from '../../adapter/funtionsAdapter';

const Navbar = () => {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const collectionRef = query(collection(db, 'categories'), orderBy('order'));

		getDocs(collectionRef).then((response) => {
			const categoriesAdapted = response.docs.map((document) => {
				const data = document.data();
				const id = document.id;

				return { id, ...data };
			});

			setCategories(categoriesAdapted);
		});
	}, []);

	const switchRoute = (route, title) => {
		document.title = title;
		navigate(route);
	};

	return (
		<nav className="flex-container-navbar">
			<Link to={'/'} style={{ textDecoration: 'none' }} onClick={() => switchTitle('Listado de productos')}>
				<h1 className="log-title">BebidasNow</h1>
			</Link>
			<div className="topnav">
				{categories.map((category) => (
					<button key={category.id} className="button" onClick={() => switchRoute(`/category/${category.slug}`, category.label)}>
						{category.label}
					</button>
				))}
			</div>
			<Link to="/cart" onClick={() => switchTitle('Cart')}>
				<CartWidget />
			</Link>
		</nav>
	);
};

export default Navbar;
