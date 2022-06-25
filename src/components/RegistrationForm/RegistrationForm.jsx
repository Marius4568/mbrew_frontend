import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './RegistrationForm.styles.js';
// Notification handling
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components, component data
import FormInput from '../FormInput/FormInput.jsx';
import { registrationInputs } from '../../formInputs';
import Button from '../Button/Button.jsx';
// Form handling and validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [buttonLoading, setbuttonLoading] = useState('');

  // Handling the posting of form data
  const sendRegistrationData = async (reqBody) => {
    setbuttonLoading('loading');

    const data = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });

    const res = await data.json();

    setbuttonLoading('');

    if (res.error) {
      toast.error(res.error);
    }
    if (res.msg === 'User created') {
      navigate('/login');
    }
  };

  // Form handling
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please provide your name'),
      lastName: Yup.string().required('Please provide your last name'),
      email: Yup.string().email('The provided email is not valid').required('Please provide your email'),
      password: Yup.string()
        .required('Please provide a password')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 special character'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),

    onSubmit: (values) => {
      sendRegistrationData({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <S.RegistrationForm>
      <form onSubmit={formik.handleSubmit}>
        {registrationInputs.map((input) => (
          <>
            <FormInput
              key={input.id}
              value={formik.values[input.name]}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched[input.name] && formik.errors[input.name] ? (
              <p key={input.id + 'error'}>{formik.errors[input.name]}</p>
            ) : null}
          </>
        ))}

        <Button className={buttonLoading} type="submit">
          Submit
        </Button>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Slide}
        />
      </form>
    </S.RegistrationForm>
  );
};

export default RegistrationForm;
