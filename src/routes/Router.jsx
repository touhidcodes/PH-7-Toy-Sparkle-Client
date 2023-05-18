import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToys from "../pages/AddToys/AddToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("http://localhost:5000/toys"),
			},
			{
				path: "/all",
				element: <AllToys />,
				loader: () => fetch("http://localhost:5000/toys"),
			},
			{
				path: "/details/:id",
				element: <ToyDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
			{
				path: "/add",
				element: <AddToys />,
			},
			// {
			// 	path: "/my",
			// 	element: <Home />,
			// },
			// {
			// 	path: "/blogs",
			// 	element: <Home />,
			// },
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

export default router;
