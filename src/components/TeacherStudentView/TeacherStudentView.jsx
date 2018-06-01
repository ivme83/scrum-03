import React, { Component } from "react";
import withAuthorization from "../withAuthorization";
import api from "../../utils/api";
import {
  Panel,
  PanelHeading,
  Control,
  Input,
  Icon,
  PanelBlock,
  PanelIcon,
  Button,
  Checkbox,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownContent,
  DropdownDivider,
  DropdownItem
} from "bloomer";

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
        console.log(studentInfo);
        this.setState({ studentInfo });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleClass() {
    this.setState({ classDropdown: !this.state.classDropdown });
  }

  toggleProject() {
    this.setState({ projectDropdown: !this.state.projectDropdown });
  }

  whatToRender() {
    if (this.state.studentInfo) {
      const { email, role, username } = this.state.studentInfo.user;
      const { classes, projects } = this.state.studentInfo;

      return (
        <Panel>
          <PanelHeading>{username}</PanelHeading>
          <PanelBlock>
            <Dropdown isActive={this.state.classDropdown}>
              <DropdownTrigger>
                <Button
                  isOutlined
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => this.toggleClass()}
                >
                  <span>Classes</span>
                  <Icon icon="angle-down" isSize="small" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownContent>
                  {classes.map(eachClass => (
                    <DropdownItem>{eachClass.name}</DropdownItem>
                  ))}
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isActive={this.state.projectDropdown}>
              <DropdownTrigger>
                <Button
                  isOutlined
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => this.toggleProject()}
                >
                  <span>Projects</span>
                  <Icon icon="angle-down" isSize="small" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownContent>
                  {projects.map(eachProject => (
                    <DropdownItem>{eachProject.name}</DropdownItem>
                  ))}
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </PanelBlock>
          <PanelBlock>
            <PanelIcon className="fa fa-code-fork" />
            RxJS
          </PanelBlock>
          <PanelBlock>
            <PanelIcon className="fa fa-code-fork" />
            Webpack
          </PanelBlock>
          <PanelBlock>
            <PanelIcon className="fa fa-code-fork" />
            Typescript
          </PanelBlock>
          <PanelBlock tag="label">
            <Checkbox> Remember me</Checkbox>
          </PanelBlock>
          <PanelBlock>
            <Button isOutlined isFullWidth isColor="primary">
              {" "}
              Reset all filters
            </Button>
          </PanelBlock>
        </Panel>
      );
    } else {
      return <h1>Please Wait</h1>;
    }
  }

  render() {
    return this.whatToRender();
  }
}

const authCondition = authUser => !!authUser && authUser.role === "teacher";

export default withAuthorization(authCondition)(TeacherStudentView);
