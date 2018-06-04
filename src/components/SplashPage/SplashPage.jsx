import React from 'react';
import Splash from './splash.jpg';

const splashStyle = {
  backgroundImage: `url(${Splash})`,
  backgroundSize: "100vw",
  backgroundRepeat: "no-repeat"
};

const SplashPage = () =>
  <div style={ splashStyle }>
  </div>

export default SplashPage;