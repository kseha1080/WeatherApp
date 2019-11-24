import { combineReducers } from 'redux';
import weatherReducers from './weatherReducers';
import loadingReducers from './loadingReducers';
import unitFormatReducers from './unitFormatReducers';
import paginationReducers from './paginationReducers';

export default combineReducers({
  weatherReducers,
  loadingReducers,
  unitFormatReducers,
  paginationReducers,
})