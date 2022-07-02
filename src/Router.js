import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import SuccessPage from './pages/SuccessPage';
import Profile from './pages/Profile';
import Header from './components/Header/Header';

import { PrivateRoutes } from './components/PrivateRoutes';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:slug" element={<ProductPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />

        <Route element={<PrivateRoutes />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
