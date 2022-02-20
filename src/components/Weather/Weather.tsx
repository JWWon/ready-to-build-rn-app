import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { getWeather } from '@apis/weather';
import { Heading, Spinner, Text } from 'native-base';
import ErrorBoundary from '@utils/ErrorBoundary';

interface WeatherProps {
  city: string;
}

const WeatherData: React.FC<WeatherProps> = ({ city }) => {
  const { data } = useQuery(['weather', city], () => getWeather({ q: city }), { suspense: true });
  return <Text testID="weather">{data?.data.weather[0].description}</Text>;
};

const Weather: React.FC<WeatherProps> = ({ city }) => (
  <>
    <Heading>How is the weather on {city}?</Heading>
    <Suspense fallback={<Spinner testID="loading" size="sm" />}>
      <ErrorBoundary fallback={<Text>Failed to fetch weather data from API :(</Text>}>
        <WeatherData city={city} />
      </ErrorBoundary>
    </Suspense>
  </>
);

export default Weather;
