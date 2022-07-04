import React from 'react';
import Nav from './Nav';

import { primaryNavItems } from '../../navItems';

export default {
  title: 'Components/Nav',
  component: Nav,
};

export const PrimaryNav = () => <Nav navItems={primaryNavItems} />;
