import React from "react";
import { Link } from "react-router-dom";

function RenderStaffItem(props) {
  const listNhanVien = props.staffs.map((nv) => {
    return (
      <Link to={`/nhanvien/${nv.id}`}>
        <div key={nv.id}>
          <div className="col-12 m-1">
            <img src={nv.image} alt={nv.name} />
            <p center>{nv.name}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="container">
      <div className="row">{listNhanVien}</div>
    </div>
  );
}
export default RenderStaffItem;
