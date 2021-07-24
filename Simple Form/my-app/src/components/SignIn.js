import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <div>
        <h2>Omega</h2>
      </div>
      <div className="center">
        <h1>Sign In</h1>
        <p>Enter your account details below</p>
        <form>
          <div className="text-field">
            <input type="email" required="true" value="Email Address" />
            <br />
            <br />
            <input type="text" required="true" value="Password" />
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
}

export default SignIn;
