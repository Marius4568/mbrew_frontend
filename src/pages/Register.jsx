import React from 'react';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem('token', data.token));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" type="text" placeholder="email" />
      <input id="password" type="text" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
