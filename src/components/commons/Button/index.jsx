import styled, { css } from "styled-components";
import get from "lodash/get";
import { TextStyleVariantsMap } from "../../foundation/Text";

const ButtonGhost = css`
  color: ${({ theme, variant }) => {
    return get(theme, `colors.${variant}.main.color`);
  }};
  background: transparent;
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => {
    return get(theme, `colors.${variant}.main.color`);
  }};
  color: ${({ theme, variant }) => {
    return get(theme, `colors.${variant}.main.contrastText`);
  }};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};

  ${TextStyleVariantsMap.smallestException}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
