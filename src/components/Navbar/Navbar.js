import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="flex-container-navbar">
			<Link to={'/'}>
				<h1 className="log-title">BebidasNow</h1>
			</Link>
			<div className="topnav">
				<Link to={'/category/alcoholicas'} className="button">
					bebidas alcohólicas
				</Link>
				<Link to={'/category/sin-alcohol'} className="button">
					bebidas sin alcohol
				</Link>
				<Link to={'/category/snacks'} className="button">
					Snacks
				</Link>
				<CartWidget />
			</div>
		</nav>
	);
};

export default Navbar;
