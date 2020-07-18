import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Section from './Section';

const Info = styled.div`
  display: flex;
  margin-top: 17px;
`;

const Photo = styled.img`
  margin-right: 15px;
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #2a2a3b;
  margin-top: -3px;
`;

const Subject = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #2a2a3b;
  opacity: 0.75;
  margin-top: 2px;
`;

const Teacher = props => {
  const {
    data: { name, subject },
  } = props;

  return (
    <Section title="Преподаватель:">
      <Info>
        <Photo src="teacherphoto.png" alt="" />
        <div>
          <Name>{name}</Name>
          <Subject>{subject}</Subject>
        </div>
      </Info>
    </Section>
  );
};

Teacher.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Teacher;
