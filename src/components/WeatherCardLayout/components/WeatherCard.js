import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Actions
import { setSelectedWeatherDay } from '../../../actions';

// Styles
import weatherCardStyles from './weatherCardStyles';

const WeatherCard = ({ classes, data, unitFormat, setSelectedWeatherDay }) => {
  const renderUnitFormat = unitFormat === 'imperial' ? 'F' : 'C';

  const formattedDate = moment(data.date).format('LL');

  return (
    <Card className={classes.weatherCard} key={data.date} onClick={() => setSelectedWeatherDay(data.date)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom component='h4'>
            {formattedDate}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`${data.meanTemp}˚ ${renderUnitFormat}`}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.weatherDescription}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`Humidity: ${data.meanHumidity}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

WeatherCard.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  unitFormat: PropTypes.string,
  setSelectedWeatherDay: PropTypes.func,
};

const mapStateToProps = ({ unitFormatReducers }) => ({
  unitFormat: unitFormatReducers.unitFormat,
});

export default withStyles(weatherCardStyles)(
  connect(mapStateToProps, { setSelectedWeatherDay })(WeatherCard),
);
