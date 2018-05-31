import React, { Component } from "react";
import AuthUserContext from "../AuthUserContext";
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

        api.getTeacherClasses(this.props.userID)
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

export default DisplayClasses;