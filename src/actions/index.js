import axios from "axios";

const API_KEY = "82ea0061501266a2ba8ad3abcb901ff1";
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityName) {
  const url = `${BASE_URL}&q=${cityName},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
