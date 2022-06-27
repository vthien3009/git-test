import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import {STAFFS} from "./shared/staffs"


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

      </div>
      );
  }
}

export default App;
