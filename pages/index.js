import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

import { NextLessonCard, CommonCard } from 'components/Cards';
import LessonsRemain from 'components/LessonsRemain';
import Calendar from 'components/Calendar';

const Main = styled.main`
  padding: 15px;
  margin-top: 64px;
`;

const Welcome = styled.h1`
  font-size: 22px;
  line-height: 30px;
  margin: 0;
  font-weight: normal;
  padding-bottom: 3px;
`;

const UserName = styled.div`
  font-weight: 600;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    height: 3px;
    left: 0;
    right: 0;
    background: #b81199;
    position: absolute;
    bottom: -3px;
    border-radius: 18px;
  }
`;

const Cards = styled.div`
  margin-top: 30px;

  div:not(:first-child) {
    margin-top: 15px;
  }
`;

export default function Home() {
  return (
    <Main>
      <Welcome>
        Добро пожаловать, <UserName>Владимир!</UserName>
      </Welcome>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        <NextLessonCard />
      </div>
      <Calendar
        css={css`
          margin-top: 30px;
        `}
      />
      <LessonsRemain remain={3} />
      <Cards>
        <CommonCard title="Мои награды" description="Краткое описание раздела с наградами ученика" theme="blue" />
        <CommonCard title="Абакус" description="Потренируй свой навык ментальной арифметики." theme="violet" />
        <CommonCard description="Приведи друга и получи урок в подарок " theme="green" />
      </Cards>
    </Main>
  );
}
