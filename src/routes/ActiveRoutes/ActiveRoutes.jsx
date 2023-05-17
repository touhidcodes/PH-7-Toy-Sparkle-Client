import React from "react";
import { NavLink } from "react-router-dom";
import "./ActiveRoutes.css";

const ActiveRoute = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? "active p-4" : "notActive")}
		>
			{children}
		</NavLink>
	);
};

export default ActiveRoute;
