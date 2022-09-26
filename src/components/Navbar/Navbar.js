import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="flex-container">
			<h1 className="log-title">BebidasNow</h1>
			<div className="topnav">
				<a className="active" href="#home">
					Bebidas
				</a>
				<a href="#news">Snacks</a>
				<a href="#contact">Contactenos</a>
				<a href="#about">About</a>
			</div>
		</nav>
	);
};

export default Navbar;
