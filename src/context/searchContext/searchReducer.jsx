import { fillAreaData } from "../../utils/fillAreaData";
import { fillLocationData } from "../../utils/fillLocationData";

const SearchReducer = (state, action) => {
	switch (action.type) {
		case "FETCHING_SUCCESS":
			return {
				...state,
				apiData: action.payload,
				selectedArea: state.selectedArea,
				areaData: fillAreaData(action.payload),
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
				selectedArea: action.payload,
			};
		case "SELECT_LOCATION":
			return {
				...state,
				selectedLocation: action.payload,
				locationData: fillLocationData(state.apiData, action.payload),
			};
		default:
			return state;
	}
};

export default SearchReducer;
