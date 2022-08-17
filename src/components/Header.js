import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar dark expand="md" color="primary">
        <div className="container">
          <NavbarToggler />
          <NavbarBrand className="mr-auto" href="/" >
            <img
              src="assets/images/logo.png"
              height="30"
              width="40"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse navbar>
              <Nav>
                <NavItem>
                  <Link className="text-white" to="/nhanvien">
                    <span className="fa fa-users fa-lg m-2"> Nhân Viên</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="text-white" to="/departments">
                    <span className="fa fa-id-card-o fa-lg m-2"> Phòng Ban</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="text-white" to="/luong">
                    <span className="fa fa-money fa-lg m-2"> Bảng Lương</span>
                  </Link>
                </NavItem>
              </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
export default Header;
