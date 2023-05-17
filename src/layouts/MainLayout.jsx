import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			<Outlet />
			Hello world!
		</div>
	);
};

export default MainLayout;
