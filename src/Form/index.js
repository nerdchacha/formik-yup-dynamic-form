import React, { Component } from 'react';
import { withFormik } from 'formik';
import { formData } from '../formData';
import { createYupSchema } from '../yup/schemaCreator';
import fieldMap from './fieldMap';

const createValidationSchema = () => createYupSchema(formData);

const handleSubmit = (values, actions) => {
  console.log('values', values);
  console.log('actions', actions);
};

const mapPropsToValues = () =>
  formData.reduce(
    (seed, { id, value = '' }) => Object.assign({}, seed, { [id]: value }),
    {},
  );

class Form extends Component {
  renderFormElements = () =>
    formData.map(item => {
      const Component = fieldMap[item.type];
      const {
        errors,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        touched,
      } = this.props;
      const { type, id, label, placeholder, dependsOn } = item;
      let error = errors[item.id] || null;
      return type ? (
        <Component
          key={id}
          label={label}
          name={id}
          placeholder={placeholder}
          values={values}
          onChange={handleChange}
          error={error}
          setFieldValue={setFieldValue}
          dependsOn={dependsOn}
          touched={touched[item.id]}
          onBlur={handleBlur}
        />
      ) : null;
    });

  render() {
    return (
      <div className="form">
        <h1>Form here</h1>
        <form onSubmit={this.props.handleSubmit}>
          {this.renderFormElements()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  handleSubmit,
  mapPropsToValues,
  validationSchema: createValidationSchema,
})(Form);
