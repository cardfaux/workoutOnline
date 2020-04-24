import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const BackDrop = (props) => {
	return ReactDom.createPortal(
		<div className={props.className} onClick={props.onClick}></div>,
		document.getElementById('backDrop')
	);
};

export default styled(BackDrop)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
`;
