import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Bhopal",
            feelsLike: 24.98,
            humidity : 36,
            temp: 25.44,
            tempMax: 25.44,
            tempMin: 25.44,
            weather: "few clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
}