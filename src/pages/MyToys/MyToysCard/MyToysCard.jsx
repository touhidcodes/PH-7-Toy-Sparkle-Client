import { Rating } from "@smastrom/react-rating";
import React from "react";

const MyToysCard = ({ toy, handleUpdate }) => {
	const {
		_id,
		picture,
		toyName,
		price,
		quantity,
		rating,
		sellerName,
		category,
	} = toy;

	
	return (
		<tr>
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
				<button
					className='btn btn-info text-white '
					onClick={() => handleUpdate(_id)}
				>
					Update
				</button>
			</th>
			<th>
				<button className='btn btn-error text-white '>Delete</button>
			</th>
		</tr>
	);
};

export default MyToysCard;
