import "./main.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext/searchContext";
import SearchForm from "../UI/searchForm/SearchForm";
import WeatherCard from "../UI/weatherCard/WeatherCard";

export default function Main() {
	const { weatherData } = useContext(SearchContext);
	// const { results } = weatherData;
	// console.log(results);

	return (
		<div data-testid="main" className="main">
			{/* <SearchForm /> */}
			{weatherData && <WeatherCard />}
		</div>
	);
}
