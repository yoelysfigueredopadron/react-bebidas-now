import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
	return (
		<nav className="flex-container">
			<h1 className="log-title">BebidasNow</h1>
			<div className="topnav">
				<Button>Bebidas</Button>
				<Button>Snacks</Button>
				<Button>Contactenos</Button>
				<Button>Nosotros</Button>
				<Button style={{ borderRadius: '50%', margin: '4px 2px', padding: '20px', marginRight: '30px' }}>User</Button>
			</div>
		</nav>
	);
};

export default Navbar;
