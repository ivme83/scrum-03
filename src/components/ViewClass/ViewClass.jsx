import React, { Component } from "react";

// import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization";

// const ViewClass = ({props}) => {
//     console.log(this.props);
//     return (
//       <div>
//         <h3>ID: hello</h3>
//       </div>
// )};

class ViewClass extends Component {

    componentDidMount() {
        console.log(this);    
    }

    render() {
        return (
            <div>
              <h3>ID: </h3>
            </div>
        );
    }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ViewClass);
