import React from "react";
import { Menu, MenuLabel, MenuList, MenuLink } from "bloomer";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const GeneralBar = () => {
  return (
    <Menu className="sidebar">
      <MenuLabel>Menu</MenuLabel>
      <MenuList>
        <li>
          <MenuLink>
            <Link to={routes.SIGN_IN}>Sign In</Link>
          </MenuLink>
        </li>
      </MenuList>
    </Menu>
  );
};

export default GeneralBar;
