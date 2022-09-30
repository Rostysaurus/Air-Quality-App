import { capitalize } from "../../utils/capitalize";
import { fetchingFailure, fetchingSuccess } from "./searchActions";

export const searchCityForecast = async (
	dispatch,
	cityInput,
	languageInput
) => {
	const aqUrl = `https://api.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=de&city=${capitalize(
		cityInput.state
	)}&order_by=lastUpdated&dumpRaw=false`;

	const res = await fetch(aqUrl);
	const data = await res.json();

	if (!res.ok) {
		dispatch(fetchingFailure(data.error));
	}

	if (res.ok) {
		dispatch(fetchingSuccess(data));
	}
};
