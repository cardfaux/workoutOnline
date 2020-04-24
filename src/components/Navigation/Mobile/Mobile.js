import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Mobile = (props) => {
	const mobileContent = (
		<aside className={props.className}>{props.children}</aside>
	);

	return ReactDom.createPortal(
		mobileContent,
		document.getElementById('mobile')
	);
};

export default styled(Mobile)`
	a {
		text-decoration: none;
		color: white;
	}
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 2rem;
		top: 4em;
	}
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	height: 100vh;
	width: 70%;
	background-color: grey;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	@media (min-width: 600px) {
		display: none;
	}
`;
