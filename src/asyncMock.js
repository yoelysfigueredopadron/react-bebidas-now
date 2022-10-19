const imgPath = '/images/';

const products = [
	{
		id: '1',
		name: 'Agua Pellegrino',
		price: 800,
		category: 'sin-alcohol',
		img: `${imgPath}agua-pellegrino.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '2',
		name: 'Agua sin gas Bonaqua',
		price: 500,
		category: 'sin-alcohol',
		img: `${imgPath}agua-bonagua.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '3',
		name: 'Toto Birra',
		price: 600,
		category: 'alcoholicas',
		img: `${imgPath}toto-birra.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '4',
		name: 'Aquarius Pera',
		price: 130,
		category: 'sin-alcohol',
		img: `${imgPath}aquarius-pera.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '5',
		name: 'Aquarius Pomelo',
		price: 190,
		category: 'sin-alcohol',
		img: `${imgPath}aquarius-pomelo.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '6',
		name: 'Brahma',
		price: 490,
		category: 'alcoholicas',
		img: `${imgPath}brahma.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '7',
		name: 'Chandon 187',
		price: 500,
		category: 'alcoholicas',
		img: `${imgPath}chandon-187.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '8',
		name: 'Cerveza Budweiser',
		price: 400,
		category: 'alcoholicas',
		img: `${imgPath}budweiser-lata.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '9',
		name: 'Pura Frutta Manzana',
		price: 180,
		category: 'sin-alcohol',
		img: `${imgPath}pura-frutta-manzana.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '10',
		name: 'Citric Naranja',
		price: 180,
		category: 'sin-alcohol',
		img: `${imgPath}citric-naranja.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '11',
		name: 'Coca Cola',
		price: 550,
		category: 'sin-alcohol',
		img: `${imgPath}coca-lata.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '12',
		name: 'Coca Cola Light',
		price: 450,
		category: 'sin-alcohol',
		img: `${imgPath}coca-cola-light.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '13',
		name: 'Coca Cola Zero',
		price: 500,
		category: 'sin-alcohol',
		img: `${imgPath}coca-cola-zero.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '14',
		name: 'Corona Porrón',
		price: 700,
		category: 'alcoholicas',
		img: `${imgPath}corona.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '15',
		name: 'Dante Robino',
		price: 900,
		category: 'alcoholicas',
		img: `${imgPath}dante-robino-cabernet.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '16',
		name: 'Fanta Naranja',
		price: 450,
		category: 'sin-alcohol',
		img: `${imgPath}fanta-lata.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '17',
		name: 'Cerveza Imperial',
		price: 650,
		category: 'alcoholicas',
		img: `${imgPath}imperial.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '18',
		name: 'Jugo Las Brisas',
		price: 800,
		category: 'sin-alcohol',
		img: `${imgPath}jugo-organico-las-brisas.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '19',
		name: 'Novecento Brut',
		price: 600,
		category: 'alcoholicas',
		img: `${imgPath}novecento-brut.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '20',
		name: 'Novecento Dulce',
		price: 600,
		category: 'alcoholicas',
		img: `${imgPath}novecento-champagne.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '21',
		name: 'Novecento Malbec',
		price: 750,
		category: 'alcoholicas',
		img: `${imgPath}novecento-malbec.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '22',
		name: 'Cerveza Patagonia',
		price: 750,
		category: 'alcoholicas',
		img: `${imgPath}patagonia.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '23',
		name: 'Cerveza Quilmes',
		price: 400,
		category: 'alcoholicas',
		img: `${imgPath}quilmes.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '24',
		name: 'Red Bull',
		price: 800,
		category: 'sin-alcohol',
		img: `${imgPath}red-bull-lata.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '25',
		name: 'Speed',
		price: 780,
		category: 'sin-alcohol',
		img: `${imgPath}speed-lata.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '26',
		name: 'Sprite',
		price: 450,
		category: 'sin-alcohol',
		img: `${imgPath}sprite-lata.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '27',
		name: 'Sprite Zero',
		price: 450,
		category: 'sin-alcohol',
		img: `${imgPath}sprite-zero.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '28',
		name: 'Stella Artois Negra',
		price: 850,
		category: 'alcoholicas',
		img: `${imgPath}stella-negra.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '29',
		name: 'Cerveza Stella Artois',
		price: 750,
		category: 'alcoholicas',
		img: `${imgPath}stella.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '30',
		name: 'Smirnoff Vodka',
		price: 1050,
		category: 'alcoholicas',
		img: `${imgPath}vodka.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '31',
		name: 'Andes Origen',
		price: 400,
		category: 'alcoholicas',
		img: `${imgPath}andes-origen.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '32',
		name: 'Cheetos',
		price: 120,
		category: 'snacks',
		img: `${imgPath}cheetos.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '33',
		name: 'Doritos',
		price: 150,
		category: 'snacks',
		img: `${imgPath}doritos.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '34',
		name: 'El Noble Verdura',
		price: 650,
		category: 'snacks',
		img: `${imgPath}empanadas-de-espinaca.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '35',
		name: 'El Noble JQ',
		price: 800,
		category: 'snacks',
		img: `${imgPath}empanadas-de-jq.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '36',
		name: 'El Noble Humita',
		price: 650,
		category: 'snacks',
		img: `${imgPath}empanadas-humita.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '37',
		name: 'El Noble Barbecue',
		price: 900,
		category: 'snacks',
		img: `${imgPath}empanadas-pollo-barbecue.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '38',
		name: 'El Noble Pollo',
		price: 800,
		category: 'snacks',
		img: `${imgPath}empanadas-pollo.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '39',
		name: 'Hamburguesas Paty',
		price: 550,
		category: 'snacks',
		img: `${imgPath}hamburguesas-paty.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '40',
		name: 'Lays',
		price: 120,
		category: 'snacks',
		img: `${imgPath}lays.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '41',
		name: 'Maní Japonés',
		price: 180,
		category: 'snacks',
		img: `${imgPath}mani-japones.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '42',
		name: 'Maní Pehuamar',
		price: 150,
		category: 'snacks',
		img: `${imgPath}mani-pehuamar.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '43',
		name: 'Patitas de Pollo',
		price: 380,
		precioRebajado: 342,
		img: `${imgPath}patitas-de-pollo.jpg`
	},
	{
		id: '44',
		name: 'Pizza Sibarita',
		price: 490,
		precioRebajado: 441,
		img: `${imgPath}pizza-sibarita.jpg`
	},
	{
		id: '45',
		name: 'Pringles Originales',
		price: 290,
		category: 'snacks',
		img: `${imgPath}pringles.jpg`,
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	}
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 1000);
	});
};

export const getProductById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				products.find((prod) => {
					return prod.id === id;
				})
			);
		}, 1000);
	});
};

export const getProductByCategory = (categoryId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.filter((prod) => prod.category === categoryId));
		}, 1000);
	});
};
