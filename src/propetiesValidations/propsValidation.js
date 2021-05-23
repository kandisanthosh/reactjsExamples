import React, { Component } from "react";
import PropTypes from "prop-types";
// npm install prop-types --save
export default class PropertiesValidationExample extends Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div>
        <h3>Number: {this.props.goodsPrice}</h3>
      </div>
    );
  }
}
// Validating prop types
PropertiesValidationExample.propTypes = {
  goodsPrice: PropTypes.number,
};
// Creating default props
PropertiesValidationExample.defaultProps = {
  goodsPrice: "GeeksForGeeks",
};
