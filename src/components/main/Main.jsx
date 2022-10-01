import "./main.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext/searchContext";
import AirQualityCard from "../UI/airQualityCard/AirQualityCard";

export default function Main() {
	const { apiData } = useContext(SearchContext);

	return (
		<div data-testid="main" className="main">
			{apiData && <AirQualityCard />}
		</div>
	);
}
