import { useState, useEffect } from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase';

const Navbar = () => {
	const [categories, setCategories] = useState([]);

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

	return (
		<nav className="flex-container-navbar">
			<Link to={'/'} style={{ textDecoration: 'none' }}>
				<h1 className="log-title">BebidasNow</h1>
			</Link>
			<div className="topnav">
				{categories.map((category) => (
					<Link key={category.id} to={`/category/${category.slug}`} className="button">
						{category.label}
					</Link>
				))}
			</div>
			<Link to="/cart">
				<CartWidget />
			</Link>
		</nav>
	);
};

export default Navbar;
