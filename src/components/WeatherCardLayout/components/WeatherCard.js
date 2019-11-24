import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const WeatherCard = ({ data, unitFormat }) => {
  const formattedDate = moment(data.date).format('LL');
  const renderUnitFormat = unitFormat === 'imperial' ? 'F' : 'C';

  return (
    <Card key={data.date} onClick={() => console.log('asdf')}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom component='h4'>
            {formattedDate}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`${data.avg_temp}˚ ${renderUnitFormat}`}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.weather}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {`Humidity: ${data.humidity}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = ({ unitFormatReducers }) => ({
  unitFormat: unitFormatReducers.unitFormat,
});

export default connect(mapStateToProps)(WeatherCard);
