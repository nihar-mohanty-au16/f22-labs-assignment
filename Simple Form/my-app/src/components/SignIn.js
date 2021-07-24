import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      //send this data to your backend or API
      const res = {
        email,
        password,
      };
      console.log(res);
      setEmail("");
      setPassword("");
    }
  };

  const formValidation = () => {
    const emailError = {};
    const passwordError = {};

    let isValid = true;

    if (email.trim().length < 5) {
      emailError.emailIsShort = "Email should be minimum 5 characters";
      isValid = false;
    }
    if (!email.includes("@")) {
      emailError.emailIsInvalid = "Email should contain @";
      isValid = false;
    }
    if (password.trim().length < 8) {
      passwordError.passwordIsShort = "password should be minimum 8 characters";
      isValid = false;
    }

    setEmailError(emailError);
    setPasswordError(passwordError);

    return isValid;
  };

  return (
    <>
      <div>
        <h2>Omega</h2>
      </div>
      <div className="center">
        <h1>Sign In</h1>
        <p>Enter your account details below</p>
        <form onSubmit={onSubmit}>
          <div className="text-field">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {Object.keys(emailError).map((key, i) => {
              return (
                <div key={i} style={{ color: "red" }}>
                  {emailError[key]}
                </div>
              );
            })}
            <br />
            <br />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {Object.keys(passwordError).map((key, i) => {
              return (
                <div key={i} style={{ color: "red" }}>
                  {passwordError[key]}
                </div>
              );
            })}
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Passsword?</a>
          </div>
          <br />
          <div className="CLIST">
            <input className="CL" type="checkbox" />
            <label className="check"> Keep me signed in</label>
          </div>
          <br />
          <br />

          <input type="submit" value="Get Started" />
          <br />
          <br />
          <div className="signup">
            Don't have an account?<a href="#">Create for free</a>
          </div>

          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default SignIn;
