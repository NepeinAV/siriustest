import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SectionBlock = styled.div`
  padding-bottom: 20px;

  &:not(:last-of-type) {
    border-bottom: 2px solid rgba(42, 42, 59, 0.2);
    margin-bottom: 16px;
  }
`;

const SectionTitle = styled.div`
  color: #2a2a3b;
  font-size: 11px;
  font-weight: 800;
  line-height: 15px;
  text-transform: uppercase;
`;

const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
