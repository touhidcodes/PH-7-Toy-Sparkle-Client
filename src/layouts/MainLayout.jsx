import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";

const MainLayout = () => {
	return (
		<div>
            <NavBar/>
			<Outlet />
			Hello world!
		</div>
	);
};

export default MainLayout;
