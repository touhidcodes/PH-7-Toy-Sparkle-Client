import React from "react";
import Lottie from "lottie-react";
import toyAnimation from "./toy.json";

const Welcome = () => {
  return (
    <div className="mt-20 bg-gray-100 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="w-96 h-96 flex align-center">
          <Lottie animationData={toyAnimation} loop={true} />
        </div>
        <div className="col-span-2 pr-20 flex flex-col justify-center">
          <h1 className="text-2xl lg:text-7xl font-semibold text-gray-600">
            Welcome to <br /> Toy Sparkle's
          </h1>
          <p className="mt-5 text-gray-500 lg:text-xl">
            At Toy Sparkle, we are dedicated to bringing joy and wonder into the
            lives of children and families through our wide selection of toys,
            games, and educational tools. Our online toy store is a magical
            wonderland filled with the latest toys from beloved brands and
            unique finds that spark creativity and imagination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
