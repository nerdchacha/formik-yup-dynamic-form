import React, { Component } from "react";

class DateOfBirth extends Component {
  constructor(props) {
    super(props);
    const value = props.values[props.name] || {};
    const { day = "", month = "", year = "" } = value;
    this.state = {
      day: { value: day, touched: false },
      month: { value: month, touched: false },
      year: { value: year, touched: false }
    };
  }
  handleChange = (field, value) => {
    this.setState({ [field]: Object.assign({}, this.state[field], { value }) });
    const { day, month, year } = this.state;
    const config = {
      day: `${value}-${month.value}-${year.value}`,
      month: `${day.value}-${value}-${year.value}`,
      year: `${day.value}-${month.value}-${value}`
    };
    this.props.setFieldValue(this.props.name, config[field]);
  };
  handleBlur = (field, e) => {
    this.setState({
      [field]: Object.assign({}, this.state[field], { touched: true })
    });
    const { day, month, year } = this.state;
    const { onBlur } = this.props;
    const allTouchedConfig = {
      day: () => true && month.touched && year.touched && onBlur(e),
      month: () => true && day.touched && year.touched && onBlur(e),
      year: () => true && day.touched && month.touched && onBlur(e)
    };
    allTouchedConfig[field]();
  };
  render() {
    const { error, label, name, touched } = this.props;
    const renderError = error ? <strong>{error}</strong> : null;
    const { day, month, year } = this.state;
    return (
      <div>
        <label>{label}</label>
        <br />
        <input
          type="text"
          name={name}
          placeholder="day"
          value={day.value}
          onChange={e => this.handleChange("day", e.target.value)}
          onBlur={e => this.handleBlur("day", e)}
        />
        <input
          type="text"
          name={name}
          placeholder="month"
          value={month.value}
          onChange={e => this.handleChange("month", e.target.value)}
          onBlur={e => this.handleBlur("month", e)}
        />
        <input
          type="text"
          name={name}
          placeholder="year"
          value={year.value}
          onChange={e => this.handleChange("year", e.target.value)}
          onBlur={e => this.handleBlur("year", e)}
        />
        {touched && renderError}
      </div>
    );
  }
}

export default DateOfBirth;
