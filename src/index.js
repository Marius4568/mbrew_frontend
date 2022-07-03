import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { GlobalShopContext } from './lib/shopContext';
import { AuthProvider } from './lib/authContext';

import Router from './Router';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalShopContext>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </GlobalShopContext>
    </AuthProvider>
  </React.StrictMode>,
);
