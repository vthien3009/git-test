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


function RenDerMenu({dish, toClick}) {
  return(
/* CPN cha (Main CPN) đã truyền toClick vào vào props để có thể sử dụng toClick phải có props và sau khi click sẽ truyền dish.id qua CPN cha, sau đó CPN cha sẽ gọi hàm onDishSelect(dishId) để thay đổi selectedDish: dish.id ở state */
      <Card onClick={() => toClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
  );
}

const Menu = (props)=>{
      // vì MenuComponents không phải là Component cha nên muốn sử dụng dishes đc thiết lập ở CPN cha là main CPN nên phải sử dụng props
      const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenDerMenu dish={dish} toClick={props.toClick} />
          </div>
        
        );
      });
  
      return (
        <div className="container">
          <div className="row">{menu}</div>
          <div className="row">
            <DishDetail dish={props.selectedDish} />
          </div>
        </div>
      );
}

  // renderDish(dish) {
  //   if (dish != null) {
  //     return (
  //       <Card>
  //         <CardImg width="100%" src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle>{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   } else {
  //     return <div></div>;
  //   }
  // }





export default Menu;
