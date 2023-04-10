import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ProductPage from '../pages/ProductPage/ProductPage';
import SuccessPage from '../pages/SuccessPage/SuccessPage';
import Profile from '../pages/Profile/Profile';
import Header from '../components/HeaderAll/Header/Header';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';

import { PrivateRoutes } from './PrivateRoutes';
import ScrollToTop from './ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:slug" element={<ProductPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />

        <Route element={<PrivateRoutes />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
