import React, { Component } from "react";
import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization";
import api from '../../utils/api';
import ProjectLevel from '../ProjectLevel';

class DisplayProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectList: []
        }
    }

    componentWillMount() {
        let projectList = [];

        let student_id = this.props.match.params.id || this.props.userID;

        api.getProjects(student_id)
            .then(results => {
                projectList = results.data.projects;
                this.setState({ projectList });
            })
            .catch(err => {
                projectList = [];
                this.setState({ projectList });
            });
    }

    deleteClicked(id) {
        console.log(id);
    }

    render() {
        const { projectList } = this.state;

        return (
            <div>
                <AuthUserContext.Consumer>
                    {
                        authUser => projectList.map((eachProject) => <ProjectLevel key={eachProject.project_code} projectData={eachProject} deleteClicked={this.deleteClicked} role={authUser.role} />)
                    }
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

const authCondition = authUser => !!authUser && authUser.role === "student";

export default withAuthorization(authCondition)(DisplayProjects);