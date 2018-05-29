import React from "react";
import withAuthorization from "../withAuthorization";
import AuthUserContext from "../AuthUserContext";

import CreateClass from "../CreateClass";
import DisplayClasses from "../DisplayClasses";
import './ClassMenu.css';

const ClassMenu = () => (
    <div className="class-menu">
        <AuthUserContext.Consumer>
            {authUser => (
                <DisplayClasses userID={authUser.uid} />
            )}
        </AuthUserContext.Consumer>
        <CreateClass />
    </div>
)


const authCondition = authUser => !!authUser && authUser.role === "teacher";

export default withAuthorization(authCondition)(ClassMenu);