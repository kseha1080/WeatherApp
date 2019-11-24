import axios from 'axios';
import moment from 'moment';

import * as API from '../api';
import {
  REQUEST_START,
  REQUEST_COMPLETE,
  GET_WEATHER_DATA,
  API_ERROR,
  SET_RADIO_STATE,
  SET_PAGE_NO,
  GET_PAGINATED_WEATHER_DATA,
} from './actionTypes';

export const requestStart = () => {
  return { type: REQUEST_START };
};

export const requestComplete = () => {
  return { type: REQUEST_COMPLETE };
};

export const getWeatherData = (unitFormat) => (dispatch) => {
  dispatch(requestStart());
  axios
    .get(`${API.weatherApi}&units=${unitFormat}`)
    .then((res) => {
      const weatherData = res.data.list;
      let groupedWeatherData = [];
      let dayWeatherData = [];

      const newWeatherData = weatherData.map((weatherObj) => {
        const weatherObjDate = moment
          .unix(weatherObj.dt)
          .utc()
          .format('YYYY-MM-DD');
        const weatherObjTime = moment
          .unix(weatherObj.dt)
          .utc()
          .format('LT');
        weatherObj.date = weatherObjDate;
        weatherObj.time = weatherObjTime;
        return weatherObj;
      });

      for (let weatherObj of newWeatherData) {
        if (!dayWeatherData.length) {
          dayWeatherData.push(weatherObj);
        } else {
          if (dayWeatherData[0].date === weatherObj.date) {
            dayWeatherData.push(weatherObj);
            if (
              newWeatherData.indexOf(weatherObj) ===
              newWeatherData.length - 1
            ) {
              groupedWeatherData.push(dayWeatherData);
            }
          } else {
            groupedWeatherData.push(dayWeatherData);
            dayWeatherData = [];
            dayWeatherData.push(weatherObj);
          }
        }
      }

      dispatch({ type: GET_WEATHER_DATA, payload: groupedWeatherData });
    })
    .catch((err) => {
      dispatch({ type: API_ERROR, payload: err });
    })
    .finally(() => {
      dispatch(requestComplete());
    });
};

export const getPaginatedWeatherData = (paginatedWeatherData) => (dispatch) => {
  dispatch({ type: GET_PAGINATED_WEATHER_DATA, payload: paginatedWeatherData });
};

export const setRadioState = (state) => (dispatch) => {
  dispatch({ type: SET_RADIO_STATE, payload: state });
};

export const setPageNo = (pageNo) => (dispatch) => {
  dispatch({ type: SET_PAGE_NO, payload: pageNo });
};
