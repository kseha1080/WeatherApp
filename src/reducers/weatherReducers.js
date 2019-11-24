import {
  GET_WEATHER_DATA,
  GET_PAGINATED_WEATHER_DATA,
} from '../actions/actionTypes';

const INIT_STATE = {
  weatherData: [],
  paginatedWeatherData: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
      };
    case GET_PAGINATED_WEATHER_DATA:
      return {
        ...state,
        paginatedWeatherData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
