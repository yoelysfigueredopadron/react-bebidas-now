import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '..';
import { createAdapterProductFromFireStore } from '../../../adapter/productAdapter';

export const getProducts = (categoryId) => {
	return new Promise((resolve, reject) => {
		const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products');
		getDocs(collectionRef)
			.then((response) => {
				const productsAdapted = response.docs.map((document) => {
					return createAdapterProductFromFireStore(document);
				});
				resolve(productsAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
