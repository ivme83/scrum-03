import React, { Component } from "react";
import withAuthorization from "../withAuthorization";
import api from "../../utils/api";
import {
  Icon,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardFooter,
  CardFooterItem,
  CardContent,
  Panel,
  PanelHeading,
  PanelBlock
} from "bloomer";

import { Texture1 } from "../Images";
import "./TeacherStudentView.css";

const bgTexture = {
  backgroundImage: `url(${Texture1})`,
  backgroundSize: '30%'
};

class TeacherStudentView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classDropdown: false,
      projectDropdown: false,
      studentInfo: null
    };
  }

  componentWillMount() {
    api
      .getStudent(this.props.match.params.id)
      .then(results => {
        let studentInfo = results.data;
        this.setState({ studentInfo });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleProject() {
    this.setState({ projectDropdown: !this.state.projectDropdown });
  }

  toggleClass() {
    this.setState({ classDropdown: !this.state.classDropdown });
  }

  whatToRender() {
    if (this.state.studentInfo) {
      const { email, username } = this.state.studentInfo.user;
      const { classes, projects } = this.state.studentInfo;
      const mailtoStr = "mailto:" + email;

      return (
        <div className="page-container" style={bgTexture} >
        <div className="cardContainer">
          <Card>
            <CardHeader>
              <CardHeaderTitle>{username}</CardHeaderTitle>
              <CardHeaderIcon>
                <Icon className="fa fa-user" />
              </CardHeaderIcon>
            </CardHeader>
            <CardContent>
              <a href={mailtoStr}><Icon className="fa fa-envelope" />{email}</a>
            </CardContent>
            <CardFooter>
              <CardFooterItem onClick={() => this.toggleClass()}>
                Classes
              </CardFooterItem>
              <CardFooterItem onClick={() => this.toggleProject()}>
                Projects
              </CardFooterItem>
            </CardFooter>
          </Card>
          {this.state.projectDropdown ? (
            <ProjectDropdownPanel projects={projects} />
          ) : (
            <div />
          )}
          {this.state.classDropdown ? (
            <ClassDropdownPanel classes={classes} />
          ) : (
            <div />
          )}
        </div>
        </div>
      );
    } else {
      return <h1>Please Wait</h1>;
    }
  }

  render() {
    return this.whatToRender();
  }
}

const ClassDropdownPanel = props => (
  <Panel className="panel-bg" >
    <PanelHeading>Classes</PanelHeading>
    {props.classes.map(eachClass => <PanelBlock key={eachClass._id} >{eachClass.name}</PanelBlock>)}
  </Panel>
);

const ProjectDropdownPanel = props => (
  <Panel className="panel-bg" >
    <PanelHeading>Projects</PanelHeading>
    {props.projects.map(eachProject => (
      <PanelBlock key={eachProject._id} >{eachProject.name}</PanelBlock>
    ))}
  </Panel>
);

const authCondition = authUser => !!authUser && authUser.role === "teacher";

export default withAuthorization(authCondition)(TeacherStudentView);
