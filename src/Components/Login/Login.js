import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/login-logo.png";
import "./Login.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          navigate("/");
          // console.log(user);
        }
      })
      .catch((error) => {
        alert(error.message);
      });

  };
  const signIN = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          navigate("/");
          // console.log(user);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
      
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="logo of amazon" className="login-logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIN}>
            Log In
          </button>
          <p>You agree to Amazon Clone conditions of use and privacy notice</p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
