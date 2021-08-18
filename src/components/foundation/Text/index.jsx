import React from "react";
import styled, { css } from "styled-components";
import get from "lodash/get";
import PropTypes from "prop-types";
import propToStyle from "../../../theme/utils/propsToStyle";

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  title,
  smallestException,
  paragraph1,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle("textAlign")};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

export function Text({ variant, textAlign, tag, children, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      textAlign={textAlign}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "p", "li", "a", "span"]),
  variant: PropTypes.oneOf(["title", "paragraph1", "smallestException"]),
};
