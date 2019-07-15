import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    const { errorComponent, label, name, values, onChange } = this.props;
    const value = values[name] || "";
    return (
      <div>
        <label>{label}</label>
        <br />
        <input type="checkbox" name={name} value={value} onChange={onChange} />
        {errorComponent}
      </div>
    );
  }
}

export default CheckBox;
