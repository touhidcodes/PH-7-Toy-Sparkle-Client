import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
	const { signInUser } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signInUser(email, password)
			.then((result) => {
				const loggedUser = result.loggedUser;
				navigate(from, { replace: true });
				form.reset();
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			});
	};
	const handleShowPassword = (event) => {
		setShowPassword(event.target.checked);
	};
	return (
		<div className='mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Login To Your Account</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Login</p>
			</div>
			<div className='w-1/2 mx-auto mt-5'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-[#4acdd5]'>
						<form onSubmit={handleLogin}>
							<div className='form-control'>
								<label className='label flex flex-row justify-start'>
									<span className='text-gray-500 font-semibold'>
										E-MAIL ADDRESS:
									</span>
									<span className='text-red-500 font-bold ml-2'>*</span>
								</label>
								<input
									type='email'
									placeholder='Email Address'
									name='email'
									className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label flex flex-row justify-start'>
									<span className='text-gray-500 font-semibold'>PASSWORD:</span>
									<span className='text-red-500 font-bold ml-2'>*</span>
								</label>
								<input
									type={showPassword ? "text" : "password"}
									placeholder='Enter Your Password'
									name='password'
									className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
									required
								/>
							</div>
							<div className='flex flex-row justify-end items-center mt-2'>
								<input
									type='checkbox'
									name='check'
									onClick={handleShowPassword}
								/>
								<label htmlFor='' className='text-xl font-semibold ml-2 '>
									<small className='text-inherit'>Show Password</small>
								</label>
							</div>
							<div className='flex flex-row text-red-500 font-semibold mt-2'>
								<span className=' mr-2'>*</span>
								<p>Fields are required</p>
							</div>
							<input
								type='submit'
								value='Log In'
								className='form-control mt-4 btn btn-error text-white w-full'
							/>
						</form>
						<div className='divider'>OR</div>
						<div className='form-control'>
							<button className='btn btn-info text-white'>
								<FcGoogle className='h-8 w-8 mr-3' />
								Google Sign In
							</button>
						</div>
						{error ? (
							<div className='text-center font-semibold text-red-400 mt-5'>
								<p>{error}</p>
							</div>
						) : (
							""
						)}
						<div>
							<p className='font-semibold mt-3 text-center'>
								<small>
									New to Toy Springer?{" "}
									<Link to='/register' className='underline text-red-400'>
										Create An Account
									</Link>
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
