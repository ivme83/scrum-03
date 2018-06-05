import React, { Component } from "react";

import { Button, Control, Field, Input, Label } from "bloomer";
import './AddProject.css';
import { Texture1 } from "../Images";

import api from "../../utils/api";

import AuthUserContext from "../AuthUserContext";

const bgTexture = {
  backgroundImage: `url(${Texture1})`,
  backgroundSize: '30%'
};

const AddProject = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div style={bgTexture} >
        <div className="page-container">
          <AddProjectForm userID={authUser.uid} />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const INITIAL_STATE = {
  project_code: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class AddProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { project_code } = this.state;

    let student_id = this.props.userID;

    //api call to add class
    api.doAddProject(student_id, project_code)
      .then(result => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { project_code, error } = this.state;

    const isInvalid = project_code === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Field>
          <Label>Add Project Code</Label>
          <Control hasIcons>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="Project Code"
              value={project_code}
              onChange={event =>
                this.setState(byPropKey("project_code", event.target.value))
              }
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button className="form-btn" disabled={isInvalid} type="submit">
              Add Project
            </Button>
          </Control>
        </Field>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default AddProject;
