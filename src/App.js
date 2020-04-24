import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import MainNav from './components/Navigation/MainNav/MainNav';
import HomePage from './pages/HomePage';

const StyledMain = styled.main`
	margin: 5rem 0;
	@media (min-width: 600px) {
		margin: 5rem 16rem;
	}
`;

export const App = () => {
	return (
		<Router>
			<MainNav />
			<StyledMain>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Redirect to='/' />
				</Switch>
			</StyledMain>
		</Router>
	);
};
