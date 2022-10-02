export const convertDate = (date) => {
	return new Date(date).toLocaleDateString(`en-GB`, {
		month: "short",
		day: "numeric",
		weekday: "long",
		year: "numeric",
	});
};
