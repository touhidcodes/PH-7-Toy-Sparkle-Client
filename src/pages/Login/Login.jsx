import React from "react";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";

const Login = () => {
	return (
		<div className='mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Login To Your Account</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Login</p>
			</div>
			<div className='w-1/2 mx-auto mt-5'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-[#4acdd5]'>
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
								type='password'
								placeholder='Enter Your Password'
								name='password'
								className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
								required
							/>
						</div>
						<div className='flex flex-row text-red-500 font-semibold mt-2'>
							<span className=' mr-2'>*</span>
							<p>Fields are required</p>
						</div>
						<div className='form-control mt-4'>
							<button className='btn btn-error text-white'>
								Log In <CiLogin className='h-8 w-8 ml-1' />
							</button>
						</div>
						<div className='divider'>OR</div>
						<div className='form-control mt-4'>
							<button className='btn btn-info text-white'>
								<FcGoogle className='h-8 w-8 mr-3' />
								Google Sign In
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
