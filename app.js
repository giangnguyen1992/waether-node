import fetch from "node-fetch";

const url =
  "http://api.weatherstack.com/current?access_key=8fc72416788ce768561b821ae1b1d499&query=New%20York";
const fetchRequest = async (url) => {
  try {
    const data = await fetch(url);
    const dataJSON = await data.json();
    console.log(dataJSON.current?.temperature);
  } catch (e) {
    console.log("muuuuh", e);
  }
};

fetchRequest(url);
