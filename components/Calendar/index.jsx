import React, { useState, useCallback, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Calendar as ReactCalendar } from 'react-calendar';

import Arrow from '../../public/arrow.svg';
import LessonDetailsPanel from '../LessonDetailsPanel';
import { motion } from 'framer-motion';

const formatDay = (_, date) => date.toLocaleString('ru-RU', { weekday: 'narrow' });
const formatMonthYear = (_, date) => {
  const month = date.toLocaleString('ru-RU', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${year}`;
};

const calendarOptions = {
  formatShortWeekday: formatDay,
  formatMonthYear: formatMonthYear,
  next2Label: null,
  prev2Label: null,
  locale: 'ru-RU',
  minDate: new Date(),
  minDetail: 'month',
  nextLabel: <Arrow />,
  prevLabel: (
    <Arrow
      css={css`
        transform: rotateY(180deg);
      `}
    />
  ),
};

const calendarStyles = css`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.226972);
  font-family: Open Sans;

  .react-calendar__navigation__label {
    background: transparent;
    border: none;
  }

  .react-calendar__month-view__weekdays {
    margin-bottom: 17px;
    padding-bottom: 10px;
    position: relative;

    &:after {
      content: '';
      background: rgba(42, 42, 59, 0.2);
      border-radius: 2px;
      bottom: -10px;
      height: 2px;
      left: 19px;
      position: absolute;
      width: calc(100% - 38px);
    }
  }

  .react-calendar__month-view__days {
    margin-bottom: 25px;
  }

  .react-calendar__month-view__weekdays,
  .react-calendar__month-view__days {
    padding: 0 4px;
  }

  .react-calendar__month-view__weekdays__weekday {
    box-sizing: border-box;
    color: rgba(42, 42, 59, 0.5);
    font-size: 13px;
    font-weight: bold;
    line-height: 18px;
    text-align: center;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__navigation__arrow {
    background: transparent;
    border: none;
    padding: 0;

    &[disabled] {
      path {
        fill: rgba(42, 42, 59, 0.3);
      }
    }
  }

  .react-calendar__navigation {
    padding: 20px;
  }

  .react-calendar__navigation__label__labelText {
    color: #2a2a3b;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
  }

  .react-calendar__month-view__days__day {
    background: white;
    border: none;
    color: #2a2a3b;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    padding: 12px 0;
    position: relative;
    text-align: center;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__month-view__days__day[disabled] {
    color: rgba(42, 42, 59, 0.3);
  }

  .react-calendar__tile--active {
    outline: none;
    position: relative;

    abbr {
      color: white;
      position: relative;
      z-index: 1;
    }

    &:after {
      background: #b81199;
      border-radius: 50%;
      content: '';
      height: 32px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 32px;
      z-index: 0;
    }
  }
`;

const Loader = ({ className }) => {
  return (
    <div className={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const StyledLoader = styled(Loader)`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: translateX(-50%);
  margin-left: 50%;
  margin-top: 30px;

  div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #b81199;
    animation: lds-grid 1.2s linear infinite;
  }

  div:nth-of-type(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }

  div:nth-of-type(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }

  div:nth-of-type(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }

  div:nth-of-type(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }

  div:nth-of-type(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }

  div:nth-of-type(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }

  div:nth-of-type(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }

  div:nth-of-type(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }

  div:nth-of-type(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }

  @keyframes lds-grid {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }
`;

const Calendar = props => {
  const [lessons, setLessons] = useState([]);
  const [lesson, setLesson] = useState(null);
  const [isLessonDetailOpened, setIsLessonDetailsOpened] = useState(false);
  const [isLessonsLoaded, setIsLessonsLoaded] = useState(false);

  const onClickDay = useCallback((value, _) => {
    const lesson = findLessonByStartDate(value);

    setLesson(lesson);
    setIsLessonDetailsOpened(true);
  });

  const closePanel = useCallback(() => setIsLessonDetailsOpened(false));

  const findLessonByStartDate = date => {
    const a = new Date(date).setHours(0, 0, 0, 0);

    return lessons.find(lesson => new Date(lesson.period[0]).setHours(0, 0, 0, 0) === a);
  };

  const getTileContent = ({ _, date, view }) => {
    const lesson = findLessonByStartDate(date);

    return (
      lesson &&
      view === 'month' && (
        <div
          css={css`
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 5px;
            height: 5px;
            background: #b81199;
            border-radius: 50%;
          `}
        ></div>
      )
    );
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('/api/lessons')
        .then(res => res.json())
        .then(lessons => {
          setLessons(
            lessons.map(lesson => ({ ...lesson, period: [new Date(lesson.period[0]), new Date(lesson.period[1])] })),
          );
          setIsLessonsLoaded(true);
        });
    }, 1000);
  }, []);

  return !isLessonsLoaded ? (
    <StyledLoader />
  ) : (
    <>
      <motion.div
        initial={{ y: -10 }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ReactCalendar
          {...calendarOptions}
          onClickDay={onClickDay}
          tileContent={getTileContent}
          css={calendarStyles}
          {...props}
        />
      </motion.div>
      {lesson && <LessonDetailsPanel lesson={lesson} isOpened={isLessonDetailOpened} closePanel={closePanel} />}
    </>
  );
};

export default Calendar;
