import React, { Component } from "react";
import "./register.css";
import Container from "@material-ui/core/Container";
import InputWithIcon from "../../components/input/text/textinput";
import RegisterButton from "../../components/input/button/button"
import {Link} from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div className="Register" style={{marginTop:100}}>
        <Container className="ContentContainerLeft" />
          <Container className="ContentContainerMiddle">
            <h1>Join Medium.</h1>
            <p className="MiddleContentParagraph1">
              Create an account to receive great stories in your inbox,
              personalize your homepage and follow authors and topics that you
              love.
            </p>
            <div>
              <form className="RegisterForm">
                <InputWithIcon
                  textInputClassName="TextInputUsername"
                  textInputLabel="Your username"
                />
                <InputWithIcon
                  textInputClassName="TextInputPassword"
                  textInputLabel="Your password"
                />
                <InputWithIcon
                  textInputClassName="TextInputEmail"
                  textInputLabel="Your email"
                />
              </form>
            </div>
            <Link to="/home">
              <RegisterButton 
                ButtonClassName="RegisterButton"
                ButtonLabel="Continue"
              />
            </Link>
            <p className="MiddleContentParagraph3">
              Already have an account?<a href="/login">Sign in</a>
            </p>
            <p className="MiddleContentParagraph3">
              To make medium work, we log user data and share it with service
              providers. Click "Sign Up" above to accept Medium's <a className="TermsOfServiceLink" href="/">Terms of Service</a>
              & <a className="PrivacyPolicyLink" href="/">Privacy Policy</a>.
            </p>
          </Container>
        <Container className="ContentContainerRight" style={{paddingRight:0, paddingLeft: 0}}/>
      </div>
    );
  }
}

export default Register;
