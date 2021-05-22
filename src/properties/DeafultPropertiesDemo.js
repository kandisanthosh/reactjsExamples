import React, { Component } from "react";

export default class DeafultPropertiesDemo extends Component {
  constructor(args) {
    super();
 
    console.log("Deafult properties Demo !!!");
  }
  defaultProps= {
    name: "Hi Santhosh kandi Deafult properties demo completed !!!"
 }
  render() {
    return (
      <div>
        <h1> value  :{this.defaultProps.name}</h1>
      </div>
    );
  }
}
