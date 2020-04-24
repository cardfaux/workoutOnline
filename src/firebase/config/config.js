import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { config } from '../firebaseConfig/firebaseConfig';

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

export const emailLogin = async (email, password) => {
	return await auth.signInWithEmailAndPassword(email, password);
};

export const emailPasswordRegister = async (name, email, password) => {
	const newUser = await auth.createUserWithEmailAndPassword(email, password);
	return await newUser.user.updateProfile({
		displayName: name,
		userEmail: email,
	});
};

export const firebaseLogout = async () => {
	await auth.signOut();
};
