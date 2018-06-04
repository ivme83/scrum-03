import React from "react";
import { Menu, MenuLabel, MenuList } from "bloomer";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const TeacherBar = (props) => {
  return (
    <Menu className="sidebar">
      <MenuLabel>Teacher</MenuLabel>
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
          <Link to={routes.TEACHER_CLASS}>Manage Classes</Link>
        </li>
        <li>
          <Link to={`/teacher-classes/` + props.userId}>View Classes</Link>
        </li>
      </MenuList>
    </Menu>
  );
};

export default TeacherBar;
