import {
  GET_WEATHER_DATA,
  GET_PAGINATED_WEATHER_DATA,
  SET_SELECTED_WEATHER_DAY,
} from '../actions/actionTypes';

const INIT_STATE = {
  weatherData: [],
  paginatedWeatherData: [],
  selectedWeatherDay: '',
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
    case SET_SELECTED_WEATHER_DAY:
      return {
        ...state,
        selectedWeatherDay: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
