import { createContext, useReducer, useEffect } from "react";
import { searchCityForecast } from "./apiCalls";
import SearchReducer from "./searchReducer";

const INITIAL_STATE = {
	weatherData: [],
	error: false,
	errorMessage: "",
	selectedCity: {},
	selectedLanguage: "en",
};

export const SearchContext = createContext(INITIAL_STATE);

export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

	useEffect(() => {
		searchCityForecast(dispatch, state.selectedCity, state.selectedLanguage);
	}, [state.selectedCity, state.selectedLanguage]);

	return (
		<SearchContext.Provider
			value={{
				weatherData: state.weatherData,
				error: state.error,
				errorMessage: state.errorMessage,
				selectedCity: state.selectedCity,
				selectedLanguage: state.selectedLanguage,
				dispatch,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
