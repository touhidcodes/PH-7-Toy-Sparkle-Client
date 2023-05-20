import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider";

const TabsCard = ({ car }) => {
	const { user } = useContext(AuthContext);
	const { _id, picture, toyName, price, rating } = car;
	const navigate = useNavigate();

	const handleDetails = () => {
		if (!user) {
			Swal.fire({
				title: "Are you sure?",
				text: "You have to log in first to view details!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Log In",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate(`/details/${_id}`);
				}
			});
		} else {
			navigate(`/details/${_id}`);
		}
	};
	return (
		<div className='card card-compact lg:w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src={picture} alt='car toy' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-2xl text-red-400'>{toyName}</h2>
				<p className='text-xl font-semibold'>
					Price: $<span className='text-blue-400 '> {price}</span>
				</p>
				<p className='text-xl font-semibold'>
					Ratings: <span className='text-blue-400'>{rating}</span>
				</p>
				<div className='card-actions justify-between items-center'>
					<div>
						<Rating style={{ maxWidth: 100 }} value={rating} readOnly />
					</div>
					<button onClick={handleDetails} className='btn btn-error text-white'>
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default TabsCard;
