import { useContext } from "react";
import { SearchContext } from "../../../context/searchContext/searchContext";
import Graph from "../graph/Graph";
import Map from "../map/Map";
import "./airQualityCard.scss";

export default function AirQualityCard() {
	const { selectedLocation, selectedArea, locationData } =
		useContext(SearchContext);

	return (
		<div className="container" data-testid="container">
			<Map className="map" />
			{selectedLocation && selectedArea.state === locationData.area ? (
				<Graph className="graph" />
			) : null}
		</div>
	);
}
