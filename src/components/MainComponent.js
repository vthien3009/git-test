import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    // console.log(this.state.dishes);
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
        // truyền vào MenuCPN dishes để render ra bên ngoài
          dishes={this.state.dishes}
        //   truyền toClick qua CPN con
          toClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
            // truyền vào DishDetail với dish = dishes.filter (lọc ra trong dishes những dish có id tương ứng với (this.state.selectedDish) đã được thay đổi ở MenuCpn)
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
