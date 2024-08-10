import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, VStack } from '@chakra-ui/react';

const Weather = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (coordinates) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast`,
            {
              params: {
                lat: coordinates.latitude,
                lon: coordinates.longitude,
                appid: '64b66d919029c1a2dad8f507c263c5fe',
                units: 'metric'
              }
            }
          );

          console.log(response);
          setWeatherData(response.data);
        } catch (err) {
          console.error('Error fetching weather data:', err.response ? err.response.data : err.message);
          setError('Failed to fetch weather data');
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [coordinates]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;

  const forecast = weatherData?.list[0];

  return (
    <Box
      position="fixed"
      top="200px"
      right="10px"
      bg="rgba(255, 218, 237, 0.8)" // Transparent blue background
      p={4}
      borderRadius="md"
      boxShadow="md"
      width="300px" // You can adjust the width as needed
      maxWidth="90vw"
      zIndex="1000" // Ensure this is high enough to appear in front
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>Weather Forecast</Text>
      {forecast ? (
        <VStack spacing={2} align="start">
          <Text>Temperature: {forecast.main.temp}°C</Text>
          <Text>Condition: {forecast.weather[0].description}</Text>
          <Text>Humidity: {forecast.main.humidity}%</Text>
          <Text>Wind Speed: {forecast.wind.speed} m/s</Text>
        </VStack>
      ) : (
        <Text>No forecast data available</Text>
      )}
    </Box>
  );
};

export default Weather;
