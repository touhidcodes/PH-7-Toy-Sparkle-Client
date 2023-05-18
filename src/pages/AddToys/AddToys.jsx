import React from "react";

const AddToys = () => {
	return (
		<div className='mt-10 mb-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Add A Toy</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Add Toys</p>
			</div>
			<div className='w-3/4 mx-auto mt-5'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-[#4acdd5]'>
						<div className='grid grid-cols-2 gap-5'>
							<div>
								<div className='form-control'>
									<label className='label flex flex-row justify-start'>
										<span className='text-gray-500 font-semibold'>
											TOY IMAGE URL:
										</span>
										<span className='text-red-500 font-bold ml-2'>*</span>
									</label>
									<input
										type='text'
										placeholder='Image URL'
										name='url'
										className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
										required
									/>
								</div>
								<div className='form-control'>
									<label className='label flex flex-row justify-start'>
										<span className='text-gray-500 font-semibold'>
											TOY NAME:
										</span>
										<span className='text-red-500 font-bold ml-2'>*</span>
									</label>
									<input
										type='text'
										placeholder='Toy Name'
										name='name'
										className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
										required
									/>
								</div>
								<div className='form-control'>
									<label className='label flex flex-row justify-start'>
										<span className='text-gray-500 font-semibold'>
											SELLER NAME:
										</span>
										<span className='text-red-500 font-bold ml-2'>*</span>
									</label>
									<input
										type='text'
										placeholder='Seller Name'
										name='sellerName'
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
							</div>
							<div>
								<div className='form-control'>
									<label className='label flex flex-row justify-start'>
										<span className='text-gray-500 font-semibold'>
											SUB-CATEGORY:
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
										<span className='text-gray-500 font-semibold'>PRICE:</span>
										<span className='text-red-500 font-bold ml-2'>*</span>
									</label>
									<input
										type='text'
										placeholder='Price'
										name='price'
										className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
										required
									/>
								</div>
								<div className='form-control'>
									<label className='label flex flex-row justify-start'>
										<span className='text-gray-500 font-semibold'>RATING:</span>
										<span className='text-red-500 font-bold ml-2'>*</span>
									</label>
									<input
										type='text'
										placeholder='Rating'
										name='rating'
										className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
										required
									/>
								</div>
								<div className='form-control'>
									<label className='label flex flex-row justify-start'>
										<span className='text-gray-500 font-semibold'>
											AVAILABLE QUANTITY:
										</span>
										<span className='text-red-500 font-bold ml-2'>*</span>
									</label>
									<input
										type='text'
										placeholder='Available Quantity'
										name='quantity'
										className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
										required
									/>
								</div>
							</div>
						</div>
						<div className='form-control'>
							<label className='label flex flex-row justify-start'>
								<span className='text-gray-500 font-semibold'>
									DESCRIPTION:
								</span>
								<span className='text-red-500 font-bold ml-2'>*</span>
							</label>
							<input
								type='textbox'
								placeholder='Write Toy Description'
								name='rating'
								className='bg-base-200 px-5 h-20 rounded-md  outline-offset-4 outline-2 outline-gray-400'
								required
							/>
						</div>
						<div className='flex flex-row text-red-500 font-semibold mt-2'>
							<span className=' mr-2'>*</span>
							<p>Fields are required</p>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-error text-white'>ADD TOY </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToys;
