import * as ActionTypes from './ActionTypes' 
import { DISHES } from "../shared/dishes";

export const addComment = (dishID, rating, author, comment)=>({
    type: ActionTypes.ADD_COMMENT, 
    payload:{
        dishID: dishID,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = ()=>(dispatch)=>{
    dispatch(dishesloading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    }, 2000);
}

export const dishesloading=()=>({
    type: ActionTypes.DISHES_LOADING

});

export const dishesFailed=(errmess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});