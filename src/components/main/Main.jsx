import "./main.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext/searchContext";
import AirQualityCard from "../UI/airQualityCard/AirQualityCard";
import CountryStates from "../UI/CountryStates/CountryStates";

export default function Main() {
	const { apiData } = useContext(SearchContext);

	return (
		<div data-testid="main" className="main">
			<CountryStates />
			{apiData && <AirQualityCard />}
		</div>
	);
}
