import React, { useMemo, useCallback } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import RoundButton from '../Button/RoundButton';

import Close from '../../public/close.svg';
import Arrow from '../../public/arrow.svg';

const arrow = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

const header = {
  visible: { marginTop: 0 },
  hidden: { marginTop: -30 },
};

const Header = styled(motion.div)`
  background: linear-gradient(112.33deg, #f64867 7.06%, #ba2d86 95.26%);
  box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.226972);
  display: flex;
  flex-direction: column;
  min-height: 128px;
`;

const HeaderBody = styled.div`
  display: flex;
  padding: 20px 15px;
`;

const HeaderIcon = styled.img`
  height: 34px;
  min-width: 28px;
`;

const HeaderArrow = styled(motion.div)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 20px;

  svg {
    transform: rotateZ(-90deg);

    path {
      fill: white;
    }
  }
`;

const LessonInfo = styled.div`
  flex-grow: 2;
  margin-left: 18px;
  margin-top: -3px;
`;

const LessonTitle = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

const LessonDate = styled.div`
  color: white;
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  opacity: 0.7;
`;

const PaidLabel = styled(motion.div)`
  background: #1ac9b7;
  border-radius: 50px;
  color: #ffffff;
  display: inline-block;
  flex-grow: 1;
  font-size: 10px;
  font-weight: 800;
  line-height: 14px;
  margin-top: 10px;
  padding: 7px 10px;
  text-align: center;
  text-transform: uppercase;
`;

const PanelHeader = props => {
  const {
    lesson: { title, isPaid, period },
    isOpened,
    closePanel,
    isFullyOpened,
    setIsFullyOpened,
  } = props;

  const formattedPeriod = useMemo(() => {
    const startDate = period[0];
    const endDate = period[1];

    const month = startDate.toLocaleString('ru-RU', { month: 'long' });
    const day = startDate.getDate();
    const startTime = startDate.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    const endTime = endDate.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' });

    return `${day} ${month}, ${startTime}-${endTime}`;
  }, [period]);

  const toggleLessonDetails = useCallback(() => setIsFullyOpened(!isFullyOpened), [isFullyOpened]);
  const closePanelCompletely = useCallback(() => {
    setIsFullyOpened(false);
    closePanel();
  }, [isFullyOpened]);

  const isPanelFullyOpen = useMemo(() => isOpened && isFullyOpened);

  return (
    <Header animate={isPanelFullyOpen ? 'hidden' : 'visible'} variants={header} transition={{ duration: 0.3 }}>
      <HeaderArrow
        onClick={toggleLessonDetails}
        animate={isPanelFullyOpen ? 'hidden' : 'visible'}
        variants={arrow}
        transition={{ duration: 0.3 }}
      >
        <Arrow />
      </HeaderArrow>
      <HeaderBody>
        <HeaderIcon src="/notebook.svg" alt="" />
        <LessonInfo>
          <LessonTitle>{title}</LessonTitle>
          <LessonDate>{formattedPeriod}</LessonDate>
          <AnimatePresence>
            {isPanelFullyOpen && (
              <PaidLabel
                transition={{ duration: 0.3 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                {isPaid ? 'Оплачено' : 'Не оплачено'}
              </PaidLabel>
            )}
          </AnimatePresence>
        </LessonInfo>
        <RoundButton
          theme="rose"
          css={css`
            box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.5);
          `}
          onClick={closePanelCompletely}
        >
          <Close
            css={css`
              width: 10px;
              height: 10px;
              background-size: contain;
            `}
          />
        </RoundButton>
      </HeaderBody>
    </Header>
  );
};

PanelHeader.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string,
    isPaid: PropTypes.bool,
    period: PropTypes.array,
  }),
  isOpened: PropTypes.bool.isRequired,
  closePanel: PropTypes.func.isRequired,
  isFullyOpened: PropTypes.bool.isRequired,
  setIsFullyOpened: PropTypes.func.isRequired,
};

export default PanelHeader;
