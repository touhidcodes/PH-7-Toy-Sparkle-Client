import React from "react";
import avatar1 from "../../../assets/images/Avatar/avatar-1.jpg";
import avatar2 from "../../../assets/images/Avatar/avatar-2.jpg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
	return (
		<div className='mt-20'>
			<div className='text-center mb-5'>
				<h1 className='text-3xl font-semibold'>Customer Saying</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>
					Customer Testimonials
				</p>
			</div>
			<div className='mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 p-4 lg:p-0'>
				<div className='bg-base-200 rounded-xl lg:p-10 p-5 '>
					<div className='  flex flex-row items-center  '>
						<div className='avatar'>
							<div className='w-24 rounded-full'>
								<img src={avatar1} />
							</div>
						</div>
						<div className='ml-5'>
							<h3 className='text-2xl font-semibold mb-1'>Rayan Ray</h3>
							<Rating style={{ maxWidth: 100 }} value={5} readOnly />
						</div>
					</div>
					<p className='mt-5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
						rerum et consectetur, sed illum quisquam tempore! Consectetur
						nostrum vel odio possimus soluta adipisci. Natus sequi odit ducimus
						provident deleniti neque.
					</p>
				</div>
				<div className='bg-base-200 rounded-xl lg:p-10 p-4 '>
					<div className='  flex flex-row items-center  '>
						<div className='avatar'>
							<div className='w-24 rounded-full'>
								<img src={avatar2} />
							</div>
						</div>
						<div className='ml-5'>
							<h3 className='text-2xl font-semibold mb-1'>Jessica Nina</h3>
							<Rating style={{ maxWidth: 100 }} value={5} readOnly />
						</div>
					</div>
					<p className='mt-5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
						rerum et consectetur, sed illum quisquam tempore! Consectetur
						nostrum vel odio possimus soluta adipisci. Natus sequi odit ducimus
						provident deleniti neque.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Review;
