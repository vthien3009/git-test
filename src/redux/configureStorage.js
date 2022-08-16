import { createStore, combineReducers, applyMiddleware } from "redux";
import {Staffs} from "./staffs";
import {Departments} from "./departments";
import {Staffsalary} from "./staffssalary";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore =()=>{
    const store = createStore ( 
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            staffssalary:Staffsalary,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
