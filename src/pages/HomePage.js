import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaWeightHanging } from 'react-icons/fa';

import { FirebaseContext } from '../firebase/context/context';

const HomePage = (props) => {
	const { user } = useContext(FirebaseContext);

	console.log(user);

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
