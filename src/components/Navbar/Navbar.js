import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="flex-container">
			<h1 className="log-title">BebidasNow</h1>
			<div className="topnav">
				<a className="active" href="#">
					Bebidas
				</a>
				<a href="#">Snacks</a>
				<a href="#">Contactenos</a>
				<a href="#">Quienes somos</a>
			</div>
		</nav>
	);
};

export default Navbar;
