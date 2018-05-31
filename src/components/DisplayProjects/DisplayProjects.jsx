import React, { Component } from "react";
import AuthUserContext from "../AuthUserContext";
import api from '../../utils/api';
import ProjectLevel from '../ProjectLevel';

class DisplayProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        let projectList = [];

        api.getProjects(this.props.userID)
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

export default DisplayProjects;