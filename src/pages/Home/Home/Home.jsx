import React from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import CategorySection from "../CategorySection/CategorySection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const toys = useLoaderData();
	return (
		<div>
			<Banner />
			<GallerySection />
			<CategorySection toys={toys}/>
		</div>
	);
};

export default Home;
