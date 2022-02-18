/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import Config from 'react-native-config';

const openweather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: Config.OPENWEATHERMAP_APP_ID,
  },
});

interface Params {
  /**
   * > https://www.iso.org/obp/ui/#search
   *
   * City name, state code and country code divided by comma
   */
  q?: string;
  mode?: 'xml' | 'html';
  /**
   * @default 'standard'
   */
  units?: 'standard' | 'metric' | 'imperial';
  /**
   * > https://openweathermap.org/current#multi
   */
  lang?: string;
}

interface WeatherResponse {
  coord: { lon: number; lat: number };
  weather: { id: string; main: string; description: string; icon: string }[];
  base: string;
  main: { temp: number; feels_like: number; temp_min: number; temp_max: number; pressure: number; humidity: number };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  rain?: { '1h': number; '3h': number };
  snow?: { '1h': number; '3h': number };
  dt: number;
  sys: { type: number; id: number; message: number; country: string; sunrise: number; sunset: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export function getWeather(params: Params) {
  return openweather.get<WeatherResponse>('/weather', { params });
}
