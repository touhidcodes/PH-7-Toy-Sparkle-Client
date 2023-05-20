import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "../AllToysCard/AllToysCard";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
	const loadedToys = useLoaderData();
	const [toys, setToys] = useState(loadedToys);
	useTitle("All Toys")

	const handleSearch = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const data = { name };
		console.log(data);

		const url = `https://ph-7-assignment-11-toy-sparkle-server.vercel.app/search?search=${name}`;
		fetch(url)
			.then((res) => res.json(data))
			.then((data) => setToys(data));
	};

	return (
		<div className='overflow-x-auto w-full mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>All Toys</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>View Toys</p>
			</div>
			<form onSubmit={handleSearch}>
				<div className='form-control w-1/4 mx-4 mt-5'>
					<label className='label flex flex-row justify-start'>
						<span className='text-gray-500 font-semibold'>Search by Name:</span>
					</label>
					<div className='flex flex-row items-center'>
						<input
							type='text'
							placeholder='Toy Name'
							name='name'
							className='bg-base-200 py-2 px-5 rounded-md  outline-offset-4 outline-2 outline-gray-400'
						/>
						<input
							type='submit'
							value='Search'
							className='btn btn-ghost ml-2'
						/>
					</div>
				</div>
			</form>
			<table className='table w-full mt-5'>
				<thead>
					<tr>
						<th></th>
						<th>Toy Name</th>
						<th>Seller</th>
						<th>Sub_category</th>
						<th>Price & Quantity</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{toys.map((toy) => (
						<AllToysCard key={toy._id} toy={toy} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllToys;
