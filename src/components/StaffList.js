import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

function StaffList(props) {
  const listNhanVien = props.staffs.map((nv) => {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Link to={`/nhanvien/${nv.id}`}>
          <div key={nv.id}>
            <div className="col-12 m-1">
              <img src={nv.image} alt={nv.name} />
              <p center>{nv.name}</p>
            </div>
          </div>
        </Link>
      </FadeTransform>
    );
  });
  return (
    <div className="container">
      <div className="row">{listNhanVien}</div>
    </div>
  );
}
export default StaffList;
