import React from "react";
import { Splash4 } from "../Images";
import AboutPage from "../AboutPage";
import "./SplashPage.css";

// import { Link } from "react-router-dom";
// import * as routes from "../../constants/routes";

const splashStyle = {
  backgroundImage: `url(${Splash4})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundColor: "dark cyan"
};

const SplashPage = () => (
  <div style={splashStyle}>
    <div className="splash-container" >
      <AboutPage />
    </div>
  </div>
);

export default SplashPage;
