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
import { Link } from "react-router-dom";
import './ProjectLevel.css';

const ProjectLevel = props => {

    if (props.role === "teacher"){
        return <TeacherProjectLevel { ...props } />
    } else {
        return <StudentProjectLevel { ...props } />
    }
};

const TeacherProjectLevel = (props) => {
    const {_id, name, project_code } = props.classData;
    const deleteClicked = props.deleteClicked;

    // const classSize = students.length;

    return (
        <Box>
          <Level>
          <LevelLeft>
              <LevelItem><Link to={`/edit-project/` + _id}><strong>{name}</strong></Link></LevelItem>
          </LevelLeft>
          <LevelRight>
              <LevelItem><strong>Project Code:</strong></LevelItem>
              <LevelItem><Tag isColor="info">{project_code}</Tag></LevelItem>
              <LevelItem><Delete onClick={() => deleteClicked(_id)} /></LevelItem>
          </LevelRight>
          </Level>
      </Box>
    );
}

const StudentProjectLevel = (props) => {
    const {_id, name, description, project_code } = props.projectData;
    const deleteClicked = props.deleteClicked;

    return (
        <Box>
          <Level>
          <LevelLeft>
                <LevelItem><Link to={`/edit-project/` + _id}><strong>{name}</strong></Link></LevelItem>
                <LevelItem>{description}</LevelItem>
          </LevelLeft>
          <LevelRight>
              <LevelItem><strong>Project Code:</strong></LevelItem>
              <LevelItem><Tag isColor="info">{project_code}</Tag></LevelItem>
              <LevelItem><Delete onClick={() => deleteClicked(_id)} /></LevelItem>
          </LevelRight>
          </Level>
      </Box>
    );
}

export default ProjectLevel;
