import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ name }) => {
	return (
		<div className="div-list-container">
			<h1>
				Bienvenidos a <span className="titulo">{name}</span>
			</h1>
			<ItemCount />
		</div>
	);
};

export default ItemListContainer;
