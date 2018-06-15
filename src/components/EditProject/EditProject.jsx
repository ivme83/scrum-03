import React, { Component } from "react";
import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization";
import api from '../../utils/api';
import ProjectLevel from '../ProjectLevel';
import TaskForm from '../TaskForm';
import { Texture1 } from "../Images";
import './EditProject.css';

const bgTexture = {
    backgroundImage: `url(${Texture1})`,
    backgroundSize: '30%'
};

class EditProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project_id: this.props.match.params.id,
            projectData: {}
        }
    }

    componentWillMount() {
        let projectData = {};

        api.getSingleProject(this.state.project_id)
            .then(theProject => {
                projectData = theProject.data;
                this.setState({ projectData });
            })
            .catch(err => {
                projectData = {};
                this.setState({ projectData });
            });
    }

    deleteClicked(id) {
        console.log(id);
    }

    render() {

        const { projectData } = this.state;

        return (
            <div style={bgTexture} >
                <div className="page-container">
                    <AuthUserContext.Consumer>
                        {
                            authUser => <ProjectLevel projectData={projectData} deleteClicked={this.deleteClicked} role={authUser.role} />
                        }
                    </AuthUserContext.Consumer>
                    <TaskForm project_id={this.props.match.params.id} />
                </div>
            </div>
        )
    }
}

const authCondition = authUser => !!authUser && authUser.role === "student";

export default withAuthorization(authCondition)(EditProject);