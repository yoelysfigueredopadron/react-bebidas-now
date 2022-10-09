import './Welcome.css';

const Welcome = ({ name, style }) => {
	return (
		<h1>
			Bienvenidos a <span className="titulo">{name}</span>
		</h1>
	);
};

export default Welcome;
