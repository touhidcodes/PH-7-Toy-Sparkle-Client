import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Private = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className='flex justify-center mt-3'>
				<ClipLoader color={"red"} loading={loading} size={40} />
			</div>
		);
	}
	if (user) {
		return children;
	}

	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};
export default Private;
