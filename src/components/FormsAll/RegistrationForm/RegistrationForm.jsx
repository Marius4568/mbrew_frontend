import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './RegistrationForm.styles.js';
// Images
import formLemon from '../../../assets/img/formLemon.png';
// Notification handling
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components, component data
import ContentTransition from '../../../animations/transitions/ContentTransition';
import FormInput from '../FormInput/FormInput.jsx';
import { registrationInputs } from '../formInputs';
import Button from '../../Button/Button.jsx';
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
    try {
      setbuttonLoading('loading');
      const data = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}user/register`, {
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
      if (res.msg === 'User created') {
        navigate('/login');
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
      return err.message;
    }
    finally {
      setbuttonLoading('');
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
    <S.RegistrationFormWrapper>
      <ContentTransition>
        <form onSubmit={formik.handleSubmit}>
          <S.LemonDecoration src={formLemon} />
          {registrationInputs.map((input) => (
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
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
        <S.LemonDecoration src={formLemon} />
      </ContentTransition>
    </S.RegistrationFormWrapper>
  );
};

export default RegistrationForm;
