import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import * as S from './Header.styles.js';

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
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // When scrolling up
    if (scrollY?.current < scrollY?.prev && scrollY?.current > 0) {
      setStyleVariant(variants.visible);
    }
    // When scrolling down and we are between 0 and half window height down
    else if (scrollY?.current > 0 && scrollY?.current < windowHeight / 2 && scrollY?.current > scrollY?.prev) {
      setStyleVariant(variants.visible);
    }
    // When scrolling down and we are at least half window height down
    else if (scrollY?.current > windowHeight / 2 && scrollY?.current > scrollY?.prev) {
      setShowHeader(false);

      if (windowWidth < 501) {
        return setStyleVariant(variants.hiddenMobile);
      }
      setStyleVariant(variants.hidden);
    }

    // Initial state
    else if (y === 0) {
      setStyleVariant(variants.initial);
    }
  }

  useEffect(() => {
    return scrollY.onChange((y) => update(y));
  });

  return (
    <S.Header variants={variants} animate={showHeader ? variants.visible : styleVariant} transition={{ duration: 0.3 }}>
      {<Nav />}
      {showCart && <Cart />}
    </S.Header>
  );
};

export default Header;
