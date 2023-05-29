import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Images
import formLemon from '../../../assets/img/formLemon.png';
import * as S from './LoginForm.styles.js';
// Context
import { useAuth } from '../../../contexts/authContext';
// Notification handling
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components, component data
import ContentTransition from '../../../animations/transitions/ContentTransition';
import FormInput from '../FormInput/FormInput.jsx';
import { loginInputs } from '../formInputs';
import Button from '../../Button/Button.jsx';
// Form handling and validation
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const [loginButtonLoading, setLoginButtonLoading] = useState('');
  const [loginAsGButtonLoading, setLoginAsGLoading] = useState('');

  // Handling the posting of form data
  const sendLoginData = async (reqBody) => {
    try {
      setLoginButtonLoading('loading');
      const data = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });

      const res = await data.json();

      if (res.error) {
        toast.error(res.error);
      }
      if (res.msg === 'Successfully logged in') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userData', JSON.stringify(res.userData));
        setToken(true);
        navigate('/profile', { replace: true });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      return err.message;
    }
    finally {
      setLoginButtonLoading('');
    }
  };

  const guestLogin = async () => {
    console.log("workin")
    try {
      setLoginAsGLoading('loading');
      const data = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}user/guest_login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await data.json();

      if (res.error) {
        toast.error(res.error);
      }
      if (res.msg === 'Successfully logged in as guest') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userData', JSON.stringify(res.userData));
        setToken(true);
        navigate('/profile', { replace: true });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      return err.message;
    }
    finally {
      setLoginAsGLoading('');
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
    <S.LoginFormWrapper>
      <ContentTransition>
        <form onSubmit={formik.handleSubmit}>
          <S.LemonDecoration src={formLemon} />
          {loginInputs.map((input) => (
            <div key={input.id}>
              <FormInput
                value={formik.values[input.name]}
                {...input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched[input.name] && formik.errors[input.name] ? (
                <p className="error-message">{formik.errors[input.name]}</p>
              ) : null}
            </div>
          ))}

          <Button className={loginButtonLoading}>
            Login
          </Button>
          <Button className={[loginAsGButtonLoading,"yellow-button"]} type="button" handleClick={guestLogin}>
            Login as a Guest
          </Button>

          <ToastContainer
            position="top-center"
            autoClose={3000}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            transition={Slide}
          />
          <p>
            Don't have an account yet? <Link to="/register">Register here</Link>
          </p>
          <S.LemonDecoration src={formLemon} />
        </form>
      </ContentTransition>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;
