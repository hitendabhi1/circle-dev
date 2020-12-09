import React, { Component } from "react";

import "./css/circle.css";

class Circle extends Component {
  state = {};

  render() {
    let display = this.props.display ? "1" : "0";
    return (
      <div
        className="circle"
        style={{ opacity: display }}
        onClick={this.props.renderFunction}
      ></div>
    );
  }
}

export default Circle;
