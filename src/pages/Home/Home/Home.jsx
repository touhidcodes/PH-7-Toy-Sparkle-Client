import React from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import CategorySection from "../CategorySection/CategorySection";
import { useLoaderData } from "react-router-dom";
import Featured from "../Featured/Featured";
import Review from "../Review/Review";
import useTitle from "../../../hooks/useTitle";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  const toys = useLoaderData();
  useTitle("Home");
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <Welcome />
      <GallerySection />
      <CategorySection toys={toys} />
      <Featured />
      <Review />
    </div>
  );
};

export default Home;
