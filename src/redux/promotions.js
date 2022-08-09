
import * as ActionTypes from "./ActionTypes";

export const Promotions = (state = {
    isLoading: true,
    erMess: null,
    promotions: [],
  }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        erMess: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, erMess: null, promotions: [] };

    case ActionTypes.PROMOS_FAILED:
      return { ...state, isLoading: false, erMess: action.payload, promotions: [] };
    default:
      return state;
  }
};
