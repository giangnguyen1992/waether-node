import fetch from "node-fetch";

const getForecast = async (latitude, longitude) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8fc72416788ce768561b821ae1b1d499&query=" +
    latitude +
    "," +
    longitude;

  const forecastData = await fetch(url);
  const forecastJSON = await forecastData.json();

  return forecastJSON;
};

export { getForecast };
