import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import DishDetail from "./DishdetailComponent";
import {Link} from "react-router-dom";
import {Loading} from "./LoadingComponent";


function RenDerMenuItem({dish, toClick}) {
  return(
/* CPN cha (Main CPN) đã truyền toClick vào vào props để có thể sử dụng toClick phải có props và sau khi click sẽ truyền dish.id qua CPN cha, sau đó CPN cha sẽ gọi hàm onDishSelect(dishId) để thay đổi selectedDish: dish.id ở state */
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
  );
}

const Menu = (props)=>{
      // vì MenuComponents không phải là Component cha nên muốn sử dụng dishes đc thiết lập ở CPN cha là main CPN nên phải sử dụng props
      const menu = props.dishes.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenDerMenuItem dish={dish} toClick={props.toClick} />
          </div>
        
        );
      });
  
      if(props.dishes.isLoading){
        return(
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
      }else if(props.dishes.errMess){
        return(
          <div className="container">
            <div className="row">
              <h4>{props.dishes.errMess}</h4>
            </div>
          </div>
        );
      }else
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
            
              <div className="col-12">
                <h3>Menu</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              {menu}
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
