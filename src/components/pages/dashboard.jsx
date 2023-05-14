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
} from 'recharts';
import Quests from '../quests/quests';

const MonthlyElectricityBillChart = () => {
	// Sample data for the monthly electricity bill
	const data = [
		{ month: 'Jan', bill: 100 },
		{ month: 'Feb', bill: 120 },
		{ month: 'Mar', bill: 90 },
		{ month: 'Apr', bill: 110 },
		{ month: 'May', bill: 95 },
		{ month: 'Jun', bill: 130 },
		{ month: 'Jul', bill: 105 },
		{ month: 'Aug', bill: 115 },
		{ month: 'Sep', bill: 90 },
		{ month: 'Oct', bill: 120 },
		{ month: 'Nov', bill: 100 },
		{ month: 'Dec', bill: 110 },
	];

	return (
		<ResponsiveContainer width='100%' height={400}>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='month' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type='monotone'
					dataKey='bill'
					stroke='#8884d8'
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

const Dashboard = () => {
	return (
		<div className='flex flex-col w-full max-h-screen overflow-auto'>
			<div className='h-1/2 m-8'>
				<div className='m-auto'>
					<MonthlyElectricityBillChart />
				</div>
			</div>
			<div className='flex h-1/2'>
				<div className='flex-grow rounded-lg w-1/3 overflow-auto'>
					<Quests />
				</div>
				<div className='flex-grow bg-gray-400 w-1/3'>Element 2</div>
				<div className='flex-grow bg-gray-500 w-1/3'>Element 3</div>
			</div>
		</div>
	);
};

export default Dashboard;
