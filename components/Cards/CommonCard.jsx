import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import RoundButton from '../Button/RoundButton';

import Arrow from '../../public/arrow.svg';

const themes = {
  blue: css`
    background: linear-gradient(199.15deg, #334ffe 7.38%, #6c2feb 95.63%);
  `,
  violet: css`
    background: linear-gradient(180deg, #b00cc8 0%, #600398 100%);
  `,
  green: css`
    background: linear-gradient(187.95deg, #1ac9b7 10.29%, #4da8ee 90.89%);
  `,
};

const Card = styled.div`
  ${props => themes[props.theme]}

  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
  display: flex;
  justify-content: space-between;
  min-height: 110px;
  padding: 0 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  color: white;
  margin-bottom: 10px;
  margin-right: 15px;
`;

const Description = styled.div`
  margin-right: 10px;
  font-size: 13px;
  line-height: 18px;
  color: white;
  opacity: 0.8;
`;

const BigDescription = styled.div`
  font-weight: 600;
  margin-right: 10px;
  font-size: 16px;
  line-height: 22px;
  color: white;
`;

const CommonCard = props => {
  const { title, description, theme } = props;

  return (
    <Card theme={theme}>
      {title ? (
        <div
          css={css`
            align-self: flex-start;
            margin: 15px 0;
          `}
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      ) : (
        <BigDescription>{description}</BigDescription>
      )}
      <RoundButton theme={theme}>
        <Arrow />
      </RoundButton>
    </Card>
  );
};

CommonCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['blue', 'violet', 'green']),
};

CommonCard.defaultProps = {
  theme: 'blue',
};

export default CommonCard;
