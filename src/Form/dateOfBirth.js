import React, { Component } from "react";

class DateOfBirth extends Component {
  constructor(props) {
    super(props);
    const value = props.values[props.name] || {};
    const { day = "", month = "", year = "" } = value;
    this.state = { day, month, year };
  }
  handleDayChange = e => {
    const value = e.target.value;
    this.setState({ day: value });
    const { month, year } = this.state;
    this.props.setFieldValue("dob", `${value}-${month}-${year}`);
  };
  handleMonthChange = e => {
    const value = e.target.value;
    this.setState({ month: value });
    const { day, year } = this.state;
    this.props.setFieldValue("dob", `${day}-${value}-${year}`);
  };
  handleYearChange = e => {
    const value = e.target.value;
    this.setState({ year: value });
    const { day, month } = this.state;
    this.props.setFieldValue("dob", `${day}-${month}-${value}`);
  };
  render() {
    const renderError = this.props.error ? (
      <strong>{this.props.error}</strong>
    ) : null;
    const { name } = this.props;
    const { day, month, year } = this.state;
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <input
          type="text"
          name={name}
          placeholder="day"
          value={day}
          onChange={this.handleDayChange}
        />
        <input
          type="text"
          name={name}
          placeholder="month"
          value={month}
          onChange={this.handleMonthChange}
        />
        <input
          type="text"
          name={name}
          placeholder="year"
          value={year}
          onChange={this.handleYearChange}
        />
        {renderError}
      </div>
    );
  }
}

export default DateOfBirth;
