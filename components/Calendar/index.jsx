import React, { useState, useCallback } from 'react';
import { css, AnimatePresence } from '@emotion/core';
import { Calendar as ReactCalendar } from 'react-calendar';

import Arrow from '../../public/arrow.svg';
import LessonDetailsPanel from '../LessonDetailsPanel';

const lessons = [
  {
    id: 1,
    title: 'Курс',
    isPaid: true,
    period: [new Date(2020, 6, 18, 13, 0, 0, 0), new Date(2020, 6, 18, 13, 45, 0, 0)],
    teacher: {
      name: 'Ольга Титова',
      subject: 'Ментальная арифметика',
    },
    homework: ['Решить примеры 22-27 в рабочей тетради', 'Счет на время на онлайн-тренажере'],
  },
  {
    id: 2,
    title: 'Курс Ментальная арифметика',
    isPaid: true,
    period: [new Date(2020, 6, 31, 12, 0, 0, 0), new Date(2020, 6, 31, 12, 45, 0, 0)],
    teacher: {
      name: 'Ольга Титова',
      subject: 'Ментальная арифметика',
    },
    homework: ['Решить примеры 22-27 в рабочей тетради', 'Счет на время на онлайн-тренажере'],
  },
  {
    id: 3,
    title: 'Курс Ментальная арифметика',
    isPaid: true,
    period: [new Date(2020, 6, 21, 9, 0, 0, 0), new Date(2020, 6, 21, 9, 45, 0, 0)],
    teacher: {
      name: 'Ольга Титова',
      subject: 'Ментальная арифметика',
    },
    homework: ['Решить примеры 22-27 в рабочей тетради', 'Счет на время на онлайн-тренажере'],
  },
];

const formatDay = (_, date) => date.toLocaleString('ru-RU', { weekday: 'narrow' });
const formatMonthYear = (_, date) => {
  const month = date.toLocaleString('ru-RU', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${year}`;
};

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
  tileContent: getTileContent,
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

const Calendar = props => {
  const [lesson, setLesson] = useState(null);
  const [isLessonDetailOpened, setIsLessonDetailsOpened] = useState(false);

  const onClickDay = useCallback((value, _) => {
    const lesson = findLessonByStartDate(value);

    setLesson(lesson);
    setIsLessonDetailsOpened(true);
  });

  const closePanel = useCallback(() => setIsLessonDetailsOpened(false));

  return (
    <>
      <ReactCalendar {...calendarOptions} onClickDay={onClickDay} css={calendarStyles} {...props} />
      {lesson && <LessonDetailsPanel lesson={lesson} isOpened={isLessonDetailOpened} closePanel={closePanel} />}
    </>
  );
};

export default Calendar;
