import { SET_PAGE_NO } from '../actions/actionTypes';

const INIT_STATE = {
  pageNo: 1,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PAGE_NO:
      return {
        ...state,
        pageNo: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
