import React, { Component } from "react";
import PersonDetailsProps from "./PersonDetailsProps";

export default class StateAndProps extends Component {

  constructor(args) {
    super(args);
    console.log("State and properties exammple !!!");
    this.state = {
      name: "Hello santhosh kandi ",
      age: "32",
      email: "santhoshkandi123@gmail.com",
      phone: "9900000009090",
    };
  }
  render() {
    return (
      <div>
        <h1>State and Properties practise example</h1>
        <h1>-------------------------------------------</h1>
        <PersonDetailsProps
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          phone={this.state.phone}
        >
     </PersonDetailsProps>
        <div></div>
      </div>
    );
  }
}
