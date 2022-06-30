import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";



  function RenderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} value={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function RenderComments(comments) {
    console.log(comments);
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments&&comments.map((comment) => {
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

  const DishDetail = (props)=>{
    if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {/* sử dụng đoạn này để chạy hàm render(dish) được chọn */}
            <RenderDish dish={props.dish}/>
            {/* sử dụng đoạn này để lấy renderComments(comment) tương ứng với dish được chọn */}
            <RenderComments comments ={props.dish.comments}/>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

export default DishDetail;
