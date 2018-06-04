import React, { Component } from "react";
import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization";
import api from '../../utils/api';
import ClassLevel from '../ClassLevel';

class DisplayClasses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classList: []
        }
    }

    componentWillMount() {
        let classList = [];

        let userID = this.props.match.params.id || this.props.userID;

        api.getTeacherClasses(userID)
            .then(results => {
                classList = results.data.classes;
                // console.log(results);
                this.setState({ classList });
                })
                .catch(err => {
                    classList = [];
                    this.setState({ classList });
                });
    }

    deleteClicked(id) {
        console.log(id);
    }

    render() {
        const { classList } = this.state;

        return (
            <div>
                <AuthUserContext.Consumer>
                    {
                        authUser => classList.map((eachClass) => <ClassLevel key={eachClass.class_code} classData={eachClass} deleteClicked={this.deleteClicked} role={authUser.role} />)
                    }
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(DisplayClasses);