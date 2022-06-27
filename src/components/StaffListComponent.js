import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelectedStaff: null,
      
    };
  }

  onSelecteStaff(staff) {
    this.setState({ onSelectedStaff: staff });
  }





  render() {
    const StaffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.columDefault}>
          <Card key={staff.id} onClick={() => this.onSelecteStaff(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">

        <div className="row">{StaffList}</div>

      </div>
    );
  }
}
export default StaffList;
