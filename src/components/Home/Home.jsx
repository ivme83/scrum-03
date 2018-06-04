import React              from 'react';
import AuthUserContext    from '../AuthUserContext';
import withAuthorization  from '../withAuthorization';

const Home = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser.role === "teacher" ? <TeacherMenu /> : <StudentMenu />}
  </AuthUserContext.Consumer>

const TeacherMenu = () => {
  return (
    <p>This is the teacher homepage.</p>
  );
};

const StudentMenu = () => {
  return (
    <p>This is the student homepage.</p>
  );
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);