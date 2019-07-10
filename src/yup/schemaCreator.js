import * as yup from "yup";
import { eveluateJsonLogicOperator } from "../utils";
import "./customMethods";

function validationSchemaCreator(schema, config, values) {
  const { id, validationType, validations = [], dependsOn } = config;
  if (!yup[validationType]) {
    return schema;
  }
  const isFieldVisible = eveluateJsonLogicOperator(dependsOn, values);
  // Dont add validation to schema if field is hidden
  if (!isFieldVisible) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach(validation => {
    const { params, type, dependsOn: validationDependsOn = {} } = validation;
    // chain method if validation doesn't depends on anything
    if (!validationDependsOn.fields) {
      validator = validator[type](...params);
      return;
    }
    const showDependingError = eveluateJsonLogicOperator(
      validationDependsOn,
      values
    );
    // chain method if the condition is true for validation
    if (showDependingError) {
      validator = validator[type](...params);
    }
  });
  schema[id] = validator;
  return schema;
}

export function createYupSchema(data) {
  return yup.lazy(values => {
    const schema = data.reduce(
      (schema, config) => validationSchemaCreator(schema, config, values),
      {}
    );
    return yup.object().shape(schema);
  });
}
