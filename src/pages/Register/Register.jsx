import React from 'react';

import { Navigate } from 'react-router-dom';

import RegistrationForm from '../../components/FormsAll/RegistrationForm/RegistrationForm';
import Section from '../../components/Section/Section';

import { useAuth } from '../../contexts/authContext';

const Register = () => {
  // If user is alredy logged in redirect him to home page
  const { token } = useAuth();
  return (
    <>
      {token && <Navigate to="/" replace={true} />}
      <Section title="Register">
        <RegistrationForm />
      </Section>
    </>
  );
};

export default Register;
