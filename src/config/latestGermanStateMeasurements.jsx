import { capitalize } from "../utils/capitalize";

export const latestGermanStateMeasurements = (stateName) =>
	`https://api.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=de&city=${capitalize(
		stateName
	)}&order_by=lastUpdated&dumpRaw=false`;
