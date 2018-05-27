import React              from 'react';

import AuthUserContext    from './AuthUserContext';
import { firebase }       from '../firebase';
import api                from '../utils/api';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {

        api.doFindOneUser(authUser.uid)
        .then((results) => {
          let role = results.data.role;
          authUser.role = role;

        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
        });
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;