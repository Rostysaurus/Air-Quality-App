import { createContext, useReducer, useEffect, useMemo } from "react";
import { germanStates } from "../../utils/germanStates";
import { searchCityForecast } from "./apiCalls";
import { selectCity } from "./searchActions";

import SearchReducer from "./searchReducer";

const INITIAL_STATE = {
	apiData: [],
	error: false,
	errorMessage: "",
	selectedArea: { state: "", lat: Number, lon: Number },
	selectedLocation: "",
	areaData: {
		coordinates: [],
		locations: [],
		longitude: [],
		latitude: [],
	},
	locationData: {
		area: "",
		location: "",
		parameters: [],
		values: [],
		units: [],
		date: "",
	},
};

export const SearchContext = createContext(INITIAL_STATE);

export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

	useEffect(() => {
		const { state, lat, lon } = germanStates.find((s) => s.state === "All");
		dispatch(
			selectCity({
				state,
				lat,
				lon,
			})
		);
	}, []);

	useMemo(() => {
		searchCityForecast(dispatch, state.selectedArea);
	}, [state.selectedArea]);

	return (
		<SearchContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
