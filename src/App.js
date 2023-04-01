import React, { createContext, useMemo, useState } from "react";
import "./App.css";
import { Search } from "./weather/Search";
import Weather from "./weather/Weather";

export const WeatherContext = createContext();

const App = () => {
  const [city, setCity] = useState("");
  const [prevState, setPrevState] = useState();
  const [data, setData] = useState({});

  const cityProps = useMemo(() => {
    return {
      city: city,
      setCity: setCity,
      prevState: prevState,
      setPrevState: setPrevState,
      data: data,
      setData: setData,
    };
  }, [city, prevState, data]);

  return (
    <div className="App">
      <h1 className="title">Weather App</h1>
      <WeatherContext.Provider value={cityProps}>
        <Search />
        {data.weather &&
          data.weather.map((weather) => {
            const { id, icon } = weather;
            return <Weather key={id} icon={icon} />;
          })}
      </WeatherContext.Provider>
    </div>
  );
};

export default App;
