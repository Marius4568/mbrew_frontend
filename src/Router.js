import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Product from './pages/Product';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:slug" element={<Product />} />
        <Route exact path="/about" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
