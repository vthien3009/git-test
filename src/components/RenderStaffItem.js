import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderStaffItem({item, isLoading, errMess}) {
  console.log( isLoading, errMess);
  // const listNhanVien = props.staffs.map((nv) => {
    if (isLoading) {
      return <Loading />;
    } else if (errMess) {
      return <h4>{errMess}</h4>;
    } else {
  return (
    <Link to={`/nhanvien/${item.id}`}>
      <div key={item.id} className='border'>
        <div className="col-12 m-1">
          <img src={item.image} alt={item.name } className="center-block ml-2" />
          <p className="text-center">{item.name}</p>
        </div>
      </div>
          {/* <Button type="submit" color="warning">
            Delete
          </Button> */}
    </Link>
  );
        }
  // return (
  //   <div className="container">
  //     <div className="row">{listNhanVien}</div>
  //   </div>
  // );
}
export default RenderStaffItem;
