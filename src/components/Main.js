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
  const [nhanVien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });
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
            component={() => <StaffList staffs={nhanVien.staffs} />}
        />
        <Route  path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route  path="/bophan" 
                component={()=><Department dept={nhanVien.departments}/>}
        />
        <Route path="/luong" component={()=><Salary luong={nhanVien.staffs} />} 
        
        />
      </Switch>
    <Footer />
    </div>
  );
}
export default Main;
