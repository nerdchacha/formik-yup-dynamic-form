import React, { Component } from "react";
import { withFormik } from "formik";
import { formData } from "../formData";
import { createYupSchema } from "../yup/schemaCreator";
import fieldMap from "./fieldMap";

const createValidationSchema = () => {
  return createYupSchema(formData);
};

const handleSubmit = (values, actions) => {
  console.log("values", values);
  console.log("actions", actions);
};

const mapPropsToValues = () => {
  let initialValues = {};
  formData.forEach(item => {
    initialValues[item.id] = item.value || "";
  });
  return initialValues;
};

class Form extends Component {
  renderFormElements = props =>
    formData.map((item, index) => {
      const Component = fieldMap[item.type];
      let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
      if (!item.type) {
        return "";
      }
      return (
        <Component
          key={index}
          label={item.label}
          name={item.id}
          placeholder={item.placeholder}
          values={props.values}
          onChange={props.handleChange}
          error={error}
          setFieldValue={props.setFieldValue}
          dependsOn={item.dependsOn}
          touched={props.touched[item.id]}
          onBlur={props.handleBlur}
        />
      );
    });

  render() {
    return (
      <div className="form">
        <h1>Form here</h1>
        <form onSubmit={this.props.handleSubmit}>
          {this.renderFormElements(this.props)}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  handleSubmit,
  validationSchema: createValidationSchema,
  mapPropsToValues: mapPropsToValues
})(Form);
