import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginForm.styles.js';
// Notification handling
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components, component data
import FormInput from '../FormInput/FormInput.jsx';
import { loginInputs } from '../../formInputs';
import Button from '../Button/Button.jsx';
// Form handling and validation
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const navigate = useNavigate();

  const [buttonLoading, setbuttonLoading] = useState('');

  // Handling the posting of form data
  const sendLoginData = async (reqBody) => {
    setbuttonLoading('loading');

    const data = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}user/login`, {
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
      navigate('/');
    }
  };

  // Form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('The provided email is not valid').required('Please provide your email'),
      password: Yup.string().required('Please provide a password'),
    }),

    onSubmit: (values) => {
      sendLoginData({
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <S.LoginForm>
      <form onSubmit={formik.handleSubmit}>
        {loginInputs.map((input) => (
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
          Login
        </Button>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Slide}
        />
      </form>
    </S.LoginForm>
  );
};

export default LoginForm;
