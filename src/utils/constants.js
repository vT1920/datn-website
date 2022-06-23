import faceRedIcon from "../assets/images/ic-face-red.svg";
import faceOrangeIcon from "../assets/images/ic-face-orange.svg";
import faceYellowIcon from "../assets/images/ic-face-yellow.svg";
import faceGreenIcon from "../assets/images/ic-face-green.svg";
export const Status = {
	BAD: {
		color: "red",
		icon: faceRedIcon,
		text: "Không lành mạnh",
	},
	WARNING: {
		color: "orange",
		icon: faceOrangeIcon,
		text: "Không Lành Mạnh Cho Các Nhóm Nhạy Cảm",
	},
	MEDIUM: {
		color: "yellow",
		icon: faceYellowIcon,
		text: "Trung Bình",
	},
	GOOD: {
		color: "green",
		icon: faceGreenIcon,
		text: "Tốt",
	},
};
