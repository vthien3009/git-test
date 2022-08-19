import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const luongCB = 3000000;
const luongGio = 200000 / 8;

function RenderSalary({ salary }) {
  return (
    <Card>
      <CardTitle className="p-3 bg-white rounded m-2">{salary.name}</CardTitle>
      <CardBody>
        <CardText>Mã nhân viên: {salary.id}</CardText>
        <CardText>Hệ số lương: {salary.salaryScale}</CardText>
        <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
        <CardText className="bg-light p-2 shadow">
          Lương:{" "}
          {(salary.salaryScale * luongCB + salary.overTime * luongGio).toFixed(
            0
          )}
        </CardText>
      </CardBody>
    </Card>
  );
}

const Salary = (props) => {
  const [sortSalary, setSortSalary] = useState(false);

  const salary = props.luong
    .sort((a, b) =>
      sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale
    )
    .map((ss) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
          <RenderSalary salary={ss} />
        </div>
      );
    });

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
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => setSortSalary(!sortSalary)}
        >
          Sắp xếp theo hệ thông lương
        </button>
        <div className="row shadow mb-3">{salary}</div>
      </div>
    </FadeTransform>
  );
};
export default Salary;
