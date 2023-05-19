import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const url = `http://localhost:5000/my?email=${user.email}`;

	console.log(user);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);
	return <div>My toys</div>;
};

export default MyToys;
