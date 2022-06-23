export const getArrayByKey = (keyStr, object) => {
	// console.log("object: ", object);
	const arr = new Array(24).fill(0);
	// Remove first field
	// delete object[Object.keys(object)[0]];

	for (const [key, value] of Object.entries(object)) {
		const index = key.split("-")[1];
		if (value?.[keyStr]) {
			arr[index] = value[keyStr];
		}
	}

	return arr;
};

export const getOptions = (
	text = "",
	display = true,
	position = "top",
	responsive = true,
) => {
	return {
		responsive,
		plugins: {
			legend: {
				position,
			},
			title: {
				display,
				text,
			},
		},
	};
};

const labels = Array(24)
	.fill()
	.map((_, i) => i);

const getLabels = () => {};

export const getData = (
	label = "",
	data,
	borderColor = "rgb(53, 162, 235)",
	backgroundColor = "rgba(53, 162, 235, 0.5)"
) => {
	return {
		labels,
		datasets: [
			{
				label,
				data,
				borderColor,
				backgroundColor,
			},
		],
		scales: {
			x: [
				{
					display: true,
					title: {
						display: true,
						text: "Hour",
						color: "#911",
					},
				},
			],
			y: [
				{
					display: true,
					title: {
						display: true,
						text: "ug/m3",
						color: "#191",
					},
				},
			],
		},
	};
};

const calculateAverageByKey = (arr = [], key) => {
	const temp = [];
	arr.map((ele) => temp.push(ele[key]));

	const sum = temp.reduce((acc, cur) => acc + cur);
	const average = sum / temp.length;

	return average;
};

export const calculateAverage = (arr = [], property) => {
	const temp = {};
	// console.log("vcalculateAverage: ", arr);
	const listKey = Object.keys(arr[0]);
	for (const key of listKey) {
		temp[key] = calculateAverageByKey(arr, key);
	}

	return { [property]: temp };
};

export const groupArray = (arr = []) => {
	const obj = {};
	const listKey = Object.keys(arr);
	for (const key of listKey) {
		const temp = calculateAverage(arr[key], key);
		obj[key] = { ...temp[key] };
	}
	return obj;
};
export const toArray = (dataObj) => {
	const obj = {};
	const listKey = Object.keys(dataObj);
	console.log(listKey);
	for (const key of listKey) {
		const temp = [];
		for (const element of Object.entries(dataObj[key])) {
			temp.push(element[1]);
		}
		obj[key] = temp;
	}
	return obj;
};
