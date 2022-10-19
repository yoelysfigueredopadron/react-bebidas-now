import Item from '../Item/Item';

function ItemList({ products, setPage }) {
	return (
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
				{products.map((product) => (
					<div className="col-md-3" key={product.id}>
						<Item {...product} setPage={setPage} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ItemList;
