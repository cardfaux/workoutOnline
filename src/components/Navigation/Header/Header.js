import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
	return <header className={props.className}>{props.children}</header>;
};

export default styled(Header)`
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: grey;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 20px;
	z-index: 90;
`;
