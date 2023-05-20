import React from "react";
import logo from "../../../assets/images/footer.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
	return (
		<footer className='mt-10 lg:mb-5'>
			<div className='footer p-10  bg-base-200 text-base-content rounded-t-xl items-center'>
				<div >
					<div className='flex items-center flex-col lg:flex-row'>
						<img src={logo} alt='toy' className='' />
						<div className='ml-5'>
							<h2 className='text-4xl ml-5 font-bold text-center mt-5'>
								<span className='text-blue-500'> Toy </span>{" "}
								<span className='text-red-400'>Sparkle</span>
							</h2>
							<p className='w-60 text-md text-center mt-5 text-gray-600 '>
								A kids toy shop is a store that specializes in selling toys and
								games designed specifically for children.
							</p>
						</div>
					</div>

					<p className='flex lg:ml-5 items-center font-semibold mt-8'>
						<FaRegAddressBook className='h-5 w-5  text-red-400 mr-3' />
						Address: 1800 Abbot Kinney Nebraska UK
					</p>
					<p className='flex lg:ml-5 items-center font-semibold'>
						<MdAlternateEmail className='h-5 w-5  text-red-400 mr-3' />
						Email: hello@example.com
					</p>
					<p className='flex lg:ml-5 items-center font-semibold'>
						<HiPhone className='h-5 w-5  text-red-400 mr-3' />
						Phone:(012) 345 6789
					</p>
				</div>

				<div className='font-semibold'>
					<span className='footer-title'>Quick Links</span>
					<a className='link link-hover'>Help Center</a>
					<a className='link link-hover'>Redeem Voucher</a>
					<a className='link link-hover'>Contact Us</a>
					<a className='link link-hover'>Policy & Rules</a>
					<a className='link link-hover'>Check Offer List</a>
				</div>
				<div className='font-semibold'>
					<span className='footer-title'>Information</span>
					<a className='link link-hover'>About us</a>
					<a className='link link-hover'>Product Support</a>
					<a className='link link-hover'>Jobs</a>
					<a className='link link-hover'>Affiliate</a>
				</div>
				<div className='font-semibold'>
					<span className='footer-title'>Follow Us On</span>
					<a className='link link-hover'>Facebook</a>
					<a className='link link-hover'>Twitter</a>
					<a className='link link-hover'>Instagram</a>
				</div>
			</div>
			<div className='footer footer-center p-4 bg-[#4acdd5] text-white lg:text-xl rounded-b-lg'>
				<div>
					<p>
						All right reserved at TouhidCodes | Built Toy Sprinkle by Touhid |
						Copyright © 2023
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
