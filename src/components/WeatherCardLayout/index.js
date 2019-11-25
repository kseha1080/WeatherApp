import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Custom components
import WeatherCard from './components/WeatherCard';

// Styles
import weatherCardLayoutStyles from './weatherCardLayoutStyles';

const WeatherCardLayout = ({ classes, data, pageNo }) => {
  const mapDataToWeatherCard = (weatherData) => {
    return weatherData.map((weatherObj) => {
      return <WeatherCard key={weatherObj.date} data={weatherObj} />;
    });
  };

  const renderWeatherCard =
    data && data.length ? mapDataToWeatherCard(data[pageNo]) : null;

  return (
    <Container className={classes.layoutContainer}>
      {renderWeatherCard}
    </Container>
  );
};

WeatherCardLayout.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  pageNo: PropTypes.number,
};

export default withStyles(weatherCardLayoutStyles)(WeatherCardLayout);
