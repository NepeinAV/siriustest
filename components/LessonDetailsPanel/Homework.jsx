import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Section from './Section';

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const OkIcon = styled.img`
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #2a2a3b;
`;

const Homework = props => {
  const { items } = props;

  return (
    items.length && (
      <Section title="Домашнее задание:">
        {items.map(item => (
          <Item key={item}>
            <OkIcon src="ok.svg" alt="" />
            <Text>{item}</Text>
          </Item>
        ))}
      </Section>
    )
  );
};

Homework.propTypes = {
  items: PropTypes.array,
};

Homework.defaultProps = {
  items: [],
};

export default Homework;
