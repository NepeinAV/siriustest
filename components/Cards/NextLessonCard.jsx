import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import RoundButton from '../Button/RoundButton';

import Arrow from '../../public/arrow.svg';

const cardStyle = css`
  align-items: center;
  background: linear-gradient(192.41deg, #c71eb4 -5.64%, #6f2fb8 94.22%);
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.226972);
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 20px;
`;

const titleStyle = css`
  color: white;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
`;

const Title = styled.div`
  ${titleStyle}
`;

const Timer = styled.div`
  ${titleStyle}
  opacity: 0.6;
`;

const TimerNumbers = styled.span`
  font-size: 24px;
  line-height: 33px;
`;

const NextLessonCard = props => {
  return (
    <div css={cardStyle}>
      <div>
        <Title>Следующий урок через:</Title>
        <Timer>
          <TimerNumbers>04 </TimerNumbers>ч.
          <TimerNumbers>12 </TimerNumbers>мин.
        </Timer>
      </div>
      <RoundButton theme="violet">
        <Arrow />
      </RoundButton>
    </div>
  );
};

export default NextLessonCard;
