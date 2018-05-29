import React, { Component } from "react";

import { Button, Control, Field, Icon, Input, Label } from "bloomer";

import api from "../../utils/api";

// import withAuthorization from "../withAuthorization";
import AuthUserContext from "../AuthUserContext";

const AddClass = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <AddClassForm userID={authUser.uid} />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const INITIAL_STATE = {
  class_code: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class AddClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { class_code } = this.state;

    let student_id = this.props.userID;

    //api call to add class
    api.doAddClass(student_id, class_code)
      .then(result => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { class_code, error } = this.state;

    const isInvalid = class_code === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Field>
          <Label>Add Class Code</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="Class Code"
              value={class_code}
              onChange={event =>
                this.setState(byPropKey("class_code", event.target.value))
              }
            />
            <Icon isSize="small" isAlign="left">
              <span className="fa fa-user" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button disabled={isInvalid} isColor="primary" type="submit">
              Add Class
            </Button>
          </Control>
        </Field>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default AddClass;
