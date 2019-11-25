import axios from 'axios';

import * as API from '../api';
import {
  REQUEST_START,
  REQUEST_COMPLETE,
  GET_WEATHER_DATA,
  API_ERROR,
  SET_RADIO_STATE,
  SET_PAGE_NO,
  GET_PAGINATED_WEATHER_DATA,
  SET_SELECTED_WEATHER_DAY,
} from './actionTypes';

import { recontructWeatherData } from '../utils';

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
      const reconstructedWeatherData = recontructWeatherData(res.data.list);
      dispatch({ type: GET_WEATHER_DATA, payload: reconstructedWeatherData });
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

export const setSelectedWeatherDay = (selectedWeather) => (dispatch) => {
  dispatch({ type: SET_SELECTED_WEATHER_DAY, payload: selectedWeather });
};
