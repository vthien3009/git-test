import React from "react";
import { Link } from "react-router-dom";

function DepartmentDetail(props) {
  const listNhanVien = props.staff.map((staff) => {
    return (
      <Link to={`/nhanvien/${staff.id}`}>
        <div key={staff.id}>
          <div className="col-12 m-1">
            <img src={staff.image} alt={staff.name} />
            <p center>{staff.name}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="container">
      <h2>{props.departments[0].name}</h2>
      <div className="row">{listNhanVien}</div>
    </div>
  );
}
export default DepartmentDetail;
