import * as jsonLogic from "json-logic-js";

import { convertValue } from "../utils";

export function showDependingValidationError(dependsOn = [], values = {}) {
  let showError = true;
  dependsOn.forEach(({ field, activate }) => {
    activate.forEach(({ operator, value, type }) => {
      const dependentFieldValue = convertValue(values[field], type);
      const result = jsonLogic.apply({
        [operator]: [value, dependentFieldValue]
      });
      showError = showError && result;
    });
  });
  return showError;
}
