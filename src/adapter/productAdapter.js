export const createAdapterProductFromFireStore = (document) => {
	const data = document.data();

	const productAdapted = {
		id: document.id,
		name: data.name,
		img: data.img,
		price: data.price,
		category: data.category,
		description: data.description
	};

	return productAdapted;
};
