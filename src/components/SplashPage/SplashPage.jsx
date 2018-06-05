import React from 'react';
import { Splash3 } from '../Images';

const splashStyle = {
  backgroundImage: `url(${Splash3})`,
  backgroundSize: "100vw",
  backgroundRepeat: "no-repeat"
};

const SplashPage = () =>
  <div style={ splashStyle }>
  </div>

export default SplashPage;