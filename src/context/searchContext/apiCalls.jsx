import { latestGermanStateMeasurements } from "../../config/latestGermanStateMeasurements";
import { fetchingFailure, fetchingSuccess } from "./searchActions";

export const searchCityForecast = async (dispatch, cityInput) => {
	const aqUrl = latestGermanStateMeasurements(cityInput.state);

	const res = await fetch(aqUrl);
	const data = await res.json();

	if (!res.ok) {
		dispatch(fetchingFailure(data.error));
	}

	if (res.ok) {
		dispatch(fetchingSuccess(data));
	}
};
