import React from 'react';
import FormInput from './FormInput';

import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Side (Form) */}
      <div className="login-form">
      <button className="back" onClick={"goback()"}>&#8592;Back</button>
        <h1 className="login-title">Get Started Now</h1>

        <form className="form-container">
          <FormInput label="Name" type="text" placeholder="Enter your name" />
          <FormInput label="Email" type="email" placeholder="Enter your email" />
          <FormInput label="Password" type="password" placeholder="Enter your password" />

          <div className="login-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              I agree to the <a href="#" className="terms-link">&nbsp;<b>terms & policy</b></a>
            </label>
            <a href="#"  className="forgot-link">forgot password?<b>Change now</b></a>
          </div>

          <button className="login-button">Sign In</button>

          <p className="register-text">
            Don’t have an account? <a href="#" className="login-link">Log In</a>
          </p>
        </form>

        {/* Social Buttons */}
        <div className="social-container">
          <p className="social-text">Or continue with email</p>
          <div className="social-buttons">
            <button className="google">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                   alt="Google" className="social-icon" />
              Google
            </button>
            <button className="facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
                   alt="Facebook" className="social-icon" />
              Facebook
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="login-image">
        <h1 className="studio-text">Appsi Studio</h1>
      </div>
    </div>
  );
};

export default Login;
