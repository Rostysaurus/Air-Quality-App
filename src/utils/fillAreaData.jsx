import { mapOverData } from "./mapFunction";

export const fillAreaData = (apiData) => {
	const { results } = apiData;
	const coordinates = mapOverData(results, "coordinates");
	const locations = mapOverData(results, "location");
	const longitude = mapOverData(coordinates, "longitude");
	const latitude = mapOverData(coordinates, "latitude");
	return {
		coordinates: coordinates,
		locations: locations,
		longitude: longitude,
		latitude: latitude,
	};
};
