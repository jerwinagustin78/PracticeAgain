import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  return (
    <>
      <AuthForm isRegister={false} />
      <div className="auth-link-container">
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
