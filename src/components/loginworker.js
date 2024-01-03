import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/LoginForm.css'; 

function Loginworker() {

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt='Logo'/>
      </div>
      <div className="login-form">
        <h2>Worker Login</h2>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter Username" />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <a href="#" className="forgot-password">Forget Password</a>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="login-footer">
          <p>Does not have an account? <a href="#" className="signup-link">Join for free</a></p>
          <Link to='/login'>
            <button type="button" className="login-worker-button">Login as User</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Loginworker;