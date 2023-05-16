import React, { useState } from 'react';
import QuestItem from './questitem';

const Quests = () => {
	const [quests, setQuests] = useState([
		'Take public transportation instead of driving for a week',
		'Turn off all electronics for an hour and spend time outside',
		'Use reusable shopping bags for a month',
		'Use a green web hosting provider for your website',
		'Take a shorter shower than usual',
		// 'Participate in a neighborhood clean-up',
		// 'Switch to LED light bulbs',
		// 'Unplug electronics when not in use',
		// 'Use a reusable water bottle for a month',
		// 'Switch to a green energy provider',
		// 'Use energy-efficient curtains or blinds to reduce heat loss in winter',
		// 'Reduce water consumption by taking shorter showers or installing low-flow showerheads',
		// 'Start composting food scraps',
		// 'Switch to a more energy-efficient appliance',
		// "Don't use the clothes dryer for a week",
		// 'Participate in a local recycling program',
		// 'Switch to a hybrid or electric vehicle',
		// 'Use a reusable coffee cup instead of disposable cups',
		// 'Reduce plastic waste by using a refillable dispenser for soap, shampoo, etc.',
		// 'Walk or bike to work/school instead of driving',
		// 'Use a smart thermostat to regulate home temperature',
		// 'Cook with a pressure cooker to save energy',
		// 'Use natural light instead of artificial light during the day',
		// 'Attend a sustainability workshop or event',
		// 'Create a compost bin for your backyard or community garden',
		// 'Use a solar charger to charge electronic devices',
		// 'Use a fan instead of air conditioning when possible',
		// 'Use a clothesline instead of a dryer to dry clothes',
	]);

	const completeQuest = (data) => {
		console.log(data);
		setQuests((prev) => {
			const quests = prev.filter((p) => p !== data);
			return quests;
		});
	};

	return (
		<ul className='overflow-y-auto w-full'>
			{quests.length ? (
				<>
					<li className='text-gray-500'>Your current quests</li>
					{quests.map((q, id) => (
						<QuestItem
							key={id}
							description={q}
							onComplete={() => completeQuest(q)}
						/>
					))}
				</>
			) : (
				<li className='text-gray-500'>All quests completed!</li>
			)}
		</ul>
	);
};

export default Quests;
