import React, { useMemo } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Shield = styled.div`
  background: url(/shield.svg) no-repeat;
  height: 34px;
  left: ${props => props.index * 8}px;
  position: absolute;
  width: 32px;
`;

const ShieldsStyle = css`
  flex-direction: row-reverse;
  height: 34px;
  margin-right: 6px;
  margin-top: 1px;
  position: relative;
  width: 56px;
`;

const Shields = ({ number }) => {
  const shields = useMemo(
    () =>
      Array(number)
        .fill(0)
        .map((_, index) => <Shield index={index} key={index} />),
    [number],
  );

  return <div css={ShieldsStyle}>{shields}</div>;
};

Shields.propTypes = {
  number: PropTypes.number,
};

Shields.defaultProps = {
  number: 4,
};

export default Shields;
