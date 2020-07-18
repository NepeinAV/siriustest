import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuItem = styled.li`
  align-items: center;
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 10px;
  list-style: none;
  margin: 0;
  padding: 0 15px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 28px;
  }

  a {
    align-items: center;
    display: flex;
    width: 100%;
  }
`;

const MenuItemIcon = styled.span`
  margin-right: 16px;
  text-align: center;
  width: 26px;
`;

const MenuLogo = styled.img`
  margin: 29px 0 30px 0;
`;

const MenuUl = styled.ul`
  margin: 0 15px;
  padding: 30px 0 0 0;
`;

const menuItems = [
  {
    title: 'Расписание занятий',
    icon: 'schedule.svg',
  },
  {
    title: 'Ментальная арифметика',
    icon: 'arithmetics.svg',
  },
  {
    title: 'Тетрадь',
    icon: 'notebook.svg',
  },
  {
    title: 'Баланс и оплата',
    icon: 'payments.svg',
  },
  {
    title: 'Настройки',
    icon: 'settings.svg',
  },
  {
    title: 'Связаться с менеджером',
    icon: 'headphones.svg',
  },
  {
    title: 'Проверить камеру и звук',
    icon: 'camera.svg',
  },
  {
    title: 'Выйти',
    icon: 'logout.svg',
  },
];

const Menu = props => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
      `}
    >
      <MenuUl>
        {menuItems.map(({ icon, title }) => {
          return (
            <Link href="/" key={title}>
              <MenuItem>
                <a>
                  <MenuItemIcon>
                    <img src={icon} alt="" />
                  </MenuItemIcon>
                  {title}
                </a>
              </MenuItem>
            </Link>
          );
        })}
      </MenuUl>
      <MenuLogo src="/menulogo.svg" />
    </div>
  );
};

export default Menu;
