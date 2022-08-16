import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Department from "./Departments";
import Salary from "./Salary";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchStaffs, fetchDepartments, fetchStaffsSalary} from "../redux/ActionCreators";
// import { STAFFS, DEPARTMENTS } from "../data/staffList";


function Main() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
    dispatch(fetchStaffsSalary());
  },[])
  const staffs = useSelector(state => state.staffs);
  const departments = useSelector(state => state.departments)
  const staffssalary = useSelector(state => state.staffssalary)

    console.log('staffs',staffs);
    console.log('departments',departments);
    console.log('staffssalary',staffssalary);

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={
          staffs.staffs.filter(
            (item) => item.id === parseInt(match.params.nhanvienId, 10)
          )[0]
        }
      />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/nhanvien"
          component={() => (
            <StaffList 
            // onAdd={addStaff} 
            staffs={staffs.staffs} 
            />
          )}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route
          path="/bophan"
          component={() => <Department dept={departments} />}
        />
        <Route
          path="/luong"
          component={() => <Salary luong={staffssalary.staffssalary} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
