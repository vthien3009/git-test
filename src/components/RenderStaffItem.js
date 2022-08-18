import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaffItem(props) {
  // console.log(props);
  // const listNhanVien = props.staffs.map((nv) => {
  return (
    <Link to={`/nhanvien/${props.staff.id}`}>
      <div key={props.staff.id} className='border'>
        <div className="col-12 m-1">
          <img src={props.staff.image} alt={props.staff.name } className="center-block ml-2" />
          <p className="text-center">{props.staff.name}</p>
        </div>
      </div>
          {/* <Button type="submit" color="warning">
            Delete
          </Button> */}
    </Link>
  );

  // return (
  //   <div className="container">
  //     <div className="row">{listNhanVien}</div>
  //   </div>
  // );
}
export default RenderStaffItem;
