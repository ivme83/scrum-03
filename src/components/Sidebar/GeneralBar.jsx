import React from "react";
import { Menu, MenuLabel, MenuList } from "bloomer";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const GeneralBar = () => {
  return (
    <Menu className="sidebar">
      <MenuLabel>Menu</MenuLabel>
      <MenuList>
        <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
        </li>
        <li>
            <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
      </MenuList>
    </Menu>
  );
};

export default GeneralBar;
