import React from "react";
import { Link } from "react-router-dom";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { FadeTransform } from "react-animation-components";

function RenderStaff({ staff }) {
  if (staff != null) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <CardImg width="100%" src={staff.image} alt={staff.name} />
          </div>
          <div className="col-9">
            <CardBody>
              <CardTitle>Ho va ten: {staff.name}</CardTitle>
              <CardText>
                Ngay sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngay vao cong ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phong ban: {staff.department.name}</CardText>
              <CardText>So ngay nghi con lai: {staff.annualLeave}</CardText>
              <CardText>So ngay da lam them: {staff.overTime}</CardText>
            </CardBody>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function StaffDetail(props) {
  console.log(props);
  if (props.nv != null) {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-70%)",
        }}
      >
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.nv.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.nv.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row mb-3">
            <RenderStaff staff={props.nv} />
          </div>
        </div>
      </FadeTransform>
    );
  } else {
    return <div></div>;
  }
}

export default StaffDetail;
