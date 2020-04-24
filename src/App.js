import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import Auth from './components/Auth/Login';
import MainNav from './components/Navigation/MainNav/MainNav';
import HomePage from './pages/HomePage';

import useAuth from './hooks/useAuth';
import { FirebaseContext } from './firebase/context/context';
import firebase from './firebase/config/config';

const StyledMain = styled.main`
	margin: 5rem 0;
	@media (min-width: 600px) {
		margin: 5rem 16rem;
	}
`;

export const App = () => {
	const user = useAuth();

	let routes;

	if (user) {
		routes = (
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Redirect to='/' />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path='/authenticate' component={Auth} />
				<Redirect to='/authenticate' />
			</Switch>
		);
	}

	return (
		<FirebaseContext.Provider value={{ user, firebase }}>
			<Router>
				<MainNav />
				<StyledMain>{routes}</StyledMain>
			</Router>
		</FirebaseContext.Provider>
	);
};
