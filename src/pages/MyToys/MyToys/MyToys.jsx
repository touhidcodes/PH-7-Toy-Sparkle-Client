import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyToysCard from "../MyToysCard/MyToysCard";
import Swal from "sweetalert2";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);
	const url = `https://ph-7-assignment-11-toy-sparkle-server.vercel.app/my?email=${user.email}`;

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

			fetch(
				`https://ph-7-assignment-11-toy-sparkle-server.vercel.app/my/${id}`,
				{
					method: "PATCH",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(updatedData),
				}
			)
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
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://ph-7-assignment-11-toy-sparkle-server.vercel.app/my/${id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							fetch(url)
								.then((res) => res.json())
								.then((data) => setMyToys(data));
							Swal.fire("Deleted!", "Your toy has been deleted.", "success");
						}
					});
			}
		});
	};

	const handleSort = (event) => {
		fetch(
			`https://ph-7-assignment-11-toy-sparkle-server.vercel.app/sort?by=${event.target.value}&email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	};
	return (
		<div className='overflow-x-auto w-full mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>My Toys</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>{user.email}</p>
			</div>
			<select
				className='select select-bordered w-full max-w-xs'
				onChange={handleSort}
			>
				<option selected disabled>
					Sort by Price
				</option>
				<option value='ascending'>Ascending</option>
				<option value='descending'>Descending</option>
			</select>
			<table className='table w-full mt-10'>
				<thead>
					<tr>
						<th>Toy Name & Image</th>
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
