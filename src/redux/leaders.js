import { LEADERS } from "../shared/leaders";
// import * as ActionTypes from "./ActionTypes";

export const Leaders = (
  state = LEADERS, action) => {
  switch (action.type) {
    // case ActionTypes.ADD_LEADERS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     erMess: null,
    //     leaders: action.payload,
    //   };

    // case ActionTypes.LEADERS_LOADING:
    //   return { ...state, isLoading: true, erMess: null, leaders: [] };

    // case ActionTypes.LEADER_FAILED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     erMess: action.payload,
    //     leaders: [],
    //   };
    default:
      return state;
  }
};
