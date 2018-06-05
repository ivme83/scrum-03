import React, { Component } from "react";

import { Button, Control, Field, Input, Label } from "bloomer";
import './CreateClass.css';

import api from "../../utils/api";

import AuthUserContext from "../AuthUserContext";


const CreateClass = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <CreateClassForm userID={authUser.uid} />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const INITIAL_STATE = {
  class_name: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class CreateClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { class_name } = this.state;

    let classCode = Math.random()
      .toString(36)
      .substring(2, 8);

    let teacher_id = this.props.userID;

    //api call to create class
    api.doCreateClass(teacher_id, class_name, classCode)
      .then(result => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { class_name, error } = this.state;

    const isInvalid = class_name === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Field>
          <Label isSize="large" >New Class Name</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="Class Name"
              value={class_name}
              onChange={event =>
                this.setState(byPropKey("class_name", event.target.value))
              }
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button className="form-btn" disabled={isInvalid} type="submit">
              Create Class
            </Button>
          </Control>
        </Field>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// const authCondition = authUser => !!authUser && authUser.role === "teacher";

// export default withAuthorization(authCondition)(CreateClass);

export default CreateClass;
