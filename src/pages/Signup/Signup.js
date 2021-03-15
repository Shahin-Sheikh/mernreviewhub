import React, { Component } from 'react';
import './Signup.scss';
import axios from 'axios';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      Email: '',
      Password: '',
      confirmPassword: '',
    };
    this.changefirstName = this.changefirstName.bind(this);
    this.changelastName = this.changelastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeconfirmPassword = this.changeconfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changefirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  changelastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      Email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      Password: event.target.value,
    });
  }
  changeconfirmPassword(event) {
    this.setState({
      confirmPassword: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();

    const registered = {
      firstName: this.state.firstName,
      lasttName: this.state.lasttName,
      Email: this.state.Email,
      Password: this.state.Password,
      confirmPassword: this.state.confirmPassword,
    };

    axios
      .post('http://localhost:4000/app/sign-up', registered)
      .then((response) => console.log(response.data));

    this.setState({
      firstName: '',
      lastName: '',
      Email: '',
      Password: '',
      confirmPassword: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div id="header">
          <div class="logo">
            <h1>ReviewHub</h1>
          </div>
        </div>
        <div id="main">
          <div id="form">
            <h2>SignUp</h2>
            <input
              name="input"
              placeholder="First Name"
              type="text"
              onChange={this.changefirstName}
              value={this.state.firstName}
            />
            <input
              name="input"
              placeholder="Last Name"
              type="text"
              onChange={this.changelastName}
              value={this.state.lastName}
            />
            <input
              name="input"
              placeholder="Email"
              type="text"
              onChange={this.changeEmail}
              value={this.state.Email}
            />
            <input
              name="input"
              placeholder="Password"
              type="password"
              onChange={this.changePassword}
              value={this.state.Password}
            />
            <input
              name="input"
              placeholder="Confirm Password"
              type="password"
              onChange={this.changeconfirmPassword}
              value={this.state.confirmPassword}
            />
            <label for="btn-toggle-1"></label>
            <input name="login" type="submit" value="Sign Up" />
            <div class="liner"></div>
            <div class="linel"></div>
            <input name="lif" type="submit" value="Continue with Facebook" />
            <input name="lig" type="submit" value="Continue with Google" />
            <input name="lia" type="submit" value="Continue with Apple" />
            <p class="ending">
              Already Have an account? <a href="/sign-in">LOGIN</a>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
