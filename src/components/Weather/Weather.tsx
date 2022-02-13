import React from 'react';
import { useQuery } from 'react-query';
import { getWeather } from '@apis/weather';
import { Heading, Text } from 'native-base';

interface WeatherProps {
  city: string;
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
  const { data } = useQuery(['weather', city], () => getWeather({ q: city }));

  return (
    <>
      <Heading>How is the weather on {city}?</Heading>
      {data && <Text>{data.data.weather[0].description}</Text>}
    </>
  );
};

export default Weather;
