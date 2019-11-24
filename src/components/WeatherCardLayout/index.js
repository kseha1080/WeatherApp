import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Container from '@material-ui/core/Container';

// Custom components
import WeatherCard from './components/WeatherCard';

const WeatherCardLayout = ({ data, pageNo }) => {
  const renderWeatherCard =
    data && data.length
      ? data[pageNo].map((weatherObj) => {
          return <WeatherCard key={weatherObj.date} data={weatherObj} />;
        })
      : null;

  return (
    <Container style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {renderWeatherCard}
    </Container>
  );
};

WeatherCardLayout.propTypes = {
  data: PropTypes.array.isRequired,
  pageNo: PropTypes.number.isRequired,
};

export default WeatherCardLayout;
