import "./countryStates.scss";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/searchContext/searchContext";
import { selectCity } from "../../../context/searchContext/searchActions";
import { germanStates } from "../../../utils/germanStates";

export default function CountryStates() {
	const { dispatch, selectedArea } = useContext(SearchContext);

	return (
		<ul className="states" data-testid="statesList">
			{germanStates.map((state) => (
				<li
					data-testid="stateItem"
					className={`${state.state === selectedArea.state && `selected`}`}
					key={state.state}
					onClick={() => dispatch(selectCity(state))}
				>
					{state.state}
				</li>
			))}
		</ul>
	);
}
