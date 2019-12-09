import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import "./textinput.css";

class TextInput extends Component {
  render() {
    return (
      <div className={this.props.textInputClassName}>
        <p className="">{this.props.textInputLabel}</p>
        <Input type="text" />
      </div>
    );
  }
}

export default TextInput;
