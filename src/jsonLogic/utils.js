import * as jsonLogic from 'json-logic-js';
import './customOperators';
import { number, string, boolean, date } from './parsers';

const parserConfig = { number, string, boolean, date };

export function parseValue(value, parser) {
  return parserConfig[parser] ? parserConfig[parser](value) : string(value);
}

export function evaluateJsonLogicOperator(dependsOn = {}, values = {}) {
  const { operator = {}, fields = [] } = dependsOn;
  const data = fields.reduce((seed, { name, parser }) => {
    const value = parseValue(values[name], parser);
    seed[name] = value;
    return seed;
  }, {});
  return jsonLogic.apply(operator, data);
}
