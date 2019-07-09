import * as jsonLogic from "json-logic-js";

export function convertValue(value, type) {
  switch (type) {
    case "number": {
      // NOTE: Number("") will return 0
      if (value.trim() === "") {
        return NaN;
      }
      return Number(value);
    }
    case "string": {
      return value.toString();
    }
    case "boolean": {
      if (typeof value === "string") {
        const map = { true: true, false: false };
        return map[value];
      }
      return !!value;
    }
    default: {
      return value;
    }
  }
}

export function showField(dependsOn = [], values = {}) {
  let showField = true;
  if (!dependsOn.length) {
    return showField;
  }
  dependsOn.forEach(({ field, activate }) => {
    activate.forEach(({ operator, value, type }) => {
      const dependentFieldValue = convertValue(values[field], type);
      const result = jsonLogic.apply({
        [operator]: [value, dependentFieldValue]
      });
      showField = showField && result;
    });
  });
  return showField;
}
