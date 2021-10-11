import fetch from "node-fetch";

const getGeocode = async (address) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoicmF5bDE5OTIiLCJhIjoiY2t1bHA0YWpuMWpuNDJwbjZ5dGNpZHgxdSJ9.ihMfEwXT2e5d-VQVkY-XfA&limit=1";

  try {
    const geoData = await fetch(url);
    const geodataJSON = await geoData.json();

    if (geodataJSON.features?.length !== 0) {
      return {
        latitude: geodataJSON.features[0]?.center[1],
        longitude: geodataJSON.features[0]?.center[0],
        location: geodataJSON.features[0]?.place_name,
      };
    } else {
      console.log("Unable to find location. Try another search.", e);
    }
  } catch (e) {
    console.log("Other error", e);
  }
};

export { getGeocode };
