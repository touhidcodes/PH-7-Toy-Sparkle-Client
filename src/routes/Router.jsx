import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/all",
				element: <Home />,
			},
			{
				path: "/my",
				element: <Home />,
			},
			{
				path: "/blogs",
				element: <Home />,
			},
			{
				path: "/add",
				element: <Home />,
			},
		],
	},
]);

export default router;
