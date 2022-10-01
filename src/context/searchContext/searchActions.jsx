export const fetchingSuccess = (data) => ({
	type: "FETCHING_SUCCESS",
	payload: data,
});

export const fetchingFailure = (error) => ({
	type: "FETCHING_FAILURE",
	payload: error,
});

export const selectCity = (data) => ({
	type: "SELECT_CITY",
	payload: data,
});

export const selectLocation = (data) => ({
	type: "SELECT_LOCATION",
	payload: data,
});
