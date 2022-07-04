import React, { Component } from "react";
import Home from "./HomeComponent"
import Menu from "./MenuComponents";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import {Switch, Route, Redirect} from "react-router-dom"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }


  render() {
    // console.log(this.state.dishes);
    const HomePage = ()=>{
      return (
        <Home />
      );
    }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
