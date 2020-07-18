import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const themes = {
  blue: css`
    fill: #4a42f6;
  `,
  violet: css`
    fill: #540182;
  `,
  green: css`
    fill: #2a92a9;
  `,
  rose: css`
    fill: #bf2f83;
  `,
};

const Button = styled.button`
  background: white;
  border: 1px solid white;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    path {
      ${props => themes[props.theme]}
    }
  }
`;

const RoundButton = ({ theme, children, ...props }) => (
  <Button theme={theme} {...props}>
    {children}
  </Button>
);

RoundButton.propTypes = {
  arrowColor: PropTypes.oneOf(['blue', 'violet', 'green', 'rose']),
};

RoundButton.defaultProps = {
  arrowColor: 'blue',
};

export default RoundButton;
