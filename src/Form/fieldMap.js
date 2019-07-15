import TextField from "./textfield";
import DateOfBirth from "./dateOfBirth";
import CheckBox from "./checkbox";
import withErrorComponent from "../HOC/withErrorComponent";
import withShowElement from "../HOC/withShowElement";
import { compose } from "../utils";

const withShowElementAndErrorComponent = compose(
  withShowElement,
  withErrorComponent
);

export default {
  text: withShowElementAndErrorComponent(TextField),
  dob: withShowElementAndErrorComponent(DateOfBirth),
  checkbox: withShowElementAndErrorComponent(CheckBox)
};
