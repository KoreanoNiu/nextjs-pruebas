import React, { Component } from "react";

const uikit = require("uikit/dist/js/uikit.min");
const icons = require("uikit/dist/js/uikit-icons.min");

class UIKit extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== "undefined") {
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default UIKit;
