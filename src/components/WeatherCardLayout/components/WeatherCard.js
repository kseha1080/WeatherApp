import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Actions
import { setSelectedWeatherDay } from '../../../actions';

const WeatherCard = ({ data, unitFormat, setSelectedWeatherDay }) => {
  const renderUnitFormat = unitFormat === 'imperial' ? 'F' : 'C';

  const formattedDate = moment(data.date).format('LL');

  return (
    <Card
      key={data.date}
      onClick={() => setSelectedWeatherDay(data.date)}
      boxShadow={3}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom component='h5'>
            {formattedDate}
          </Typography>
          <Typography variant='body1' component='p'>
            {`${data.meanTemp}˚ ${renderUnitFormat}`}
          </Typography>
          <Typography variant='body1' color='textSecondary' component='p'>
            {data.weatherDescription}
          </Typography>
          <Typography variant='body1' color='textSecondary' component='p'>
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

export default connect(mapStateToProps, { setSelectedWeatherDay })(WeatherCard);
