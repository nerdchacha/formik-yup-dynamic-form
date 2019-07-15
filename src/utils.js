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

export function eveluateJsonLogicOperator(dependsOn = {}, values = {}) {
  const { operator = {}, fields = [] } = dependsOn;
  const data = fields.reduce((seed, { name, type }) => {
    const value = convertValue(values[name], type);
    seed[name] = value;
    return seed;
  }, {});
  const result = jsonLogic.apply(operator, data);
  return result;
}

export const compose = (...args) => value =>
  args.reduceRight((seed, item) => item(seed), value);
