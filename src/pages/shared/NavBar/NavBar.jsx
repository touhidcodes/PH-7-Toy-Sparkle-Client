import React, { useContext } from "react";
import logo from "../../../assets/images/toys.png";
import ActiveRoutes from "../../../routes/ActiveRoutes/ActiveRoutes";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {});
	};

	const navLinks = (
		<>
			<li>
				<ActiveRoutes to='/'>Home</ActiveRoutes>
			</li>
			<li>
				<ActiveRoutes to='/all'>All Toys</ActiveRoutes>
			</li>
			{user && (
				<li>
					<ActiveRoutes to='/my'>My Toys</ActiveRoutes>
				</li>
			)}
			<li>
				<ActiveRoutes to='/blogs'>Blogs</ActiveRoutes>
			</li>
			{user && (
				<li>
					<ActiveRoutes to='/add'>Add A Toy</ActiveRoutes>
				</li>
			)}
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
				<div className='dropdown dropdown-end mr-5'>
					{user ? (
						<label
							tabIndex={0}
							className='btn btn-ghost btn-circle avatar placeholder'
						>
							<div className=' rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2 w-10'>
								<div>
									<img src={user?.photoURL} title={user?.displayName} />
								</div>
							</div>
						</label>
					) : (
						""
					)}
				</div>
				{user ? (
					<div>
						<button className='btn btn-error text-white' onClick={handleLogOut}>
							Log Out
						</button>
					</div>
				) : (
					<button>
						<Link to='/login' className='btn btn-error text-white'>
							Log In
						</Link>
					</button>
				)}
			</div>
		</div>
	);
};

export default NavBar;
