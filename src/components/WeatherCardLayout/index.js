import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Grid from '@material-ui/core/Grid';

// Custom components
import WeatherCard from './components/WeatherCard';

const WeatherCardLayout = ({ data, pageNo }) => {
  const mapDataToWeatherCard = (weatherData) => {
    return weatherData.map((weatherObj) => {
      return (
        <Grid item xs={4}>
          <WeatherCard key={weatherObj.date} data={weatherObj} />
        </Grid>
      );
    });
  };

  const renderWeatherCard =
    data && data.length ? mapDataToWeatherCard(data[pageNo]) : null;

  return (
    <Grid
      container
      zeroMinWidth
      xs={12}
      spacing={3}
      direction='row'
      justify='center'
      alignItems='center'
      flexWrap='wrap'
    >
      {renderWeatherCard}
    </Grid>
  );
};

WeatherCardLayout.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  pageNo: PropTypes.number,
};

export default WeatherCardLayout;
