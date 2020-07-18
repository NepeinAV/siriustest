import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Menu from './Menu';
import Shields from './Shields';

const menu = {
  opened: {
    height: '100vh',
  },
  closed: {
    height: '64px',
  },
};

const shields = {
  visible: { opacity: 1, x: 0, display: 'inline', transition: { delay: 0.15 } },
  hidden: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.15 },
    transitionEnd: {
      display: 'none',
    },
  },
};

const logo = {
  visible: { opacity: 1, x: 0, display: 'block', transition: { delay: 0.15 } },
  hidden: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.15 },
    transitionEnd: {
      display: 'none',
    },
  },
};

const HeaderTag = styled(motion.header)`
  background: linear-gradient(0deg, #690297 0%, #bf1399 100%);
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const MenuButtonOpen = styled.button`
  background: transparent url('/hamburger.svg');
  border: none;
  height: 16px;
  width: 28px;
`;

const MenuButtonClose = styled.button`
  background: transparent url('/menuclose.svg');
  border: none;
  height: 20px;
  width: 20px;
`;

const Logo = styled(motion.img)`
  height: 34px;
  width: 53px;
`;

const UserBlock = styled.div`
  align-items: center;
  display: flex;
`;

const UserPicture = styled.button`
  background-clip: padding-box;
  background-color: white;
  border-radius: 50%;
  border: solid 3px transparent;
  box-sizing: padding-box;
  cursor: pointer;
  height: 36px;
  position: relative;
  width: 36px;

  &:before {
    content: '';
    background: linear-gradient(to bottom right, #df1855 12%, #a50ece 47.04%, #500771 100%);
    border-radius: inherit;
    bottom: 0;
    left: 0;
    margin: -3px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

const HeaderTop = styled.div`
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 15px;
  padding: 15px 0;
`;

const Header = props => {
  const [isMenuOpen, setMenuVisibility] = useState(false);

  const toggleMenu = useCallback(() => setMenuVisibility(!isMenuOpen), [isMenuOpen]);

  return (
    <HeaderTag
      animate={isMenuOpen ? 'opened' : 'closed'}
      variants={menu}
      initial="closed"
      transition={{ duration: 0.3 }}
    >
      <HeaderTop>
        {isMenuOpen ? <MenuButtonClose onClick={toggleMenu} /> : <MenuButtonOpen onClick={toggleMenu} />}
        <Link href="/">
          <a>
            <Logo src="/mainlogo.svg" animate={!isMenuOpen ? 'visible' : 'hidden'} variants={logo} initial="visible" />
          </a>
        </Link>
        <UserBlock>
          <motion.span animate={isMenuOpen ? 'visible' : 'hidden'} variants={shields} initial="hidden">
            <Shields />
          </motion.span>
          <UserPicture />
        </UserBlock>
      </HeaderTop>
      <Menu />
    </HeaderTag>
  );
};

export default Header;
