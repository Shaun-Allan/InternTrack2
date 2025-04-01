import React, { useEffect } from "react";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    var submit = document.querySelector("#submit");
    var form = document.querySelector("form");
    submit.addEventListener("click", (event) => {
      var username = document.querySelector("#username").value;
      var password = document.querySelector("#password").value;
      if (
        (username === "faculty" && password === "faculty") ||
        (username === "student" && password === "student") ||
        (username === "coordinator" && password === "coordinator")
      ) {
        form.action = username;
      } else {
        event.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <div id="background">
        <div id="overlay">
          <div id="header">
            <img
              src="/intern track.png"
              alt="intern track.png"
              id="intern-track"
            />
            <img src="/ssn.png" alt="ssn" id="ssn" />
          </div>
          <div id="content">
            <img src="/clock.jpg" alt="clock tower" id="aside" />
            <div id="login">
              <h1 id="login-title">Login</h1>
              <form>
                <div class="input-wrapper">
                  <input type="text" id="username" required />
                  <span>Enter username</span>
                </div>

                <div class="input-wrapper">
                  <input type="password" id="password" required />
                  <span>Enter password</span>
                </div>
                <div id="below">
                  <div class="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" name="remember" />
                    <label for="c1-13" id="remember-label">
                      Remember Me
                    </label>
                  </div>
                  <div id="forgot">
                    <a>Forgot Password?</a>
                  </div>
                </div>
                <button type="submit" id="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <span id="hint">
            <strong>NOTE:</strong> As this site is in the design phase, there
            are no useres registered as of now. Please enter the user name and
            password as faculty, student and coordinator to navigate to their
            respective pages.
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
