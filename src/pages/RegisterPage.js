import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  return (
    <>
      <AuthForm isRegister={true} />
      <div className="auth-link-container">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
