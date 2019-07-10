import React, { Component } from "react";
import { eveluateJsonLogicOperator } from "../utils";

class CheckBox extends Component {
  render() {
    const { error, label, name, values, onChange, dependsOn } = this.props;
    const value = values[name] || "";
    const renderError = error ? <strong>{error}</strong> : null;
    const showElement = eveluateJsonLogicOperator(dependsOn, values);
    if (!showElement) {
      return "";
    }
    return (
      <div>
        <label>{label}</label>
        <br />
        <input type="checkbox" name={name} value={value} onChange={onChange} />
        {renderError}
      </div>
    );
  }
}

export default CheckBox;
