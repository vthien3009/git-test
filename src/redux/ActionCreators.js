import * as ActionTypes from "./ActionTypes";
import { baseUrl1 } from "../shared/baseUrl";

// export const staffsFailed = (errmess)=>({
//     type: ActionTypes.FETCH_STAFFS_FAILED,
//     payload: errmess,
// });
//add staffs
export const addStaffSuccess = (staffs) => ({
  type: ActionTypes.ADD_STAFF_SUCCESS,
  payload: staffs,
});

export const addStaff = (staff) => (dispatch) => {
  // dispatch(staffsLoading(true));

  return fetch(baseUrl1 + "staffs", {
    method: "POST",
    body: JSON.stringify(staff),
    headers: {
      "Context-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          console.log(error);
          throw error;
        }
      },
      (error) => {
        console.log(error);
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((staffs) => dispatch(addStaffSuccess(staffs)))
    .catch((error) => {
      console.log("Post staffs", error.message);
      alert("Your staff could not be posted \n Error: " + error.message);
    });
};

//fetch staffs
export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  return fetch(baseUrl1 + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(fetchStaffsSuccess(staffs)))
    .catch((error)=> dispatch(fetchStaffsFailed(error.message)))
};

export const fetchStaffsFailed = (errmess) =>({
  type: ActionTypes.FETCH_STAFFS_FAILED,
  payload:errmess
});

export const fetchStaffsSuccess = (staffs)=>({
  type: ActionTypes.FETCH_STAFFS_SUCCESS,
  payload:staffs
});

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

//fetch departments
export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  return fetch(baseUrl1 + "departments")
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)))
    .catch((error)=> dispatch(departmentsFailed(error.message)))
};
export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});

export const departmentsFailed = (errmess) =>({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload:errmess
});

export const addDepartments = (departments)=>({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload:departments
});

//fetch Staffsalary
export const fetchStaffsSalary = () => (dispatch) => {
  dispatch(staffsSalaryLoading(true));
  return fetch(baseUrl1 + "staffsSalary")
    .then((response) => response.json())
    .then((staffssalary) => dispatch(addStaffsSalary(staffssalary)))
    .catch((error)=> dispatch(staffsSalaryFailed(error.message)))
};
export const staffsSalaryLoading = () => ({
  type: ActionTypes.STAFFSSALARY_LOADING,
});

export const staffsSalaryFailed = (errmess) =>({
  type: ActionTypes.STAFFSSALARY_FAILED,
  payload:errmess
});

export const addStaffsSalary = (staffssalary)=>({
  type: ActionTypes.ADD_STAFFSSALARY,
  payload:staffssalary
});