import React from "react";

const AddToys = () => {
	return (
		<div className='mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Add A Toy</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Add Toys</p>
			</div>
			<div className='w-1/2 mx-auto mt-10'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-gray-200'>
						<div className='form-control'>
							<label className='label flex flex-row justify-start'>
								<span className='text-gray-500 font-semibold'>
									E-MAIL ADDRESS:{" "}
								</span>{" "}
								<span className='text-red-500 font-bold ml-2'>*</span>
							</label>
							<input
								type='email'
								placeholder='Email Address'
								name='email'
								className='bg-base-200 py-1 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='text'
								placeholder='password'
								className='input input-bordered'
							/>
							<label className='label'>
								<a href='#' className='label-text-alt link link-hover'>
									Forgot password?
								</a>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToys;
