import React, { Component } from "react";

export default class PersonDetailsProps extends Component {
  constructor(props) {
    super(props);
    console.log("print person details ", props);
  }
  render() {
    return (
      <div>
        <h1>passing  State value  to props example</h1>
        <ul>
            <li>
               Name :  {this.props.name}
            </li>
            <li>
              Age:   {this.props.age}
            </li>
            <li>
             Email :   {this.props.email}
            </li>
            <li>
              Phone number :  {this.props.phone}
            </li>
        </ul>
      </div>
    );
  }
}
