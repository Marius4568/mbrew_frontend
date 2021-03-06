import React, { useEffect, useState } from 'react';
import * as S from './Header.styles.js';

import { AnimatePresence } from 'framer-motion';

import Nav from '../Nav/Nav.jsx';
import { useGlobalShopContext } from '../../../contexts/shopContext.js';
import Cart from '../../CartAll/Cart/Cart';

import { useViewportScroll } from 'framer-motion';

const variants = {
  initial: {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',

    y: 0,
  },

  visible: {
    opacity: 1,
    backgroundColor: 'var(--main-light-color)',
    y: 0,
  },

  hidden: { y: -100, opacity: 0 },

  hiddenMobile: { y: -160, opacity: 0 },
};

const Header = () => {
  const { showCart, showHeader, setShowHeader } = useGlobalShopContext();

  const { scrollY } = useViewportScroll();

  const [styleVariant, setStyleVariant] = useState(variants.initial);

  function update(y) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Initial state
    if (y === 0) {
      if (showHeader) {
        setShowHeader(false);
      }
      return setStyleVariant(variants.initial);
    }

    // When scrolling up
    if (scrollY?.current < scrollY?.prev && scrollY?.current > 0) {
      setStyleVariant(variants.visible);
    }

    // When scrolling down and we are at least 160px down
    if (scrollY?.current > 0 && scrollY?.current > scrollY?.prev) {
      setStyleVariant(variants.visible);
    }

    // When scrolling down and we are at least half the viewport height down
    if (scrollY?.current > windowHeight / 2 && scrollY?.current > scrollY?.prev) {
      setShowHeader(false);

      if (windowWidth < 501) {
        return setStyleVariant(variants.hiddenMobile);
      }
      setStyleVariant(variants.hidden);
    }
  }

  useEffect(() => {
    return scrollY.onChange((y) => update(y));
  });

  return (
    <S.Header variants={variants} animate={showHeader ? variants.visible : styleVariant} transition={{ duration: 0.3 }}>
      {<Nav />}
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </S.Header>
  );
};

export default Header;
