import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import {Loading} from "./LoadingComponent"

function RenderDish(props) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={props.dish.image} value={props.dish.name} />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments(props) {//chua hoan thanh phút 20 trở đi https://www.coursera.org/learn/front-end-react/lecture/Q1cLW/exercise-video-redux-actions HDHT b8
  console.log(props.comments);
  if (props.comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {props.comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if(props.isLoading){
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }else if(props.errMess){
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        <div className="row">
          {/* sử dụng đoạn này để chạy hàm render(dish) được chọn */}
          <RenderDish dish={props.dish} />
          {/* sử dụng đoạn này để lấy renderComments(comment) tương ứng với dish được chọn */}
          <RenderComments comments={props.comments} 
                          addComment={props.addComment}
                          dishId = {props.dish.id}
                           />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
