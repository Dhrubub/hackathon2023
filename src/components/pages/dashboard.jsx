import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Area,
	AreaChart,
} from 'recharts';
import Quests from '../quests/quests';
import Leaderboard from '../leaderboard/leaderboard';

const MonthlyElectricityBillChart = () => {
	// Sample data for the monthly electricity bill
	const data = [
		{ month: 'Jan', 'Monthly Energy Consumption (kWh)': 1100 },
		{ month: 'Feb', 'Monthly Energy Consumption (kWh)': 1050 },
		{ month: 'Mar', 'Monthly Energy Consumption (kWh)': 850 },
		{ month: 'Apr', 'Monthly Energy Consumption (kWh)': 950 },
		{ month: 'May', 'Monthly Energy Consumption (kWh)': 1050 },
		{ month: 'Jun', 'Monthly Energy Consumption (kWh)': 1000 },
		{ month: 'Jul', 'Monthly Energy Consumption (kWh)': 1100 },
		{ month: 'Aug', 'Monthly Energy Consumption (kWh)': 950 },
		{ month: 'Sep', 'Monthly Energy Consumption (kWh)': 900 },
		{ month: 'Oct', 'Monthly Energy Consumption (kWh)': 900 },
		{ month: 'Nov', 'Monthly Energy Consumption (kWh)': 1100 },
		{ month: 'Dec', 'Monthly Energy Consumption (kWh)': 1150 },
	];

	const data2 = [
		{ month: 'Jan', 'Monthly Energy Consumption (kWh)': 880 },
		{ month: 'Feb', 'Monthly Energy Consumption (kWh)': 840 },
		{ month: 'Mar', 'Monthly Energy Consumption (kWh)': 680 },
		{ month: 'Apr', 'Monthly Energy Consumption (kWh)': 760 },
		{ month: 'May', 'Monthly Energy Consumption (kWh)': 840 },
		{ month: 'Jun', 'Monthly Energy Consumption (kWh)': 800 },
		{ month: 'Jul', 'Monthly Energy Consumption (kWh)': 880 },
		{ month: 'Aug', 'Monthly Energy Consumption (kWh)': 760 },
		{ month: 'Sep', 'Monthly Energy Consumption (kWh)': 720 },
		{ month: 'Oct', 'Monthly Energy Consumption (kWh)': 720 },
		{ month: 'Nov', 'Monthly Energy Consumption (kWh)': 880 },
		{ month: 'Dec', 'Monthly Energy Consumption (kWh)': 920 },
	];

	const RED = '#f76a6a';
	const GREEN = '#21C55D';

	return (
		<ResponsiveContainer width='100%' height={400}>
			<AreaChart data={data2}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='month' />
				<YAxis />
				<Tooltip />
				{/* <Legend /> */}
				<defs>
					<linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor={GREEN} stopOpacity={0.8} />
						<stop offset='95%' stopColor={GREEN} stopOpacity={0} />
					</linearGradient>
				</defs>
				<Area
					type='monotone'
					dataKey='Monthly Energy Consumption (kWh)'
					stroke={GREEN}
					fill='url(#gradient)'
				/>
				<Line
					type='monotone'
					dataKey='Monthly Energy Consumption (kWh)'
					stroke={GREEN}
					activeDot={{ r: 8 }}
				/>
				<defs>
					<linearGradient id='gradient2' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor={RED} stopOpacity={0.8} />
						<stop offset='65%' stopColor={RED} stopOpacity={0} />
					</linearGradient>
				</defs>
				<Area
					type='monotone'
					data={data}
					dataKey='Monthly Energy Consumption (kWh)'
					stroke={RED}
					fill='url(#gradient2)'
				/>
				<Line
					type='monotone'
					data={data}
					dataKey='Monthly Energy Consumption (kWh)'
					stroke={RED}
					activeDot={{ r: 8 }}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

const Dashboard = () => {
	return (
		<div className='flex flex-col w-full max-h-screen overflow-auto'>
			<div className='h-1/2 mx-4 mb-12'>
				<div className='m-auto shadow-md rounded-lg bg-gray-50 p-2'>
					<MonthlyElectricityBillChart />
				</div>
			</div>
			<div className='flex h-1/2 mt-8'>
				<div className='flex-grow bg-gray-50 rounded-lg w-1/2 overflow-auto shadow-md m-4'>
					<Quests />
				</div>
				<div className='flex-grow bg-gray-50 w-1/2 m-4 rounded-lg'>
					<Leaderboard />
				</div>
				{/* <div className='flex-grow bg-gray-500 w-1/3 m-4 rounded-lg'>
					Element 3
				</div> */}
			</div>
		</div>
	);
};

export default Dashboard;
