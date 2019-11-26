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
import BarChart from '../../components/BarChart';

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

  // Fn to paginate weather arrays
  constructPaginatedWeatherData = (weatherData, pageSize) => {
    let paginatedWeatherData = [];
    let dataPage = [];

    for (let weatherObj of weatherData) {
      if (dataPage.length === pageSize) {
        paginatedWeatherData.push(dataPage);
        dataPage = [];
      }
      dataPage.push(weatherObj);
      if (weatherData.indexOf(weatherObj) === weatherData.length - 1) {
        paginatedWeatherData.push(dataPage);
      }
    }

    return paginatedWeatherData;
  };

  render() {
    const {
      unitFormat,
      weatherData,
      selectedWeatherDay,
      paginatedWeatherData,
      pageNo,
      setPageNo,
    } = this.props;

    return (
      <Grid container spacing={2} direction='column'>
        <Grid
          item
          xs={12}
          direction='row'
          justify='center'
          alignItems='center'
          style={{ display: 'flex' }}
        >
          <RadioGroupComponent
            radioOptions={unitFormatOptions}
            selectedValue={unitFormat}
            handleChangeState={this.getNewWeatherData}
            name='unitFormat'
          />
        </Grid>
        <Grid item xs={12} direction='row' justify='center' alignItems='center'>
          <PaginationButtons
            data={paginatedWeatherData}
            pageNo={pageNo}
            setPageNo={setPageNo}
          />
        </Grid>
        <Grid item xs={12} direction='row' justify='center' alignItems='center'>
          <WeatherCardLayout data={paginatedWeatherData} pageNo={pageNo - 1} />
        </Grid>
        <Grid item xs={12} direction='row' justify='center' alignItems='center'>
          <BarChart
            data={weatherData}
            selectedWeatherDay={selectedWeatherDay}
          />
        </Grid>
      </Grid>
    );
  }
}

Main.propTypes = {
  weatherData: PropTypes.array,
  paginatedWeatherData: PropTypes.array,
  unitFormat: PropTypes.string,
  pageNo: PropTypes.number,
  getWeatherData: PropTypes.func,
  getPaginatedWeatherData: PropTypes.func,
  setRadioState: PropTypes.func,
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
  selectedWeatherDay: weatherReducers.selectedWeatherDay,
});

export default connect(mapStateToProps, {
  getWeatherData,
  getPaginatedWeatherData,
  setRadioState,
  setPageNo,
})(Main);
