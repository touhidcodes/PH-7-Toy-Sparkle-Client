import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import banner1 from "../../../assets//images/Banner/banner_1.jpg";
import banner2 from "../../../assets//images/Banner/banner_2.jpg";
import banner3 from "../../../assets//images/Banner/banner_3.jpg";

const Banner = () => {
	return (
		<div className='carousel w-full h-[600px] rounded-xl mt-10'>
			<div id='slide1' className='carousel-item relative w-full '>
				<img src={banner3} className='w-full' />
				<div className='absolute flex items-center rounded-xl bg-gradient-to-r from-sky-300 to-[rgba(21, 21, 21, 0)] h-full w-full'>
					<div className='text-white ml-20 '>
						<h4 className=' text-4xl font-semibold bg-yellow-400 w-56 p-4'>
							New Arrival
						</h4>

						<p className='text-5xl font-bold text-black mt-8 mb-7 '>
							New Toys for Kids
						</p>
						<p className='text-black text-2xl font-semibold'>
							Flat new offer to get <span className='font-bold'> 30%</span> off
							for new users
						</p>
						<div className='mt-8'>
							<button className='flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none'>
								Shop Now{" "}
								<BsFillArrowRightCircleFill className='h-6 w-6 ml-3 text-white' />
							</button>
						</div>
					</div>
					<div className='absolute flex justify-end bottom-5 m-10   right-10 '>
						<a
							href='#slide4'
							className='btn btn-circle mr-10 bg-red-400 hover:bg-yellow-400 border-none'
						>
							❮
						</a>
						<a
							href='#slide2'
							className='btn btn-circle bg-red-400 hover:bg-yellow-400 border-none'
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<div id='slide2' className='carousel-item relative w-full'>
				<img src={banner2} className='w-full' />
				<div className='absolute flex items-center rounded-xl bg-gradient-to-r from-sky-300 to-[rgba(21, 21, 21, 0)] h-full w-full'>
					<div className='text-white ml-20 '>
						<h4 className=' text-4xl font-semibold bg-yellow-400 w-56 p-4'>
							New Arrival
						</h4>

						<p className='text-5xl font-bold text-black mt-8 mb-7 '>
							New Toys for Kids
						</p>
						<p className='text-black text-2xl font-semibold'>
							Flat new offer to get <span className='font-bold'> 30%</span> off
							for new users
						</p>
						<div className='mt-8'>
							<button className='flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none'>
								Shop Now{" "}
								<BsFillArrowRightCircleFill className='h-6 w-6 ml-3 text-white' />
							</button>
						</div>
					</div>
					<div className='absolute flex justify-end bottom-5 m-10   right-10 '>
						<a
							href='#slide1'
							className='btn btn-circle mr-10 bg-red-400 hover:bg-yellow-400 border-none'
						>
							❮
						</a>
						<a
							href='#slide3'
							className='btn btn-circle bg-red-400 hover:bg-yellow-400 border-none'
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<div id='slide3' className='carousel-item relative w-full'>
				<img src={banner1} className='w-full' />
				<div className='absolute flex items-center rounded-xl bg-gradient-to-r from-sky-300 to-[rgba(21, 21, 21, 0)] h-full w-full'>
					<div className='text-white ml-20 '>
						<h4 className=' text-4xl font-semibold bg-yellow-400 w-56 p-4'>
							New Arrival
						</h4>

						<p className='text-5xl font-bold text-black mt-8 mb-7 '>
							New Toys for Kids
						</p>
						<p className='text-black text-2xl font-semibold'>
							Flat new offer to get <span className='font-bold'> 30%</span> off
							for new users
						</p>
						<div className='mt-8'>
							<button className='flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none'>
								Shop Now{" "}
								<BsFillArrowRightCircleFill className='h-6 w-6 ml-3 text-white' />
							</button>
						</div>
					</div>
					<div className='absolute flex justify-end bottom-5 m-10   right-10 '>
						<a
							href='#slide2'
							className='btn btn-circle mr-10 bg-red-400 hover:bg-yellow-400 border-none'
						>
							❮
						</a>
						<a
							href='#slide1'
							className='btn btn-circle bg-red-400 hover:bg-yellow-400 border-none'
						>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
