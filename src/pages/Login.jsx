import React from 'react';

import { Navigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';

import { useAuth } from '../lib/authContext';

const Login = () => {
  const { token } = useAuth();

  return (
    <>
      {token && <Navigate to="/" replace={true} />}
      <LoginForm />
    </>
  );
};

export default Login;
