import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const type = {
  primary: css`
    background: linear-gradient(120.06deg, #f64867 7.06%, #ba2d86 95.26%);
    color: white;
    font-weight: bold;
  `,
  secondary: css`
    background-color: white;
    border: 1px solid rgba(42, 42, 59, 0.2);
    font-weight: 800;
  `,
};

const sizes = {
  medium: css`
    border-radius: 32px;
    font-size: 12px;
    line-height: 12px;
    padding: 13px 20px;
  `,
  small: css`
    border-radius: 20px;
    font-size: 11px;
    line-height: 8px;
    padding: 10px 14px;
  `,
};

const CommonButton = styled.button`
  border: none;

  ${props => type[props.type]}
  ${props => sizes[props.size]}
`;

const Button = props => {
  return <CommonButton {...props}>{props.children}</CommonButton>;
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['medium', 'small']),
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
};

export default Button;
