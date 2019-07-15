import React, { Component } from "react";

class TextField extends Component {
  render() {
    const {
      errorComponent,
      label,
      name,
      placeholder,
      values,
      onChange,
      onBlur
    } = this.props;
    const value = values[name] || "";
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
        {errorComponent}
      </div>
    );
  }
}

export default TextField;
