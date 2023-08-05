import React from "react";
import offers from "../../../assets/images/Offers/offers.jpg";
import offer1 from "../../../assets/images/Offers/offer1.jpg";

const SpacialOffers = () => {
  return (
    <div className="lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
        <div className="col-span-2 flex flex-col items-center justify-center">
          <h1 className="lg:text-6xl text-4xl font-semibold text-gray-600">
            Spacial Offers
          </h1>
          <p className="mt-5 text-gray-500 lg:text-xl lg:px-20">
            Thank you for choosing Toy Sparkle as your preferred destination for
            all things fun and fantastic! We look forward to being a part of
            your child's joyful journey of play and exploration. Let the magic
            begin!
          </p>
          <div className="form-control mt-10">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered border-red-400 outline-none w-72"
              />
              <button className="btn btn-square btn-error text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Offers */}
          <div className=" lg:flex flex-row lg:px-10 mt-10">
            <img src={offer1} alt="" className="lg:w-40 rounded-xl" />
            <p className="ml-5 mt-5 lg:mt-0 text-gray-500">
              Explore our enchanting aisles and discover a plethora of toys for
              all ages - from cuddly plushies and action figures to challenging
              puzzles and engaging board games. We take pride in curating a
              collection that not only entertains but also inspires learning and
              development.
            </p>
          </div>
        </div>
        <div>
          <img
            src={offers}
            alt=""
            className="opacity-80 rounded-xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SpacialOffers;
