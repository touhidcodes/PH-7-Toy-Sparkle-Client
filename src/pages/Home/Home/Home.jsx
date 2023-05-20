import React from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import CategorySection from "../CategorySection/CategorySection";
import { useLoaderData } from "react-router-dom";
import Featured from "../Featured/Featured";
import Review from "../Review/Review";

const Home = () => {
	const toys = useLoaderData();
	return (
		<div>
			<Banner />
			<GallerySection />
			<CategorySection toys={toys} />
			<Featured />
			<Review />
		</div>
	);
};

export default Home;
