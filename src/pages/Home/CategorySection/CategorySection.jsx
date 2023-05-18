import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategorySection = ({ toys }) => {
	
	
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
					<h2 className='border-2 border-black mt-0'>Any content 1</h2>
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
