import Plot from "react-plotly.js";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../../context/searchContext/searchContext";
import { germanStates } from "../../../utils/germanStates";
import {
	selectCity,
	selectLocation,
} from "../../../context/searchContext/searchActions";

export default function Map() {
	const { selectedArea, areaData, dispatch } = useContext(SearchContext);
	const [mapBox, setMapBox] = useState({});

	//state objects data
	const allStates = germanStates.map((state) => state.state);
	const allLats = germanStates.map((state) => state.lat);
	const allLons = germanStates.map((state) => state.lon);

	useEffect(() => {
		setMapBox({
			style: "dark",
			center: {
				lat: selectedArea.lat && selectedArea.lat,
				lon: selectedArea.lon && selectedArea.lon,
			},
			zoom: selectedArea?.state === "All" ? 4.5 : 7,
			accesstoken: process.env.REACT_APP_KEY_MAPBOX_TOKEN,
		});
	}, [selectedArea]);

	return (
		<Plot
			className="map"
			data={[
				{
					type: "scattermapbox",
					text: selectedArea?.state === "All" ? allStates : areaData.locations,
					lon: selectedArea?.state === "All" ? allLons : areaData.longitude,
					lat: selectedArea?.state === "All" ? allLats : areaData.latitude,
					marker: {
						color: "#2877b8",
						size: selectedArea?.state === "All" ? 25 : 10,
					},
				},
			]}
			layout={{
				clickmode: "event+select",
				dragmode: "zoom",
				mapbox: mapBox,
				margin: { r: 0, t: 0, b: 0, l: 0 },
				newselection: "immediate",
			}}
			onClick={
				selectedArea?.state === "All"
					? (e) =>
							dispatch(
								selectCity(
									germanStates.find((state) => state.state === e.points[0].text)
								)
							)
					: (e) => dispatch(selectLocation(e.points[0].text))
			}
		/>
	);
}
