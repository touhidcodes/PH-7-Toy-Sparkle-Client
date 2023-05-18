import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TabsCard = ({ car }) => {
	const { picture, toyName, price, rating } = car;
	return (
		<div className='card card-compact w-96 bg-base-100 shadow-xl'>
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
					<div >
						<Rating style={{ maxWidth: 100 }} value={rating} readOnly/>
					</div>
					<Link >
						<button className='btn btn-error text-white'>View Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TabsCard;
