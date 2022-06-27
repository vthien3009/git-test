import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import {STAFFS} from "./shared/staffs"
import StaffList from "./components/StaffListComponent"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList staffs = {this.state.staffs}/>
      </div>
      );
  }
}

export default App;
