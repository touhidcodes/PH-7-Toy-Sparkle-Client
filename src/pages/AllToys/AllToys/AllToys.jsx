import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "../AllToysCard/AllToysCard";

const AllToys = () => {
	const toys = useLoaderData();
	return (
		<div className='overflow-x-auto w-full mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>All Toys</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>View Toys</p>
			</div>
			<table className='table w-full mt-10'>
				{/* head */}
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
