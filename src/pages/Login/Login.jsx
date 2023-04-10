import React from 'react';

import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/FormsAll/LoginForm/LoginForm';

import Section from '../../components/Section/Section';

import { useAuth } from '../../contexts/authContext';

const Login = () => {
  const { token } = useAuth();

  return (
    <>
      {token && <Navigate to="/" replace={true} />}
      <Section title="Login">
        <LoginForm />
      </Section>
    </>
  );
};

export default Login;
