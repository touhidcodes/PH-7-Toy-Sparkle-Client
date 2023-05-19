import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddToys = () => {
	const { user } = useContext(AuthContext);
	const handleAddToy = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const sellerName = form.sellerName.value;
		const category = form.category.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const url = form.url.value;

		const toy = {
			picture: url,
			toyName: name,
			sellerName: sellerName,
			sellerEmail: email,
			category,
			price,
			rating,
			quantity,
			description,
		};

		fetch("http://localhost:5000/add", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(toy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	return (
		<div className='mt-10 mb-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Add A Toy</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Add Toys</p>
			</div>
			<div className='w-3/4 mx-auto mt-5'>
				<div className=' card  p-10 rounded-xl shadow-2xl bg-base-100'>
					<div className='card-body border-dashed border-2 border-[#4acdd5]'>
						<form onSubmit={handleAddToy}>
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
										</label>
										<input
											type='text'
											placeholder='Seller Name'
											name='sellerName'
											className='bg-base-200 py-2 px-5 rounded-md  outline-none text-gray-500'
											defaultValue={user?.displayName}
											readOnly
											required
										/>
									</div>
									<div className='form-control'>
										<label className='label flex flex-row justify-start'>
											<span className='text-gray-500 font-semibold'>
												E-MAIL ADDRESS:
											</span>
										</label>
										<input
											type='email'
											placeholder='Email Address'
											name='email'
											className='bg-base-200 py-2 px-5 rounded-md outline-none text-gray-500'
											required
											defaultValue={user?.email}
											readOnly
										/>
									</div>
								</div>
								<div>
									<div className='form-control'>
										<label
											className='label flex flex-row justify-start'
											for='category'
										>
											<span className='text-gray-500 font-semibold'>
												SUB-CATEGORY:
											</span>
											<span className='text-red-500 font-bold ml-2'>*</span>
										</label>
										<select
											name=''
											id='category'
											className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
										>
											<option value='sports_car'>Sports Car</option>
											<option value='regular_car'>Regular Car</option>
											<option value='truck'>Truck</option>
										</select>
									</div>
									<div className='form-control'>
										<label className='label flex flex-row justify-start'>
											<span className='text-gray-500 font-semibold'>
												PRICE:
											</span>
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
											<span className='text-gray-500 font-semibold'>
												RATING:
											</span>
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
									name='description'
									className='bg-base-200 px-5 h-20 rounded-md  outline-offset-4 outline-2 outline-gray-400'
									required
								/>
							</div>
							<div className='flex flex-row text-red-500 font-semibold mt-2'>
								<span className=' mr-2'>*</span>
								<p>Fields are required</p>
							</div>
							<input
								type='submit'
								value='ADD TOY'
								className='form-control mt-6 btn btn-error text-white w-full'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToys;
