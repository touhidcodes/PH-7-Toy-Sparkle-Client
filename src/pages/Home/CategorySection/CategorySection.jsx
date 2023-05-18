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
			<Tabs>
				<TabList>
					<Tab>
						<h4 className='text-2xl font-semibold text-blue-400'>
							Regular Car
						</h4>
					</Tab>
					<Tab>
						<h4 className='text-2xl font-semibold text-red-400'>Sports Car</h4>
					</Tab>
					<Tab>
						<h4 className='text-2xl font-semibold text-[#4acdd5]'>Truck</h4>
					</Tab>
				</TabList>

				<TabPanel>
					<div className="grid grid-cols-3 gap-10 p-10">
						{regularCarData.slice(0, 3).map((car) => (
							<TabsCard key={car._id} car={car} />
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 3</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default CategorySection;
