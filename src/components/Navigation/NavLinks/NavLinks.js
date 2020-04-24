import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { FirebaseContext } from '../../../firebase/context/context';

import { firebaseLogout } from '../../../firebase/config/config';

const NavLinks = (props) => {
	const { user } = useContext(FirebaseContext);

	return (
		<StyledUL className={props.className}>
			<li>
				<NavLink to='#!'>Exercise</NavLink>
			</li>
			<li>
				<NavLink to='!#'>Category</NavLink>
			</li>
			<div className='items'>
				{user ? (
					<>
						<div className='user'>{user.displayName}</div>
						<div className='divider'>|</div>
						<div className='logout' onClick={() => firebaseLogout()}>
							logout
						</div>
					</>
				) : (
					<NavLink to='/authenticate'>login</NavLink>
				)}
			</div>
		</StyledUL>
	);
};

const StyledUL = styled.ul`
	display: flex;
	li {
		list-style: none;
		margin: 1rem;
	}
	.items {
		display: flex;
		margin: 1rem;

		.user {
			margin: 0 1rem;
		}

		.divider {
			margin: 0 1rem;
		}

		.logout {
			cursor: pointer;
			color: white;
		}
	}
`;

export default withRouter(NavLinks);
