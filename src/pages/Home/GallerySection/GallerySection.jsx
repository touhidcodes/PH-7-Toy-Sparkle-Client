import React from "react";
import img1 from "../../../assets/images/Gallery/gallery_1.jpg";
import img2 from "../../../assets/images/Gallery/gallery_2.jpg";
import img3 from "../../../assets/images/Gallery/gallery_3.jpg";
import img4 from "../../../assets/images/Gallery/gallery_4.jpg";

const GallerySection = () => {
	return (
		<div className='mt-20'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Recent Photoshoots</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>Check Gallery</p>
			</div>
			<div className='grid grid-cols-4 gap-10 mt-10 items-center'>
				<div className=''>
					<img src={img1} alt='' className='rounded-xl w-full h-72' />
				</div>
				<div className=''>
					<img src={img2} alt='' className='rounded-xl w-full h-96' />
				</div>
				<div className=''>
					<img src={img3} alt='' className='rounded-xl w-full h-72' />
				</div>
				<div className=''>
					<img src={img4} alt='' className='rounded-xl w-full h-96' />
				</div>
			</div>
		</div>
	);
};

export default GallerySection;
