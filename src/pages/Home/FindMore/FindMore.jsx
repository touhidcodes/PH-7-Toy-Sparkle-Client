import React from "react";

const FindMore = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 bg-gray-100 lg:grid-cols-4 p-10 lg:p-16 rounded-sm">
        <div className="col-span-3 lg:pr-20 flex flex-col justify-center text-center lg:text-start">
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-700">
            How To Buy a Toy from Toy Sparkle
          </h1>
          <p className="mt-5 text-gray-900 lg:text-xl">
            At Toy Sparkle, we are dedicated to bringing joy and wonder into the
            lives of children and families through our wide selection of toys
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="btn btn-error text-white mt-5 w-60 text-xl">
            Find Out More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindMore;
