import React from "react";
import { Link } from "react-router-dom";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { useState } from "react";
import { Button } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

function returnDepartment(value) {
  if (value == "Dept01") {
    return "Sale";
  } else if (value == "Dept02") {
    return "HR";
  } else if (value == "Dept03") {
    return "Marketing";
  } else if (value == "Dept04") {
    return "IT";
  } else if (value == "Dept05") {
    return "Finance";
  }
}


function RenderStaff({ staff }) {
  console.log(staff);
  if (staff != null) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <CardImg width="100%" src={staff.image} alt={staff.name} />
          </div>
          <div className="col-9">
            <CardBody>
              <CardTitle>Họ và tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Phòng ban: {returnDepartment(staff.departmentId)}
              </CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
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
  const [isModalOpen, setisModalOpen] = useState(false)

 function toggleModal() {
    // setisModalOpen({ isModalOpen: !isModalOpen });
    setisModalOpen(!isModalOpen);
  }

  function handleSubmit (value) {
    // event.preventDefault();
    console.log(value);
    const newStaff = {
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      departmentId: returnDepartment(value.department),
      salaryScale: value.salaryScale,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: "/assets/images/alberto.png",
    };
    props.onAdd(newStaff);
  };
  console.log(props);
  if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.staff.name}</h3>
            <hr />
          </div>
          <div className="ml-2 mb-2">
            <Button type="submit" color="primary" onClick={toggleModal}>
              Update
            </Button>
          </div>
        </div>
        <div className="row mb-3">
          <RenderStaff staff={props.staff} />
        </div>

        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Update Staff</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => handleSubmit(value)}>
              <Row className="control-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    className="form-control"
                    id="name"
                    name="name"
                    value={props.staff.name}
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    model=".name"
                    className="text-danger"
                    show="touched"
                    messages={{
                      required: "Yêu cầu ",
                      minlength: "nhập nhiều hơn 3 ký tự",
                      maxLength: "nhập ít hơn 30 lý tự",
                    }}
                  />
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".doB"
                    type="Date"
                    className="form-control"
                    id="doB"
                    name="doB"
                    defaultValue={dateFormat(props.staff.doB, "yyyy-mm-dd")}
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    model=".doB"
                    className="text-danger"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập ngày",
                    }}
                  />
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".startDate"
                    type="Date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    defaultValue={dateFormat(props.staff.startDate, "yyyy-mm-dd")}
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    model=".startDate"
                    className="text-danger"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập ngày",
                    }}
                  />
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="department" md={4}>
                  Bộ phận
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    type="select"
                    className="form-control"
                    id="department"
                    name="department"
                    defaultValue={ returnDepartment(props.staff.departmentId)}
                  >
                    <option>Sale</option>
                    <option>IT</option>
                    <option>Marketing</option>
                    <option>HR</option>
                    <option>Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    type="text"
                    className="form-control"
                    id="salaryScale"
                    name="salaryScale"
                    value={props.staff.salaryScale}
                    // onBlur={this.handleBlur("annualLeave")}
                    // onChange={this.handleInputChange}
                    validators={{
                      // required,
                      isNumber,
                    }}
                  />
                  <Errors
                    model=".salaryScale"
                    className="text-danger"
                    show="touched"
                    messages={{
                      // required: "Yêu cầu nhập ",
                      isNumber: "Vui lòng nhập số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    type="text"
                    className="form-control"
                    id="annualLeave"
                    name="annualLeave"
                    value={props.staff.annualLeave}
                    // onBlur={this.handleBlur("annualLeave")}
                    // onChange={this.handleInputChange}
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    model=".annualLeave"
                    className="text-danger"
                    show="touched"
                    messages={{
                      // required: "Yêu cầu nhập sô ngày nghỉ ",
                      isNumber: "Vui lòng nhập số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="overTime" md={4}>
                  Số ngày tăng ca
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    type="text"
                    className="form-control"
                    id="overTime"
                    name="overTime"
                    value={props.staff.overTime}
                    // onBlur={this.handleBlur("annualLeave")}
                    // onChange={this.handleInputChange}
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    model=".overTime"
                    className="text-danger"
                    show="touched"
                    messages={{
                      // required: "Yêu cầu nhập sô ngày nghỉ ",
                      isNumber: "Vui lòng nhập số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Col md={8}>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default StaffDetail;
