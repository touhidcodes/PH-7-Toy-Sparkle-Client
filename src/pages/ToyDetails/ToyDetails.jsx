import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
	const loadedData = useLoaderData();
	const {
		_id,
		picture,
		toyName,
		price,
		rating,
		sellerName,
		sellerEmail,
		quantity,
		description,
	} = loadedData;
	return (
		<div className='mt-10'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Toy Details</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>{toyName}</p>
			</div>
			<div className='hero min-h-screen bg-base-200 p-10 rounded-xl mt-10'>
				<div className='hero-content grid grid-cols-2 gap-10'>
					<img src={picture} className='w-full rounded-xl ' />
					<div>
						<h1 className='text-4xl font-semibold'>{toyName}</h1>
						<p className='text-3xl font-semibold text-[#4acdd5] mt-2'>
							${price} USD
						</p>
						<div className='flex mt-2'>
							<Rating style={{ maxWidth: 100 }} value={rating} readOnly />
							<span className='ml-3'>({rating})</span>
						</div>
						<p className='font-semibold mt-3'>Seller: {sellerName}</p>
						<p className=' font-semibold mt-2'>Email: {sellerEmail}</p>
						<p className=' font-semibold mt-2'>
							Available Quantity: {quantity}
						</p>
						<p className='mt-5'>{description}</p>
						<button className='btn btn-error mt-5 text-white'>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyDetails;
