import api from "./index";

const APIKEY = "0653a7c4b3468971b4fcf5e9600deabe";

class WeatherAPI {
  getCity = async (link) => {
    const resp = await api.get(`?q=${link}&appid=${APIKEY}`);
    return resp;
  };
}

export default WeatherAPI;
