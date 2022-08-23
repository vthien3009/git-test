import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { Fade, Loop } from "react-animation-components";
function RenderStaffItem({ item, isLoading, errMess }) {
  console.log(item.length);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <Link to={`/nhanvien/${item.id}`}>
        <Loop in iterations={1.5}>
          <Fade>
            <div key={item.id} className="border">
              <div className="col-12 m-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="center-block ml-2"
                />
                <p className="text-center">{item.name}</p>
              </div>
            </div>
          </Fade>
        </Loop>
      </Link>
    );
  }
}
export default RenderStaffItem;
