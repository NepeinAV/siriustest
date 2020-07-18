import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import cn from 'classnames';

import Button from 'components/Button';
import Teacher from './Teacher';
import Homework from './Homework';
import PanelHeader from './PanelHeader';

import Close from '../../public/close.svg';

const detailsPanel = {
  fully: { y: '0%', overflowY: 'auto' },
  partially: { y: 'calc(100% - 128px)', overflowY: 'hidden' },
  hidden: { y: '100%' },
};

const Block = styled(motion.div)`
  background: white;
  bottom: 0;
  left: 0;
  max-height: calc(100vh - 64px);
  overflow: auto;
  position: fixed;
  right: 0;
  transform: translateY(100%);
  z-index: 1;
`;

const Body = styled.div`
  padding: 15px;
`;

const LessonsDetailsPanel = props => {
  const {
    lesson: { teacher, homework },
    isOpened,
  } = props;

  const [isFullyOpened, setIsFullyOpened] = useState(false);

  const detailsPanelState = cn({
    hidden: !isOpened,
    partially: isOpened && !isFullyOpened,
    fully: isOpened && isFullyOpened,
  });

  return (
    <Block animate={detailsPanelState} variants={detailsPanel} transition={{ duration: 0.3 }}>
      <PanelHeader {...props} setIsFullyOpened={setIsFullyOpened} isFullyOpened={isFullyOpened} />
      <Body>
        <Teacher data={teacher} />
        <Homework items={homework} />
        <Button
          type="secondary"
          size="small"
          css={css`
            text-transform: uppercase;
            transform: translateX(50%);
          `}
        >
          Отменить урок
          <Close
            css={css`
              transform: scale(0.8);
              margin-bottom: -1px;
              margin-left: 9px;

              path {
                fill: #2a2a3b;
              }
            `}
          />
        </Button>
      </Body>
    </Block>
  );
};

LessonsDetailsPanel.propTypes = {
  lesson: PropTypes.shape({
    teacher: PropTypes.object,
    homework: PropTypes.array,
  }),
  isOpened: PropTypes.bool.isRequired,
  closePanel: PropTypes.func.isRequired,
};

export default LessonsDetailsPanel;
