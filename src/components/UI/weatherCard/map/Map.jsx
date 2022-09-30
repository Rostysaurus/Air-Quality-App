import "./map.scss";
import Plot from "react-plotly.js";
import { useContext } from "react";
import { SearchContext } from "../../../../context/searchContext/searchContext";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { germanStates } from "../../../../utils/germanStates";
import { selectCity } from "../../../../context/searchContext/searchActions";

export default function Map() {
	const { weatherData, selectedCity, dispatch } = useContext(SearchContext);
	// let [measurements, setMeasurements] = useState([]);
	const [mapBox, setMapBox] = useState({});
	const [dataBox, setDataBox] = useState({});
	const [selectedLocation, setSelectedLocation] = useState("");

	const { results } = weatherData;
	const coordinates = results?.map((result) => result.coordinates);
	const measurements = results?.map((result) => result.measurements);
	const locations = results?.map((result) => result.location);
	const latitude = coordinates?.map((coordinate) => coordinate.latitude);
	const longitude = coordinates?.map((coordinate) => coordinate.longitude);
	const allStates = germanStates.map((state) => state.state);
	const allLats = germanStates.map((state) => state.lat);
	const allLons = germanStates.map((state) => state.lon);

	const filteredMesurements = results?.find(
		(result) => result.location === selectedLocation
	);

	// const parameters = filteredMesurements?.map((m) => m.parameter);

	console.log(filteredMesurements?.measurements);

	useEffect(() => {
		setMapBox({
			style: "dark",
			center: {
				lat: selectedCity.lat ? selectedCity.lat : 1638175,
				lon: selectedCity.lon ? selectedCity.lon : 10.4478313,
			},
			zoom: 5,
			accesstoken: process.env.REACT_APP_KEY_MAPBOX_TOKEN,
		});
		setDataBox({
			type: "scattermapbox",
			text: locations,
			lon: longitude,
			lat: latitude,
			marker: { color: "fuchsia", size: 10 },
		});
	}, [selectedCity]);

	return (
		<Fragment>
			<Plot
				data={[
					{
						type: "scattermapbox",
						text: selectedCity.state === "All" ? allStates : locations,
						lon: selectedCity.state === "All" ? allLons : longitude,
						lat: selectedCity.state === "All" ? allLats : latitude,
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
				onClick={(e) => setSelectedLocation(e.points[0].text)}
			/>
			{selectedLocation && (
				<Plot
					data={[
						{
							x: [1, 2, 3],
							y: [2, 6, 3],
							type: "scatter",
							mode: "lines+markers",
							marker: { color: "red" },
						},
						{ type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
					]}
					layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
				/>
			)}
		</Fragment>
	);
}

// measurements?.map((el) =>
// 										el.map(
// 											(obj) =>
// 												`<b></b><br><br> ${obj.parameter} ${obj.value} ${obj.unit} `
// 										)
// 								  ),
