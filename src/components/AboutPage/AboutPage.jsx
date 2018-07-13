import React from "react";
import "./AboutPage.css";
import { Splash4 } from "../Images";

const splashStyle = {
  backgroundImage: `url(${Splash4})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundColor: "dark cyan"
};

const AboutPage = () => (
  <div style={splashStyle}>
    <div className="container">
      <div className="about">
        <iframe
          title="About Presentation"
          src="https://docs.google.com/presentation/d/e/2PACX-1vTCf3UePFepj4pyVRNp3qtys9hrHtWyXMIsG3wl1hiwil85FQDlxAkBvEwR9kNsPYlU_IMABvUtJ-Ko/embed?start=false&loop=true&delayms=3000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
      </div>
    </div>
  </div>
);

export default AboutPage;
