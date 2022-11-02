import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC4wDKcwA6SbRBH2xZ7yZmN98oiFcHbS2w',
	authDomain: 'backend-bebidas-now.firebaseapp.com',
	projectId: 'backend-bebidas-now',
	storageBucket: 'backend-bebidas-now.appspot.com',
	messagingSenderId: '732613159917',
	appId: '1:732613159917:web:7e8948d6ea9c79fbf015e4'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
