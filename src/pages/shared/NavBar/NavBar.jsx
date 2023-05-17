import React from "react";
import logo from "../../../assets/images/toys.png";
import ActiveRoutes from "../../../routes/ActiveRoutes/ActiveRoutes";
import { Link } from "react-router-dom";

const NavBar = () => {
	const navLinks = (
		<>
			<li>
				<ActiveRoutes to='/'>Home</ActiveRoutes>
			</li>
			<li>
				<ActiveRoutes to='/all'>All Toys</ActiveRoutes>
			</li>
			<li>
				<ActiveRoutes to='/my'>My Toys</ActiveRoutes>
			</li>
			<li>
				<ActiveRoutes to='/blogs'>Blogs</ActiveRoutes>
			</li>
			<li>
				<ActiveRoutes to='/add'>Add A Toy</ActiveRoutes>
			</li>
		</>
	);
	return (
		<div className='navbar bg-base-100 h-20 mt-3 '>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						{navLinks}
					</ul>
				</div>
				<Link to='/' className=' normal-case text-xl '>
					<img src={logo} alt='' />
				</Link>
				<h2 className='lg:text-4xl ml-5 font-bold'>
					<span className='text-blue-500'> Toy </span>{" "}
					<span className='text-red-400'>Sparkle</span>
				</h2>
			</div>
			<div className='navbar-center hidden lg:flex text-xl'>
				<ul className='menu menu-horizontal px-1'>{navLinks}</ul>
			</div>
			<div className='navbar-end'>
				<a className='btn btn-error text-white'>Log In</a>
			</div>
		</div>
	);
};

export default NavBar;
