import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import banner1 from "../../../assets//images/Banner/banner_1.jpg";
import banner2 from "../../../assets//images/Banner/banner_2.jpg";
import banner3 from "../../../assets//images/Banner/banner_3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div
      className="carousel w-full h-[600px] rounded-xl mt-10"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={banner3} className="w-full" />
        <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#404258] to-[rgba(21, 21, 21, 0)] h-full w-full">
          <div className="text-white lg:ml-20 p-8 lg:p-0">
            <h4 className=" text-4xl font-semibold bg-blue-400 lg:w-56 p-4 text-center w-fit">
              New Arrival
            </h4>
            <p className="text-5xl font-bold text-gray-200 mt-8 mb-7 ">
              New Toys for Kids
            </p>
            <p className="text-gray-200 text-2xl font-semibold">
              Flat new offer to get <span className="font-bold"> 30%</span> off
              for new users
            </p>
            <div className="mt-8">
              <button className="flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none rounded-full">
                Shop Now
                <BsFillArrowRightCircleFill className="h-6 w-6 ml-3 text-white" />
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end bottom-5 lg:m-10  right-10">
            <a
              href="#slide3"
              className="btn btn-circle mr-10 bg-red-400 hover:bg-yellow-400 border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-red-400 hover:bg-yellow-400 border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#404258] to-[rgba(21, 21, 21, 0)] h-full w-full">
          <div className="text-white lg:ml-20 p-8 lg:p-0 ">
            <h4 className=" text-4xl font-semibold bg-blue-400 lg:w-56 p-4 text-center w-fit">
              New Arrival
            </h4>

            <p className="text-5xl font-bold text-gray-200 mt-8 mb-7 ">
              New Toys for Kids
            </p>
            <p className="text-gray-200 text-2xl font-semibold">
              Flat new offer to get <span className="font-bold"> 30%</span> off
              for new users
            </p>
            <div className="mt-8">
              <button className="flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none rounded-full">
                Shop Now{" "}
                <BsFillArrowRightCircleFill className="h-6 w-6 ml-3 text-white" />
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end bottom-5 lg:m-10   right-10 ">
            <a
              href="#slide1"
              className="btn btn-circle mr-10 bg-red-400 hover:bg-yellow-400 border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-red-400 hover:bg-yellow-400 border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#404258] to-[rgba(21, 21, 21, 0)] h-full w-full">
          <div className="text-white lg:ml-20 p-8 lg:p-0 ">
            <h4 className=" text-4xl font-semibold bg-blue-400 lg:w-56 p-4 text-center w-fit">
              New Arrival
            </h4>

            <p className="text-5xl font-bold text-gray-200 mt-8 mb-7 ">
              New Toys for Kids
            </p>
            <p className="text-gray-200 text-2xl font-semibold">
              Flat new offer to get <span className="font-bold"> 30%</span> off
              for new users
            </p>
            <div className="mt-8">
              <button className="flex items-center btn btn-error text-xl text-white hover:bg-yellow-400 border-none rounded-full">
                Shop Now{" "}
                <BsFillArrowRightCircleFill className="h-6 w-6 ml-3 text-white" />
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end bottom-5 lg:m-10   right-10 ">
            <a
              href="#slide2"
              className="btn btn-circle mr-10 bg-red-400 hover:bg-yellow-400 border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-red-400 hover:bg-yellow-400 border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
