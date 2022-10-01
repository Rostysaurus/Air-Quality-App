import { createContext, useReducer, useEffect, useMemo } from "react";
import { searchCityForecast } from "./apiCalls";
import { selectLocation } from "./searchActions";
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
	},
};

export const SearchContext = createContext(INITIAL_STATE);

export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

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
