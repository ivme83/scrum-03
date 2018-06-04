import React from "react";
import withAuthorization from "../withAuthorization";
import AuthUserContext from "../AuthUserContext";

import DisplayProjects from '../DisplayProjects';
import CreateProject from '../CreateProject';
import './ProjectMenu.css';
import AddProject from "../AddProject";

const ProjectMenu = () => (
    <div className="project-menu">
        <AuthUserContext.Consumer>
            {authUser => (
                <DisplayProjects userID={authUser.uid} />
            )}
        </AuthUserContext.Consumer>
        <AddProject />
        <CreateProject />
    </div>
)


const authCondition = authUser => !!authUser && authUser.role === "student";

export default withAuthorization(authCondition)(ProjectMenu);