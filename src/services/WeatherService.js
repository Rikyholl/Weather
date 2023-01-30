import axios from "axios";

export default function WeatherService{

    return axios.get('http://api.openweathermap.org/geo/1.0/direct?q=Moscow&appid={ccdeb5052acdf8f32869de006484b3fb}');
}