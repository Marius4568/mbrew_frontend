import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

import 'normalize.css';
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
