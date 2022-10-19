import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, name, img, price }) {
	return (
		<div className="card text-center bg-dark animate__animated animate__fadeInUp">
			<img src={img} alt={name} />
			<div className="card-body text-light">
				<h4 className="card-title">{name}</h4>
				<p className="card-text text-secondary">${price}</p>
				<Link to={`/detail/${id}`} className="btn btn-outline-secondary rounded-0">
					ver detalle
				</Link>
			</div>
		</div>
	);
}

export default Item;
