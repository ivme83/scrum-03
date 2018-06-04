import React              from 'react';
import {
  BrowserRouter as Router,
  Route,
}                         from 'react-router-dom';

import './App.css';

import Navigation         from '../Navigation';
import SplashPage         from '../SplashPage';
import SignUpPage         from '../SignUp';
import SignInPage         from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage           from '../Home';
import AccountPage        from '../Account';
import Sidebar            from '../Sidebar';
import ClassMenu          from '../ClassMenu';
import StudentMenu        from '../StudentMenu';
import ProjectMenu        from '../ProjectMenu';
import TeacherStudentView from '../TeacherStudentView';
import DisplayProjects    from '../DisplayProjects';
import AddProject         from '../AddProject';
import CreateProject      from '../CreateProject';
import DisplayClasses     from '../DisplayClasses';
import AddClass           from '../AddClass';

import * as routes        from '../../constants/routes';

import withAuthentication from '../withAuthentication';

const SplashLayout = ({children, ...rest}) => {
  return (
    <div className="splash-grid">
      {children}
    </div>
  )
}

const UserLayout = ({ children, ...rest }) => {
  return (
    <div className="user-grid">
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}

const App = () =>
  <Router>
    <div>
      <Navigation />
        <Route exact path={routes.SPLASH}              component={() => <SplashLayout><SplashPage /></SplashLayout>} />
        <Route exact path={routes.SIGN_UP}              component={() => <SplashLayout><SignUpPage /></SplashLayout>} />
        <Route exact path={routes.SIGN_IN}              component={() => <SplashLayout><SignInPage /></SplashLayout>} />
        <Route exact path={routes.PASSWORD_FORGET}      component={() => <SplashLayout><PasswordForgetPage /></SplashLayout>} />
        <Route exact path={routes.HOME}                 component={() => <UserLayout><HomePage /></UserLayout>} />
        <Route exact path={routes.ACCOUNT}              component={() => <UserLayout><AccountPage /></UserLayout>} />
        <Route exact path={routes.TEACHER_CLASS}        component={() => <UserLayout><ClassMenu /></UserLayout>} />
        <Route exact path={routes.STUDENT_CLASS}        component={() => <UserLayout><StudentMenu /></UserLayout>} />
        <Route exact path={routes.STUDENT_PROJECT}      component={() => <UserLayout><ProjectMenu /></UserLayout>} />
        <Route exact path={routes.ADD_PROJECT}          component={() => <UserLayout><AddProject /></UserLayout>} />
        <Route exact path={routes.CREATE_PROJECT}       component={() => <UserLayout><CreateProject /></UserLayout>} />
        <Route exact path={routes.ADD_CLASS}            component={() => <UserLayout><AddClass /></UserLayout>} />
        <Route path="/teacher-student-view/:id"         component={() => <UserLayout><TeacherStudentView /></UserLayout>} />
        <Route path="/student-project/:id"              component={() => <UserLayout><DisplayProjects /></UserLayout>} />
        <Route path="/student-classes/:id"              component={() => <UserLayout><DisplayClasses /></UserLayout>} />
        <Route path="/teacher-classes/:id"              component={() => <UserLayout><DisplayClasses /></UserLayout>} />
    </div>
  </Router>

export default withAuthentication(App);