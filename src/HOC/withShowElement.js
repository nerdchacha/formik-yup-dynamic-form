import React from "react";

import { eveluateJsonLogicOperator } from "../utils";

export default function withErrorComponent(InnerComponent) {
  return function WithErrorCopmponent(props) {
    const { dependsOn, values, ...rest } = props;
    const showElement = eveluateJsonLogicOperator(dependsOn, values);
    return showElement ? (
      <InnerComponent showElement={showElement} values={values} {...rest} />
    ) : null;
  };
}
