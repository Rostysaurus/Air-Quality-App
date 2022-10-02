import React, { useContext } from "react";
import Plot from "react-plotly.js";
import { SearchContext } from "../../../context/searchContext/searchContext";
import { convertDate } from "../../../utils/convertDate";

export default function Graph() {
	const { locationData } = useContext(SearchContext);

	return (
		<Plot
			className="graph"
			data={[
				{
					x: locationData?.parameters,
					y: locationData?.values,
					type: "bar",
					text: locationData?.units,
				},
			]}
			layout={{
				title: `Air quality in ${locationData?.area} / ${
					locationData?.location
				}. Collected on ${convertDate(locationData.date)}`,
			}}
		/>
	);
}
