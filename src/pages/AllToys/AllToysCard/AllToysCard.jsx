import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AllToysCard = ({ toy }) => {
	const { picture, toyName, price, quantity, rating, sellerName, category } =
		toy;
	return (
		<tr>
			<th>
				<label>
					<input type='checkbox' className='checkbox' />
				</label>
			</th>
			<td>
				<div className='flex items-center space-x-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-16 h-16'>
							<img src={picture} alt='car toy' />
						</div>
					</div>
					<div>
						<div className='font-bold'>{toyName}</div>
						<div className='text-sm opacity-50'>
							<Rating style={{ maxWidth: 100 }} value={rating} readOnly />
						</div>
					</div>
				</div>
			</td>

			<td>{sellerName}</td>
			<td>{category}</td>
			<td>
				<p>Price: {price}</p>
				<p>Quantity: {quantity}</p>
			</td>
			<th>
				<button className='btn btn-error text-white '>View Details</button>
			</th>
		</tr>
	);
};

export default AllToysCard;
