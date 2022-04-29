import { useEffect, useState } from "react";

const API_KEY = "de867676b7ca457aa7041433220504";

export function useWeather(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    
    getForecastByQuery(search)
      .then((headlines) => {
        setHeadlines(headlines);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
    }, [search]);

  return {
    loading,
    headlines,
    error
  };
}

function getForecastByQuery(q) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${q}`
  )
    .then((res) => res.json())
    .then((res) => res.forecast.forecastday[0].hour)
    .then((forecasts) =>
      forecasts.map((forecast) => ({
        time: forecast.time,
        text: forecast.condition.text,
        temp: forecast.temp_c,
        wind: forecast.wind_kph,
        icon: forecast.condition.icon
      }))
    )
}
