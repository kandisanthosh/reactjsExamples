import React, { Component } from "react";

class Name extends Component {
  constructor(args) {
    super();
    console.log("Name constructor loaded !!!");
  }
  render() {
    return (
      <div>
        <h1>Student Names </h1>
      </div>
    );
  }
}

export default Name;