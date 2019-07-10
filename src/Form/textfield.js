import React, { Component } from "react";
import { showField } from "../utils";

class TextField extends Component {
  render() {
    const {
      error,
      label,
      name,
      placeholder,
      values,
      onChange,
      dependsOn,
      touched,
      onBlur
    } = this.props;
    const value = values[name] || "";
    const renderError = error ? <strong>{error}</strong> : null;
    const showElement = showField(dependsOn, values);
    if (!showElement) {
      return "";
    }
    return (
      <div>
        <label>{label}</label>
        <br />
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {touched && renderError}
      </div>
    );
  }
}

export default TextField;
