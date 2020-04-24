import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = (props) => {
	return (
		<ul className={props.className}>
			<li>
				<NavLink to='#!'>Exercise</NavLink>
			</li>
			<li>
				<NavLink to='!#'>Category</NavLink>
			</li>
			<li>
				<NavLink to='!#'>Register</NavLink>
			</li>
		</ul>
	);
};

export default styled(NavLinks)`
	display: flex;
	li {
		list-style: none;
		margin: 1rem;
	}
`;
