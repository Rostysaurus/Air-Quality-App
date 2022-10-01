import { Fragment, useContext } from "react";
import { SearchContext } from "../../../context/searchContext/searchContext";

import Map from "./map/Map";
import "./airQualityCard.scss";

export default function AirQualityCard() {
	const { apiData, isFetching, error, errorMessage, selectedLanguage } =
		useContext(SearchContext);

	return (
		<Fragment>
			<Map />
		</Fragment>
	);
}
