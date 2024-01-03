import React, { useEffect } from 'react';
import { Link, json } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/LoginForm.css'; 

function Login() {
  const url = 'https://jsonplaceholder.typicode.com/comments'
  useEffect(() => {
    fetch(url)
    .then(response => response.json()).then(json => {
      console.log("jsonfetch",json)
    }).catch(e => {
      console.log("error",e)
    })
  }, []);
   return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt='Logo'/>
      </div>
      <div className="login-form">
        <h2>User Login</h2>
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
          <Link to='/loginworker'>
            <button type="button" className="login-worker-button">Login as Worker</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;