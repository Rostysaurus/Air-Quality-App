import "./popularCities.scss";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/searchContext/searchContext";
import { selectCity } from "../../../context/searchContext/searchActions";
import { germanStates } from "../../../utils/germanStates";

export default function PopularCities() {
	const { dispatch, selectedCity } = useContext(SearchContext);
	const popularCities = ["Berlin", "Hamburg", "Bayern", "Nordrhein-Westfalen"];

	useEffect(() => {
		dispatch(
			selectCity({
				state: "All",
				lat: 51.1638175,
				lon: 10.4478313,
			})
		);
	}, []);

	return (
		<ul className="cities">
			{germanStates.map((state, index) => (
				<li
					className={`${state === selectedCity ? `selected` : null}`}
					key={index}
					onClick={() => dispatch(selectCity(state))}
				>
					{state.state}
				</li>
			))}
		</ul>
	);
}
