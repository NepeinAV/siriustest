import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import Button from 'components/Button';

const blockStyles = css`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  justify-content: space-between;
  line-height: 18px;
  margin-top: 15px;
`;

const RemainBlock = styled.div`
  display: flex;
  align-items: center;
`;

const RemainNumber = styled.div`
  align-items: center;
  background: linear-gradient(99.33deg, #f64867 7.06%, #ba2d86 95.26%);
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  line-height: 25px;
  margin-left: 10px;
  min-height: 38px;
  min-width: 38px;
`;

const LessonsRemain = props => {
  const { remain } = props;

  return (
    <div css={blockStyles}>
      <RemainBlock>
        Осталось уроков:
        <RemainNumber>{remain}</RemainNumber>
      </RemainBlock>
      <Button
        css={css`
          text-transform: uppercase;
          white-space: nowrap;
          margin-left: 20px;
        `}
      >
        Добавить уроки
      </Button>
    </div>
  );
};

LessonsRemain.propTypes = {
  remain: PropTypes.number,
};

export default LessonsRemain;
