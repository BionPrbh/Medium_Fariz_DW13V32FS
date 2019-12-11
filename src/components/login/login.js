import React, { Component } from "react";
import "./login.css";
import Container from "@material-ui/core/Container";
import InputWithIcon from "../input/text/textinput";
import LoginButton from "../input/button/button";
import {Link} from 'react-router-dom';


class Login extends Component {
  render() {
    return (
      <div className="Login" style={{ marginTop: 100 }}>
        <Container className="ContentContainerLeft" />
        <Container className="ContentContainerMiddle">
          <h1>Sign in with email</h1>
          <p>
            Enter the email address associated with your account, and we'll send
            a magic link to your inbox.
          </p>
          <div>
            <form className="LoginForm">
              <InputWithIcon
                textInputClassName="TextInputEmail"
                textInputLabel="Your email"
              />
              <InputWithIcon
                textInputClassName="TextInputPassword"
                textInputLabel="Your password"
              />
              <Link to="/home">
                <LoginButton
                  ButtonClassName="SigninButton"
                  ButtonLabel="Continue"
                />
              </Link>
              <Link to="/register">
                <LoginButton
                  ButtonClassName="AllSignUpOption"
                  ButtonLabel="All sign up options"
                />
              </Link>         
              </form>
          </div>
          <svg width="25" height="25"></svg>
        </Container>
        <Container className="ContentContainerRight" style={{paddingRight:0, paddingLeft: 0}}/>
      </div>
    );
  }
}

export default Login;
