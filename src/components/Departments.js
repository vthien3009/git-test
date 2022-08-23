import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import {  Stagger, Fade } from "react-animation-components";
//Presentational
class RenderDept extends Component {
  render() {
    return (
      <Link to={`departments/${this.props.dept.id}`}>
        <Card>
          <CardTitle className="m-2">{this.props.dept.name}</CardTitle>
          <CardBody>
            <CardText>Số lượng nhân viên: {this.props.staffNo.length}</CardText>
          </CardBody>
        </Card>
      </Link>
    );
  }
}
//Container component
function Department(props) {
  console.log(props);
  if (props.departments.isLoading) {
    return <Loading />;
  }
  //dung map de fetch toan bo data tu props cua Main Component

  const departments = props.departments.departments.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
        <Fade in>
          <RenderDept
            dept={department}
            staffNo={props.staffs.filter(
              (staff) => staff.departmentId === department.id
            )}
          />
        </Fade>
      </div>
    );
  });

  return (
    <Stagger in>
      <div className="container">
        <div className="row shadow m-3">{departments}</div>
      </div>
    </Stagger>
  );
}
export default Department;
