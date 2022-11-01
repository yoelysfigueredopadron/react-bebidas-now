import Item from '../Item/Item';

function ItemList({ products }) {
	return (
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
				{products.map((product) => (
					<div className="col-md-3" key={product.id}>
						<Item {...product} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ItemList;
