import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import RenderStaffItem from "./RenderStaffItem";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
      modalOpen: false,
      doB: "",
      startDate: "",
      touched: {
        doB: false,
        startDate: false,
      },
    };
    this.timNhanVien = this.timNhanVien.bind(this);
  }
  timNhanVien(event) {
    event.preventDefault(event);
    const nameS = event.target.nameS.value;
    this.setState({ nameF: nameS });
  }

  handleSubmit(){
    
  }

  render() {
    // const errors = this.validate(
    //   this.state.name,
    //   this.state.department,
    //   this.state.salaryScale,
    //   this.state.doB,
    //   this.state.annualleave,
    //   this.state.overTime
    // );

    const stafflist = this.props.staffs
      .filter((val) => {
        if (this.state.nameF === "") return val;
        else if (
          val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
        )
          return val;
        return 0;
      })
      .map((val) => {
        return (
          <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={val.id}>
            <RenderStaffItem staff={val} />
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
            <form onSubmit={this.handleSubmit} className="form-group row ">
              <div className="col-8 col-md-8">
                <input
                  type="text"
                  name="nameS"
                  className="form-control"
                  placeholder="Tim kiem nhan vien"
                />
              </div>
              <div className="col-4 col-md-4">
                <button className="btn btn-success" type="submit">
                  Tim Kiem
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* render stafflist */}
        <div className="row">

        </div>
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
