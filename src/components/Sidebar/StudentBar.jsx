import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const StudentBar = (props) => {
  return (
    <div className="sidebar">
      <a className="active">Student</a>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.ACCOUNT}>Manage Account</Link>
      <a className="active">Classes</a>
      <Link to={routes.STUDENT_CLASS} >Manage Classes</Link>
      <a className="active">Manage Projects</a>
      <Link to={`/student-project/` + props.userId}>View Projects</Link>
      <Link to={routes.ADD_PROJECT} >Add Project</Link>
      <Link to={routes.CREATE_PROJECT} >Create Project</Link>
    </div>
  );
};

export default StudentBar;
