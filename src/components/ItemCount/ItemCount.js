import './ItemCount.css';
import '../Button/Button.css';
import { useState } from 'react';

const ItemCount = () => {
	const [count, setCount] = useState(0);
	const [title] = useState('Contador');
	const [disabled, setDisabled] = useState(true);

	const increment = () => {
		if (count < 5) {
			setCount(count + 1);
			setDisabled(false);
		} else {
			alert('No tenemos más productos en stock');
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
			if (count <= 1) {
				setDisabled(true);
			}
		} else {
			alert('Tiene que seleccionar al menos un producto');
		}
	};

	const handleOnAdd = () => {
		let mensaje;
		count === 1
			? (mensaje = `Se agrego ${count} producto al carrito.`)
			: (mensaje = `Se agrego ${count} productos al carrito.`);
		console.log(mensaje);
	};

	return (
		<div className="div-counter">
			<h1>{title}</h1>
			<div className="flex-container-counter">
				<button className="button" onClick={decrement}>
					{' '}
					-{' '}
				</button>
				<h2>{count}</h2>
				<button className="button" onClick={increment}>
					{' '}
					+{' '}
				</button>
				<button className="button" onClick={handleOnAdd} disabled={disabled}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
