import React, { Component } from 'react';
import withAuthorization from "../withAuthorization";


class TeacherStudentView extends Component {

    constructor(props){
        super(props);

        this.state = {
            studentInfo: null
        };
    }

    componentWillMount(){
        
    }

    render() {
        return(
            <div>
                hello
            </div>
        );
    }
}

const authCondition = authUser => !!authUser && authUser.role === "teacher";

export default withAuthorization(authCondition)(TeacherStudentView);