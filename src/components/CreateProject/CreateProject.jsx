import React, { Component } from "react";

import { Button, Control, Field, Input, Label, TextArea } from "bloomer";
import './CreateProject.css';

import { Texture1 } from "../Images";

import api from "../../utils/api";

import AuthUserContext from "../AuthUserContext";

const bgTexture = {
  backgroundImage: `url(${Texture1})`,
  backgroundSize: '30%'
};

const CreateProject = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div style={bgTexture} >
        <div className="page-container">
          <CreateProjectForm userID={authUser.uid} />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const INITIAL_STATE = {
  project_name: "",
  description: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class CreateProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { project_name, description } = this.state;

    let project_code = Math.random()
      .toString(36)
      .substring(2, 8);

    let student_id = this.props.userID;

    //api call to create project
    api
      .doCreateProject(student_id, project_name, description, project_code)
      .then(result => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        console.log(error);
        this.setState(byPropKey("error", error));
      });

  };

  render() {
    const { project_name, description, error } = this.state;

    const isInvalid = project_name === "" || description === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Field>
          <Label>New Project Name</Label>
          <Control>
            <Input
              isColor="success"
              isSize="large"
              type="text"
              placeholder="Project Name"
              value={project_name}
              onChange={event =>
                this.setState(byPropKey("project_name", event.target.value))
              }
            />
          </Control>
        </Field>
        <Field>
          <Label>Project Description</Label>
          <Control>
            <TextArea
              isSize="large"
              placeholder="Project Description"
              value={description}
              onChange={event =>
                this.setState(byPropKey("description", event.target.value))
              }
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button className="form-btn" disabled={isInvalid} type="submit">
              Create Project
            </Button>
          </Control>
        </Field>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default CreateProject;
