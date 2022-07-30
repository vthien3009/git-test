import React, { Component } from "react";
import {
  Button,
  Modal,
  Col,
  Form,
  Input,
  ModalHeader,
  ModalBody,
  Row,
  Label,
  FormFeedback,
  
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import RenderStaffItem from "./RenderStaffItem";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "",
      annualLeave: 0,
      overTime: 0,
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

  handleSubmit = (event) => {
    event.preventDefault();
    const newStaff = {
      name: this.state.name,
      doB: this.state.doB,
      startDate: this.state.startDate,
      department: this.state.department,
      salaryScale: this.state.salaryScale,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: this.state.image,
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
            <Form onSubmit={this.handleSubmit}>
              <Row className="control-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={this.state.name}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input
                    type="Date"
                    className="form-control"
                    id="doB"
                    name="doB"
                    value={this.state.doB}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    type="Date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="department" md={4}>
                  Bộ phận
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    className="form-control"
                    id="department"
                    name="department"
                    value={this.state.department}
                    valid={errors.department === ""}
                    invalid={errors.department !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                  >
                    <option>Sale</option>
                    <option>IT</option>
                    <option>Marketing</option>
                  </Input>
                  <FormFeedback>{errors.department}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="salaryScale"
                    name="salaryScale"
                    value={this.state.salaryScale}
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                    onBlur={this.handleBlur("salaryScale")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="annualLeave"
                    name="annualLeave"
                    value={this.state.annualLeave}
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Label htmlFor="overTime" md={4}>
                  Số ngày tăng ca
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="overTime"
                    name="overTime"
                    value={this.state.overTime}
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                    onBlur={this.handleBlur("overTime")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.overTime}</FormFeedback>
                </Col>
              </Row>
              <Row className="control-group mt-2">
                <Col md={8}>
                <Button type="submit" color="primary">
                    Add
                </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StaffList;
