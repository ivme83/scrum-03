import React from "react";
import { Menu, MenuLabel, MenuList } from "bloomer";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const StudentBar = props => {
  return (
    <Menu className="sidebar">
      <MenuLabel>Student</MenuLabel>
      <MenuList>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.ACCOUNT}>Manage Account</Link>
        </li>
      </MenuList>
      <MenuLabel>Manage Classes</MenuLabel>
      <MenuList>
        <li>
          <Link to={`/student-classes/` + props.userId}>View Classes</Link>
        </li>
        <li>
          <Link to={routes.ADD_CLASS} >Add Class</Link>
        </li>
      </MenuList>
      <MenuLabel>Manage Projects</MenuLabel>
      <MenuList>
        <li>
          <Link to={`/student-project/` + props.userId}>View Projects</Link>
        </li>
        <li>
          <Link to={routes.ADD_PROJECT} >Add Project</Link>
        </li>
        <li>
          <Link to={routes.CREATE_PROJECT} >Create Project</Link>
        </li>
      </MenuList>
    </Menu>
  );
};

export default StudentBar;
