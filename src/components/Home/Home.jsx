import React from "react";
import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization";
import { Box } from "bloomer";
import "./Home.css";
import { Texture1 } from "../Images";

const bgTexture = {
  backgroundImage: `url(${Texture1})`,
  backgroundSize: "30%"
};

const Home = () => (
  <div style={bgTexture}>
    <div className="home-container">
      <AuthUserContext.Consumer>
        {authUser =>
          authUser.role === "teacher" ? <TeacherMenu /> : <StudentMenu />
        }
      </AuthUserContext.Consumer>
    </div>
  </div>
);

const TeacherMenu = () => {
  return (
    <Box>
      Welcome to <div className="home-logo">
        <span className="pb">
          {"{"}pb{"}"}
        </span>HARMONY
      </div>
    </Box>
  );
};

const StudentMenu = () => {
  return (
    <Box>
      Welcome to <div className="home-logo">
        <span className="pb">
          {"{"}pb{"}"}
        </span>HARMONY
      </div>
    </Box>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Home);
