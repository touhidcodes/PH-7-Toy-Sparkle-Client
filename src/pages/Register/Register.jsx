import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className='mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Register Your Account</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Register</p>
			</div>
			<div className='w-1/2 mx-auto mt-5'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-[#4acdd5]'>
						<div className='form-control'>
							<label className='label flex flex-row justify-start'>
								<span className='text-gray-500 font-semibold'>NAME:</span>
								<span className='text-red-500 font-bold ml-2'>*</span>
							</label>
							<input
								type='name'
								placeholder='Your Name'
								name='name'
								className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
								required
							/>
						</div>
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
						<div className='form-control'>
							<label className='label flex flex-row justify-start'>
								<span className='text-gray-500 font-semibold'>PHOTO_URL:</span>
								<span className='text-red-500 font-bold ml-2'>*</span>
							</label>
							<input
								type='text'
								placeholder='Photo URL'
								name='url'
								className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
								required
							/>
						</div>
						<div className='flex flex-row text-red-500 font-semibold mt-2'>
							<span className=' mr-2'>*</span>
							<p>Fields are required</p>
						</div>
						<div className='form-control mt-4'>
							<button className='btn btn-error text-white'>Register</button>
						</div>

						<div>
							<p className='font-semibold mt-3 text-center'>
								<small>
									Already Have An Account?{" "}
									<Link to='/login' className='underline text-red-400'>
										Log In Your Account
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

export default Register;
