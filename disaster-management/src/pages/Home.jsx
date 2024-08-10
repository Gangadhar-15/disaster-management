import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Map from '../components/Map';
import Weather from '../components/Weather'; // Import the Weather component

const Home = () => {
  const { coordinates, error } = useGeolocation();

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {coordinates ? (
        <div>
          <Map coordinates={coordinates} />
          <Weather coordinates={coordinates} /> {/* Include the Weather component */}
        </div>
      ) : (
        <p>Getting coordinates...</p>
      )}
    </div>
  );
};

export default Home;
