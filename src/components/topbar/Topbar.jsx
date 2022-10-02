import { FaBolt, FaCloudRain, FaCloudSun, FaSun, FaWind } from "react-icons/fa";
import { countryDetails } from "../../utils/countryDetails";
import "./topbar.scss";

export default function Topbar() {
	return (
		<div data-testid="topbar" className="topbar">
			<div className="left" onClick={() => window.location.reload()}>
				<FaWind className="icon" />
				<h1>{`Air Quality in ${countryDetails.countryName}`}</h1>
			</div>
		</div>
	);
}
