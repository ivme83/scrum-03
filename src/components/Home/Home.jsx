import React              from 'react';
import AuthUserContext    from '../AuthUserContext';
import withAuthorization  from '../withAuthorization';
import { Link }           from "react-router-dom";
import * as routes        from "../../constants/routes";

const Home = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser.role === "teacher" ? <TeacherMenu /> : <StudentMenu />}
  </AuthUserContext.Consumer>

const TeacherMenu = () => {
  return (
    <p><Link to={routes.CLASS_MENU}>Create Class</Link></p>
  );
};

const StudentMenu = () => {
  return (
    <p><Link to={routes.STUDENT_MENU}>Add a Class</Link></p>
  );
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);

// "proxy": "http://localhost:3001/"