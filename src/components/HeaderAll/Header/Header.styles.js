import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
  background-color: rgba(255, 255, 255, 0);

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
  width: 100%;
  max-width: var(--max-supported-width);
  position: fixed;
  top: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding-top: 1rem;

  @media screen and (min-width: 500px) {
    padding: 1rem 0;
  }
`;

// 0 0 0.5rem 0 rgba(0, 0, 0, 0.05), 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.05)
//var(--main-light-color)
// ${document.querySelector('#hero') ? 'red' : 'blue'}
