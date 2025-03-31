import React, { useState } from "react";
import "./LoginForm.css";



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h1 className="welcome">Welcome Back</h1>
      <p className="mail">Enter your email and password to access your account</p>

      <form>
        <label className="email">Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label className="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            id="togglePassword"
            onClick={togglePasswordVisibility}
          ></i>
        </div>

        <div className="options">
          <div className="option-1">
            <input className="box" type="checkbox" />
            <label className="rem">Remember me</label>
          </div>

          <div className="option-2">
            <a className="pass" href="/">Forgot password? <b>Change now</b></a>
          </div>
        </div>

        <button type="submit" className="button">Sign In</button>
      </form>

      <div className="divider">
        <span className="divider-text">Or continue with email</span>
      </div>

      <div className="social-buttons">
        <button className="social-button google">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" />
          Google
        </button>
        <button className="social-button facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" />
          Facebook
        </button>
      </div>

      <p className="account">
        Don't have an account? <a style={{textDecoration:"none"}}className="signup-link" href="/">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
