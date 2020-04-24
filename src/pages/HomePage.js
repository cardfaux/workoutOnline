import React from 'react';
import styled from 'styled-components';
import { FaWeightHanging } from 'react-icons/fa';

const HomePage = (props) => {
	return (
		<div className={props.className}>
			<h1>Workout Log On-Line</h1>
			<FaWeightHanging />
		</div>
	);
};

export default styled(HomePage)`
	svg {
		font-size: 4rem;
	}
	@media (min-width: 600px) {
		svg {
			font-size: 8rem;
		}
	}
`;
