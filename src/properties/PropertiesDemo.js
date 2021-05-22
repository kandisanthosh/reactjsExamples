import React, { Component } from "react";

export default class PropertiesDemo extends Component {
  constructor(args) {
    super();
    console.log("properties Demo !!!!");
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}
