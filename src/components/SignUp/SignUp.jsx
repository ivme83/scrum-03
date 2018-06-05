import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { Button, Control, Field, Icon, Input, Label, Radio } from "bloomer";
import './SignUp.css';

import { auth } from "../../firebase";
import api from "../../utils/api";

import * as routes from "../../constants/routes";

import { Splash3 } from '../Images';

const splashStyle = {
  backgroundImage: `url(${Splash3})`,
  backgroundSize: "100vw",
  backgroundRepeat: "no-repeat"
};

const SignUp = ({ history }) => (
  <div style={splashStyle}>
    <div className="container">
      <div className="sign-up">
        <SignUpForm history={history} />
      </div>
    </div>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  role: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, role, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        api
          .doCreateUser(authUser.user.uid, username, email, role)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            console.log("hello");
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  handleOptionChange = changeEvent => {
    this.setState({
      role: changeEvent.target.value
    });
  };

  render() {
    const {
      username,
      email,
      role,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "" ||
      role === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Field>
          <Label>Username</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={event =>
                this.setState(byPropKey("username", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-user" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="email"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-at" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control>
            <Radio
              name="userRole"
              value="teacher"
              checked={this.state.role === "teacher"}
              onChange={this.handleOptionChange}
            >
              Teacher
            </Radio>
            <Radio
              name="userRole"
              value="student"
              checked={this.state.role === "student"}
              onChange={this.handleOptionChange}
            >
              Student
            </Radio>
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
              value={passwordOne}
              onChange={event =>
                this.setState(byPropKey("passwordOne", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-key" aria-hidden="true" />
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
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={event =>
                this.setState(byPropKey("passwordTwo", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-key" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button disabled={isInvalid} isColor="primary" type="submit">
              Sign Up
            </Button>
          </Control>
        </Field>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignUp);
