import { getGeocode } from "./utils/geocode.js";
import { getForecast } from "./utils/forecast.js";

const address = process.argv[2];

const initWeather = async (address) => {
  const geocode = await getGeocode(address);

  const forecast = await getForecast(geocode.latitude, geocode.longitude);

  console.log(forecast);
};

if (!address) {
  console.log("Please provide an address");
} else {
  initWeather(address);
}
