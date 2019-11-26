import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Custom Component
import BarComponent from './components/BarComponent';

// Styles
import barChartStyles from './barChartStyles';

const BarChart = ({ classes, selectedWeatherDay, data }) => {
  const formattedSelectedDay =
    selectedWeatherDay && moment(selectedWeatherDay).format('LL');

  const mapDataToBarComponent = (data, selectedWeatherDay) => {
    for (let weatherObjByDay of data) {
      if (weatherObjByDay.date === selectedWeatherDay) {
        return weatherObjByDay.weatherDataByTime.map((weatherObjByTime) => {
          return (
            <BarComponent
              key={weatherObjByTime.dt_txt}
              data={weatherObjByTime}
            />
          );
        });
      }
    }
  };

  const renderBarComponent =
    data && data.length && selectedWeatherDay
      ? mapDataToBarComponent(data, selectedWeatherDay)
      : null;

  return (
    <Grid container xs={12} 
      className={classes.barChartContainer}
    >
      <Grid item 
        className={classes.barChartTitleWrapper}
      >
        <Typography 
          className={classes.barCharTitle} 
          component='h4'
        >
          {formattedSelectedDay}
        </Typography>
      </Grid>
      <Grid item
        className={classes.barChartWrapper}
      >
        {renderBarComponent}
      </Grid>
    </Grid>
  );
};

BarChart.propTypes = {
  classes: PropTypes.object,
  selectedWeatherDay: PropTypes.string,
  data: PropTypes.array,
};

export default withStyles(barChartStyles)(BarChart);
