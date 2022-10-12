import './Button.css';

const Button = ({ children, style, clase = 'button', func, desabilitado }) => {
	return (
		<button className={clase} style={style} onClick={func} disabled={desabilitado}>
			{children}
		</button>
	);
};

export default Button;
