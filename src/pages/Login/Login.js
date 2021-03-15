import React, { Component } from 'react';

import './Login.scss';

export default class Login extends Component {
  render() {
    return (
      <form>
        <div id="header">
          <div class="logo">
            <h1>ReviewHub</h1>
          </div>
        </div>
        <div id="main">
          <div id="form">
            <div className="ltc">
              <h2>Log in to continue.</h2>
            </div>
            <input name="input" placeholder="Email or username" type="text" />
            <input name="input" placeholder="Password" type="password" />
            <p>
              <a href="#">Reset Password</a>
            </p>
            <h5>Remember me</h5>
            <input
              class="btn-toggle btn-toggle-round"
              id="btn-toggle-1"
              name="remember"
              type="checkbox"
            />
            <label for="btn-toggle-1"></label>
            <input name="login" type="submit" value="Log in" />
            <div class="liner"></div>
            <div class="linel"></div>
            <input name="lif" type="submit" value="Continue with Facebook" />
            <input name="lig" type="submit" value="Continue with Google" />
            <input name="lia" type="submit" value="Continue with Apple" />
            <p class="ending">
              Don't have an account? <a href="/sign-up">SIGNUP</a>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
