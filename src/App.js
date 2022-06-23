import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import Overview from "components/Overview";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Status } from "utils/constants";
import "./App.css";
import "./assets/styles/style.scss";
import { dummyData, dummyData2 } from "./utils/data";
import { db } from "./utils/firebase";
import {
	getArrayByKey,
	getData,
	getOptions,
	groupArray,
	toArray,
} from "./utils/helpers";

function App() {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	// console.log(dummyData);
	const [data, setData] = useState();

	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();

			const temp = toArray(data.node.n1);
			setData(temp);
		});
	}, []);

	const node = [];
	// console.log("===================================");

	// console.log("-----------------1----------------");

	// for (const element of Object.entries(dummyData.node)) {
	// 	// console.log("key: ", element[0]);
	// 	node.push(element[1]);
	// }
	// console.log("-----------------2----------------");
	// console.log("object1: ", { ...node[0] });

	// const co2Arr = getArrayByKey("CO2", { ...node[0] });
	// const dArr = getArrayByKey("D", { ...node[0] });
	// const hArr = getArrayByKey("H", { ...node[0] });
	// const tArr = getArrayByKey("T", { ...node[0] });
	// const uvArr = getArrayByKey("UV", { ...node[0] });
	// console.log("co2Arr: ", co2Arr);
	// console.log("dArr: ", dArr);
	// console.log("hArr: ", hArr);
	// console.log("tArr: ", tArr);
	// console.log("uvArr: ", uvArr);

	const node2 = [];
	// console.log("===================================");

	// console.log("-----------------1----------------");

	// for (const element of Object.entries(dummyData2.node)) {
	// 	// console.log("key: ", element[0]);
	// 	node2.push(element[1]);
	// }

	// const test = calculateAverage(node2[0]["n0-0"], "n0-0");
	const test2 = groupArray(data);
	// console.log("object2: ", test2);
	console.log("object2: ", node2[0]);

	// console.log("===================");

	// const co2Arr = getArrayByKey("CO2", test2);
	const coArr = getArrayByKey("CO", test2);
	const dArr = getArrayByKey("D", test2);
	const d10Arr = getArrayByKey("D10", test2);
	const hArr = getArrayByKey("H", test2);
	const tArr = getArrayByKey("T", test2);
	const uvArr = getArrayByKey("UV", test2);

	const listData = [
		{
			property: "PM2.5",
			data: dArr,
			borderColor: "rgba(54, 162, 235, 1)",
			backgroundColor: "rgba(54, 162, 235, 0.5)",
		},
		{
			property: "PM10",
			data: d10Arr,
			borderColor: "rgba(54, 162, 235, 1)",
			backgroundColor: "rgba(54, 162, 235, 0.5)",
		},
		{
			property: "CO",
			data: coArr,
			borderColor: "rgba(255, 99, 132, 1)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			property: "Nhiệt độ",
			data: tArr,
			borderColor: "rgba(75, 192, 192, 1)",
			backgroundColor: "rgba(75, 192, 192, 0.5)",
		},
		{
			property: "Độ ẩm",
			data: hArr,
			borderColor: "rgba(255, 206, 86, 1)",
			backgroundColor: "rgba(255, 206, 86, 0.5)",
		},
		
		{
			property: "UV",
			data: uvArr,
			borderColor: "rgba(153, 102, 255, 1)",
			backgroundColor: "rgba(153, 102, 255, 0.5)",
		},
	];
	return (
		<div
			className="App"
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			<div className="summary"></div>
			<Overview status={Status.GOOD} value={44} />

			{listData.map((ele, index) => (
				<div style={{ width: "40%" }} key={index}>
					<Line
						options={getOptions(ele.property)}
						data={getData(
							ele.property,
							ele.data,
							ele.borderColor,
							ele.backgroundColor
						)}
						
					/>
				</div>
			))}
		</div>
	);
}

export default App;
