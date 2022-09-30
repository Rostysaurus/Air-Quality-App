import { Fragment, useContext } from "react";
import { SearchContext } from "../../../context/searchContext/searchContext";

import Map from "./map/Map";
import "./weatherCard.scss";

export default function WeatherCard() {
	const { weatherData, isFetching, error, errorMessage, selectedLanguage } =
		useContext(SearchContext);

	return (
		<Fragment>
			<Map />
			{/* <LocationInfo/>
      { !error && (<div className="weatherCard">
        <Fragment>
          <CurrentWeather/>
          <Forecast/>
        </Fragment>
      </div>)} */}
		</Fragment>
	);
}
