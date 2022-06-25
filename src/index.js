import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './global.css';



import Router from './Router';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>,
);
