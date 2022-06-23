import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = () => {
	const data = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 0, 0, 0, 0],
				backgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
			},
		],
	};
	return (
		<div style={{ height: "500px" }}>
			<Doughnut
				data={data}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					// defaults .global.legend.position = "bottom"
				}}
			/>
		</div>
	);
};

export default Chart;
