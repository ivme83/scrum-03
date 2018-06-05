import React from "react";
import withAuthorization from "../withAuthorization";
import AuthUserContext from "../AuthUserContext";

import CreateClass from "../CreateClass";
import DisplayClasses from "../DisplayClasses";
import { Texture1 } from "../Images";
import './ClassMenu.css';

const bgTexture = {
    backgroundImage: `url(${Texture1})`,
    backgroundSize: '30%'
};

const ClassMenu = () => (
    <div style={bgTexture}>
        <div className="class-container">
            <AuthUserContext.Consumer>
                {authUser => (
                    <DisplayClasses userID={authUser.uid} />
                )}
            </AuthUserContext.Consumer>
            <CreateClass />
        </div>
    </div>
)


const authCondition = authUser => !!authUser && authUser.role === "teacher";

export default withAuthorization(authCondition)(ClassMenu);