import React, { Component } from 'react'
import './login.css'
import Container from "@material-ui/core/Container";
import InputWithIcon from "../input/text/textinput";
import LoginButton from "../input/button/button"

class Login extends Component {
    render() {
        return(
            <div className="Login">
              <Container className="ContentContainerLeft" />
              <Container className="ContentContainerMiddle">
                <h1>Sign in with email</h1>
                <p>Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>
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
                    <LoginButton 
                      ButtonClassName="SigninButton"
                      ButtonLabel="Continue"
                    />
                    <LoginButton 
                      ButtonClassName="AllSignUpOption"
                      ButtonLabel="All sign up options"
                    />
                  </form>  
                </div>
                <svg width="25" height="25"></svg>
              </Container>
              <Container className="ContentContainerRight" />
            </div>
        )
    }
}

export default Login