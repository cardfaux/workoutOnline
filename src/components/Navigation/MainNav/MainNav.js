import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMobileAlt } from 'react-icons/fa';

import Header from '../Header/Header';
import NavLinks from '../NavLinks/NavLinks';
import Mobile from '../Mobile/Mobile';
import BackDrop from '../../../Utils/BackDrop';

const MainNav = (props) => {
	const [openMobile, setOpenMobile] = useState(false);

	const openMobileDrawer = () => {
		setOpenMobile(true);
	};
	const closeMobileDrawer = () => {
		setOpenMobile(false);
	};

	return (
		<div className={props.className}>
			{openMobile && <BackDrop onClick={closeMobileDrawer} />}
			{openMobile && (
				<Mobile className='mobile-nav'>
					<nav>
						<NavLinks />
					</nav>
				</Mobile>
			)}
			<Header>
				<h1>
					<Link to='/'>workoutBUDDY</Link>
				</h1>
				<button onClick={openMobileDrawer}>
					<FaMobileAlt />
				</button>
				<nav className='desktop-nav'>
					<NavLinks />
				</nav>
			</Header>
		</div>
	);
};

export default styled(MainNav)`
	a {
		text-decoration: none;
		color: white;
	}
	.desktop-nav {
		display: none;
	}
	button {
		background-color: inherit;
		font-size: 2rem;
		color: peachpuff;
	}

	@media (min-width: 600px) {
		.desktop-nav {
			display: block;
		}
		button {
			display: none;
		}
		.mobile-nav {
			display: none;
		}
	}
`;
