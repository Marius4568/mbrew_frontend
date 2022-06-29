import React from 'react';

import { Navigate } from 'react-router-dom';

import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

import { useAuth } from '../lib/authContext';

const Register = () => {
  // If user is alredy logged in redirect him to home page
  const { token } = useAuth();
  return (
    <>
      {token && <Navigate to="/" replace={true} />}
      <RegistrationForm />
    </>
  );
};

export default Register;
