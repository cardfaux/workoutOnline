import React from 'react';
import styled from 'styled-components';
import useFormValidation from '../../hooks/useFormValidation';
import validateLogin from '../../Utils/validateLogin';
import { Link } from 'react-router-dom';

import { emailLogin } from '../../firebase/config/config';
import { emailPasswordRegister } from '../../firebase/config/config';
import { signInWithGoogle } from '../../firebase/config/config';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
};

function Login(props) {
	const {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		errors,
		isSubmitting,
	} = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
	const [login, setLogin] = React.useState(true);
	const [firebaseError, setFirebaseError] = React.useState(null);

	async function authenticateUser() {
		const { name, email, password } = values;
		try {
			login
				? await emailLogin(email, password)
				: await emailPasswordRegister(name, email, password);
			props.history.push('/');
		} catch (err) {
			console.error('Authentication Error', err);
			setFirebaseError(err.message);
		}
	}

	return (
		<div className={props.className}>
			<h2>{login ? 'Login' : 'Register'}</h2>
			<form onSubmit={handleSubmit}>
				{!login && (
					<input
						onChange={handleChange}
						value={values.name}
						name='name'
						type='text'
						placeholder='Your name'
						autoComplete='off'
					/>
				)}
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
					name='email'
					type='email'
					className={errors.email && 'error-input'}
					placeholder='Your email'
					autoComplete='off'
				/>
				{errors.email && <p className='error-text'>{errors.email}</p>}
				<input
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.password}
					className={errors.password && 'error-input'}
					name='password'
					type='password'
					placeholder='Choose a secure password'
				/>
				{errors.password && <p className='error-text'>{errors.password}</p>}
				{firebaseError && <p className='error-text'>{firebaseError}</p>}
				<div className='buttons'>
					<button
						type='submit'
						disabled={isSubmitting}
						style={{ background: isSubmitting ? 'grey' : 'orange' }}
					>
						{login ? 'login account' : 'create account'}
					</button>
					<button
						type='button'
						onClick={() => setLogin((prevLogin) => !prevLogin)}
					>
						{login ? 'need to create an account?' : 'already have an account?'}
					</button>
					{login && (
						<button
							onClick={signInWithGoogle}
							className='sign-in-with-google'
							type='button'
							disabled={isSubmitting}
							style={{ background: isSubmitting ? 'grey' : '#4285F4' }}
						>
							Sign In With Google
						</button>
					)}
				</div>
			</form>
			<div className='forgot'>
				<Link to='/forgot'>Forgot password?</Link>
			</div>
		</div>
	);
}

export default styled(Login)`
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	form {
		display: flex;
		flex-direction: column;
		max-width: 400px;

		input {
			margin: 0.75rem 0;
		}

		.buttons {
			display: flex;
			flex-wrap: wrap;

			button[type='button'] {
				cursor: pointer;
			}

			button[type='submit'] {
				cursor: pointer;
				margin-right: 1rem;
				flex-grow: 1;
				flex-shrink: 0;
			}

			.sign-in-with-google {
				flex-grow: 4;
				flex-shrink: 0;
				margin-top: 1rem;
			}
		}
	}

	.forgot {
		margin: 2rem;

		a {
			text-decoration: none;
			color: inherit;
			transition: font-size 0.5s;
			&:hover {
				color: orange;
				font-size: 20px;
			}
		}
	}
`;
