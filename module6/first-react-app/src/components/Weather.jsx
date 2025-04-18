import { useState } from "react";

function CheckWeather(props) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];
  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);

    props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };
  return <button onClick={randomWeather}>Check Weather</button>;
}

function Temperature({ temp, units = "C" }) {
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;

  console.log(displayTemp);
  console.log({ displayTemp });

  return (
    <span class="Temperature">
      <strong>
        {" "}
        {parseInt(displayTemp)}&deg;{units}{" "}
      </strong>
    </span>
  );
}

export function Weather() {
  // copy to Weather.jsx
  // two separate state values to store weather data

  const [weather, setWeather] = useState("sunny");

  const [tempCelcius, setTempCelcius] = useState(27);
  // handler function to update both state values at once

  const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather);
    setTempCelcius(newTemp);
  };

  return (
    <div className="Weather componentBox">
      <h2>Today's Weather</h2>
      <div>
        <strong>{weather}</strong> with a temp of
        {/* Child component to display temp - 
                   needs temp value as prop */}
        <Temperature temp={tempCelcius} units="C" />
      </div>
      {/* Child component to update the weather - 
               needs handler function as prop */}
      <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
  );
}
