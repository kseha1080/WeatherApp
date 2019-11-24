import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Actions
import {
  getWeatherData,
  getPaginatedWeatherData,
  setRadioState,
  setPageNo,
} from '../../actions';

// Custom components
import RadioGroupComponent from '../../components/RadioGroupComponent';
import PaginationButtons from '../../components/PaginationButtons';
import WeatherCardLayout from '../../components/WeatherCardLayout';

// Constants import
import { unitFormatOptions } from '../../constants';

const pageSize = 3;

class Main extends PureComponent {
  componentDidMount() {
    const { unitFormat, getWeatherData } = this.props;
    if (unitFormat !== undefined && unitFormat.trim() !== '') {
      getWeatherData(unitFormat);
    }
  }

  componentDidUpdate(prevProps) {
    // Paginate data each time new weather data is passed
    if (prevProps.weatherData !== this.props.weatherData) {
      const paginatedWeatherData = this.constructPaginatedWeatherData(
        this.props.weatherData,
        pageSize,
      );
      this.props.getPaginatedWeatherData(paginatedWeatherData);
    }
  }

  // Fn to set new radio state (unit format) and get new weather data from it
  getNewWeatherData = (newUnitFormat) => {
    const { setRadioState, getWeatherData } = this.props;
    setRadioState(newUnitFormat);
    getWeatherData(newUnitFormat);
  };

  // Fn to paginate weather arrays for PaginationButtons and WeatherCard
  constructPaginatedWeatherData = (weatherData, pageSize) => {
    let paginatedWeatherData = [];
    let dataPage = [];

    const objConvertedWeatherData = weatherData.map((dataArray) => {
      let weatherObjDay = {};
      let meanTemp = 0;
      for (let weatherObj of dataArray) {
        meanTemp += weatherObj.main.temp;
        weatherObjDay.date = weatherObj.date;
        weatherObjDay.humidity = weatherObj.main.humidity;
        weatherObjDay.weather = weatherObj.weather[0].main;
      }
      meanTemp = meanTemp / dataArray.length;
      meanTemp = Math.round(meanTemp);
      weatherObjDay.avg_temp = meanTemp;
      return weatherObjDay;
    });

    for (let weatherObj of objConvertedWeatherData) {
      if (dataPage.length === pageSize) {
        paginatedWeatherData.push(dataPage);
        dataPage = [];
      }
      dataPage.push(weatherObj);
      if (
        objConvertedWeatherData.indexOf(weatherObj) ===
        objConvertedWeatherData.length - 1
      ) {
        paginatedWeatherData.push(dataPage);
      }
    }

    return paginatedWeatherData;
  };

  render() {
    console.log('MAIN', this.props);
    const {
      unitFormat,
      weatherData,
      paginatedWeatherData,
      pageNo,
      setPageNo,
    } = this.props;

    return (
      <Container>
        <Grid container>
          <RadioGroupComponent
            radioOptions={unitFormatOptions}
            selectedValue={unitFormat}
            handleChangeState={this.getNewWeatherData}
          />
        </Grid>
        <Grid container>
          <PaginationButtons
            data={paginatedWeatherData}
            pageNo={pageNo}
            setPageNo={setPageNo}
          />
        </Grid>
        <Grid container>
          <WeatherCardLayout data={paginatedWeatherData} pageNo={pageNo - 1} />
        </Grid>
      </Container>
    );
  }
}

Main.propTypes = {
  weatherData: PropTypes.array,
  paginatedWeatherData: PropTypes.array,
  unitFormat: PropTypes.string,
  pageNo: PropTypes.number,
};

const mapStateToProps = ({
  weatherReducers,
  unitFormatReducers,
  paginationReducers,
}) => ({
  weatherData: weatherReducers.weatherData,
  paginatedWeatherData: weatherReducers.paginatedWeatherData,
  unitFormat: unitFormatReducers.unitFormat,
  pageNo: paginationReducers.pageNo,
});

export default connect(mapStateToProps, {
  getWeatherData,
  getPaginatedWeatherData,
  setRadioState,
  setPageNo,
})(Main);
