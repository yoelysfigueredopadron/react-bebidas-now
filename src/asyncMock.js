const products = [
	{
		id: '1',
		name: 'Agua Pellegrino',
		price: 800,
		category: 'sin-alcohol',
		img: '/images/agua-pellegrino.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '2',
		name: 'Agua sin gas Bonaqua',
		price: 500,
		category: 'sin-alcohol',
		img: '/images/agua-bonagua.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '3',
		name: 'Toto Birra',
		price: 600,
		category: 'alcoholica',
		img: '/images/toto-birra.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '4',
		name: 'Aquarius Pera',
		price: 130,
		category: 'sin-alcohol',
		img: '/images/aquarius-pera.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '5',
		name: 'Aquarius Pomelo',
		price: 190,
		category: 'sin-alcohol',
		img: '/images/aquarius-pomelo.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '6',
		name: 'Brahma',
		price: 490,
		category: 'alcoholica',
		img: '/images/brahma.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '7',
		name: 'Chandon 187',
		price: 500,
		category: 'alcoholica',
		img: '/images/chandon-187.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '8',
		name: 'Cerveza Budweiser',
		price: 400,
		category: 'alcoholica',
		img: '/images/budweiser-lata.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '9',
		name: 'Pura Frutta Manzana',
		price: 180,
		category: 'sin-alcohol',
		img: '/images/pura-frutta-manzana.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '10',
		name: 'Citric Naranja',
		price: 180,
		category: 'sin-alcohol',
		img: '/images/citric-naranja.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '11',
		name: 'Coca Cola',
		price: 550,
		category: 'sin-alcohol',
		img: '/images/coca-lata.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '12',
		name: 'Coca Cola Light',
		price: 450,
		category: 'sin-alcohol',
		img: '/images/coca-cola-light.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '13',
		name: 'Coca Cola Zero',
		price: 500,
		category: 'sin-alcohol',
		img: '/images/coca-cola-zero.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '14',
		name: 'Corona Porrón',
		price: 700,
		category: 'alcoholica',
		img: '/images/corona.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '15',
		name: 'Dante Robino',
		price: 900,
		category: 'alcoholica',
		img: '/images/dante-robino-cabernet.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '16',
		name: 'Fanta Naranja',
		price: 450,
		category: 'sin-alcohol',
		img: '/images/fanta-lata.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '17',
		name: 'Cerveza Imperial',
		price: 650,
		category: 'alcoholica',
		img: '/images/imperial.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '18',
		name: 'Jugo Las Brisas',
		price: 800,
		category: 'sin-alcohol',
		img: '/images/jugo-organico-las-brisas.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '19',
		name: 'Novecento Brut',
		price: 600,
		category: 'alcoholica',
		img: '/images/novecento-brut.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '20',
		name: 'Novecento Dulce',
		price: 600,
		category: 'alcoholica',
		img: '/images/novecento-champagne.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '21',
		name: 'Novecento Malbec',
		price: 750,
		category: 'alcoholica',
		img: '/images/novecento-malbec.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '22',
		name: 'Cerveza Patagonia',
		price: 750,
		category: 'alcoholica',
		img: '/images/patagonia.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '23',
		name: 'Cerveza Quilmes',
		price: 400,
		category: 'alcoholica',
		img: '/images/quilmes.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '24',
		name: 'Red Bull',
		price: 800,
		category: 'sin-alcohol',
		img: '/images/red-bull-lata.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '25',
		name: 'Speed',
		price: 780,
		category: 'sin-alcohol',
		img: '/images/speed-lata.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '26',
		name: 'Sprite',
		price: 450,
		category: 'sin-alcohol',
		img: '/images/sprite-lata.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '27',
		name: 'Sprite Zero',
		price: 450,
		category: 'sin-alcohol',
		img: '/images/sprite-zero.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '28',
		name: 'Stella Artois Negra',
		price: 850,
		category: 'alcoholica',
		img: '/images/stella-negra.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '29',
		name: 'Cerveza Stella Artois',
		price: 750,
		category: 'alcoholica',
		img: '/images/stella.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '30',
		name: 'Smirnoff Vodka',
		price: 1050,
		category: 'alcoholica',
		img: '/images/vodka.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '31',
		name: 'Andes Origen',
		price: 400,
		category: 'alcoholica',
		img: '/images/andes-origen.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '32',
		name: 'Cheetos',
		price: 120,
		category: 'snacks',
		img: '/images/cheetos.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '33',
		name: 'Doritos',
		price: 150,
		category: 'snacks',
		img: '/images/doritos.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '34',
		name: 'El Noble Verdura',
		price: 650,
		category: 'snacks',
		img: '/images/empanadas-de-espinaca.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '35',
		name: 'El Noble JQ',
		price: 800,
		category: 'snacks',
		img: '/images/empanadas-de-jq.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '36',
		name: 'El Noble Humita',
		price: 650,
		category: 'snacks',
		img: '/images/empanadas-humita.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '37',
		name: 'El Noble Barbecue',
		price: 900,
		category: 'snacks',
		img: '/images/empanadas-pollo-barbecue.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '38',
		name: 'El Noble Pollo',
		price: 800,
		category: 'snacks',
		img: '/images/empanadas-pollo.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '39',
		name: 'Hamburguesas Paty',
		price: 550,
		category: 'snacks',
		img: '/images/hamburguesas-paty.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '40',
		name: 'Lays',
		price: 120,
		category: 'snacks',
		img: '/images/lays.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '41',
		name: 'Maní Japonés',
		price: 180,
		category: 'snacks',
		img: '/images/mani-japones.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '42',
		name: 'Maní Pehuamar',
		price: 150,
		category: 'snacks',
		img: '/images/mani-pehuamar.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '43',
		name: 'Patitas de Pollo',
		price: 380,
		category: 'snacks',
		img: '/images/patitas-de-pollo.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '44',
		name: 'Pizza Sibarita',
		price: 490,
		category: 'snacks',
		img: '/images/pizza-sibarita.jpg',
		stock: 10,
		description: 'Se agregará una descripción referente al producto.'
	},
	{
		id: '45',
		name: 'Pringles Originales',
		price: 290,
		category: 'snacks',
		img: '/images/pringles.jpg',
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
