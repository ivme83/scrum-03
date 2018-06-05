import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";


const TeacherBar = (props) => {
  return (
    <div className="sidebar">
      <a className="active">Teacher</a>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.ACCOUNT}>Manage Account</Link>
      <a className="active">Classes</a>
      <Link to={routes.TEACHER_CLASS}>Manage Classes</Link>
    </div>
  );
};

export default TeacherBar;
