import React from "react";
import { Menu, MenuLabel, MenuList, MenuLink } from "bloomer";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const TeacherBar = () => {
  return (
    <Menu className="sidebar">
      <MenuLabel>Teacher</MenuLabel>
      <MenuList>
        <li>
          <MenuLink><Link to={routes.HOME}>Home</Link></MenuLink>
        </li>
        <li>
          <MenuLink><Link to={routes.ACCOUNT}>Account</Link></MenuLink>
        </li>
        <li>
          <MenuLink><Link to={routes.CLASS_MENU}>Create Class</Link></MenuLink>
        </li>
      </MenuList>
    </Menu>
  );
};

export default TeacherBar;
