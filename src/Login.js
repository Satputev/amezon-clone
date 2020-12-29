import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // this the stop refreash!!!
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in.. redirect to home page

        history.push("/");
      })
      .catch((e) => alert(e.message));
    //do the login logic
  };
  const register = (event) => {
    event.preventDefault(); // this the stop refreash!!!
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in , redirect to homepage

        history.push("/");
      })
      .catch((e) => alert(e.message));
    //do the register logic
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="login__signInButton" type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amezon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
