import * as yup from "yup";
import moment from "moment";

yup.addMethod(yup.string, "minAge", function(age, message) {
  return this.test("minAge", message, function(value) {
    const { path, createError } = this;
    const enteredDate = moment(value, "DD-MM-YYYY", true);
    if (!enteredDate.isValid()) {
      return createError({ path, message });
    }
    const ageInMonths = moment().diff(enteredDate, "months");
    const ageDifference = ageInMonths / 12;
    if (ageDifference < age) {
      return createError({ path, message });
    }
    return true;
  });
});

yup.addMethod(yup.string, "maxAge", function(age, message) {
  return this.test("maxAge", message, function(value) {
    const { path, createError } = this;
    const enteredDate = moment(value, "DD-MM-YYYY", true);
    if (!enteredDate.isValid()) {
      return createError({ path, message });
    }
    const ageInMonths = moment().diff(enteredDate, "months");
    const ageDifference = ageInMonths / 12;
    if (ageDifference > age) {
      return createError({ path, message });
    }
    return true;
  });
});
