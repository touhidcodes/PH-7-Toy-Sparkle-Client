import React from "react";
import feat1 from "../../../assets/images/Featured/featured-1.jpg";
import feat2 from "../../../assets/images/Featured/featured-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Featured = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <p className="text-[#4acdd5] font-semibold mt-1">Popular</p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 p-4 lg:p-0">
        <div
          className="carousel-item relative w-full"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <img src={feat2} className="w-full opacity-30 h-80" />
          <div className="absolute flex items-center rounded-xl  h-full w-full">
            <div className="text-white lg:ml-20 p-8 lg:p-0 ">
              <h4 className=" text-2xl font-semibold text-black">
                Sale on Exclusive!
              </h4>

              <p className="text-4xl font-bold text-black mt-1 mb-4 ">
                Accessories kids toy
              </p>
              <p className="text-black text-2xl font-semibold">
                Flat new offer to get <span className="font-bold"> 30%</span>{" "}
                off for new users
              </p>
              <div className="mt-8">
                <button className="flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item relative w-full"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <img src={feat1} className="w-full opacity-30 h-80" />
          <div className="absolute flex items-center rounded-xl  h-full w-full">
            <div className="text-white lg:ml-20 p-8 lg:p-0 ">
              <h4 className=" text-2xl font-semibold text-black">
                Sale on Exclusive!
              </h4>

              <p className="text-4xl font-bold text-black mt-1 mb-4 ">
                Exclusive product
              </p>
              <p className="text-black text-2xl font-semibold">
                Flat new offer to get <span className="font-bold"> 30%</span>{" "}
                off for new users
              </p>
              <div className="mt-8">
                <button className="flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
