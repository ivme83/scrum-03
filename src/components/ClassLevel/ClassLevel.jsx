import React from "react";
import {
  Box,
  Tag,
  Delete,
  Level,
  LevelLeft,
  LevelItem,
  LevelRight
} from "bloomer";
import './ClassLevel.css';

const ClassLevel = props => {

    if (props.role === "teacher"){
        return <TeacherLevel { ...props } />
    } else {
        return <StudentLevel { ...props } />
    }
};

const TeacherLevel = (props) => {
    const {_id, name, class_code, students } = props.classData;
    const deleteClicked = props.deleteClicked;

    const classSize = students.length;

    return (
        <Box>
          <Level>
          <LevelLeft>
              <LevelItem><strong>{name}</strong>has {classSize} students</LevelItem>
          </LevelLeft>
          <LevelRight>
              <LevelItem><strong>Class Code:</strong></LevelItem>
              <LevelItem><Tag isColor="info">{class_code}</Tag></LevelItem>
              <LevelItem><Delete onClick={() => deleteClicked(_id)} /></LevelItem>
          </LevelRight>
          </Level>
      </Box>
    );
}

const StudentLevel = (props) => {
    const {_id, name, class_code } = props.classData;
    const deleteClicked = props.deleteClicked;

    return (
        <Box>
          <Level>
          <LevelLeft>
              <LevelItem><strong>{name}</strong></LevelItem>
          </LevelLeft>
          <LevelRight>
              <LevelItem><strong>Class Code:</strong></LevelItem>
              <LevelItem><Tag isColor="info">{class_code}</Tag></LevelItem>
              <LevelItem><Delete onClick={() => deleteClicked(_id)} /></LevelItem>
          </LevelRight>
          </Level>
      </Box>
    );
}

export default ClassLevel;
