import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishID, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishID: dishID,
    rating: rating,
    author: author,
    comment: comment,
  },
});
//dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesloading(true));

  return fetch(baseUrl + "dishes")
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};

export const dishesloading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
//comments
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
//promos
export const fetchPromos = () => (dispatch) => {
  dispatch(promosloading(true));

  return fetch(baseUrl + "promotions")
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosloading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
//leaders
