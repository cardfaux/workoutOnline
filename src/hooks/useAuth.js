import { useState, useEffect } from 'react';
import { auth } from '../firebase/config/config';

function useAuth() {
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setAuthUser(user);
			} else {
				setAuthUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return authUser;
}

export default useAuth;
