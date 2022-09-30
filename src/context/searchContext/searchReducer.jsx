const SearchReducer = (state, action) => {
	switch (action.type) {
		case "FETCHING_SUCCESS":
			return {
				...state,
				weatherData: action.payload,
				selectedCity: state.selectedCity,
				error: false,
				errorMessage: "",
			};
		case "FETCHING_FAILURE":
			return {
				...state,
				error: true,
				errorMessage: action.payload,
			};
		case "SELECT_CITY":
			return {
				...state,
				selectedCity: action.payload,
			};
		case "SELECT_LANGUAGE":
			return {
				...state,
				selectedLanguage: action.payload,
			};
		default:
			return state;
	}
};

export default SearchReducer;
