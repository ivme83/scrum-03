import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Icon,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
  Button
} from "bloomer";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

import AuthUserContext from "../AuthUserContext";
import * as routes from "../../constants/routes";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

class NavigationAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  onClickNav = () => {
    let { isActive } = this.state;

    isActive = isActive ? false : true;

    this.setState({ isActive: isActive });
  };

  render() {
    return (
      <Navbar
        className="navbar"
        style={{ border: "solid 1px #00D1B2", margin: "0" }}
      >
        <NavbarBrand>
          <NavbarItem>
            <Icon className="fa fa-adjust fa-lg" />
            <span>Project</span>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            <NavbarItem>
              <Link to={routes.HOME}>Home</Link>
            </NavbarItem>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink href="#/documentation">Documentation</NavbarLink>
              <NavbarDropdown>
                <NavbarItem>
                  <Link to={routes.HOME}>Home</Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to={routes.ACCOUNT}>Account</Link>
                </NavbarItem>
                <NavbarDivider />
                <NavbarItem href="#/">Two A</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Button onClick={() => auth.doSignOut()}>Sign Out</Button>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

class NavigationNonAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  onClickNav = () => {
    let { isActive } = this.state;

    isActive = isActive ? false : true;

    this.setState({ isActive: isActive });
  };

  render() {
    return (
      <Navbar
        className="navbar"
        style={{ gridArea: "b", border: "solid 1px #00D1B2", margin: "0" }}
      >
        <NavbarBrand>
          <NavbarItem>
            <Icon className="fa fa-adjust fa-lg" />
            <span>Project</span>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarEnd>
            <NavbarItem>
              <Button><Link to={routes.SIGN_IN}>Sign In</Link></Button>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Navigation;
