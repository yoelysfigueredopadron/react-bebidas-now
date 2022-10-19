import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ inicial = 1 }) => {
	const [count, setCount] = useState(inicial);
	const [disabled, setDisabled] = useState(false);

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
		<div className="container-counter">
			<div className="flex-container-counter">
				<button children={'-'} onClick={decrement} className="button" style={{ margin: '5px 20px' }} />
				<h2>{count}</h2>
				<button children={'+'} onClick={increment} className="button" style={{ margin: '5px 20px' }} />
			</div>
			<button
				children="Agregar al carrito"
				onClick={handleOnAdd}
				className="button"
				disabled={disabled}
				style={{ margin: '5px 20px' }}
			/>
		</div>
	);
};

export default ItemCount;
