import "./map.scss";
import Plot from "react-plotly.js";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../../../context/searchContext/searchContext";
import { germanStates } from "../../../../utils/germanStates";
import {
	selectCity,
	selectLocation,
} from "../../../../context/searchContext/searchActions";

export default function Map() {
	const { selectedArea, areaData, locationData, selectedLocation, dispatch } =
		useContext(SearchContext);

	const [mapBox, setMapBox] = useState({});
	const [dataBox, setDataBox] = useState({});

	//state objects data
	const allStates = germanStates.map((state) => state.state);
	const allLats = germanStates.map((state) => state.lat);
	const allLons = germanStates.map((state) => state.lon);

	console.log(selectedArea);

	useEffect(() => {
		setMapBox({
			style: "dark",
			center: {
				lat: selectedArea.lat && selectedArea.lat,
				lon: selectedArea.lon && selectedArea.lon,
			},
			zoom: 5,
			accesstoken: process.env.REACT_APP_KEY_MAPBOX_TOKEN,
		});
		setDataBox({
			type: "scattermapbox",
			text: areaData.locations,
			lon: areaData.longitude,
			lat: areaData.latitude,
			marker: { color: "fuchsia", size: 10 },
		});
	}, [selectedArea]);

	return (
		<div className="container">
			<Plot
				className="map"
				data={[
					{
						type: "scattermapbox",
						text:
							selectedArea?.state === "All" ? allStates : areaData.locations,
						lon: selectedArea?.state === "All" ? allLons : areaData.longitude,
						lat: selectedArea?.state === "All" ? allLats : areaData.latitude,
						marker: { color: "fuchsia", size: 10 },
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
										germanStates.find(
											(state) => state.state === e.points[0].text
										)
									)
								)
						: (e) => dispatch(selectLocation(e.points[0].text))
				}
			/>
			{selectedLocation && (
				<Plot
					className="chart"
					data={[
						{
							x: locationData?.parameters,
							y: locationData?.values,
							type: "bar",
							text: locationData?.units,
						},
					]}
					layout={{
						title: `Air quality in ${locationData?.area} / ${locationData?.location}`,
					}}
				/>
			)}
		</div>
	);
}
