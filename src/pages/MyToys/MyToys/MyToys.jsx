import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyToysCard from "../MyToysCard/MyToysCard";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);
	const url = `http://localhost:5000/my?email=${user.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, []);

	console.log(myToys);
	return (
		<div className='overflow-x-auto w-full mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>My Toys</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>{user.email}</p>
			</div>
			<table className='table w-full mt-10'>
				{/* head */}
				<thead>
					<tr>
						
						<th>Toy Name</th>
						<th>Seller</th>
						<th>Sub_category</th>
						<th>Price & Quantity</th>
						<th>Update Info</th>
						<th>Delete Toy</th>
					</tr>
				</thead>
				<tbody>
					{myToys.map((toy) => (
						<MyToysCard key={toy._id} toy={toy} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyToys;
