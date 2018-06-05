import React from "react";
import withAuthorization from "../withAuthorization";
import AuthUserContext from "../AuthUserContext";

import AddClass from "../AddClass";
import DisplayClasses from "../DisplayClasses";
import { Texture1 } from "../Images";
import './StudentMenu.css';

const bgTexture = {
    backgroundImage: `url(${Texture1})`,
    backgroundSize: '30%'
};

const StudentMenu = () => (
    <div style={bgTexture} >
    <div className="class-container">
            <AuthUserContext.Consumer>
                {authUser => (
                    <DisplayClasses userID={authUser.uid} />
                )}
            </AuthUserContext.Consumer>
            <AddClass />
        </div>
    </div>
)


const authCondition = authUser => !!authUser && authUser.role === "student";

export default withAuthorization(authCondition)(StudentMenu);