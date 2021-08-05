import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const paragraph1 = css`
  font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
`;

const smallestException = css`
  font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
  font-weight: ${({ theme }) => theme.typography.smallestException.fontWeight};
  line-height: ${({ theme }) => theme.typography.smallestException.lineHeight};
`;

export const TextStyleVariantsMap = {
  paragraph1,
  smallestException,
};

const TextBase = styled.span`
  ${({ variant }) => {
    return TextStyleVariantsMap[variant];
  }}
`;

const Text = ({ tag, variant, children }) => {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

export default Text;
