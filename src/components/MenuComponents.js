import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    // vì MenuComponents không phải là Component cha nên muốn sử dụng dishes đc thiết lập ở CPN cha là main CPN nên phải sử dụng props
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          {/* CPN cha (Main CPN) đã truyền toClick vào vào props để có thể sử dụng toClick phải có props và sau khi click sẽ truyền dish.id qua CPN cha, sau đó CPN cha sẽ gọi hàm onDishSelect(dishId) để thay đổi selectedDish: dish.id ở state */}
          <Card onClick={() => this.props.toClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <DishDetail dish={this.props.selectedDish} />
        </div>
      </div>
    );
  }
}

export default Menu;
