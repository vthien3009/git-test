import React from "react";
import { Link } from "react-router-dom";

function RenderStaffItem(props) {
  console.log(props);
  // const listNhanVien = props.staffs.map((nv) => {
    return (
      <Link to={`/nhanvien/${props.staff.id}`}>
        <div key={props.staff.id}>
          <div className="col-12 m-1">
            <img src={props.staff.image} alt={props.staff.name} />
            <p center>{props.staff.name}</p>
          </div>
        </div>
      </Link>
    );

  // return (
  //   <div className="container">
  //     <div className="row">{listNhanVien}</div>
  //   </div>
  // );
}
export default RenderStaffItem;
