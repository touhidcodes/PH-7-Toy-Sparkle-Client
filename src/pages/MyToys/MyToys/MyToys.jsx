import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyToysCard from "../MyToysCard/MyToysCard";
import Swal from "sweetalert2";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);
	const url = `http://localhost:5000/my?email=${user.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, []);

	const handleUpdate = async (id) => {
		const { value: formValues } = await Swal.fire({
			title: "Update Toy Information",
			html:
				"<label>Price:</label> " +
				'<input id="price" class="swal2-input" placeholder="price">' +
				"</br>" +
				"<label>Rating:</label> " +
				'<input id="rating" class="swal2-input" placeholder="rating">' +
				"</br>" +
				"<label>Description:</label> " +
				'<input id="description" class="swal2-textarea" placeholder="description">',
			showCancelButton: true,
			preConfirm: () => {
				return [
					document.getElementById("price").value,
					document.getElementById("rating").value,
					document.getElementById("description").value,
				];
			},
		});

		if (formValues) {
			// Swal.fire(JSON.stringify(formValues));
			const updatedData = {
				price: formValues[0],
				quantity: formValues[1],
				description: formValues[2],
			};

			fetch(`http://localhost:5000/my/${id}`, {
				method: "PATCH",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(updatedData),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.modifiedCount > 0) {
						fetch(url)
							.then((res) => res.json())
							.then((data) => setMyToys(data));
					}
				});
			Swal.fire("Success", "Toy information updated successfully!", "success");
		}
	};

	const handleDelete = (id) => {
		fetch(`http://localhost:5000/my/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					fetch(url)
						.then((res) => res.json())
						.then((data) => setMyToys(data));
				}
			});
		Swal.fire("Success", "Toy deleted successfully!", "success");
	};
	return (
		<div className='overflow-x-auto w-full mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>My Toys</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>{user.email}</p>
			</div>
			<table className='table w-full mt-10'>
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
						<MyToysCard
							key={toy._id}
							toy={toy}
							handleUpdate={handleUpdate}
							handleDelete={handleDelete}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyToys;
