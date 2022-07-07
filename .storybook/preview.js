import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalShopContext } from '../src/contexts/shopContext';
import { AuthContext } from '../src/contexts/authContext';
const queryClient = new QueryClient();

import '../src/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

addDecorator((story) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>{' '}
  </QueryClientProvider>
));

export const decorators = [
  (Story) => (
    <GlobalShopContext>
      <Story />
    </GlobalShopContext>
  ),
];
