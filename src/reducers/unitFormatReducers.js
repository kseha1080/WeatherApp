import { SET_RADIO_STATE } from '../actions/actionTypes';

const INIT_STATE = {
  unitFormat: 'imperial',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_RADIO_STATE:
      return {
        ...state,
        unitFormat: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
