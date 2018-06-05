import React from "react";
import { Splash3 } from "../Images";
import "./SplashPage.css";

const splashStyle = {
  backgroundImage: `url(${Splash3})`,
  backgroundSize: "100vw",
  backgroundRepeat: "no-repeat"
};

const SplashPage = () => (
  <div style={splashStyle}>
    <div className="splash-container">
      <div className="splash-logo">
        <span className="pb">
          {"{"}pb{"}"}
        </span>HARMONY
      </div>
    </div>
  </div>
);

export default SplashPage;
