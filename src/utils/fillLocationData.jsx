import { mapOverData } from "./mapFunction";

export const fillLocationData = (apiData, selectedLocation) => {
	const { results } = apiData;
	const filteredLocationEntireData = results?.find(
		(result) => result.location === selectedLocation
	);
	const measurements = filteredLocationEntireData?.measurements;
	const { city, location } = filteredLocationEntireData;
	const parameters = mapOverData(measurements, "parameter");
	const values = mapOverData(measurements, "value");
	const units = mapOverData(measurements, "unit");

	return {
		area: city,
		location: location,
		parameters: parameters,
		values: values,
		units: units,
	};
};
