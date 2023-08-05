import React from "react";
import img1 from "../../../assets/images/Gallery/gallery_1.jpg";
import img2 from "../../../assets/images/Gallery/gallery_2.jpg";
import img3 from "../../../assets/images/Gallery/gallery_3.jpg";
import img4 from "../../../assets/images/Gallery/gallery_4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GallerySection = () => {
  return (
    <div className="lg:mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Our Photo Gallery</h1>
        <p className="text-[#4acdd5] font-semibold mt-1">Recent Photoshots</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10 px-5 lg:px-0 items-center ">
        <div className="" data-aos="flip-left" data-aos-duration="1000">
          <img src={img1} alt="" className="rounded-xl w-full h-72" />
        </div>
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <img src={img2} alt="" className="rounded-xl w-full h-96" />
        </div>
        <div className="" data-aos="flip-right" data-aos-duration="1000">
          <img src={img3} alt="" className="rounded-xl w-full h-72" />
        </div>
        <div className="" data-aos="fade-down" data-aos-duration="1000">
          <img src={img4} alt="" className="rounded-xl w-full h-96" />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
