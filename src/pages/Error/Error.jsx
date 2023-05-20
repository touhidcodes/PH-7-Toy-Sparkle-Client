import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/images/Error/error.jpg";

const Error = () => {
	return (
		<div className='mt-10 px-20'>
			<div className='grid grid-cols-2 items-center'>
				<div className='w-full mx-auto'>
					<img src={error} alt='' />
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-6xl font-semibold text-center mt-20 text-red-400'>
						404 Page Not Found!
					</h1>
					<p className='mt-5 px-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						aliquid, rem similique alias facilis doloremque blanditiis vel ipsa
						id error consequatur? Nisi vel perferendis ipsum fugiat hic aliquam
						minima saepe!
					</p>
					<button className='btn btn-error mt-10 text-white font-semibold'>
						<Link to='/'>Go Home</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
