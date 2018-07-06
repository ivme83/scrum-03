import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Button, Control, Field, Icon, Input, Label } from "bloomer";
import './SignIn.css';

import { PasswordForgetLink } from "../PasswordForget";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

import { Splash4 } from '../Images';

const splashStyle = {
  backgroundImage: `url(${Splash4})`,
  backgroundSize: "100vw",
  backgroundRepeat: "no-repeat"
};

const SignIn = ({ history }) => (
  <div style={splashStyle}>
    <div className="container">
      <div className="sign-in">
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then((results) => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  // popUp = () => auth.GoogleSignInWithPopup()
  //   .then(() => {

  //     const {
  //       history,
  //     } = this.props;

  //     this.setState(() => ({ ...INITIAL_STATE }));
  //     history.push(routes.HOME);
  //   })
  //   .catch(error => {
  //     this.setState(byPropKey('error', error));
  //   });

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Field>
          <Label>Email</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-user" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label>Password</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="password"
              placeholder="password"
              value={password}
              onChange={event =>
                this.setState(byPropKey("password", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-key" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
        <Field isGrouped="right">
          <Control>
            <Button disabled={isInvalid} isColor="primary" type="submit">
              Sign In
            </Button>
          </Control>
        </Field>
        {/* <button type="button" onClick={this.popUp}>
          Google Sign In
        </button> */}

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignIn);
