import React from "react";
import { Menu, MenuLabel, MenuList } from "bloomer";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const StudentBar = () => {
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
        <li>
          <Link to={routes.STUDENT_CLASS}>Add a Class</Link>
        </li>
        <li>
          <Link to={routes.STUDENT_PROJECT}>Add a Project</Link>
        </li>
      </MenuList>
    </Menu>
  );
};

export default StudentBar;
