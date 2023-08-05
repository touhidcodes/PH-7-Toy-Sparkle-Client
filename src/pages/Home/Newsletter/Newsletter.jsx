import React from "react";

const Newsletter = () => {
  return (
    <div className="mt-20">
      <div className="bg-gray-100 p-10 lg:p-15 flex flex-col items-center">
        <h1 className="text-3xl lg:text-5xl text-gray-600">
          Join Our Email List for Get More Update
        </h1>
        <div className="form-control mt-10">
          <label className="input-group">
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered "
            />
            <span className="btn btn-error text-white">Subscribe</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
