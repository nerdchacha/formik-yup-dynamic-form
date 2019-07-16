import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    const {
      errorComponent,
      label,
      name,
      values,
      onChange,
      onBlur,
    } = this.props;
    const value = values[name] === true;
    return (
      <div>
        <label>{label}</label>
        <br />
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorComponent}
      </div>
    );
  }
}

export default CheckBox;
