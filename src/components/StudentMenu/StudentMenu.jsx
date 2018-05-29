import React from "react";
import withAuthorization from "../withAuthorization";
import AuthUserContext from "../AuthUserContext";

import AddClass from "../AddClass";
import DisplayClasses from "../DisplayClasses";
import './StudentMenu.css';

const StudentMenu = () => (
    <div className="class-menu">
        <AuthUserContext.Consumer>
            {authUser => (
                <DisplayClasses userID={authUser.uid} />
            )}
        </AuthUserContext.Consumer>
        <AddClass />
    </div>
)


const authCondition = authUser => !!authUser && authUser.role === "student";

export default withAuthorization(authCondition)(StudentMenu);