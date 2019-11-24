import { REQUEST_START, REQUEST_COMPLETE } from '../actions/actionTypes';

const INIT_STATE = {
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
