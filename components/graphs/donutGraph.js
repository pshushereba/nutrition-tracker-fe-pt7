import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DonutGraph = (props) => {
		// Get props from Parent
	

	const donutVal = (goal, progress) =>
	{
		
		// Convert fetched Goals and Current Vals into format necessary to use donut chart as progress meter, should always total 100

		const percent = progress/goal
		const donutProgress = percent * 100
		const donutGoal = 100 - (percent * 100)

		return [donutGoal, donutProgress]
	}

	const [goal, progress] = donutVal(props.userGoal || 2500, props.currVal ||600)


		
	const donutData = {
		// This Defines the Donut, everything is in series, ie the first property under 'labels' will be defined by the first 'data' element and displayed ith the first 'backGroundColor'

		// This displays on the legend and tooltips
		labels: [
			'Goal',
			'Progress'
				],

		// Data values, colors, and color on hover defined
		datasets: [{
			data: [goal, progress],
			backgroundColor: [
			props.goalColor || '#FE42B3',
			props.currColor || '#8D4CFF'
			],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB'
		]
	}],
}
    return (
      <div>
        <Doughnut data={donutData} />
      </div>
    )
};

  export default DonutGraph;
