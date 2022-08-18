import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Department from "./Departments";
import DepartmentDetail from "./DepartmentDetail";
import Salary from "./Salary";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchStaffs,
  fetchDepartments,
  fetchStaffsSalary,
  addStaff
} from "../redux/ActionCreators";

// import { STAFFS, DEPARTMENTS } from "../data/staffList";
function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
    dispatch(fetchStaffsSalary());
  }, []);
  const adddStaff = (staff) => {
    dispatch(addStaff(staff))
  };
  const staffs = useSelector((state) => state.staffs);
  const departments = useSelector((state) => state.departments);
  const staffssalary = useSelector((state) => state.staffssalary);
  
  console.log("staffs", staffs);
  console.log("departments", departments);
  console.log("staffssalary", staffssalary);


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
  const StaffWithDepartment = ({match}) => {
    // console.log(staffs.staffs.filter((staff)=>staff.departmentId=='Dept01'));
    console.log(String(match.params.departmentId));
    return (
      <DepartmentDetail
        departments={departments.departments.filter(
          (departments)=>departments.id === String(match.params.departmentId)
        )}
        staff={staffs
          .staffs.filter(
          (staff)=>staff.departmentId===String(match.params.departmentId)
        )
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
              onAdd={adddStaff}
              staffs={staffs.staffs}
            />
          )}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route path="/departments/:departmentId" component={StaffWithDepartment} />
        <Route
          path="/departments"
          component={() => <Department departments={departments.departments}
          staffs={staffs.staffs}
           />
          }
        />
        <Route
          path="/luong"
          component={() => <Salary luong={staffssalary.staffssalary} />}
        />
        <Redirect to="/staff"/>
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
