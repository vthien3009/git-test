import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
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
import RenderStaffItem from "./RenderStaffItem";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
      modalOpen: false,
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "Sale",
      annualLeave: 0,
      overTime: 0,
      salary: 30000,
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
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
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value==="checkbox"?target.checked:target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
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
    else if (this.touched.name && name.length >= 10)
      errors.name = "Name should be <= 10 characters";
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
          <div className="col-12 col-md-6 mt-3">
            <div className="row">
              <div className="col-10 col-md-10">
                <h3>Nhan vien</h3>
              </div>
              <div className="col-2 col-auto">
                <Button>
                  <span className="fa fa-plus fa-lg"></span>
                </Button>
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
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit = {this.handleSubmit}>
              <Row className="control-group">
                <Label htmlFor = "name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input 
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={this.state.name}
                    valid={errors.name ===""}
                    invalid={errors.name!==""}
                    onBlur = {this.handleBlur('name')}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>

      </div>
    );
  }
}

// function StaffList(props) {
//   const [NhanVien] = useState({
//     nameF:"",
//     modalOpen: false,
//     doB: "",
//     startDate: '',
//     touched:{
//       doB:false,
//       startDate: false
//     }
//   });
//   this.timNhanVien = this.timNhanVien.bind(this);
//   console.log(props);

//   function timNhanVien (event){
//     event.preventDefault();
//     const names = event.target.nameS.value;
//     this.setState({ nameF: nameS});
//   }

//    const listNhanVien = props.staffs
//    .filter((val)=>{
//     if(NhanVien.nameF==='') return val;
//     else if(val.name.tolowerCase().includes(NhanVien.nameF.toLocaleLowerCase())
//     )
//       return val;
//     return 0;
//    })
//    .map((nv) => {
//       return (
//         <Link to={`/nhanvien/${nv.id}`}>
//           <div key={nv.id}>
//             <div className="col-12 m-1">
//               <img src={nv.image} alt={nv.name} />
//               <p center>{nv.name}</p>
//             </div>
//           </div>
//         </Link>
//       );
//     });

//   return (
//     <div className="container">

//         <form onSubmit={this.timNhanVien} className="form-group row mt-3">
//           <div className="col-8 col-md-8">
//             <input
//             type="text"
//             name="nameS"
//             className= "form-control"
//             placeholder = "Tim kiem nhan vien"
//             />
//           </div>
//           <div className="col-4 col-md-4">
//             <button className="btn btn-success" type="submit" >Tim Kiem</button>
//           </div>
//         </form>

//       <div className="row">{listNhanVien}</div>
//     </div>
//   );
// }
export default StaffList;
