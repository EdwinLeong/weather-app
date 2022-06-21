import React, { useState } from "react";
import WeatherAPI from "./api/waetherApi";
import Bottom from "./component/bottom";
import cloudy from "./assets/Cloudy.png";
import sunny from "./assets/sunny.png";
import raining from "./assets/Raining.png";

const App = () => {
  var api = new WeatherAPI();
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const resp = await api.getCity("Malaysia");
  //   console.log("the resp", resp);
  // };

  // const searchLocation = (event) => {
  //   if (event.key === "Enter") {
  //     axios.get(url).then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     });
  //     setLocation("");
  //   }
  // };

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const resp = await api.getCity(location);
      console.log("the resp", resp);
      setData(resp.data);
      setLocation("");
    }
  };

  const displayWeather = (weatherIcon) => {
    switch (weatherIcon) {
      case "Clouds":
        return cloudy;
      case "Sunny":
        return sunny;
      case "Rain":
        return raining;
      default:
        return sunny;
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : <p>Enter Location</p>}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : <p>----</p>}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : <p>Sunny</p>}
          </div>
          <img
            src={displayWeather(data.weather && data.weather[0].main)}
            alt="Trulli"
            width="50"
            height="50"
          />
        </div>
        <Bottom data={data} />
      </div>
    </div>
  );
};

export default App;
