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
  const [nhanVien, setnhanVien] = useState({
    staffs: STAFFS,
  });

  const [departments, setdepartments] = useState({
    departments: DEPARTMENTS,
  });

  // them staff vao staffs
  const addStaff = (staff) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newStaff = { id, ...staff };
    setnhanVien(nhanVien.push(newStaff));
    console.log(newStaff);
    console.log(this.state.staffs);
  };

  console.log(nhanVien);
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={
          nhanVien.staffs.filter(
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
            <StaffList onAdd={addStaff} staffs={nhanVien.staffs} />
          )}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route
          path="/bophan"
          component={() => <Department dept={nhanVien.departments} />}
        />
        <Route
          path="/luong"
          component={() => <Salary luong={nhanVien.staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
