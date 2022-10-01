import { FaBolt, FaCloudRain, FaCloudSun, FaSun, FaWind } from "react-icons/fa";
import { countryDetails } from "../../utils/countryDetails";
import PopularCities from "../UI/popularCities/PopularCities";
import "./topbar.scss";

export default function Topbar() {
	const homeHandler = () => {
		window.location.reload();
	};

	const screenWidth = window.innerWidth;
	console.log(screenWidth);

	return (
		<div data-testid="topbar" className="topbar">
			<div data-testid="left" className="left" onClick={homeHandler}>
				<FaWind className="icon" />
				<h1>{`Air Quality in ${countryDetails.countryName}`}</h1>
			</div>
			<div
				data-testid="mid"
				className={`mid ${screenWidth <= 390 && `mobile`}`}
			>
				<PopularCities />
			</div>
			<div data-testid="right" className="right"></div>
		</div>
	);
}
