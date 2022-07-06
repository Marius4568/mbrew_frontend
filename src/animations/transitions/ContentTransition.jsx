import React from 'react';

import { motion } from 'framer-motion';

import { fadeInFadeOut } from '../variants/fadeInFadeOut';

const ContentTransition = ({ children }) => {
  return (
    <motion.div
      variants={fadeInFadeOut}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ContentTransition;
