import React, { Component } from "react";
import {
  Box,
  Tag,
  Delete,
  Level,
  LevelLeft,
  LevelItem,
  LevelRight
} from "bloomer";
import ClassModal from "../ClassModal";
import "./ClassLevel.css";
import api from '../../utils/api';

const ClassLevel = props => {
  if (props.role === "teacher") {
    return <TeacherClassLevel {...props} />;
  } else {
    return <StudentClassLevel {...props} />;
  }
};

class TeacherClassLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      classInfo: []
    };
  }

  launchModal = (id, fetch=false) => {
    // Make api call to retrieve student info for class
    if (!this.state.isActive){
        
        api.getStudentsFromClass(id)
            .then(results => {
                console.log(results.data.students);
                this.setState(state => ({ 
                    isActive: !state.isActive,
                    classInfo: results.data.students
                }));
            })
            .catch(err => {
                console.log(err);
            })

    } else {
        this.setState(state => ({ 
            isActive: !state.isActive,
            classInfo: []
        }));
    }
  }

  render() {
    const { _id, name, class_code, students } = this.props.classData;
    const deleteClicked = this.props.deleteClicked;

    const classSize = students.length;

    return (
      <div>
        <Box>
          <Level>
            <LevelLeft>
              <LevelItem onClick={() => this.launchModal(_id, true)}>
                <strong>{name}</strong> has {classSize} students
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <strong>Class Code:</strong>
              </LevelItem>
              <LevelItem>
                <Tag isColor="info">{class_code}</Tag>
              </LevelItem>
              <LevelItem>
                <Delete onClick={() => deleteClicked(_id)} />
              </LevelItem>
            </LevelRight>
          </Level>
        </Box>
        <ClassModal
          isActive={this.state.isActive}
          launchModal={this.launchModal}
          classInfo={this.state.classInfo}
        />
      </div>
    );
  }
}

const StudentClassLevel = props => {
  const { _id, name, class_code } = props.classData;
  const deleteClicked = props.deleteClicked;

  return (
    <Box>
      <Level>
        <LevelLeft>
          <LevelItem>
            <strong>{name}</strong>
          </LevelItem>
        </LevelLeft>
        <LevelRight>
          <LevelItem>
            <strong>Class Code:</strong>
          </LevelItem>
          <LevelItem>
            <Tag isColor="info">{class_code}</Tag>
          </LevelItem>
          <LevelItem>
            <Delete onClick={() => deleteClicked(_id)} />
          </LevelItem>
        </LevelRight>
      </Level>
    </Box>
  );
};

export default ClassLevel;
