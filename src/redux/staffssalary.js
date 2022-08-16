import * as ActionTypes from "./ActionTypes";

export const Staffsalary = (
    state ={
        isLoading: false,
        errMess: null,
        staffssalary: []
    },
    action
) =>{
    switch(action.type){
        //FETCH
        case ActionTypes.STAFFSSALARY_FAILED:
            return{
                ...state,
                isLoading:false,
                errMess:action.payload,
                staffssalary:[],
            }
        case ActionTypes.STAFFSSALARY_LOADING:
            return{
                ...state,
                isLoading:true,
                errMess:null,
                staffssalary:[],
            }       
        case ActionTypes.ADD_STAFFSSALARY:
            return{
                ...state,
                isLoading:false,
                errMess:null,
                staffssalary:action.payload,
            } 
        default:
            return state;
    }
};