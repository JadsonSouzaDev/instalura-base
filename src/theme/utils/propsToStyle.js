import { css } from "styled-components";
import { breakpointsMedia } from "./breakpointsMedia";

const propToStyle = (propName) => {
  return (props) => {
    const propValue = props[propName];
    if (typeof propValue === "string") {
      return { [propName]: propValue };
    }

    if (typeof propValue === "object") {
      return breakpointsMedia({
        xs: { [propName]: propValue.xs },
        sm: { [propName]: propValue.sm },
        md: { [propName]: propValue.md },
        lg: { [propName]: propValue.lg },
        xl: { [propName]: propValue.xl },
      });
    }

    return;
  };
};

export default propToStyle;
