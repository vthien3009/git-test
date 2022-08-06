import { actionTypes } from "react-redux-form";
import { COMMENTS } from "../shared/comments";

export const Comments = (state = COMMENTS, action) =>{
    switch(action.type){
        case actionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString;
            return state.concat(comment);
        default:
            return state;
    }
}