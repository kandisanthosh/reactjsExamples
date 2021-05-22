import React, { Component } from "react";

class List extends Component {
  constructor(args) {
    super();
    console.log("List componenent co nstructor executed !!!!");
  }
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.data.name}</li>
        </ul>
      </div>
    );
  }
}

export default List;
