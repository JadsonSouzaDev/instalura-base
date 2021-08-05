import { css } from "styled-components";
import { breakpoints } from "../index";

export function breakpointsMedia(cssByBreakpoint) {
  return Object.keys(breakpoints)
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      (breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    );
}
