import './item.css';
import React from 'react';

function Item({ titulo, img, precioReal }) {
	const imgPath = './images/';

	return (
		<div className="card text-center bg-dark animate__animated animate__fadeInUp">
			<img src={imgPath + img} alt={titulo} />
			<div className="card-body text-light">
				<h4 className="card-title">{titulo}</h4>
				<p className="card-text text-secondary">${precioReal}</p>
				<a href="#!" className="btn btn-outline-secondary rounded-0">
					ver detalle
				</a>
			</div>
		</div>
	);
}

export default Item;
