import React from "react";
import "./Sidebar.css";
import TeacherBar from './TeacherBar';
import StudentBar from './StudentBar';
import GeneralBar from './GeneralBar';
import AuthUserContext from "../AuthUserContext";

const Sidebar = () =>
  <AuthUserContext.Consumer>
    {authUser => {
      if (authUser !== null) {
        return(authUser.role === "teacher" ? <TeacherBar /> : <StudentBar />);
      } else {
        return(<GeneralBar />);
      }
      
    }}
  </AuthUserContext.Consumer>

export default Sidebar;
