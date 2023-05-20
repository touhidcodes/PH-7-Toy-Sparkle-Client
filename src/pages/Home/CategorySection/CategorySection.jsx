import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabsCard from "../TabsCard/TabsCard";

const CategorySection = ({ toys }) => {
	const regularCarData = toys.filter((toy) => toy.category === "regular_car");
	const sportsCarData = toys.filter((toy) => toy.category === "sports_car");
	const trucksData = toys.filter((toy) => toy.category === "truck");

	return (
		<div className='mt-20'>
			<div className='text-center mb-5'>
				<h1 className='text-3xl font-semibold'>Shop Toys By Category</h1>
				<p className='text-[#4acdd5] font-semibold mt-1'>
					Category of Car Toys
				</p>
			</div>
			<Tabs>
				<TabList>
					<Tab>
						<h4 className='lg:text-2xl font-semibold text-blue-400'>
							Regular Car
						</h4>
					</Tab>
					<Tab>
						<h4 className='lg:text-2xl font-semibold text-red-400'>
							Sports Car
						</h4>
					</Tab>
					<Tab>
						<h4 className='lg:text-2xl font-semibold text-[#4acdd5]'>Truck</h4>
					</Tab>
				</TabList>
				<div className='bg-base-200 rounded-xl'>
					<TabPanel>
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-10 px-4'>
							{regularCarData.slice(0, 3).map((car) => (
								<TabsCard key={car._id} car={car} />
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-10 px-4'>
							{sportsCarData.slice(0, 3).map((car) => (
								<TabsCard key={car._id} car={car} />
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-10 px-4'>
							{trucksData.slice(0, 3).map((car) => (
								<TabsCard key={car._id} car={car} />
							))}
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</div>
	);
};

export default CategorySection;
