import React, { Component } from "react";
import {
  Button,
  Modal,
  Col,
  ModalHeader,
  ModalBody,
  Row,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { deleteStaff } from "../redux/ActionCreators";
import RenderStaffItem from "./RenderStaffItem";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: 30000,
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
        department: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
      },
    };
    console.log(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ nameF: event.target.value });
    console.log(this.props);
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  returnDepartment = (value) => {
    if (value == "Sale") {
      return "Dept01";
    }else if (value == 'HR'){
      return "Dept02";
    }else if (value == 'Marketing'){
      return "Dept03";
    }else if (value == 'IT'){
      return "Dept04";
    }else if (value == "Finance"){
      return "Dept05";
    }
  };

  handleSubmit = (value) => {
    // event.preventDefault();
    console.log(value);
    const newStaff = {
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      departmentId: this.returnDepartment(value.department),
      salaryScale: value.salaryScale,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: "/assets/images/alberto.png",
    };
    this.props.onAdd(newStaff);
  };

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  validate(
    name,
    department,
    salaryScale,
    doB,
    startDate,
    annualLeave,
    overTime
  ) {
    const errors = {
      name: "",
      department: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    if (this.state.touched.name && name.length < 3)
      errors.name = "Name should be >= 3 characters";
    else if (this.state.touched.name && this.state.name.length >= 50)
      errors.name = "Name should be <= 50 characters";
    if (this.state.touched.department && department.length < 1)
      errors.department = "Yêu cầu nhập";
    if (this.state.touched.salaryScale && salaryScale.length < 1)
      errors.salaryScale = "Yêu cầu nhập";
    if (this.state.touched.annualLeave && annualLeave.length < 1)
      errors.annualLeave = "Yêu cầu nhập";
    if (this.state.touched.overTime && overTime.length < 1)
      errors.overTime = "Yêu cầu nhập";
    if (this.state.touched.doB && doB.length < 1) errors.doB = "Yêu cầu nhập";
    if (this.state.touched.startDate && startDate.length < 1)
      errors.startDate = "Yêu cầu nhập";
    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.department,
      this.state.salaryScale,
      this.state.doB,
      this.state.startDate,
      this.state.annualLeave,
      this.state.overTime
    );

    const stafflist = this.props.staffs
      .filter((staff) => {
        if (this.state.nameF === "") return staff;
        else if (
          staff.name.toLowerCase().includes(this.state.nameF.toLowerCase())
        )
          return staff;
        return 0;
      })
      .map((staff) => {

        return (
          <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={staff.id}>
            <RenderStaffItem staff={staff} />
            <Button type="submit" color="primary" className="mt-1 ml-5" onClick={()=>this.props.onClickButtonDelete(staff.id)}>
            Delete
          </Button>
          </div>
        );
      });

    //render giao dien staff list
    return (
      //bao gom them nv va o tim kiem nhan vien
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-4">
            <div className="row">
              <div className="col-10 col-md-10">
                <h3>Nhan vien</h3>
              </div>
              <div className="col-2 col-auto">
                <button onClick={this.toggleModal}>
                  <span className="fa fa-plus fa-lg"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <form onChange={this.handleChange} className="form-group row ">
              <div className="col-12 col-md-12">
                <input
                  type="text"
                  name="nameS"
                  className="form-control"
                  placeholder="Tim kiem nhan vien"
                />
              </div>
            </form>
          </div>
        </div>
        {/* render stafflist */}
        <div className="row">{stafflist}</div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
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
                    value={this.state.salaryScale}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
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
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
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
                    value={this.state.overTime}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
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
  }
}

export default StaffList;
