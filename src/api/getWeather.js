import axios from "axios";
const key = "76b8f9c8c27ad7f00855a166183a6978";

async function getWeekWeatherByCity(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=hourly,current,minutely,alerts&appid=${key}&units=metric`
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return null;
  }
}

async function getWeatherByCityName(name) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return null;
  }
}

export { getWeekWeatherByCity, getWeatherByCityName };
