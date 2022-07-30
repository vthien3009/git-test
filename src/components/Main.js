import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Department from "./Departments";
import Salary from "./Salary";
import { Switch, Route } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../data/staffList";

function Main() {
  const [staffs, setnhanVien] = useState(STAFFS);

  const [departments, setdepartments] = useState(DEPARTMENTS);

  // them staff vao staffs
  const addStaff = (staff) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newStaff = { id, ...staff };
    setnhanVien(staffs.concat([newStaff]));
    console.log(newStaff);
    console.log(staffs);
  };
staffs
  console.log(staffs);
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={
          staffs.filter(
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
            <StaffList onAdd={addStaff} staffs={staffs} />
          )}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route
          path="/bophan"
          component={() => <Department dept={departments} />}
        />
        <Route
          path="/luong"
          component={() => <Salary luong={staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
