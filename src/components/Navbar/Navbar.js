import './Navbar.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
	return (
		<nav className="flex-container-navbar">
			<h1 className="log-title">BebidasNow</h1>
			<div className="topnav">
				<Button>Bebidas</Button>
				<Button>Snacks</Button>
				<Button>Contactenos</Button>
				<Button>Nosotros</Button>
				<CartWidget />
				<Button style={{ borderRadius: '50%', margin: '4px 2px', padding: '20px', marginRight: '30px' }}>User</Button>
			</div>
		</nav>
	);
};

export default Navbar;
